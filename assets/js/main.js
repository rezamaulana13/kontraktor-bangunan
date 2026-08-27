/* =========================================================
   PT SINERGI KONSTRUKSI UTAMA — MAIN.JS
   Vanilla JS murni — tanpa database, seluruh data dikelola
   melalui array objek agar mudah diedit di kemudian hari.
   ========================================================= */

// 1. DATA PORTOFOLIO (Pengganti Database — GEO & AEO Friendly Surabaya)
// Catatan: deskripsi & durasi bersifat ilustratif — sesuaikan dengan data proyek riil.
const dataPortofolio = [
    {
        nama: "Pembangunan Rumah Tinggal Modern Tropis",
        lokasi: "Surabaya Barat",
        luas: "240 m²",
        durasi: "6 Bulan",
        status: "Selesai",
        kategori: "bangun",
        kategoriLabel: "Bangun Baru",
        tahun: "2025",
        layanan: "Bangun Rumah Baru",
        deskripsi: "Pembangunan hunian 2 lantai di kawasan Surabaya Barat dari pondasi cakar ayam hingga serah terima kunci. Mengusung konsep sirkulasi udara optimal, pencahayaan alami maksimal, dan struktur beton SNI bertulang tahan gempa.",
        gambar: "assets/img/portofolio/Pembangunan-Rumah-Tinggal-Modern-Tropis.webp"
    },
    {
        nama: "Renovasi Fasad & Interior Ruko 3 Lantai",
        lokasi: "Rungkut, Surabaya",
        luas: "180 m²",
        durasi: "3.5 Bulan",
        status: "Selesai",
        kategori: "renovasi",
        kategoriLabel: "Renovasi",
        tahun: "2025",
        layanan: "Renovasi Bangunan",
        deskripsi: "Peremajaan total fasad ruko komersial di kawasan Surabaya Timur dengan ACP dan curtain wall kaca, penataan interior kantor lantai 1 & 2, serta perbaikan sistem waterproofing dak atap.",
        gambar: "assets/img/portofolio/Renovasi-Fasad-&-Interior-Ruko-3-Lantai.webp"
    },
    {
        nama: "Pembangunan Villa Mewah & Kolam Renang",
        lokasi: "Surabaya & Sekitarnya",
        luas: "360 m²",
        durasi: "8 Bulan",
        status: "Selesai",
        kategori: "bangun",
        kategoriLabel: "Bangun Baru",
        tahun: "2025",
        layanan: "Bangun Rumah Baru",
        deskripsi: "Konstruksi hunian villa resort kontemporer dengan infinity pool, struktur dinding penahan tanah yang kokoh, serta aksen finishing batu alam andesit dan material premium.",
        gambar: "assets/img/portofolio/Pembangunan-Villa-Mewah-&-Kolam-Renang.webp"
    },
    {
        nama: "Konstruksi Gudang & Pabrik Industri",
        lokasi: "Kawasan Industri Surabaya - Gresik",
        luas: "1.200 m²",
        durasi: "10 Bulan (Berjalan)",
        status: "Dalam Proses",
        kategori: "komersial",
        kategoriLabel: "Komersial",
        tahun: "2026",
        layanan: "Gedung & Komersial",
        deskripsi: "Pembangunan fasilitas pergudangan logistik dengan rangka baja WF bentang lebar 24 meter, lantai cor beton trowel hardener heavy duty, dan saluran drainase kawasan terpadu.",
        gambar: "assets/img/portofolio/Konstruksi-Gudang-&-Pabrik-Industri.webp"
    },
    {
        nama: "Renovasi Total & Tambah Lantai 2 Hunian",
        lokasi: "Dukuh Pakis, Surabaya",
        luas: "160 m²",
        durasi: "4 Bulan",
        status: "Selesai",
        kategori: "renovasi",
        kategoriLabel: "Renovasi",
        tahun: "2025",
        layanan: "Renovasi Bangunan",
        deskripsi: "Pekerjaan suntik pondasi cakar ayam, pengecoran dak beton lantai 2, penambahan 3 kamar tidur baru, penggantian rangka atap baja ringan, dan instalasi kelistrikan MEP baru di Surabaya.",
        gambar: "assets/img/portofolio/Renovasi-Total-&-Tambah-Lantai-2-Hunian.webp"
    },
    {
        nama: "Showroom Komersial & Kantor 2 Lantai",
        lokasi: "Gubeng, Surabaya",
        luas: "320 m²",
        durasi: "5 Bulan",
        status: "Selesai",
        kategori: "komersial",
        kategoriLabel: "Komersial",
        tahun: "2026",
        layanan: "Gedung & Komersial",
        deskripsi: "Pembangunan gedung showroom dua lantai bertema industrial modern di Surabaya Pusat dengan lantai granit 80x80, partisi kaca tempered, pintu otomatis, dan instalasi spotlight track lighting.",
        gambar: "assets/img/portofolio/Showroom-Komersial-&-Kantor-2-Lantai.webp"
    }
];

// 2. DATA KEUNGGULAN PERUSAHAAN ("Mengapa Memilih Kami?")
// Catatan: sesuaikan poin dengan kapabilitas nyata perusahaan.
const dataKeunggulan = [
    { no: "01", judul: "Tenaga Profesional", deskripsi: "Tim kontraktor berpengalaman di Surabaya yang memahami standar konstruksi teknik sipil SNI." },
    { no: "02", judul: "Material Berkualitas", deskripsi: "Menggunakan material pilihan bersertifikasi SNI sesuai kebutuhan dan spesifikasi teknis proyek." },
    { no: "03", judul: "RAB Transparan", deskripsi: "Perhitungan estimasi biaya dibuat terperinci, jelas, dan mengikat tanpa biaya tersembunyi." },
    { no: "04", judul: "Quality Control Ketat", deskripsi: "Pengawasan berkala oleh tim ahli sipil di setiap tahapan struktur hingga finishing." },
    { no: "05", judul: "Pengerjaan Tepat Waktu", deskripsi: "Timeline kurva-S termonitor ketat guna memastikan serah terima kunci tepat jadwal." },
    { no: "06", judul: "Garansi Struktur Resmi", deskripsi: "Memberikan jaminan sertifikat garansi pemeliharaan dan struktur bangunan resmi." }
];

// 3. DATA PROSES KERJA ("Dari Konsultasi hingga Serah Terima")
const dataProses = [
    { no: "01", judul: "Konsultasi", deskripsi: "Diskusi kebutuhan proyek bangunan Anda di Surabaya.", icon: "bi-chat-dots" },
    { no: "02", judul: "Survey & Analisa", deskripsi: "Peninjauan lokasi dan analisa teknis lapangan gratis.", icon: "bi-binoculars" },
    { no: "03", judul: "RAB & Penawaran", deskripsi: "Penyusunan estimasi anggaran biaya secara rinci.", icon: "bi-file-earmark-text" },
    { no: "04", judul: "Kontrak Resmi", deskripsi: "Penandatanganan SPK kerja berbadan hukum resmi.", icon: "bi-file-earmark-check" },
    { no: "05", judul: "Pelaksanaan Fisik", deskripsi: "Pengerjaan konstruksi sesuai jadwal dan gambar kerja 3D.", icon: "bi-tools" },
    { no: "06", judul: "Quality Control", deskripsi: "Pemeriksaan mutu pekerjaan pada setiap tahapan.", icon: "bi-clipboard-check" },
    { no: "07", judul: "Serah Terima Kunci", deskripsi: "Penyerahan hasil akhir proyek beserta garansi tertulis.", icon: "bi-key" }
];

// 4. DATA TESTIMONIAL
// Catatan: data testimoni klien di wilayah Surabaya & sekitarnya
const dataTestimoni = [
    { teks: "Pembangunan rumah 2 lantai kami di Surabaya Barat berjalan tepat waktu dengan struktur yang kokoh dan laporan berkala yang transparan.", nama: "Bpk. Hendra S.", jabatan: "Pemilik Rumah Tinggal — Surabaya Barat" },
    { teks: "RAB renovasi ruko komersial sangat rinci, tidak ada biaya siluman di tengah jalan. Hasil finishing interiornya sangat memuaskan.", nama: "Ibu Ratna Dewi", jabatan: "Pemilik Usaha — Ruko Surabaya Timur" },
    { teks: "Tim pengawas teknik sipil sangat profesional dan teliti dalam uji mutu beton serta pengelasan rangka baja gedung gudang kami.", nama: "Bpk. Michael T.", jabatan: "Perwakilan Perusahaan — Proyek Pergudangan Surabaya" }
];

// 5. DATA AREA LAYANAN — Fokus Surabaya (6 Wilayah)
const dataAreaLayanan = [
    "Surabaya Barat", "Surabaya Pusat", "Surabaya Timur", "Surabaya Selatan", "Surabaya Utara", "Surabaya Raya"
];

// 6. DATA FAQ HALAMAN BERANDA (Fokus Layanan Kontraktor Surabaya)
const dataFaqBeranda = [
    { q: "Apa saja jenis proyek yang dikerjakan oleh Kontraktor Bangunan Surabaya?", a: "Kami menangani jasa bangun rumah baru, renovasi hunian total maupun parsial, ruko komersial, gudang industri, hingga desain arsitektur 3D DED dan RAB di seluruh wilayah Surabaya dan sekitarnya." },
    { q: "Apakah survey lokasi dan konsultasi awal di Surabaya dikenakan biaya?", a: "Tidak. Kami memberikan layanan konsultasi teknis dan survey pengukuran lokasi secara GRATIS untuk seluruh area Kota Surabaya, Sidoarjo, dan Gresik." },
    { q: "Apakah bisa dibuatkan desain gambar kerja 3D dan RAB terlebih dahulu?", a: "Tentu bisa. Kami menyediakan paket desain arsitektur, gambar DED 3D, kelengkapan berkas izin PBG, dan perhitungan RAB terperinci sebelum kontrak pelaksanaan dimulai." },
    { q: "Berapa lama estimasi waktu pengerjaan proyek konstruksi?", a: "Durasi pengerjaan disesuaikan dengan skala proyek (rata-rata 4-8 bulan untuk hunian standar hingga 2 lantai) dan dicantumkan secara mengikat dalam jadwal kurva-S kontrak kerja." },
    { q: "Apakah hasil pekerjaan konstruksi mendapatkan garansi resmi?", a: "Ya. Setiap proyek pembangunan baru dan renovasi dilindungi dengan Sertifikat Garansi Struktur resmi dan masa pemeliharaan retensi pasca serah terima kunci." }
];

// 7. DATA ARTIKEL (Pengganti Database — render dinamis di artikel.html)
const dataArtikel = [
    {
        judul: "Cara Menilai Kualitas Campuran Beton Cor Mutu K-300 di Lapangan",
        kategori: "sipil-dasar",
        kategoriLabel: "Sipil Dasar",
        tanggal: "12 Jan 2026",
        waktuBaca: "4 Menit",
        url: "artikel/cara-menilai-kualitas-beton-k-300.html",
        gambar: "assets/img/artikel/Cara-Menilai-Kualitas-Campuran-Beton-Cor-Mutu-K-300-di-Lapangan.webp",
        ringkasan: "Panduan teknis lapangan untuk menguji kualitas beton cor mutu K-300: uji slump cone, rasio air-semen, silinder uji lab, dan proses curing hidrasi beton."
    },
    {
        judul: "Strategi Menyusun RAB Rumah Agar Terhindar Dari Pembengkakan",
        kategori: "manajemen",
        kategoriLabel: "Manajemen",
        tanggal: "28 Jan 2026",
        waktuBaca: "5 Menit",
        url: "artikel/strategi-menyusun-rab-bangunan.html",
        gambar: "assets/img/artikel/Strategi-Menyusun-RAB-Rumah-Agar-Terhindar-Dari-Pembengkakan.webp",
        ringkasan: "Langkah runtut mengunci volume material bangunan sipil utama, pemisahan WBS, alokasi pos kontingensi 5-10%, dan kontrak kerja SPK mengikat."
    },
    {
        judul: "Panduan Lengkap Mengurus Izin PBG Bangunan Gedung",
        kategori: "legalitas",
        kategoriLabel: "Legalitas",
        tanggal: "19 Feb 2026",
        waktuBaca: "4 Menit",
        url: "artikel/panduan-mengurus-izin-pbg-bangunan.html",
        gambar: "assets/img/artikel/Panduan-Lengkap-Mengurus-Izin-PBG-Bangunan-Gedung.webp",
        ringkasan: "Memahami alur perizinan Persetujuan Bangunan Gedung (PBG) pengganti IMB melalui portal resmi SIMBG Kementerian PUPR agar pembangunan legal dan aman."
    }
];

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- RENDER PORTOFOLIO (Halaman Portofolio Penuh) ---------- */
    const gridPortofolio = document.getElementById("portfolio-grid");
    if (gridPortofolio) {
        // Cek apakah ada parameter kategori di URL (dikirim dari link Halaman Layanan)
        const paramKategori = new URLSearchParams(window.location.search).get("kategori");
        if (paramKategori && ["bangun", "renovasi", "komersial"].includes(paramKategori)) {
            filterPortofolio(paramKategori);
        } else {
            renderProyek(dataPortofolio);
        }
    }

    /* ---------- RENDER ARTIKEL (Halaman Blog Penuh) ---------- */
    const gridArtikel = document.getElementById("blog-grid");
    if (gridArtikel) {
        renderArtikel(dataArtikel);
    }

    /* ---------- RENDER PORTOFOLIO UNGGULAN (Beranda) ---------- */
    const gridPortofolioHome = document.getElementById("portfolio-grid-home");
    if (gridPortofolioHome) {
        renderProyekUnggulan(dataPortofolio.slice(0, 3));
    }

    /* ---------- RENDER KEUNGGULAN (Beranda) ---------- */
    const gridKeunggulan = document.getElementById("keunggulan-grid");
    if (gridKeunggulan) {
        dataKeunggulan.forEach(item => {
            gridKeunggulan.innerHTML += `
                <div class="col-md-6 col-lg-4 reveal">
                    <div class="advantage-item">
                        <div class="advantage-number">${item.no}</div>
                        <h3 class="h6 text-navy mb-2">${item.judul}</h3>
                        <p class="text-muted-navy small mb-0">${item.deskripsi}</p>
                    </div>
                </div>`;
        });
    }

    /* ---------- RENDER PROSES KERJA (Beranda) ---------- */
    const trackProses = document.getElementById("process-track");
    if (trackProses) {
        dataProses.forEach(step => {
            trackProses.innerHTML += `
                <div class="process-step">
                    <div class="process-marker">${step.no}</div>
                    <h3 class="h6 text-navy">${step.judul}</h3>
                    <p>${step.deskripsi}</p>
                </div>`;
        });
    }

    /* ---------- RENDER TESTIMONIAL (Beranda) ---------- */
    const carouselInner = document.getElementById("testimonial-inner");
    if (carouselInner) {
        // Kelompokkan 1 testimoni per slide pada mobile, tampilkan sebagai grid pada desktop via CSS d-md-flex
        dataTestimoni.forEach((t, idx) => {
            carouselInner.innerHTML += `
                <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="testimonial-card mx-auto">
                                <i class="bi bi-quote testimonial-quote-icon"></i>
                                <p class="mb-4">${t.teks}</p>
                                <div class="testimonial-name">${t.nama}</div>
                                <div class="testimonial-role">${t.jabatan}</div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    }

    /* ---------- RENDER AREA LAYANAN (Beranda) ---------- */
    const gridArea = document.getElementById("area-grid");
    if (gridArea) {
        dataAreaLayanan.forEach(kota => {
            gridArea.innerHTML += `
                <div class="col-6 col-md-4 col-lg-2 reveal">
                    <div class="area-chip"><i class="bi bi-geo-alt-fill"></i><span>${kota}</span></div>
                </div>`;
        });
    }

    /* ---------- RENDER FAQ BERANDA ---------- */
    const faqHome = document.getElementById("faqBerandaAccordion");
    if (faqHome) {
        dataFaqBeranda.forEach((item, idx) => {
            const id = `faqBeranda${idx}`;
            faqHome.innerHTML += `
                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${id}" aria-expanded="false" aria-controls="${id}">
                            ${item.q}
                        </button>
                    </h3>
                    <div id="${id}" class="accordion-collapse collapse" data-bs-parent="#faqBerandaAccordion">
                        <div class="accordion-body">${item.a}</div>
                    </div>
                </div>`;
        });
    }

    /* ---------- NAVBAR: efek scroll ---------- */
    const navbarEl = document.querySelector(".navbar");
    if (navbarEl) {
        const toggleNavbarShadow = () => {
            if (window.scrollY > 40) {
                navbarEl.classList.add("navbar-scrolled");
            } else {
                navbarEl.classList.remove("navbar-scrolled");
            }
        };
        toggleNavbarShadow();
        window.addEventListener("scroll", toggleNavbarShadow);
    }

    /* ---------- ROLLBACK / SCROLL TO TOP ---------- */
    const btnScrollTop = document.getElementById("btnScrollTop");
    if (btnScrollTop) {
        const toggleScrollTopBtn = () => {
            if (window.scrollY > 300) {
                btnScrollTop.classList.add("is-visible");
            } else {
                btnScrollTop.classList.remove("is-visible");
            }
        };
        toggleScrollTopBtn();
        window.addEventListener("scroll", toggleScrollTopBtn, { passive: true });

        btnScrollTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* ---------- COUNTER ANIMASI STATISTIK ---------- */
    const counters = document.querySelectorAll(".counter");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (counters.length) {
        const runCounter = (el) => {
            const target = parseFloat(el.dataset.target);
            const suffix = el.dataset.suffix || "";
            if (reduceMotion) {
                el.textContent = target + suffix;
                return;
            }
            let start = 0;
            const duration = 1400;
            const startTime = performance.now();
            const step = (now) => {
                const progress = Math.min((now - startTime) / duration, 1);
                const value = Math.floor(progress * target);
                el.textContent = value + suffix;
                if (progress < 1) requestAnimationFrame(step);
                else el.textContent = target + suffix;
            };
            requestAnimationFrame(step);
        };
        const counterObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounter(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        counters.forEach(c => counterObserver.observe(c));
    }

    /* ---------- REVEAL ON SCROLL ---------- */
    const revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length) {
        if (reduceMotion) {
            revealEls.forEach(el => el.classList.add("is-visible"));
        } else {
            const revealObserver = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            revealEls.forEach(el => revealObserver.observe(el));
        }
    }

    /* ---------- KALKULATOR ESTIMASI BIAYA (Tanpa Database) ---------- */
    const formKalkulator = document.getElementById("kalkulatorForm");
    if (formKalkulator) {
        formKalkulator.addEventListener("submit", function (e) {
            e.preventDefault();
            const tipe = document.getElementById("tipeBangunan").value;
            const luas = parseFloat(document.getElementById("luasBangunan").value);

            let hargaPerMeter = 0;
            if (tipe === "standar") hargaPerMeter = 4500000;
            else if (tipe === "mewah") hargaPerMeter = 7000000;
            else if (tipe === "ruko") hargaPerMeter = 5500000;

            const totalBiaya = hargaPerMeter * luas;

            let namaTipe = "Rumah Hunian Standar";
            if (tipe === "mewah") namaTipe = "Rumah Hunian Mewah";
            else if (tipe === "ruko") namaTipe = "Ruko / Bangunan Komersial";

            const hasilBox = document.getElementById("hasilKalkulator");
            document.getElementById("txtHargaMeter").innerText = "Rp " + hargaPerMeter.toLocaleString("id-ID") + " / m²";
            document.getElementById("txtTotalBiaya").innerText = "Rp " + totalBiaya.toLocaleString("id-ID");

            const waBtn = hasilBox.querySelector("a");
            if (waBtn) {
                const pesan = `Halo Kontraktor Bangunan, saya telah menghitung estimasi biaya di website:%0A%0A` +
                              `*Tipe Bangunan:* ${encodeURIComponent(namaTipe)}%0A` +
                              `*Luas Bangunan:* ${luas} m²%0A` +
                              `*Harga Per Meter:* Rp ${hargaPerMeter.toLocaleString("id-ID")}%0A` +
                              `*Taksiran Total:* Rp ${totalBiaya.toLocaleString("id-ID")}%0A%0A` +
                              `Mohon info ketersediaan jadwal survey dan konsultasi RAB detail.`;
                waBtn.href = `https://wa.me/6288989643555?text=${pesan}`;
            }

            hasilBox.classList.remove("d-none");
        });
    }

    /* ---------- FORM KONTAK -> WHATSAPP ---------- */
    const formKontak = document.getElementById("kontakForm");
    if (formKontak) {
        formKontak.addEventListener("submit", function (e) {
            e.preventDefault();
            const nama = document.getElementById("namaKlien").value;
            const lokasi = document.getElementById("lokasiProyek").value;
            const layanan = document.getElementById("jenisLayanan").value;
            const detail = document.getElementById("detailProyek").value;

            const nomorWA = "6288989643555"; // WhatsApp admin Kontraktor Bangunan
            const templatePesan = `Halo Kontraktor Bangunan, saya ingin mengajukan konsultasi proyek:%0A%0A` +
                                  `*Nama Klien:* ${encodeURIComponent(nama)}%0A` +
                                  `*Lokasi Proyek:* ${encodeURIComponent(lokasi)}%0A` +
                                  `*Jenis Layanan:* ${encodeURIComponent(layanan)}%0A` +
                                  `*Detail Kebutuhan:* ${encodeURIComponent(detail)}`;

            window.open(`https://wa.me/${nomorWA}?text=${templatePesan}`, '_blank');
        });
    }
});

/* ---------- RENDER PORTOFOLIO (Grid Penuh + Filter) ---------- */
function renderProyek(proyekArray) {
    const gridPortofolio = document.getElementById("portfolio-grid");
    if (!gridPortofolio) return;
    gridPortofolio.innerHTML = "";

    if (proyekArray.length === 0) {
        gridPortofolio.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-inboxes display-4 text-muted d-block mb-3"></i>
                <p class="text-muted mb-0">Belum ada proyek pada kategori ini.</p>
            </div>`;
        return;
    }

    proyekArray.forEach(proyek => {
        const badgeColor = proyek.status === "Selesai" ? "bg-success" : "bg-warning text-dark";
        const idxAsli = dataPortofolio.indexOf(proyek);
        gridPortofolio.innerHTML += `
            <div class="col-md-6 col-lg-4 reveal is-visible">
                <div class="card h-100 border-0 shadow-sm hover-lift overflow-hidden bg-white d-flex flex-column">
                    <div class="position-relative">
                        <img src="${proyek.gambar}" alt="${proyek.nama}" style="height: 220px; width: 100%; object-fit: cover;" loading="lazy">
                        <span class="badge ${badgeColor} position-absolute top-0 start-0 m-3 px-3 py-2 text-uppercase fw-bold">${proyek.status}</span>
                        <span class="badge bg-navy text-accent position-absolute top-0 end-0 m-3 px-3 py-2 text-uppercase fw-bold">${proyek.kategoriLabel || 'Proyek'}</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <h3 class="h5 text-navy fw-bold mb-2">${proyek.nama}</h3>
                        <div class="d-flex flex-wrap gap-3 small text-muted-navy mb-3">
                            <span><i class="bi bi-geo-alt-fill text-warning me-1"></i>${proyek.lokasi}</span>
                            <span><i class="bi bi-rulers text-warning me-1"></i>${proyek.luas}</span>
                        </div>
                        <p class="text-muted-navy small mb-4 flex-grow-1">${proyek.deskripsi}</p>
                        <div class="mt-auto pt-3 border-top d-flex flex-column flex-sm-row gap-2">
                            <button onclick="lihatDetailProyek(${idxAsli})" class="btn btn-outline-navy btn-sm w-100 flex-sm-fill fw-bold text-uppercase py-2">
                                <i class="bi bi-eye me-1"></i>Detail
                            </button>
                            <a href="https://wa.me/6288989643555?text=Halo%20Kontraktor%20Bangunan%2C%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(proyek.nama)}." target="_blank" rel="noopener" class="btn btn-accent btn-sm w-100 flex-sm-fill fw-bold text-uppercase py-2 text-center">
                                <i class="bi bi-whatsapp me-1"></i>Tanya WA
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

/* ---------- MODAL DETAIL PROYEK ---------- */
function lihatDetailProyek(index) {
    const proyek = dataPortofolio[index];
    if (!proyek) return;

    const badgeColor = proyek.status === "Selesai" ? "bg-success" : "bg-warning text-dark";
    const pesanWA = `Halo Kontraktor Bangunan, saya tertarik dengan portofolio "${proyek.nama}" (${proyek.lokasi}) dan ingin berkonsultasi untuk proyek serupa.`;

    document.getElementById("modalDetailProyekLabel").innerText = proyek.nama;
    document.getElementById("modalDetailProyekBody").innerHTML = `
        <div class="position-relative mb-3">
            <img src="${proyek.gambar}" alt="${proyek.nama}" class="w-100" style="max-height: 380px; object-fit: cover;">
            <span class="badge ${badgeColor} position-absolute top-0 end-0 m-3 px-3 py-2 text-uppercase fw-bold">${proyek.status}</span>
        </div>
        <div class="row g-2 mb-3 small bg-light p-3 border">
            <div class="col-6 col-sm-4"><strong><i class="bi bi-geo-alt-fill text-warning me-1"></i>Lokasi:</strong><div class="text-navy">${proyek.lokasi}</div></div>
            <div class="col-6 col-sm-4"><strong><i class="bi bi-rulers text-warning me-1"></i>Luas:</strong><div class="text-navy">${proyek.luas}</div></div>
            <div class="col-6 col-sm-4"><strong><i class="bi bi-clock-history text-warning me-1"></i>Durasi:</strong><div class="text-navy">${proyek.durasi}</div></div>
            <div class="col-6 col-sm-4"><strong><i class="bi bi-bricks text-warning me-1"></i>Layanan:</strong><div class="text-navy">${proyek.layanan}</div></div>
            <div class="col-6 col-sm-4"><strong><i class="bi bi-calendar3 text-warning me-1"></i>Tahun:</strong><div class="text-navy">${proyek.tahun}</div></div>
            <div class="col-6 col-sm-4"><strong><i class="bi bi-patch-check-fill text-warning me-1"></i>Kualitas:</strong><div class="text-navy">Standar SNI</div></div>
        </div>
        <h6 class="fw-bold text-navy mb-2">Deskripsi Pelaksanaan:</h6>
        <p class="text-muted-navy small mb-4">${proyek.deskripsi}</p>
        <a href="https://wa.me/6288989643555?text=${encodeURIComponent(pesanWA)}" target="_blank" rel="noopener" class="btn btn-accent w-100 py-3 text-uppercase fw-bold">
            <i class="bi bi-whatsapp me-2"></i>Konsultasikan Proyek Serupa via WhatsApp
        </a>
    `;

    const modalEl = document.getElementById("modalDetailProyek");
    if (modalEl && window.bootstrap) {
        new bootstrap.Modal(modalEl).show();
    }
}

/* ---------- RENDER ARTIKEL (Grid Penuh + Filter) ---------- */
function renderArtikel(artikelArray) {
    const gridArtikel = document.getElementById("blog-grid");
    if (!gridArtikel) return;
    gridArtikel.innerHTML = "";

    if (artikelArray.length === 0) {
        gridArtikel.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-inboxes display-4 text-muted d-block mb-3"></i>
                <p class="text-muted mb-0">Belum ada artikel pada kategori ini.</p>
            </div>`;
        return;
    }

    artikelArray.forEach(artikel => {
        gridArtikel.innerHTML += `
            <div class="col-md-6 col-lg-4 reveal is-visible">
                <div class="card h-100 border-0 shadow-sm hover-lift overflow-hidden bg-white d-flex flex-column">
                    <a href="${artikel.url}" class="d-block overflow-hidden position-relative">
                        <img src="${artikel.gambar}" class="card-img-top" alt="${artikel.judul}" style="height:210px;object-fit:cover;" loading="lazy">
                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-3 px-3 py-2 text-uppercase fw-bold">${artikel.kategoriLabel}</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <div class="d-flex align-items-center gap-3 small text-muted-navy mb-2" style="font-size: 0.78rem;">
                            <span><i class="bi bi-calendar3 text-warning me-1"></i>${artikel.tanggal}</span>
                            <span><i class="bi bi-clock text-warning me-1"></i>${artikel.waktuBaca}</span>
                        </div>
                        <h3 class="h5 text-navy fw-bold mb-2" style="line-height: 1.35;">
                            <a href="${artikel.url}" class="text-navy text-decoration-none hover-yellow">${artikel.judul}</a>
                        </h3>
                        <p class="text-muted-navy small mb-4 flex-grow-1">${artikel.ringkasan}</p>
                        <div class="mt-auto pt-3 border-top">
                            <a href="${artikel.url}" class="btn btn-outline-navy btn-sm w-100 py-2 fw-bold text-uppercase text-center">
                                Baca Selengkapnya <i class="bi bi-arrow-right ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

/* ---------- MODAL BACA ARTIKEL ---------- */
function bacaArtikel(index) {
    const artikel = dataArtikel[index];
    if (!artikel) return;

    const paragraf = artikel.isi.map(p => `<p class="text-muted-navy">${p}</p>`).join("");

    document.getElementById("modalArtikelLabel").innerText = artikel.judul;
    document.getElementById("modalArtikelBody").innerHTML = `
        <img src="${artikel.gambar}" alt="${artikel.judul}">
        <div class="blog-meta mb-4">
            <span class="text-warning fw-bold text-uppercase">${artikel.kategoriLabel}</span>
            <span><i class="bi bi-calendar3"></i>${artikel.tanggal}</span>
            <span><i class="bi bi-clock-history"></i>${artikel.waktuBaca} Baca</span>
        </div>
        ${paragraf}
        <a href="kontak.html" class="btn btn-accent w-100 py-2 text-uppercase mt-3">
            <i class="bi bi-chat-dots me-2"></i>Konsultasikan Kebutuhan Proyek Anda
        </a>
    `;

    const modalEl = document.getElementById("modalArtikel");
    if (modalEl && window.bootstrap) {
        new bootstrap.Modal(modalEl).show();
    }
}

/* ---------- FILTER ARTIKEL BERDASARKAN KATEGORI ---------- */
function filterArtikel(kategori, btnEl) {
    document.querySelectorAll(".btn-filter-artikel").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");

    if (kategori === "semua") {
        renderArtikel(dataArtikel);
    } else {
        renderArtikel(dataArtikel.filter(a => a.kategori === kategori));
    }
}

/* ---------- RENDER PORTOFOLIO UNGGULAN (Beranda — versi visual besar) ---------- */
function renderProyekUnggulan(proyekArray) {
    const grid = document.getElementById("portfolio-grid-home");
    grid.innerHTML = "";
    proyekArray.forEach(proyek => {
        const badgeColor = proyek.status === "Selesai" ? "bg-success" : "bg-warning text-dark";
        grid.innerHTML += `
            <div class="col-md-4 reveal">
                <a href="portofolio.html" class="text-decoration-none">
                    <div class="portfolio-card hover-lift">
                        <img src="${proyek.gambar}" alt="${proyek.nama}" loading="lazy">
                        <div class="portfolio-caption">
                            <span class="badge ${badgeColor} badge-status mb-2">${proyek.status}</span>
                            <h3 class="h6 text-white mb-1">${proyek.nama}</h3>
                            <p class="small text-white-50 mb-0"><i class="bi bi-geo-alt me-1"></i>${proyek.lokasi} · ${proyek.luas}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
    });
}

function filterPortofolio(kategori, btnEl) {
    // Toggle status aktif tombol filter
    document.querySelectorAll(".btn-filter-portofolio").forEach(b => b.classList.remove("active"));
    if (btnEl) {
        btnEl.classList.add("active");
    } else {
        const target = document.querySelector(`.btn-filter-portofolio[data-kategori="${kategori}"]`);
        if (target) target.classList.add("active");
    }

    if (kategori === 'semua') {
        renderProyek(dataPortofolio);
    } else {
        const filtered = dataPortofolio.filter(p => p.kategori === kategori);
        renderProyek(filtered);
    }
}
