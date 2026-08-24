/* =========================================================
   PT SINERGI KONSTRUKSI UTAMA — MAIN.JS
   Vanilla JS murni — tanpa database, seluruh data dikelola
   melalui array objek agar mudah diedit di kemudian hari.
   ========================================================= */

// 1. DATA PORTOFOLIO (Pengganti Database — GEO & AEO Friendly)
const dataPortofolio = [
    {
        nama: "Pembangunan Rumah Elite Minimalis",
        lokasi: "Klojen, Kota Malang",
        luas: "240 m²",
        status: "Selesai",
        kategori: "bangun",
        tahun: "2025",
        gambar: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=700&auto=format&fit=crop"
    },
    {
        nama: "Renovasi Fasad & Interior Ruko 3 Lantai",
        lokasi: "Lowokwaru, Kota Malang",
        luas: "180 m²",
        status: "Selesai",
        kategori: "renovasi",
        tahun: "2025",
        gambar: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=700&auto=format&fit=crop"
    },
    {
        nama: "Konstruksi Gudang & Pabrik Industri",
        lokasi: "Singosari, Kabupaten Malang",
        luas: "1200 m²",
        status: "Dalam Proses",
        kategori: "komersial",
        tahun: "2026",
        gambar: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=700&auto=format&fit=crop"
    }
];

// 2. DATA KEUNGGULAN PERUSAHAAN ("Mengapa Memilih Kami?")
// Catatan: sesuaikan poin dengan kapabilitas nyata perusahaan.
const dataKeunggulan = [
    { no: "01", judul: "Tenaga Profesional", deskripsi: "Tim berpengalaman yang memahami standar pekerjaan konstruksi sesuai kaidah teknik sipil." },
    { no: "02", judul: "Material Berkualitas", deskripsi: "Menggunakan material yang sesuai dengan kebutuhan dan spesifikasi teknis setiap proyek." },
    { no: "03", judul: "RAB Transparan", deskripsi: "Perhitungan biaya dibuat secara rinci, jelas, dan mudah dipahami sejak awal kontrak." },
    { no: "04", judul: "Quality Control", deskripsi: "Setiap tahap pekerjaan melalui pengawasan dan pemeriksaan mutu secara berkala." },
    { no: "05", judul: "Pengerjaan Terukur", deskripsi: "Timeline dan progres pekerjaan dimonitor secara berkala agar sesuai target." },
    { no: "06", judul: "Garansi Pekerjaan", deskripsi: "Memberikan jaminan tertulis sesuai ketentuan yang disepakati dalam kontrak proyek." }
];

// 3. DATA PROSES KERJA ("Dari Konsultasi hingga Serah Terima")
const dataProses = [
    { no: "01", judul: "Konsultasi", deskripsi: "Diskusi kebutuhan awal dan kebutuhan proyek Anda.", icon: "bi-chat-dots" },
    { no: "02", judul: "Survey & Analisa", deskripsi: "Peninjauan lokasi dan analisa teknis lapangan.", icon: "bi-binoculars" },
    { no: "03", judul: "RAB & Penawaran", deskripsi: "Penyusunan estimasi anggaran biaya secara rinci.", icon: "bi-file-earmark-text" },
    { no: "04", judul: "Kontrak", deskripsi: "Penandatanganan kontrak kerja secara hukum resmi.", icon: "bi-file-earmark-check" },
    { no: "05", judul: "Pelaksanaan", deskripsi: "Proses pengerjaan fisik sesuai jadwal dan gambar kerja.", icon: "bi-tools" },
    { no: "06", judul: "Quality Control", deskripsi: "Pemeriksaan mutu pekerjaan pada setiap tahapan.", icon: "bi-clipboard-check" },
    { no: "07", judul: "Serah Terima", deskripsi: "Penyerahan hasil akhir proyek beserta dokumentasi.", icon: "bi-key" }
];

// 4. DATA TESTIMONIAL
// Catatan: ini adalah data placeholder ilustratif — ganti dengan testimoni
// nyata dari klien setelah tersedia, jangan ditampilkan sebagai fakta final.
const dataTestimoni = [
    { teks: "Proses pengerjaan berjalan sesuai jadwal yang disepakati dan komunikasi dengan tim di lapangan berjalan lancar.", nama: "[Nama Klien]", jabatan: "Pemilik Rumah Tinggal — Malang" },
    { teks: "RAB yang diberikan rinci sehingga memudahkan kami memantau anggaran proyek renovasi ruko dari awal hingga selesai.", nama: "[Nama Klien]", jabatan: "Pemilik Usaha — Ruko Komersial" },
    { teks: "Tim quality control cukup ketat dalam memeriksa setiap tahap pekerjaan struktur sebelum lanjut ke tahap berikutnya.", nama: "[Nama Klien]", jabatan: "Perwakilan Perusahaan — Proyek Gudang" }
];

// 5. DATA AREA LAYANAN — hanya wilayah yang benar-benar dilayani
const dataAreaLayanan = [
    "Kota Malang", "Kabupaten Malang", "Kota Batu", "Blitar", "Kediri", "Pasuruan"
];

// 6. DATA FAQ HALAMAN BERANDA (ringkas, berbeda fokus dari FAQ halaman Kontak)
const dataFaqBeranda = [
    { q: "Apa saja jenis proyek yang dikerjakan?", a: "Kami menangani pembangunan rumah baru, renovasi total maupun parsial, gedung dan bangunan komersial, hingga pekerjaan struktur dan sipil sesuai kebutuhan klien." },
    { q: "Apakah bisa dibuatkan desain dan RAB terlebih dahulu?", a: "Bisa. Kami menyediakan layanan penyusunan desain arsitektur dan Rencana Anggaran Biaya (RAB) sebelum proses kontrak dan pelaksanaan dimulai." },
    { q: "Berapa lama estimasi waktu pengerjaan proyek?", a: "Durasi pengerjaan bergantung pada skala dan kompleksitas proyek, dan akan disampaikan secara tertulis pada tahap penawaran setelah survey lokasi." },
    { q: "Apakah melayani proyek dari perusahaan atau instansi?", a: "Ya. Selain klien perorangan, kami juga melayani kebutuhan konstruksi dari perusahaan, developer, dan instansi untuk proyek komersial." },
    { q: "Apakah tim melakukan survey lokasi sebelum penawaran?", a: "Ya, survey dan analisa lapangan dilakukan terlebih dahulu agar RAB dan penawaran yang diberikan sesuai dengan kondisi riil di lokasi proyek." }
];

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- RENDER PORTOFOLIO (Halaman Portofolio Penuh) ---------- */
    const gridPortofolio = document.getElementById("portfolio-grid");
    if (gridPortofolio) {
        renderProyek(dataPortofolio);
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
                    <div class="area-chip"><i class="bi bi-geo-alt-fill"></i>${kota}</div>
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

            const hasilBox = document.getElementById("hasilKalkulator");
            document.getElementById("txtHargaMeter").innerText = "Rp " + hargaPerMeter.toLocaleString("id-ID") + " / m²";
            document.getElementById("txtTotalBiaya").innerText = "Rp " + totalBiaya.toLocaleString("id-ID");
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

            const nomorWA = "6281234567890"; // Ganti nomor WhatsApp admin di sini
            const templatePesan = `Halo PT Sinergi Konstruksi Utama, saya ingin mengajukan konsultasi proyek:%0A%0A` +
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
    gridPortofolio.innerHTML = "";
    proyekArray.forEach(proyek => {
        const badgeColor = proyek.status === "Selesai" ? "bg-success" : "bg-warning text-dark";
        gridPortofolio.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm hover-lift overflow-hidden">
                    <img src="${proyek.gambar}" class="card-img-top" alt="${proyek.nama}" style="height: 230px; object-fit: cover;" loading="lazy">
                    <div class="card-body p-4">
                        <span class="badge ${badgeColor} mb-2">${proyek.status}</span>
                        <h5 class="card-title text-navy mb-3">${proyek.nama}</h5>
                        <p class="card-text text-muted small mb-1"><i class="bi bi-geo-alt me-2 text-warning"></i>${proyek.lokasi}</p>
                        <p class="card-text text-muted small"><i class="bi bi-rulers me-2 text-warning"></i>Luas: ${proyek.luas}</p>
                    </div>
                </div>
            </div>
        `;
    });
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

function filterPortofolio(kategori) {
    if (kategori === 'semua') {
        renderProyek(dataPortofolio);
    } else {
        const filtered = dataPortofolio.filter(p => p.kategori === kategori);
        renderProyek(filtered);
    }
}
