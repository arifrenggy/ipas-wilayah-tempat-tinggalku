# Wilayah Tempat Tinggalku - Paket Mengajar IPAS Kelas 4

Materi IPAS kelas 4, Bab 3 (buku IPAS hlm. 65-78), untuk mengajar di SD Taimanu.

- `index.html` - halaman pembuka berisi tautan ke semua bahan
- `presentasi/` - presentasi animasi 16 slide, dibangun dengan [Slidev](https://sli.dev)
- `website/` - arena game pendukung (kuis, 2 game, ruang kreasi, alat bantu skala)
- `unduhan/` - versi file PPT dan website yang bisa diunduh

## Isi presentasi
Sampul, misi belajar, tujuan "aku bisa...", peta dari atas, peta umum, peta tematik,
skala, tiga bentuk peta, komponen peta, simbol dan legenda, inset, mata angin,
game cepat, kegiatan menggambar peta sekolah, ringkasan, dan penutup.

## Isi website
Website khusus kegiatan pendukung, tanpa bacaan materi (materi ada di presentasi):

- Kuis Kilat, 10 soal
- Game 1: Cocokkan Simbol Peta
- Game 2: Rakit Peta Ajaib
- Ruang kreasi: merakit peta sekolah sendiri
- Alat bantu hitung jarak dengan skala

Ukurannya kecil (sekitar 38 KB) karena tanpa gambar, jadi cepat dibuka di HP siswa
dan tetap jalan tanpa internet.

## Membangun ulang presentasi
Sumber Slidev ada di folder `deck/`.
```bash
cd deck
npm install
npm run dev          # pratinjau di browser
npm run build        # hasil terpisah-pisah di dist/
npm run build:single # hasil satu file index.html (dipakai di presentasi/)
```
`build:single` menjalankan `scripts/patch-slidev.mjs` lebih dulu. Tambalan itu perlu
karena Slidev mengunci `manualChunks`, yang bentrok dengan mode satu file.
