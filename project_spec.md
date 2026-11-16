# PROJECT_SPEC: Template Website Modular

Dokumen ini adalah pegangan bersama untuk siapa pun (manusia maupun AI) yang mengerjakan proyek ini. Kalau ada permintaan yang bertentangan dengan dokumen ini, tanyakan dulu sebelum mengerjakan.

## 1. Ringkasan

Template website modular dan general yang bisa disesuaikan untuk landing page, booking, toko online, dan pembelajaran. Proyek belajar milik [NAMA KAMU].

## 2. Ruang lingkup

**Termasuk (in scope):**
- Kerangka dasar: header, footer, menu dari konfigurasi, tema lewat variabel CSS.
- Komponen dasar (tombol, kartu, form, section hero).
- Modul bertahap: landing page, booking, toko online, pembelajaran.

**Tidak termasuk (out of scope) untuk saat ini:**
- Framework seperti React atau Vue (ditunda).
- Sistem OWBS dan aplikasi tester keamanan (ditunda, hanya bahan riset).
- Pembayaran sungguhan dan data pengguna sungguhan.
- Backend buatan sendiri (nanti memakai layanan siap pakai).

## 3. Teknologi

| Bagian | Dipakai sekarang | Rencana nanti |
|---|---|---|
| Tampilan | HTML, CSS, JavaScript murni | React (setelah kerangka stabil) |
| Hosting | GitHub Pages | Cloudflare Pages |
| Database, login, file | belum ada | Supabase |

Aturan: **jangan menambah library atau dependency baru tanpa persetujuan pemilik proyek.**

## 4. Struktur folder dan penamaan

```
index.html
css/        theme.css (variabel), base.css (gaya dasar)
js/         main.js
js/config/  site.js (pengaturan situs, menu, saklar modul)
js/components/  layout.js (header, footer, komponen)
pages/      halaman tambahan
```

- Nama file dan folder: huruf kecil semua, tanpa spasi (GitHub Pages membedakan huruf besar-kecil).
- Jangan mengubah, memindahkan, atau menghapus struktur di atas tanpa izin.

## 5. Aturan kode

- Warna, font, dan spasi hanya lewat variabel di `css/theme.css`. Jangan menulis warna langsung di tempat lain.
- Teks situs, menu, dan saklar modul disimpan di `js/config/site.js`, bukan ditulis berulang di tiap halaman.
- Header dan footer dibuat dari satu sumber (`layout.js`). Jangan disalin ke tiap halaman.
- Data dari pengguna ditampilkan dengan `textContent`, bukan `innerHTML`.
- Skrip biasa tanpa `type="module"` (agar pratinjau di ponsel tetap jalan).
- Beri komentar singkat pada bagian yang tidak jelas. Satu fungsi, satu tugas.

## 6. Keamanan

- Repository ini **publik**. Dilarang menyimpan password, token, atau kunci rahasia di kode.
- Nanti dengan Supabase: hanya kunci publik (anon/publishable) yang boleh ada di kode. Kunci `service_role` tidak boleh sama sekali.
- Data pengguna harus dilindungi aturan akses di sisi database, bukan hanya disembunyikan di tampilan.

## 7. Aturan untuk AI

Boleh:
- Menjelaskan konsep, memberi kode, dan mengusulkan perbaikan sesuai dokumen ini.
- Bertanya kalau permintaan belum jelas.

Tidak boleh tanpa izin pemilik proyek:
- Mengubah struktur folder, teknologi, atau keputusan di bagian 8.
- Menambah dependency, framework, atau layanan baru.
- Menghapus atau menimpa file yang sudah ada tanpa menunjukkan perubahannya.
- Menaruh kunci rahasia atau data pribadi ke dalam kode.

Cara bekerja:
- Kerjakan **satu langkah kecil per jawaban**, lalu tunggu hasil dari pemilik proyek.
- Sebutkan file mana yang berubah dan alasannya.
- Jangan mengaku sudah menguji sesuatu kalau belum benar-benar dijalankan.
- Jika ada konflik dengan dokumen ini, sebutkan konfliknya, lalu minta keputusan.
- Jelaskan dengan bahasa sederhana. Pemilik proyek masih belajar.

## 8. Keputusan yang sudah diambil

- Mulai tanpa React; pindah ke React setelah kerangka stabil.
- Core system memakai pendekatan standar (autentikasi layanan siap pakai), bukan OWBS.
- Bekerja lewat aplikasi editor kode di ponsel, lalu mengirim file ke GitHub.
- Hosting awal: GitHub Pages dengan repository publik.

## 9. Definisi selesai (per fitur)

- [ ] Tampil benar di ponsel dan di browser.
- [ ] Tidak ada error di konsol.
- [ ] Warna dan teks berasal dari tema dan konfigurasi.
- [ ] Tidak ada kunci rahasia di kode.
- [ ] README dan daftar rencana diperbarui.

## 10. Rencana tahap

1. Kerangka dasar (header, footer, konfigurasi, tema)
2. Komponen dasar dan landing page
3. Login, database, dan penyimpanan file
4. Modul booking, lalu toko online, lalu pembelajaran
5. Routing tanpa reload dan pindah ke React
6. Dokumentasi dan contoh pemakaian

## 11. Riwayat perubahan dokumen

- [TANGGAL]: dokumen dibuat.
