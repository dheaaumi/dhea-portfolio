# Website Portofolio Dhea Umi Choiriyah

Website portofolio pribadi dengan HTML, CSS, dan JavaScript. Bisa diedit langsung di VS Code dan diunggah ke GitHub Pages.

## Cara membuka
1. Ekstrak file ZIP.
2. Buka folder `portfolio-dhea` di VS Code melalui **File > Open Folder**.
3. Klik dua kali file `index.html` untuk membuka di browser, atau gunakan ekstensi **Live Server** di VS Code.

## Berkas
- `index.html`: seluruh teks dan struktur halaman.
- `style.css`: warna, ukuran, posisi, dan tata letak. Warna utama disimpan di bagian `:root`.
- `script.js`: fungsi menu, animasi, dan penanda navigasi.
- `assets/foto-dhea.jpg`: foto yang diekstrak dari CV.
- `assets/CV-Dhea-Umi-Choiriyah.pdf`: CV untuk tombol Lihat CV / Download CV.

## Mengubah data
- Nama dan judul: cari `DHEA UMI` di `index.html`.
- Deskripsi: cari `hero-desc` dan `about-content`.
- Pengalaman: cari `experience-list`, lalu ubah/tambah blok `<article class="experience-item reveal">`.
- Organisasi: cari `info-grid`.
- Keahlian: cari `skill-tags`.
- Nomor WhatsApp: cari `https://wa.me/6289529879430`. Gunakan kode negara 62 tanpa angka nol pertama.
- Email: cari `dheaaumichoiriyah@gmail.com`.
- Foto: ganti `assets/foto-dhea.jpg` dengan file foto lain menggunakan nama yang sama.
- CV: ganti file PDF di folder `assets` dengan nama yang sama.

## Publikasi lewat GitHub Pages
1. Buat repository baru, misalnya `dhea-portfolio`.
2. Unggah `index.html`, `style.css`, `script.js`, dan folder `assets` ke akar repository.
3. Buka **Settings > Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**, branch **main**, folder **/(root)** lalu **Save**.
5. Buka alamat yang ditampilkan GitHub Pages setelah deployment selesai.

Catatan: Alamat jalan lengkap tidak dipublikasikan pada website. Website hanya menampilkan Palembang demi privasi. Tidak ada project, sertifikat, atau IPK yang ditambahkan tanpa sumber dari CV.


## Dokumentasi foto
Bagian **Dokumentasi Kegiatan** berisi 2 foto magang dan 8 foto event crew. Semua foto berada di folder `assets/dokumentasi/`. Untuk mengganti foto, cukup ganti file dengan nama yang sama. Untuk mengubah judul atau keterangan foto, edit bagian `id="dokumentasi"` pada `index.html`. Klik foto pada website untuk melihat ukuran besar.
