# STANDAR OPERASIONAL PROSEDUR (SOP) PEMBUATAN ARTIKEL
**Website:** Kontraktor Bangunan (kontraktorbangunansurabaya.web.id)

Dokumen ini berisi seluruh aturan teknis, standar penulisan, format media, dan alur integrasi pembuatan halaman artikel yang wajib dipatuhi dari awal hingga akhir secara konsisten.

---

## 1. Aturan Penulisan & Identitas Brand (Wajib)

1. **DILARANG Mencantumkan Nama PT**:
   - Jangan pernah menuliskan "PT.", "PT. Mujtahid Purwo", atau nama PT lainnya.
   - Gunakan nama entitas netral/umum: **Kontraktor Bangunan**, **Tim Kontraktor Bangunan Malang**, atau **Kontraktor Bangunan Surabaya**.
2. **DILARANG Menggunakan Karakter Em-Dash (`—`)**:
   - Jangan gunakan garis panjang (`—`).
   - Ganti dengan tanda baca yang lebih rapi seperti titik dua (`:`), tanda kurung `(...)`, koma (`,`), atau tanda hubung standar (`-`).
3. **Internal Linking (Minimal 2 Link Valid & Relevan)**:
   - Setiap artikel **wajib memiliki minimal 2 internal link** di dalam paragraf isi artikel.
   - Link harus relevan secara kontekstual dan **wajib mengarah ke halaman yang benar-benar ada/aktif**:
     - Artikel lain: `panduan-mengurus-izin-pbg-bangunan.html`, `cara-menilai-kualitas-beton-k-300.html`, `strategi-menyusun-rab-bangunan.html`, `panduan-lengkap-bangun-rumah-baru-malang.html`.
     - Halaman layanan: `../layanan/bangun-rumah-baru.html`, `../layanan/desain-arsitektur-&-RAB.html`, `../layanan/renovasi-bangunan.html`, `../layanan/gedung-&-komersial.html`, `../layanan/interior-&-finishing.html`, `../layanan/maintenance-bangunan.html`.
     - Portofolio & Kontak: `../portofolio.html`, `../kontak.html`.

---

## 2. Standar Format Gambar Artikel (Wajib)

1. **Format File Wajib:** **WebP (`.webp`)**.
2. **Ukuran File Maksimal:** **Maksimum 50 KB** (terkompresi optimal, tetap tajam dan cepat dimuat).
3. **Watermark Wajib:**
   - Teks Watermark: **`kontraktorbangunansurabaya.web.id`**
   - Ukuran: **Sedang** (terbaca jelas dan proporsional).
   - Posisi: **Tepat di tengah-tengah (Center)** gambar.
4. **Lokasi Penyimpanan:** `assets/img/artikel/<nama-gambar>.webp`.

---

## 3. Struktur Layout Halaman Detail Artikel (`artikel/<slug>.html`)

Setiap halaman artikel wajib menggunakan struktur Bootstrap 5 yang seragam:

1. **Header & Metadata SEO**:
   - Meta Title, Meta Description, Keywords, Canonical URL, Geo Meta Tags.
   - Open Graph (Facebook/WhatsApp) & Twitter Card tags.
   - Structured Data JSON-LD (`TechArticle` / `Article`, `BreadcrumbList`, dan `FAQPage`).
2. **Navigasi & Hero Header**:
   - Navbar standar dengan Mega Menu Layanan.
   - Breadcrumb navigasi (`Beranda > Artikel > Judul Artikel`).
   - Badge Kluster/Silo, Tanggal terbit, Estimasi waktu baca, dan Penulis.
3. **Featured Image & Key Takeaways**:
   - Gambar utama WebP dengan caption deskriptif.
   - *Key Takeaways Box* (poin-poin kunci artikel).
4. **Daftar Isi (Table of Contents / TOC) Buka-Tutup (Collapsible)**:
   - **Wajib Collapsible**: Menggunakan `data-bs-toggle="collapse"` sehingga default-nya ringkas dan tidak memakan tempat vertikal.
   - Tombol toggle dengan teks dan icon chevron yang berputar saat dibuka.
5. **Badan Artikel & Komponen Interaktif**:
   - Heading H2 dan H3 terstruktur rapi.
   - Tabel komparasi / rincian biaya / kurva-S (jika relevan).
   - Box *"Baca Juga"* (rekomendasi artikel dan layanan terkait).
   - Accordion FAQ interaktif di akhir artikel.
   - Kesimpulan & Rekomendasi + Banner CTA WhatsApp (`https://wa.me/6288989643555`).
   - Bio Penulis resmi.
6. **Sidebar Kanan (Sticky)**:
   - Widget Artikel Terkait (dengan thumbnail dan tanggal).
   - Banner Promo Layanan Relevan.
   - Widget Menu Cepat Seluruh Layanan.
7. **Footer & Tombol Floating**:
   - Footer 4 kolom lengkap.
   - Tombol *Scroll to Top*.
   - Tombol *Floating WhatsApp*.

---

## 4. Alur Integrasi Otomatis (Wajib Dijalankan Setiap Pembuatan Artikel)

Setelah file `artikel/<slug>.html` selesai dibuat, wajib langsung menjalankan 2 langkah berikut:

### A. Daftarkan ke Katalog [artikel.html](file:///e:/Magang/boostrap/kontaktor-bangunan/artikel.html) via `assets/js/main.js`
Tambahkan objek artikel baru ke array `dataArtikel` di urutan paling atas:
```javascript
{
    judul: "Judul Artikel Lengkap",
    kategori: "bangun-rumah", // Pilihan tepat: bangun-rumah | sipil-dasar | manajemen | legalitas
    kategoriLabel: "Bangun Rumah", // Label: "Bangun Rumah" | "Sipil Dasar" | "Manajemen Biaya" | "Legalitas & Izin"
    tanggal: "3 Sep 2026",
    waktuBaca: "10 Menit",
    url: "artikel/<slug>.html",
    gambar: "assets/img/artikel/<nama-gambar>.webp",
    ringkasan: "Ringkasan artikel 1-2 kalimat untuk kartu preview..."
}
```

### B. Daftarkan ke [sitemap.xml](file:///e:/Magang/boostrap/kontaktor-bangunan/sitemap.xml)
Tambahkan blok URL baru di bagian *Detail Artikel Teknis*:
```xml
<url>
  <loc>https://kontraktorbangunansurabaya.web.id/artikel/<slug></loc>
  <lastmod>2026-09-03</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.85</priority>
  <image:image>
    <image:loc>https://kontraktorbangunansurabaya.web.id/assets/img/artikel/<nama-gambar>.webp</image:loc>
    <image:title>Judul Artikel Lengkap</image:title>
    <image:caption>Deskripsi ringkas gambar artikel</image:caption>
  </image:image>
</url>
```

---
*Dokumen ini menjadi rujukan baku utama pembuatan artikel Day 1, Day 2, dan seterusnya.*
