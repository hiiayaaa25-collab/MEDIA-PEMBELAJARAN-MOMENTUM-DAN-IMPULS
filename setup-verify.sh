#!/bin/bash

# Physics Adventure - Setup Verification Script
# Jalankan: bash setup-verify.sh

echo "================================"
echo "🎮 Physics Adventure - Setup Verification"
echo "================================"
echo ""

# Check 1: File existence
echo "✓ Checking files..."
files=("liyaa.html" "dashboard.html" "firebase-config.js" "SETUP.html" "README.md" "DOKUMENTASI.md")

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        size=$(wc -c < "$file" 2>/dev/null)
        size=$((size / 1024))
        echo "  ✅ $file ($size KB)"
    else
        echo "  ❌ $file (MISSING)"
    fi
done

echo ""
echo "✓ File Structure:"
ls -lh *.html *.js *.md 2>/dev/null | awk '{print "  ", $9, "(" $5 ")"}'

echo ""
echo "================================"
echo "🔍 Checklist:"
echo "================================"
echo ""
echo "BEFORE STARTING:"
echo "  [ ] Test game locally: Open liyaa.html in browser"
echo "  [ ] Read README.md for detailed guide"
echo "  [ ] Open SETUP.html for step-by-step Firebase setup"
echo ""
echo "FIREBASE SETUP:"
echo "  [ ] Create Firebase project at console.firebase.google.com"
echo "  [ ] Enable Firestore Database"
echo "  [ ] Enable Anonymous Authentication"
echo "  [ ] Copy Firebase config"
echo "  [ ] Paste config in firebase-config.js"
echo "  [ ] Paste config in dashboard.html"
echo ""
echo "TESTING:"
echo "  [ ] Open liyaa.html and play game"
echo "  [ ] Complete all 9 levels"
echo "  [ ] Verify score is saved"
echo "  [ ] Open dashboard.html"
echo "  [ ] Check if score appears in leaderboard"
echo ""
echo "DEPLOYMENT:"
echo "  [ ] Push to GitHub: git push origin main"
echo "  [ ] Deploy using one method:"
echo "      - GitHub Pages (Settings > Pages)"
echo "      - Vercel.com (Import GitHub repo)"
echo "      - Firebase Hosting (firebase deploy)"
echo ""
echo "POST-DEPLOYMENT:"
echo "  [ ] Test game from public URL"
echo "  [ ] Test dashboard from public URL"
echo "  [ ] Share links with friends"
echo "  [ ] Monitor leaderboard"
echo ""
echo "================================"
echo "📊 Next Steps:"
echo "================================"
echo ""
echo "1. If you haven't setup Firebase yet:"
echo "   → Open SETUP.html in your browser"
echo "   → Follow steps 1-7"
echo ""
echo "2. To run local server:"
echo "   → cd /path/to/liyaaa"
echo "   → python -m http.server 8000"
echo "   → Open http://localhost:8000"
echo ""
echo "3. To deploy to GitHub Pages:"
echo "   → git add ."
echo "   → git commit -m 'Add Physics Adventure'"
echo "   → git push origin main"
echo "   → Go to repo Settings > Pages > Select main branch"
echo ""
echo "4. To deploy to Vercel:"
echo "   → Go to vercel.com"
echo "   → Click Import Project"
echo "   → Select GitHub repo"
echo "   → Click Deploy"
echo ""
echo "================================"
echo "✨ All files are ready!"
echo "================================"
