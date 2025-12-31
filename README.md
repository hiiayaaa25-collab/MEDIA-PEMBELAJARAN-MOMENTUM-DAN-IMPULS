# 🎮 Physics Adventure - Game Edukatif Interaktif

## 📱 Deskripsi
**Physics Adventure** adalah game edukatif 2D yang dirancang untuk mengajarkan konsep Fisika (Momentum & Impuls) dengan cara yang menyenangkan dan interaktif. Pemain berlari melalui berbagai tantangan fisika sambil mengumpulkan poin dan berkompetisi di leaderboard global.

---

## 🎯 Fitur Utama

✅ **Game Online & Multiplayer Leaderboard**
- Mainkan game di web browser
- Skor otomatis tersimpan dan tersinkronisasi
- Lihat skor pemain lain di dashboard real-time

✅ **9 Level dengan Konsep Fisika Berbeda**
- Level 1-3: Momentum Dasar
- Level 4-5: Impuls & Gaya
- Level 6-7: Tumbukan & Recoil
- Level 8-9: Impuls Vektor & Tumbukan Lenting

✅ **Sistem Penilaian Real-time**
- Skor +10 untuk jawaban benar (bonus kecepatan)
- Skor -5 untuk jawaban salah
- Skor +50 bonus saat menyelesaikan permainan

✅ **Dashboard Leaderboard Global**
- Melihat top 10 pemain
- Statistik real-time (total pemain, top score, rata-rata)
- Permainan terbaru yang selesai
- Auto-refresh setiap 10 detik

✅ **Sistem Simpan Otomatis**
- Skor pemain disimpan ke Firebase Firestore
- Sinkronisasi real-time ke dashboard
- Laporan terperinci per level

---

## 🚀 Quick Start (Opsi Cepat)

### A. Mainkan Offline (Lokal)
1. Download project ini
2. Double-click `liyaa.html` untuk bermain
3. Buka `dashboard.html` untuk melihat leaderboard (akan kosong karena offline)

### B. Mainkan Online (Recommended)
Baca bagian **Setup Firebase** di bawah untuk setup lengkap.

---

## 🔥 Setup Firebase (Online Mode)

### Prasyarat
- Firebase Project (gratis)
- Web Browser
- Text Editor

### Langkah 1: Buat Firebase Project

1. **Buka Firebase Console**
   - Klik: [Firebase Console](https://console.firebase.google.com/)
   - Sign in dengan Google Account
   - Klik "Create a project"
   - Nama: `physics-adventure`
   - Uncheck "Enable Google Analytics" (opsional)
   - Klik "Create Project"

2. **Setup Firestore Database**
   - Di sidebar → Build → Firestore Database
   - Klik "Create database"
   - Location: Pilih region terdekat (Asia: `asia-southeast1`)
   - Security rules: **Start in test mode** (untuk development)
   - Klik "Create"

3. **Enable Anonymous Authentication**
   - Di sidebar → Build → Authentication
   - Klik tab "Sign-in method"
   - Klik "Anonymous"
   - Toggle ON → "Enable"
   - Klik "Save"

### Langkah 2: Dapatkan Firebase Config

1. **Buka Project Settings**
   - Di atas, klik icon ⚙️ (gear) → "Project Settings"

2. **Buat Web App**
   - Scroll ke bawah → "Your apps"
   - Klik icon `</>` untuk "Web"
   - App name: `physics-adventure`
   - Klik "Register app"

3. **Copy Konfigurasi**
   - Pilih "Use a CDN" (di tab)
   - Copy config object yang terlihat seperti:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyDxxx...",
     authDomain: "physics-adventure-xxxxx.firebaseapp.com",
     projectId: "physics-adventure-xxxxx",
     storageBucket: "physics-adventure-xxxxx.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abcdef123456"
   };
   ```

### Langkah 3: Update Project dengan Firebase Config

1. **Buka file `firebase-config.js` di project**
   - Ganti `YOUR_API_KEY`, `your-project`, dll dengan data Anda
   - **Jangan gunakan file ini jika tidak ada config** (project akan tetap bekerja di offline mode)

2. **Buka file `dashboard.html`**
   - Cari bagian: `const firebaseConfig = {`
   - Ganti dengan config Anda yang baru
   - Save

3. **Update file `liyaa.html`**
   - Jika Anda ingin game juga pakai config yang sama
   - Cari bagian: `const firebaseConfig = ...`
   - Tapi biasanya sudah terbaca dari `firebase-config.js`

---

## 📁 File Struktur

```
liyaaa/
├── liyaa.html                    # Game Utama (Mainkan game di sini)
├── dashboard.html                # Dashboard Leaderboard (Lihat skor semua pemain)
├── firebase-config.js            # Konfigurasi Firebase (update dengan credentials Anda)
├── README.md                     # File ini
└── pad-happy-dayz-...mp3        # Background Music
```

---

## 🎮 Cara Bermain

### Start Local Server (Recommended)
```bash
# Di command line, navigasi ke folder project
cd /path/to/liyaaa

# Jalankan local server
python -m http.server 8000
# atau
python3 -m http.server 8000
```

Buka:
- **Game**: `http://localhost:8000/liyaa.html`
- **Dashboard**: `http://localhost:8000/dashboard.html`

### Main Game
1. Masukkan nama Anda
2. Pilih avatar (Lucy/Neko atau Luke/Star)
3. Klik "START GAME"
4. Baca peraturan → Klik "MULAI"
5. Gunakan **WASD** atau **Arrow Keys** untuk bergerak
6. Sentuh rintangan → Selesaikan kuis → Lompat ke level berikutnya!

### Kontrol Permainan
| Tombol | Aksi |
|--------|------|
| **W / ↑** | Bergerak Atas |
| **A / ←** | Bergerak Kiri |
| **S / ↓** | Bergerak Bawah |
| **D / →** | Bergerak Kanan |
| **Mouse/Touch** | Klik tombol D-Pad (di mobile) |

### Lihat Leaderboard
1. Buka `dashboard.html` di browser
2. Lihat top 10 pemain + statistik
3. Dashboard otomatis refresh setiap 10 detik

---

## 🌐 Deploy ke Web (Production)

Setelah Firebase setup selesai, pilih salah satu hosting:

### Opsi 1: GitHub Pages (Gratis & Mudah)

```bash
# 1. Inisialisasi Git (jika belum)
git init
git add .
git commit -m "Add Physics Adventure Game"

# 2. Push ke GitHub
git push origin main

# 3. Di GitHub Repo → Settings → Pages
#    - Source: Branch 'main', folder '/root'
#    - Save
#    - Website aktif di: https://username.github.io/repo-name
```

### Opsi 2: Firebase Hosting

```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login ke Firebase
firebase login

# 3. Setup Hosting
firebase init hosting
# Pilih project Anda

# 4. Deploy
firebase deploy
```

### Opsi 3: Vercel (Rekomendasi - Paling Mudah)

1. Push repo ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Klik "Import Project"
4. Import GitHub repo Anda
5. Click "Deploy"
6. Website langsung live! 🚀

---

## 📊 Struktur Database Firebase

### Collection: `game_results`

Setiap kali pemain selesai bermain, data disimpan otomatis:

```javascript
{
  playerName: "Aldo",
  playerType: "neko",
  userId: "uid123",
  score: 250,
  correctAnswers: 8,
  wrongAnswers: 1,
  totalLevelsCompleted: 9,
  levelResults: [
    {
      level: 1,
      question: "Sebuah mobil bermassa 2000 kg...",
      isCorrect: true,
      points: 10,
      userAnswer: "96",
      correctAnswer: "96"
    },
    // ... level lainnya
  ],
  finishTime: Timestamp("2025-12-01 14:30:00"),
  gameVersion: "1.0"
}
```

---

## 🎨 Kustomisasi

### 1. Mengganti Gambar Karakter
Edit bagian `imageSources` di `liyaa.html`:
```javascript
const imageSources = {
    'player_neko': 'https://raw.githubusercontent.com/YOUR/REPO/main/lucy.png',
    'player_star': 'https://raw.githubusercontent.com/YOUR/REPO/main/luke.png',
};
```
Gunakan **raw GitHub link** agar tidak kena CORS/redirect.

### 2. Mengganti Musik Background
Di function `initAudio()` di `liyaa.html`:
```javascript
const bgmURL = "https://raw.githubusercontent.com/YOUR/REPO/main/music.mp3";
```

### 3. Menambah Level Baru
Di array `state.checkpoints` dalam `liyaa.html`:
```javascript
{
    id: 10,
    x: 10000,
    type: 'calc',
    visual: 'custom-obstacle',
    question: "Soal fisika Anda di sini?",
    sim: {},
    options: {
        input: { correctValue: 100, tolerance: 2 },
        feedback: {
            correct: "Benar! Mantap!",
            wrong: "Coba lagi dengan rumus..."
        },
        explanation: "Penjelasan detail di sini..."
    }
}
```

### 4. Mengubah Warna Tema
Tailwind CSS classes sudah integrated. Edit di style tag atau HTML classes.

---

## 🐛 Troubleshooting

| Masalah | Penyebab | Solusi |
|---------|---------|--------|
| ❌ Gambar karakter tidak muncul | URL gambar salah/kena CORS | Gunakan raw GitHub link |
| 🔇 Musik tidak play | Audio context belum active | Klik button di game terlebih dahulu |
| 📊 Dashboard kosong | Firebase belum connected | Cek config, tunggu 1-2 menit |
| ⚠️ "Firebase config not found" | Config file kosong | Game masih work di offline mode |
| 💾 Skor tidak menyimpan | Firestore permissions | Cek test mode di Firebase |
| ❌ "Gagal terhubung ke database" | Kredensial salah | Ulang Langkah 2 & 3 |

---

## 🧪 Testing

### Test Mode (Offline)
1. Mainkan tanpa setup Firebase
2. Skor tidak tersimpan
3. Dashboard tidak berfungsi

### Production Mode (Online)
1. Setup Firebase dengan benar
2. Mainkan game
3. Buka dashboard → Lihat skor Anda
4. Invite teman untuk berkompetisi

---

## 📚 Referensi Soal Fisika

| Level | Konsep | Rumus |
|-------|--------|-------|
| 1-3 | Momentum | **p** = m·**v** |
| 4-5 | Impuls | **I** = **F**·Δt = Δ**p** |
| 6-7 | Tumbukan | m₁**v₁** + m₂**v₂** = (m₁+m₂)**v'** |
| 8 | Impuls Vektor | **F** = m(**v₂** - **v₁**)/t |
| 9 | Tumbukan Lenting | **v₁'** = ((m₁-m₂)**v₁** + 2m₂**v₂**)/(m₁+m₂) |

---

## 💡 Tips Bermain

🎯 **Menang Mudah:**
- Baca soal dengan teliti
- Gunakan kalkulator jika perlu
- Lihat penjelasan setiap level
- Ulangi level untuk skor lebih tinggi

💪 **Tingkatkan Skor:**
- Jawab dengan cepat (+bonus)
- Jangan salah
- Selesaikan semua 9 level

🏆 **Masuk Leaderboard:**
- Mainkan dengan serius
- Kumpulkan poin maksimal
- Kompetisi dengan teman

---

## 🤝 Kontribusi

Ingin tambah fitur? Silakan:
1. Fork repo
2. Buat branch baru: `git checkout -b feature-xyz`
3. Commit: `git commit -am 'Add feature'`
4. Push: `git push origin feature-xyz`
5. Submit Pull Request

### Ide Fitur yang Dibutuhkan:
- ✨ Lebih banyak karakter
- 🎨 Lebih banyak obstacle visual
- 🎵 Pilihan musik berbeda
- 🌍 Multi-bahasa
- 📱 Progressive Web App
- 🎓 Lebih banyak soal fisika

---

## 📞 Support

Jika ada pertanyaan atau menemukan bug:
1. Buka issue di GitHub
2. Jelaskan masalah dengan detail
3. Sertakan screenshot jika perlu

---

## 📝 Lisensi

Physics Adventure © 2025 - **Educational Use Only**

---

## 🏆 Credits

- **Developer**: Your Name
- **Physics Advisor**: Teachers
- **Music**: Free Background Music
- **Framework**: Tailwind CSS, Firebase, Tone.js

---

## 🚀 Selamat Bermain!

**"Run with Speed, Win with Physics!" ⚡**

Jangan lupa update leaderboard dengan skor terbaik Anda!
Gunakan dashboard untuk melihat kompetisi dengan pemain lain.

**Happy Learning! 📖✨**
