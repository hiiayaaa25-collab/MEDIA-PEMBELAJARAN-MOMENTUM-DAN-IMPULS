const fs = require('fs');
const vm = require('vm');
const path = require('path');
const file = path.join(__dirname, '..', 'liyaa.html');
const src = fs.readFileSync(file, 'utf8');
const key = 'checkpoints:';
const idx = src.indexOf(key);
if (idx === -1) { console.error('Cannot find checkpoints in liyaa.html'); process.exit(2); }
let i = src.indexOf('[', idx);
if (i === -1) { console.error('Cannot find [ after checkpoints'); process.exit(2); }
let depth = 0; let j = i;
for (; j < src.length; j++) {
  const ch = src[j];
  if (ch === '[') depth++;
  else if (ch === ']') { depth--; if (depth === 0) break; }
}
if (j >= src.length) { console.error('Unmatched brackets while extracting checkpoints'); process.exit(2); }
const arrText = src.slice(i, j+1);
// Evaluate in VM to get JS objects
let checkpoints;
try {
  const script = new vm.Script('(' + arrText + ')');
  checkpoints = script.runInNewContext();
} catch (e) {
  console.error('Failed to evaluate checkpoints array:', e);
  process.exit(2);
}
function ok(msg){ console.log('OK: ' + msg); }
function warn(msg){ console.log('WARN: ' + msg); }
function err(msg){ console.log('ERROR: ' + msg); }
checkpoints.forEach((cp, idx) => {
  const name = `Level ${idx+1} (id=${cp.id}, type=${cp.type})`;
  if (!cp.type) return warn(`${name} missing type`);
  if (cp.type === 'finish') { ok(`${name} is finish`); return; }
  if (cp.type === 'calc' || cp.type === 'video-calc') {
    if (!cp.options || !cp.options.input) return err(`${name} missing options.input`);
    if (typeof cp.options.input.correctValue !== 'number') return warn(`${name} input.correctValue not numeric (value=${cp.options.input.correctValue})`);
    ok(`${name} calc input present`);
    return;
  }
  if (cp.type === 'calc-multi') {
    if (!cp.options || !Array.isArray(cp.options.inputs) || cp.options.inputs.length === 0) return err(`${name} calc-multi missing inputs array`);
    for (const inp of cp.options.inputs) {
      if (!inp.id) return err(`${name} calc-multi has input without id`);
      if (typeof inp.correctValue !== 'number') warn(`${name} input ${inp.id} correctValue not numeric (value=${inp.correctValue})`);
    }
    ok(`${name} calc-multi inputs present (${cp.options.inputs.length})`);
    return;
  }
  if (cp.type === 'text-input') {
    // If noEval true then it's saved for teacher - OK. Otherwise keywords required.
    if (cp.options && cp.options.noEval) { ok(`${name} is text-input with noEval (teacher-reviewed)`); return; }
    if (!cp.options || !Array.isArray(cp.options.keywords) || cp.options.keywords.length===0) return err(`${name} text-input requires options.keywords for auto-eval`);
    ok(`${name} text-input keywords present (${cp.options.keywords.length})`);
    return;
  }
  if (cp.type === 'mcq') {
    if (!cp.options || !Array.isArray(cp.options.mcq) || cp.options.mcq.length===0) return err(`${name} mcq missing options.mcq`);
    if (typeof cp.options.correct !== 'number') return err(`${name} mcq missing options.correct index`);
    ok(`${name} mcq options present`);
    return;
  }
  if (cp.type === 'slider') {
    if (!cp.options || !Array.isArray(cp.options.correctRange) || cp.options.correctRange.length!==2) return err(`${name} slider missing options.correctRange`);
    ok(`${name} slider range present`);
    return;
  }
  if (cp.type === 'multi-card') {
    if (!Array.isArray(cp.cards) || cp.cards.length===0) return err(`${name} multi-card missing cards`);
    ok(`${name} multi-card with ${cp.cards.length} cards`);
    return;
  }
  warn(`${name} unknown type; please verify`);
});
console.log('\nSummary:');
console.log(`Total checkpoints parsed: ${checkpoints.length}`);
process.exit(0);
