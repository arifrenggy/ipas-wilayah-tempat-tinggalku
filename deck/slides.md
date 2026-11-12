---
theme: default
title: Wilayah Tempat Tinggalku
info: |
  Materi IPAS kelas 4 SD Taimanu - membaca peta.
  Dibuat dengan Slidev untuk mengajar sambil bermain.
transition: fade-out
mdc: true
fonts:
  provider: none
  sans: Comic Sans MS
  mono: Fira Code
layout: cover
class: text-center
---

<div class="ribbon-top" />

<div
  class="emoji-row"
  style="justify-content:center; margin-bottom: 1.2rem"
  v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 150 } }"
>
  <span>🗺️</span><span>🧭</span><span>🏞️</span><span>🔺</span><span>🌏</span>
</div>

<h1 v-motion :initial="{ opacity: 0, scale: 0.7 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 300, type: 'spring', stiffness: 120 } }">
  <span class="rainbow">Wilayah Tempat Tinggalku</span>
</h1>

<p
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 550 } }"
  style="font-size: 1.5rem; color: var(--teal); font-weight: 800"
>
  Yuk jadi penjelajah peta!
</p>

<div
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 800 } }"
  style="margin-top: 1.6rem; display: flex; gap: .7rem; justify-content: center; flex-wrap: wrap"
>
  <span class="chip orange">IPAS Kelas 4</span>
  <span class="chip teal">SD Taimanu</span>
  <span class="chip sky">Bab 3 · Peta</span>
</div>

<div style="position:absolute; bottom:1.2rem; left:0; right:0; text-align:center; font-size:.85rem; color:var(--muted)">
  Tekan <b>spasi</b> untuk lanjut · <b>←</b> untuk kembali
</div>

---
layout: default
---

<div class="ribbon-top" />

<div style="margin-top: 1.5rem">
  <span class="kicker">Misi hari ini</span>
  <h2 v-click>Halo, penjelajah! 👋</h2>

  <div class="g3 slide-body" style="height:auto; margin-top: 1.4rem; gap:1.2rem">
    <div class="card card-top" v-click>
      <div style="font-size:2.2rem" class="bob">🔍</div>
      <h3>Misi 1</h3>
      <p>Melihat peta dengan teliti.</p>
    </div>
    <div class="card card-top" v-click>
      <div style="font-size:2.2rem" class="bob">🧩</div>
      <h3>Misi 2</h3>
      <p>Membaca simbol dan legenda.</p>
    </div>
    <div class="card card-top" v-click>
      <div style="font-size:2.2rem" class="bob">✏️</div>
      <h3>Misi 3</h3>
      <p>Menggambar peta sekolahku.</p>
    </div>
  </div>

  <div class="ask" style="margin-top: 1.6rem" v-click>
    <span class="qm">❓</span>
    <span>Siapa yang pernah melihat peta? Di mana?</span>
  </div>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div style="margin-top: 1.2rem">
  <span class="kicker">Tujuan belajar</span>
  <h2>Hari ini <span class="rainbow">aku bisa...</span></h2>
</div>

<ul class="idlist" style="margin-top: 1.2rem">
  <li v-click><span class="tick">✓</span> Menyebut jenis-jenis peta.</li>
  <li v-click><span class="tick">✓</span> Membaca skala pada peta.</li>
  <li v-click><span class="tick">✓</span> Membaca legenda dan inset.</li>
  <li v-click><span class="tick">✓</span> Mengenali simbol dan arah mata angin.</li>
</ul>

<div class="ask" style="margin-top: 1.4rem" v-click>
  <span class="qm">❓</span>
  <span>Mana yang paling ingin kamu coba dulu?</span>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div class="slide-body g2r" style="margin-top: .5rem">
  <div>
    <span class="kicker">Bagian 1</span>
    <h2>Peta itu apa, ya?</h2>
    <p v-click><strong>Gambar wilayah</strong> yang dilihat dari atas.</p>
    <p v-click><strong>Dibuat lebih kecil</strong> dari wilayah aslinya.</p>
    <p v-click>Jadi banyak tempat <strong>terlihat sekaligus</strong>.</p>
    <div class="ask" style="margin-top:1rem" v-click>
      <span class="qm">❓</span>
      <span>Kalau dilihat dari atas, sekolah kita seperti apa?</span>
    </div>
  </div>
  <div v-motion :initial="{ opacity: 0, x: 60, rotate: 4 }" :enter="{ opacity: 1, x: 0, rotate: 0, transition: { delay: 250 } }">
    <Shot name="cover_foto" cap="Wilayah dilihat dari atas (buku IPAS hal. 65)" class="tall" />
  </div>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div style="margin-top: 1rem">
  <span class="kicker">Bagian 2</span>
  <h2>Peta umum</h2>
  <p v-click style="font-size:1.3rem">Peta umum menunjukkan <strong>banyak hal</strong> dalam satu wilayah.</p>

  <div class="slide-body g3" style="height:auto; margin-top:1.2rem; gap:1rem">
    <div class="card" v-click>
      <span class="chip teal">Contoh</span>
      <p style="margin-top:.5rem"><b>Peta topografi</b><br />Menunjukkan tinggi rendah tanah.</p>
    </div>
    <div class="card" v-click>
      <span class="chip sky">Contoh</span>
      <p style="margin-top:.5rem"><b>Peta korografi</b><br />Menunjukkan wilayah yang luas.</p>
    </div>
    <div class="card" v-click>
      <span class="chip orange">Contoh</span>
      <p style="margin-top:.5rem"><b>Peta dunia</b><br />Menunjukkan semua negara.</p>
    </div>
  </div>

  <div class="ask" style="margin-top:1.3rem" v-click>
    <span class="qm">❓</span>
    <span>Kenampakan apa yang bisa kamu temukan di peta?</span>
  </div>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div class="slide-body g2" style="margin-top:.5rem">
  <div v-motion :initial="{ opacity: 0, x: -60 }" :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }">
    <Shot name="peta_curah_hujan" cap="Peta curah hujan Kabupaten Kudus (buku IPAS hal. 67)" />
  </div>
  <div>
    <span class="kicker">Bagian 3</span>
    <h2>Peta tematik</h2>
    <p v-click>Peta tematik menunjukkan <strong>satu hal saja</strong>.</p>
    <p v-click>Contohnya <strong>peta curah hujan</strong>.</p>
    <p v-click>Peta ini menunjukkan banyak sedikitnya hujan.</p>
    <div class="ask" style="margin-top:1rem" v-click>
      <span class="qm">❓</span>
      <span>Warna gelap di peta ini artinya apa, ya?</span>
    </div>
    <p v-click style="color:var(--green); font-weight:800; font-size:1.1rem">
      ✔ Artinya di daerah itu hujan turun lebih banyak.
    </p>
  </div>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div class="slide-body g2r" style="margin-top:.5rem">
  <div>
    <span class="kicker">Bagian 4</span>
    <h2>Skala: pembanding jarak</h2>
    <p v-click>Skala membandingkan <strong>jarak di peta</strong> dengan <strong>jarak sebenarnya</strong>.</p>
    <div class="slide-body g3" style="height:auto; margin-top:.9rem; gap:.8rem">
      <div class="card" v-click style="padding:.8rem">
        <span class="chip green">Skala kata</span>
        <p style="margin-top:.45rem; font-size:.98rem">1 cm = 1 km</p>
      </div>
      <div class="card" v-click style="padding:.8rem">
        <span class="chip sky">Skala angka</span>
        <p style="margin-top:.45rem; font-size:.98rem">1 : 100.000</p>
      </div>
      <div class="card" v-click style="padding:.8rem">
        <span class="chip orange">Skala garis</span>
        <p style="margin-top:.45rem; font-size:.98rem">Garis berangka.</p>
      </div>
    </div>
    <p v-click style="margin-top:1rem">Makin luas wilayahnya, makin <strong>kecil</strong> skala petanya.</p>
  </div>
  <div v-motion :initial="{ opacity: 0, scale: .85 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 250 } }">
    <Shot name="skala_grafis" cap="Skala garis 0 sampai 12 kilometer (buku IPAS hal. 68)" />
  </div>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div style="margin-top:.8rem">
  <span class="kicker">Bagian 5</span>
  <h2>Tiga bentuk peta</h2>
</div>

<div class="slide-body g3" style="height:auto; margin-top:.9rem; gap:1.1rem; align-items:start">
  <div class="card" v-click>
    <div style="font-size:1.6rem" class="wiggle">🧱</div>
    <h3>Peta timbul</h3>
    <p>Berbentuk tiga dimensi, jadi bisa diraba. Bahannya keras.</p>
    <Shot name="peta_timbul" cap="hal. 68" style="margin-top:.7rem" />
  </div>
  <div class="card" v-click>
    <div style="font-size:1.6rem" class="wiggle">📄</div>
    <h3>Peta datar</h3>
    <p>Digambar di kertas dan bentuknya rata.</p>
    <p style="margin-top:.6rem; color:var(--sky); font-weight:800">Bisa dilipat dan dibawa ke mana-mana.</p>
  </div>
  <div class="card" v-click>
    <div style="font-size:1.6rem" class="wiggle">💻</div>
    <h3>Peta digital</h3>
    <p>Tampil di layar komputer atau televisi.</p>
    <Shot name="peta_digital" cap="hal. 69" style="margin-top:.7rem" />
  </div>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div class="slide-body g2" style="margin-top:.3rem">
  <div class="mapwrap" v-motion :initial="{ opacity: 0, scale: .9 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 200 } }">
    <Shot name="komponen_peta" cap="Komponen pada sebuah peta (buku IPAS hal. 71)" />
    <div class="pin t" style="top:2%; left:6%" v-click><span class="pin-n">1</span>Judul</div>
    <div class="pin s" style="top:40%; left:4%" v-click><span class="pin-n">2</span>Inset</div>
    <div class="pin g" style="bottom:26%; left:6%" v-click><span class="pin-n">3</span>Skala</div>
    <div class="pin p" style="bottom:8%; right:6%" v-click><span class="pin-n">4</span>Legenda</div>
  </div>
  <div>
    <span class="kicker">Bagian 6</span>
    <h2>Komponen peta</h2>
    <p v-click>Peta punya bagian-bagian penting.</p>
    <ul class="idlist" style="margin-top:.8rem">
      <li v-click><span class="tick">1</span> <b>Judul</b> &nbsp;memberi tahu isi peta.</li>
      <li v-click><span class="tick">2</span> <b>Inset</b> &nbsp;peta kecil penunjuk wilayah luas.</li>
      <li v-click><span class="tick">3</span> <b>Skala</b> &nbsp;pembanding jarak.</li>
      <li v-click><span class="tick">4</span> <b>Legenda</b> &nbsp;arti simbol.</li>
    </ul>
  </div>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div style="margin-top:.9rem">
  <span class="kicker">Bagian 7</span>
  <h2>Simbol dan legenda</h2>
</div>

<div class="slide-body g3" style="height:auto; margin-top:1rem; gap:1rem; align-items:start">
  <div class="card" v-click style="border-color:var(--pink)">
    <span class="chip pink">Simbol titik</span>
    <div style="font-size:2rem; margin:.5rem 0">⬤ 🔺</div>
    <p>Untuk <b>kota</b> dan <b>gunung</b>.</p>
  </div>
  <div class="card" v-click style="border-color:var(--teal)">
    <span class="chip teal">Simbol garis</span>
    <div style="font-size:2rem; margin:.5rem 0">〰️ 🛣️</div>
    <p>Untuk <b>sungai</b> dan <b>jalan</b>.</p>
  </div>
  <div class="card" v-click style="border-color:var(--green)">
    <span class="chip green">Simbol area</span>
    <div style="font-size:2rem; margin:.5rem 0">🌳 🌾</div>
    <p>Untuk <b>hutan</b>, <b>sawah</b>, dan <b>danau</b>.</p>
  </div>
</div>

<div class="slide-body g2" style="height:auto; margin-top:1rem; gap:1.2rem; align-items:center">
  <p v-click style="margin:0">Legenda adalah <strong>keterangan arti simbol</strong>. Biasanya ada di pojok peta.</p>
  <Shot name="legenda" cap="Legenda peta (buku IPAS hal. 72)" v-click />
</div>

---
layout: default
---

<div class="ribbon-top" />

<div class="slide-body g2r" style="margin-top:.6rem">
  <div>
    <span class="kicker">Bagian 8</span>
    <h2>Inset dan garis koordinat</h2>
    <p v-click><strong>Inset</strong> adalah peta kecil di dalam peta.</p>
    <p v-click>Inset menunjukkan letak wilayah yang <strong>lebih luas</strong>.</p>
    <p v-click><strong>Garis koordinat</strong> adalah garis khayal penunjuk letak tempat.</p>
    <div class="ask" style="margin-top:1rem" v-click>
      <span class="qm">❓</span>
      <span>Kenapa peta kecil itu diletakkan di pojok?</span>
    </div>
    <p v-click style="color:var(--green); font-weight:800">✔ Supaya tidak menutupi gambar peta utama.</p>
  </div>
  <div v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0, transition: { delay: 250 } }">
    <Shot name="inset" cap="Inset: diagram lokasi (buku IPAS hal. 73)" />
  </div>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div class="slide-body g2" style="margin-top:.6rem">
  <div style="text-align:center">
    <div class="compass">
      <span class="n">UTARA</span>
      <span class="e">TIMUR</span>
      <span class="s">SELATAN</span>
      <span class="w">BARAT</span>
      <div class="needle"></div>
    </div>
  </div>
  <div>
    <span class="kicker">Bagian 9</span>
    <h2>Mata angin</h2>
    <p v-click>Mata angin membantu kita tahu <strong>arah peta</strong>.</p>
    <p v-click>Ada <strong>utara</strong>, <strong>timur</strong>, <strong>selatan</strong>, dan <strong>barat</strong>.</p>
    <p v-click>Biasanya utara ada di <strong>bagian atas</strong> peta.</p>
    <div class="ask" style="margin-top:1rem" v-click>
      <span class="qm">❓</span>
      <span>Ke arah mana pintu kelas kita menghadap?</span>
    </div>
  </div>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div style="margin-top:.9rem">
  <span class="kicker">Game cepat</span>
  <h2>Tebak simbolnya! 🎯</h2>
</div>

<div class="slide-body" style="height:auto; margin-top:1.2rem; gap:1rem">
  <div class="card" v-click style="display:flex; align-items:center; gap:1.2rem">
    <div style="font-size:2.6rem">⬤</div>
    <div>
      <p style="margin:0; font-weight:800; font-size:1.15rem">Simbol titik ini artinya apa?</p>
      <p style="margin:.3rem 0 0; color:var(--green); font-weight:800">✔ Kota</p>
    </div>
  </div>
  <div class="card" v-click style="display:flex; align-items:center; gap:1.2rem">
    <div style="font-size:2.6rem">〰️</div>
    <div>
      <p style="margin:0; font-weight:800; font-size:1.15rem">Simbol garis ini artinya apa?</p>
      <p style="margin:.3rem 0 0; color:var(--green); font-weight:800">✔ Sungai</p>
    </div>
  </div>
  <div class="card" v-click style="display:flex; align-items:center; gap:1.2rem">
    <div style="font-size:2.6rem">🌳</div>
    <div>
      <p style="margin:0; font-weight:800; font-size:1.15rem">Simbol area ini artinya apa?</p>
      <p style="margin:.3rem 0 0; color:var(--green); font-weight:800">✔ Hutan</p>
    </div>
  </div>
</div>

<p v-click style="margin-top:1.1rem; color:var(--muted); font-size:1.05rem">
  Mau main game lain? Ada di website pembelajaran kita.
</p>

---
layout: default
---

<div class="ribbon-top" />

<div style="margin-top:.9rem">
  <span class="kicker">Kegiatan bersama</span>
  <h2>Ayo gambar peta sekolahku! ✏️</h2>
</div>

<div class="slide-body" style="height:auto; margin-top:1.1rem; gap:.9rem">
  <div class="card" v-click style="display:flex; gap:1rem; align-items:center">
    <div class="num">1</div>
    <p style="margin:0">Gambar kelas, kantin, dan jalan menuju sekolah.</p>
  </div>
  <div class="card" v-click style="display:flex; gap:1rem; align-items:center">
    <div class="num" style="background:var(--sky)">2</div>
    <p style="margin:0">Tulis <b>judul peta</b> di bagian atas.</p>
  </div>
  <div class="card" v-click style="display:flex; gap:1rem; align-items:center">
    <div class="num" style="background:var(--orange)">3</div>
    <p style="margin:0">Tambahkan <b>mata angin</b> dan <b>legenda</b> buatanmu.</p>
  </div>
  <div class="card" v-click style="display:flex; gap:1rem; align-items:center">
    <div class="num" style="background:var(--green)">4</div>
    <p style="margin:0">Ceritakan petamu di depan kelas.</p>
  </div>
</div>

<div class="ask" style="margin-top:1.1rem" v-click>
  <span class="qm">⏱️</span>
  <span>Waktu 15 menit. Kerjakan berkelompok, lalu tempel di dinding kelas!</span>
</div>

---
layout: default
---

<div class="ribbon-top" />

<div style="margin-top:.9rem">
  <span class="kicker">Ringkasan</span>
  <h2>Kita sudah belajar! 🎉</h2>
</div>

<div class="slide-body g2" style="height:auto; margin-top:1.1rem; gap:1.4rem; align-items:start">
  <ul class="idlist">
    <li v-click><span class="tick">✓</span> Peta umum dan peta tematik.</li>
    <li v-click><span class="tick">✓</span> Peta timbul, datar, dan digital.</li>
    <li v-click><span class="tick">✓</span> Skala, legenda, inset, simbol.</li>
    <li v-click><span class="tick">✓</span> Mata angin penunjuk arah.</li>
  </ul>
  <div class="card" v-click style="border-color:var(--orange); background:#FFF6E8">
    <div style="font-size:2.4rem" class="bob">🧠</div>
    <h3>Tiga kata kunci</h3>
    <p style="font-size:1.05rem; color:var(--ink)">
      <b>Dari atas</b> · <b>lebih kecil</b> · <b>ada keterangannya</b>.
    </p>
  </div>
</div>

---
layout: center
class: closing-bg
---

<div class="ribbon-top" />

<div style="text-align:center; max-width: 40rem; margin: 0 auto">
  <div class="emoji-row" style="justify-content:center; margin-bottom:1.2rem">
    <span>🌳</span><span>🏫</span><span>🗺️</span><span>💚</span>
  </div>

  <h1 style="font-size:3rem"><span class="rainbow">Ayo jaga lingkungan tempat tinggal kita!</span></h1>

  <p v-click style="font-size:1.35rem; color:var(--ink); margin-top:1rem">
    Buang sampah di tempatnya. Rawat sekolah dan rumah kita.
  </p>

  <div class="ask" style="justify-content:center; margin-top:1.4rem" v-click>
    <span class="qm">❓</span>
    <span>Apa satu hal yang akan kamu lakukan untuk lingkunganmu?</span>
  </div>

  <p v-click style="margin-top:1.6rem; font-size:1.5rem; font-weight:800; color:var(--teal)">
    Terima kasih, penjelajah hebat! 👏
  </p>
</div>
