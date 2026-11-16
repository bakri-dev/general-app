# General App

Template website yang bisa disesuaikan untuk berbagai kebutuhan: landing page, booking, toko online (e-commerce), dan pembelajaran. Dibuat dengan HTML, CSS, dan JavaScript murni sebagai proyek belajar, dengan struktur yang modular supaya mudah dikembangkan.

> **Status:** tahap awal (dalam pengembangan). Saat ini baru kerangka dasar dan halaman beranda yang tersedia.

**Demo:** https://bakri-dev.github.io/general-app/

## Tujuan

- Satu kerangka dasar yang bisa dipakai ulang untuk jenis situs yang berbeda.
- Pengaturan situs (nama, menu, modul aktif) dipusatkan di satu file konfigurasi.
- Tampilan diatur lewat variabel CSS, sehingga mengganti tema cukup mengubah beberapa baris.

## Fitur saat ini

- Header dan footer yang dibuat dari satu sumber (tidak perlu disalin ke tiap halaman).
- Menu navigasi yang dibentuk otomatis dari konfigurasi.
- Saklar untuk menyalakan atau mematikan modul lewat konfigurasi.
- Tampilan responsif dasar.

## Rencana modul

- [ ] Komponen dasar (tombol, kartu, form)
- [ ] Landing page lengkap
- [ ] Modul booking
- [ ] Modul toko online (e-commerce)
- [ ] Modul pembelajaran
- [ ] Login dan database
- [ ] Penyimpanan file (cloud storage)

## Struktur folder

```
.
├── index.html
├── css/
│   ├── theme.css        # variabel desain (warna, font, spasi)
│   └── base.css         # gaya dasar dan komponen
└── js/
    ├── main.js          # titik masuk: memasang header & footer
    ├── config/
    │   └── site.js      # nama situs, menu, saklar modul
    └── components/
        └── layout.js    # fungsi header dan footer
```

## Cara memakai

1. Buka situs lewat alamat GitHub Pages di atas, atau
2. Unduh repository ini, lalu jalankan dengan server lokal (misalnya ekstensi Live Server di VS Code). Membuka `index.html` langsung dari folder juga bisa untuk versi saat ini, selama semua file tetap berada pada struktur folder di atas.

## Cara menyesuaikan

- **Nama dan menu situs:** ubah `js/config/site.js`.
- **Warna, font, dan spasi:** ubah variabel di `css/theme.css`.
- **Menyalakan modul:** ubah nilai `enabled` pada menu di `js/config/site.js`.

## Catatan keamanan

Repository ini bersifat publik. Jangan menyimpan password, token, atau kunci rahasia di dalam kode. Jika nanti terhubung ke layanan seperti database atau penyimpanan, gunakan hanya kunci yang memang aman untuk dipakai di sisi browser, dan simpan kunci rahasia di tempat yang tidak ikut terunggah.

## Rencana ke depan

Setelah kerangka stabil, proyek ini akan dikembangkan dengan routing tanpa reload halaman, lalu dipindahkan ke React.

## Lisensi

Belum ditentukan.

## Pembuat

Dibuat oleh BAKRI DEV.
