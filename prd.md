
PRODUCT REQUIREMENTS DOCUMENT
MicroDrama TV (MD TV)
Platform Streaming Drama Vertikal Berbasis Episode (Short Drama App)
Disusun berdasarkan analisis prototype MVP "MicroDrama TV" (drama_fuad.html)
Atribut	Detail
Nama Produk	MicroDrama TV (MD TV)
Jenis Dokumen	Product Requirements Document (PRD)
Versi	1.1
Tanggal	18 Juli 2026 (revisi: penambahan spesifikasi Dashboard Admin/CMS)
Status	Draft untuk Review
Sumber	Reverse-engineered dari prototype HTML/JS (frontend-only, mock data)
Kategori Produk	Vertical Short Drama / Micro-Drama Streaming App (mirip ReelShort, DramaBox, NetShort)
 
1. Ringkasan Eksekutif
MicroDrama TV (MD TV) adalah aplikasi streaming "micro-drama" atau "short drama" vertikal — konten drama serial berdurasi pendek (1-3 menit per episode) yang dikonsumsi dalam format video 9:16, mengikuti tren global yang dipopulerkan aplikasi seperti ReelShort, DramaBox, dan NetShort. Produk ini menyasar pasar Indonesia dengan konten drama ber-genre miliarder, romantis, dan balas dendam yang di-dubbing/disulihsuarakan ke Bahasa Indonesia.
Model bisnis utama adalah freemium dengan mekanisme "coinless paywall": setiap drama menyediakan 1-2 episode pertama gratis, episode selanjutnya dikunci dan dapat dibuka dengan (a) menonton iklan video sisipan, atau (b) berlangganan paket VIP untuk akses penuh tanpa iklan ke seluruh katalog. Pembayaran VIP mendukung metode lokal Indonesia: QRIS, DANA, dan Virtual Account bank.
Dokumen ini disusun berdasarkan analisis menyeluruh terhadap prototype front-end (HTML/Tailwind/JavaScript) yang telah dibangun, mencakup seluruh alur pengguna, komponen UI, dan logika bisnis yang telah disimulasikan di sisi klien. Prototype saat ini menggunakan data drama statis (mock data) dan pembayaran simulasi (sandbox palsu) — dokumen ini mendefinisikan kebutuhan produk secara lengkap agar prototype dapat dikembangkan menjadi produk produksi yang solid, aman, dan siap diskalakan.
Dokumen ini ditujukan bagi Product Manager, UI/UX Designer, Engineering Lead (Frontend, Backend, Mobile), QA, dan pemangku kepentingan bisnis (Growth & Monetization) sebagai acuan tunggal kebutuhan produk.
2. Latar Belakang & Peluang Pasar
2.1 Konteks Pasar
•	Tren "micro-drama" / "short drama vertikal" tumbuh pesat secara global sejak 2023–2025, dipelopori aplikasi asal Tiongkok (ReelShort, DramaBox, ShortMax) yang kini merambah pasar Asia Tenggara termasuk Indonesia.
•	Konsumsi video vertikal singkat (format TikTok/Reels) sudah menjadi kebiasaan mayoritas pengguna mobile Indonesia, sehingga adopsi format konten ini relatif rendah friksi.
•	Model monetisasi hybrid (iklan + langganan) terbukti efektif pada kategori ini karena mayoritas pengguna sensitif harga namun bersedia menonton iklan atau membayar nominal kecil (mikro-transaksi) demi kelanjutan cerita.
•	Metode pembayaran lokal (QRIS, e-wallet, VA) adalah keharusan mutlak untuk konversi di pasar Indonesia — kartu kredit bukan metode utama.
2.2 Masalah yang Diselesaikan
•	Pengguna ingin hiburan cerita drama yang padat, adiktif, dan bisa dikonsumsi kapan saja dalam waktu singkat (commuting, jeda kerja), tanpa komitmen menonton serial panjang.
•	Kreator/penerbit konten drama pendek membutuhkan platform distribusi dengan monetisasi yang jelas dan terukur.
2.3 Peluang Bisnis
•	Pendapatan ganda: pendapatan iklan (impresi + reward ad) dan pendapatan langganan berulang (VIP mingguan/bulanan).
•	Potensi retensi tinggi melalui mekanisme cliffhanger per-episode dan sistem misi harian (daily check-in, gamifikasi).
3. Tujuan & Sasaran Produk
3.1 Tujuan Produk
1.	Menyediakan pengalaman menonton drama vertikal yang cepat, mulus, dan adiktif dengan navigasi swipe layaknya media sosial short-video.
2.	Memaksimalkan konversi pengguna gratis menjadi pelanggan VIP berbayar melalui paywall episode yang persuasif namun tidak mengganggu (non-intrusive).
3.	Menyediakan jalur monetisasi alternatif melalui iklan tervalidasi (rewarded video ads) bagi pengguna yang belum ingin membayar.
4.	Membangun kebiasaan harian pengguna melalui gamifikasi (misi harian, check-in, reward bebas iklan sementara).
3.2 Sasaran Terukur (Success Metrics) — Indikatif 6 Bulan Pasca Peluncuran
Metrik	Target Indikatif	Keterangan
DAU/MAU Ratio (Stickiness)	≥ 20%	Mengindikasikan kebiasaan menonton harian
D1 Retention	≥ 35%	Standar industri aplikasi hiburan mobile
D7 Retention	≥ 15%	
Free-to-VIP Conversion Rate	3% – 6%	Dari total pengguna terdaftar aktif bulanan
Rewarded Ad View Rate	≥ 40%	Dari pengguna non-VIP yang menemui paywall
Episode Completion Rate	≥ 60%	Rasio penonton yang menyelesaikan episode yang dimulai
ARPU (Average Revenue per User)	Ditentukan tim Growth	Baseline diukur pasca 3 bulan live
Churn VIP Bulanan	< 15%	
4. Target Pengguna & Persona
4.1 Profil Demografis Utama
•	Perempuan & pria usia 18–40 tahun, mayoritas pengguna aktif media sosial short-video (TikTok, Reels, Shorts).
•	Pengguna mobile-first di Indonesia, terbiasa dengan metode pembayaran digital (QRIS/e-wallet).
•	Penggemar genre drama populer: cinta terlarang, balas dendam, kisah miliarder/CEO, keluarga.
4.2 Persona
Persona	Deskripsi	Kebutuhan Utama	Perilaku Monetisasi
"Rani" – Penonton Kasual	Wanita 24 th, karyawan kantoran, menonton saat commuting/istirahat.	Konten cepat, bisa berhenti kapan saja, tidak ribet.	Menonton iklan untuk buka episode, jarang berlangganan.
"Dimas" – Penggemar Berat (Binge-watcher)	Pria 29 th, suka menyelesaikan cerita dalam sekali duduk.	Akses instan semua episode, bebas iklan.	Kandidat kuat konversi VIP bulanan.
"Sari" – Pemburu Promo	Wanita 31 th, sensitif harga, suka reward/misi.	Cara gratis membuka episode, hadiah harian.	Aktif di tab Hadiah, mengandalkan iklan & check-in.
5. Ruang Lingkup Produk
5.1 Dalam Lingkup (In-Scope) — MVP Produksi
•	Autentikasi pengguna (Google Sign-In / Sign-In With Apple / nomor HP)
•	Katalog drama dengan pencarian dan filter kategori/genre
•	Halaman detail drama (sinopsis, rating, daftar episode)
•	Pemutar video vertikal dengan navigasi swipe antar-episode
•	Sistem paywall episode berbasis coinless (gratis N episode pertama)
•	Rewarded video ads untuk membuka episode terkunci
•	Langganan VIP (mingguan & bulanan) dengan akses penuh tanpa iklan
•	Integrasi payment gateway lokal (QRIS, e-wallet, Virtual Account)
•	Sistem misi harian & gamifikasi (check-in, berbagi, tonton iklan)
•	Riwayat tontonan & daftar favorit pengguna
•	Halaman profil & manajemen akun/langganan
•	Sistem notifikasi dalam-aplikasi (toast) dan (fase selanjutnya) push notification
•	Dashboard Admin (CMS) untuk manajemen konten drama/episode, upload video ke Bunny.net, dan manajemen data rekening pembayaran manual
5.2 Di Luar Lingkup (Out-of-Scope) — Fase 1
•	Fitur sosial: komentar, forum, rating/review publik antar-pengguna
•	Multi-bahasa/multi-subtitle (fase 1 hanya Bahasa Indonesia dubbing)
•	Konten user-generated / upload drama oleh kreator eksternal
•	Fitur unduh video untuk ditonton offline
•	Aplikasi companion Smart TV / Android TV
•	Sistem rekomendasi berbasis machine learning yang kompleks (fase 1 memakai aturan sederhana/manual curation)
 
6. Alur Pengguna Utama (Core User Flows)
Alur	Langkah Utama
Onboarding & Penemuan Konten	Splash screen → Beranda (tanpa wajib login) → cari/filter kategori → buka detail drama
Menonton Episode Gratis	Detail drama → pilih episode gratis → pemutar video → swipe ke episode berikutnya
Terkena Paywall	Swipe ke episode terkunci → overlay paywall muncul → pilih "Tonton Iklan" ATAU "Aktifkan VIP"
Buka via Iklan	Tekan "Tonton 1 Iklan Video" → layar simulasi iklan (durasi berjalan) → episode +1/+2 otomatis terbuka → kembali ke player
Konversi ke VIP	Tekan "Aktifkan VIP" → pilih paket (mingguan/bulanan) → pilih metode bayar (QRIS/DANA/VA) → checkout → gateway pembayaran → konfirmasi sukses → status VIP aktif di seluruh app
Autentikasi	Pengguna memicu aksi yang butuh akun (mis. checkout VIP) → modal Google Sign-In → autentikasi → sesi tersimpan lintas perangkat
Gamifikasi Harian	Tab Hadiah → cek status misi harian → tonton iklan misi / check-in / bagikan drama → klaim reward (episode bonus / bebas iklan sementara)
Manajemen Koleksi	Tab Daftar Saya → lihat riwayat tontonan terakhir → lanjut menonton dari titik terakhir, atau kelola daftar favorit
 
7. Spesifikasi Fitur Detail
Setiap fitur berikut memetakan langsung ke modul yang telah ada pada prototype, dilengkapi kebutuhan fungsional untuk versi produksi.
7.1. Splash Screen & Onboarding
Prioritas: Must Have
User Story
Sebagai pengguna baru, saya ingin melihat identitas merek yang jelas saat membuka aplikasi agar saya mengenali dan mempercayai aplikasi ini.
Functional Requirements
5.	Menampilkan logo, nama aplikasi, dan tagline selama maksimal 2–2.5 detik sebelum transisi ke Beranda.
6.	Splash harus di-cache secara native (bukan render ulang tiap kali) pada versi aplikasi mobile.
7.	Tidak memblokir pengguna dengan proses loading yang lebih lama dari yang diperlukan — gunakan splash sebagai waktu prefetch data katalog awal.
Business Rules
•	Pengguna tidak wajib login untuk mengakses Beranda dan menonton episode gratis (guest browsing diperbolehkan).
Edge Case / Perlu Diperhatikan
•	Jika koneksi lambat, splash harus punya fallback timeout dan menampilkan state error/retry, bukan layar putih/hitam tanpa akhir.
7.2. Autentikasi Pengguna
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin masuk dengan akun Google agar status VIP dan riwayat tontonan saya tersimpan di semua perangkat.
Functional Requirements
8.	Menyediakan Google Sign-In (OAuth 2.0) sebagai metode utama; direkomendasikan menambah Sign-In With Apple untuk iOS dan opsi nomor HP + OTP untuk menjangkau pengguna tanpa akun Google.
9.	Membuat akun tamu (guest/anonymous) otomatis saat instalasi pertama agar histori tontonan tetap tersinkron secara lokal sebelum login, lalu digabungkan (merge) begitu pengguna login.
10.	Menyimpan sesi menggunakan token yang aman (refresh token) agar pengguna tidak perlu login ulang setiap membuka aplikasi.
11.	Prompt login hanya ditampilkan pada titik keputusan penting (checkout VIP, klaim reward tertentu) — bukan memblokir penjelajahan konten gratis.
Business Rules
•	Satu akun VIP terhubung ke satu identitas pengguna (Google ID / nomor HP terverifikasi), bukan ke perangkat.
•	Data anonim pengguna sebelum login harus di-merge, bukan dihapus, saat pengguna login.
Edge Case / Perlu Diperhatikan
•	Login gagal/dibatalkan pengguna → kembali ke state sebelumnya tanpa error yang mengganggu alur.
7.3. Beranda (Home) — Katalog & Discovery
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin menjelajahi dan mencari drama berdasarkan kategori favorit saya dengan cepat.
Functional Requirements
12.	Search bar dengan pencarian real-time (debounced) berdasarkan judul dan genre.
13.	Filter kategori horizontal: Semua, Terbaru, dan genre-genre utama (Miliarder, Romantis, Balas Dendam, dst.) — daftar genre harus dikelola secara dinamis dari backend/CMS, bukan hardcoded.
14.	Hero banner menampilkan konten unggulan/trending, idealnya carousel multi-slide dengan auto-rotate.
15.	Grid rekomendasi personalisasi ("Rekomendasi Terpanas") menampilkan cover, judul, genre, dan badge (mis. Trending, Baru, Dub Indo).
16.	Infinite scroll / paginasi untuk grid drama saat katalog bertambah besar (prototype saat ini me-render seluruh data sekaligus, tidak scalable untuk katalog besar).
Business Rules
•	Hasil pencarian kosong harus menampilkan empty state yang jelas dan sugesti (mis. kategori populer), bukan grid kosong tanpa keterangan.
Edge Case / Perlu Diperhatikan
•	Genre "Terbaru" pada prototype saat ini hanya melakukan slice array tanpa logika tanggal rilis — versi produksi wajib menggunakan field `releaseDate` aktual.
7.4. Untuk Anda (Personalized Feed)
Prioritas: Should Have
User Story
Sebagai pengguna, saya ingin ditawari klip/potongan drama yang relevan dengan selera saya tanpa harus mencari manual.
Functional Requirements
17.	Fase 1: Feed berbasis aturan sederhana (rule-based) — kombinasi drama trending, genre yang sering ditonton, dan drama belum selesai ditonton.
18.	Fase 2: Model rekomendasi kolaboratif/berbasis konten menggunakan sinyal watch-time, like, dan completion rate.
19.	Pengalaman swipe vertikal langsung memutar potongan (preview) episode, konsisten dengan pemutar video utama.
Business Rules
•	Feed tidak boleh menampilkan drama yang sudah 100% VIP-locked kepada pengguna yang belum login/VIP tanpa jalur konversi yang jelas.
7.5. Halaman Detail Drama
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin melihat sinopsis dan daftar episode sebelum memutuskan menonton, serta menyimpannya ke favorit.
Functional Requirements
20.	Menampilkan cover, judul, genre/tag, rating, jumlah episode, bahasa (dubbing/original+subtitle), dan sinopsis lengkap.
21.	Grid episode dengan indikator status: gratis, terkunci, atau sudah ditonton (perlu ditambahkan — prototype belum membedakan "terkunci" vs "sudah ditonton").
22.	Tombol simpan/hapus dari favorit dan tombol bagikan (deep link ke drama spesifik).
23.	Rating harus berasal dari data agregat riil (rata-rata rating pengguna atau editorial), bukan angka statis seperti pada prototype.
Business Rules
•	Episode ke-1 dan ke-2 setiap judul default gratis (dapat dikonfigurasi per judul melalui CMS/admin panel).
7.6. Pemutar Video Vertikal (Core Player)
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin menonton episode secara mulus dan berpindah episode berikutnya hanya dengan swipe, seperti menonton reels.
Functional Requirements
24.	Player video 9:16 full-screen dengan kontrol: tap untuk play/pause, swipe atas/bawah untuk episode selanjutnya/sebelumnya.
25.	Streaming adaptif (HLS/DASH) dengan multi-bitrate agar buffering minimal pada koneksi lambat — prototype saat ini menggunakan animasi canvas sebagai pengganti video asli dan wajib diganti dengan real video player (mis. ExoPlayer/AVPlayer/HLS.js) di versi produksi.
26.	Tombol Like, Share, dan drawer pemilihan episode cepat.
27.	Preload episode berikutnya di background untuk transisi swipe yang instan.
28.	Auto-resume dari posisi terakhir ditonton (resume playback position) bila pengguna kembali menonton episode yang sama.
29.	Menyimpan progres tontonan ke riwayat (history) segera setelah episode mulai diputar.
Business Rules
•	Swipe ke episode terkunci memicu overlay paywall (lihat 7.7), video tidak diputar sebelum akses diberikan.
Edge Case / Perlu Diperhatikan
•	Autoplay dengan suara harus menghormati kebijakan autoplay platform (mobile browser/App Store) — video sebaiknya mulai muted lalu unmute saat interaksi pertama jika berjalan di web.
7.7. Model Monetisasi: Paywall Episode & Rewarded Ads
Prioritas: Must Have
User Story
Sebagai pengguna gratis, saya ingin punya opsi membuka episode selanjutnya tanpa membayar, dengan menonton iklan.
Functional Requirements
30.	Saat episode terkunci diakses, tampilkan overlay paywall dengan dua opsi setara: "Tonton 1 Iklan Video" dan "Aktifkan VIP".
31.	Integrasi SDK rewarded ads pihak ketiga (mis. Google AdMob Rewarded, AppLovin MAX, Unity Ads) — prototype saat ini memakai simulasi iklan statis (progress bar dummy) dan wajib diganti SDK nyata.
32.	Setelah iklan selesai ditonton penuh (tidak di-skip), sistem otomatis membuka 1–2 episode berikutnya dan mencatat hal ini di backend agar konsisten lintas perangkat/sesi.
33.	Batasi jumlah unlock-via-iklan per hari per pengguna untuk menjaga keseimbangan monetisasi (dikonfigurasi backend, mis. maksimal 10 unlock/hari).
Business Rules
•	Status episode terbuka (unlocked) harus disimpan di server per akun pengguna, bukan hanya di memori/local state klien (agar tidak hilang saat re-install atau ganti perangkat).
•	Pengguna VIP melewati seluruh paywall tanpa pengecualian selama masa langganan aktif.
Edge Case / Perlu Diperhatikan
•	Iklan gagal dimuat (fill rate rendah) → sediakan fallback pesan yang jujur dan tawarkan opsi VIP, jangan biarkan pengguna terjebak di layar loading.
7.8. Hadiah & Misi Harian (Gamifikasi)
Prioritas: Should Have
User Story
Sebagai pengguna yang sensitif harga, saya ingin mendapatkan akses tambahan gratis dengan menyelesaikan misi sederhana setiap hari.
Functional Requirements
34.	Misi harian: menonton N iklan misi, check-in harian, dan berbagi drama ke media sosial/WhatsApp/Telegram.
35.	Progress misi ditampilkan real-time (mis. "Menonton 2/3 Iklan Misi") dan direset otomatis setiap 24 jam (server time, bukan waktu lokal perangkat, untuk mencegah kecurangan).
36.	Reward berupa "bebas iklan sementara" atau "episode bonus" harus tervalidasi di server agar tidak dapat dimanipulasi dari sisi klien.
37.	Verifikasi aksi berbagi (share) idealnya menggunakan deep link tracking, bukan hanya asumsi klik tombol.
Business Rules
•	Reward harian bersifat sekali klaim per jenis misi per hari per akun.
7.9. Daftar Saya (Riwayat & Favorit)
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin melanjutkan drama yang sedang saya tonton dan mengakses cepat drama favorit saya.
Functional Requirements
38.	Riwayat tontonan menampilkan drama & episode terakhir ditonton, diurutkan dari yang paling baru, dengan aksi "lanjutkan menonton".
39.	Daftar favorit menampilkan seluruh drama yang ditandai favorit dengan opsi hapus.
40.	Data riwayat & favorit tersinkron ke server per akun (bukan hanya in-memory seperti pada prototype saat ini, yang hilang saat refresh halaman).
Business Rules
•	Riwayat dibatasi maksimal N entri terbaru yang ditampilkan (mis. 50), dengan opsi "lihat semua".
7.10. Profil & Pengaturan Akun
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin melihat status keanggotaan saya dan mengakses bantuan/dukungan dengan mudah.
Functional Requirements
41.	Menampilkan nama, identitas akun, badge status VIP (aktif/tidak) beserta tanggal kedaluwarsa langganan.
42.	Menu "Dompet Saya & Transaksi" menampilkan riwayat pembayaran/invoice yang jelas (nomor transaksi, tanggal, nominal, status).
43.	Menu bantuan terhubung ke kanal dukungan resmi (live chat/WhatsApp Business/helpdesk), bukan nomor statis pada kode.
44.	Opsi logout dan hapus akun (wajib untuk kepatuhan UU Pelindungan Data Pribadi/PDP).
Business Rules
•	Badge VIP harus real-time reflect status langganan dari backend, termasuk auto-update saat langganan berakhir/diperbarui.
7.11. Langganan VIP & Checkout Pembayaran
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin berlangganan VIP dengan cepat menggunakan metode pembayaran lokal yang saya percaya.
Functional Requirements
45.	Menyediakan minimal dua paket: VIP Mingguan (referensi harga prototype: Rp 15.000) dan VIP Bulanan (referensi harga prototype: Rp 45.000, mengklaim hemat ~30%) — harga final ditentukan tim bisnis & dapat dikelola dinamis dari backend.
46.	Metode pembayaran: QRIS (GoPay/OVO/ShopeePay dsb.), DANA direct, dan Virtual Account bank (BCA/Mandiri/BRI/BNI).
47.	Integrasi payment gateway resmi berlisensi (mis. Midtrans, Xendit, atau DOKU) menggantikan simulator gateway pada prototype — mencakup webhook konfirmasi pembayaran server-to-server, bukan tombol "Konfirmasi Selesai Bayar" manual yang dapat dipicu pengguna sendiri.
48.	Auto-renewal (perpanjangan otomatis) untuk paket bulanan dengan pemberitahuan H-3 sebelum penagihan, serta opsi berhenti berlangganan (cancel) yang jelas.
49.	Menampilkan invoice/struk digital pasca-pembayaran berhasil.
Business Rules
•	Status VIP HANYA diaktifkan setelah menerima konfirmasi sukses resmi dari payment gateway (webhook), tidak pernah dari input/aksi sisi klien semata — ini adalah temuan kritikal dari prototype yang harus diperbaiki sebelum produksi.
•	Kode Virtual Account harus unik per transaksi dan punya batas waktu pembayaran (mis. 24 jam) sesuai kebijakan gateway.
Edge Case / Perlu Diperhatikan
•	Pembayaran pending/gagal/timeout harus punya state UI tersendiri (bukan hanya sukses/tidak ada respons).
7.12. Notifikasi & Umpan Balik Sistem
Prioritas: Should Have
User Story
Sebagai pengguna, saya ingin mendapat konfirmasi jelas dan cepat atas setiap aksi yang saya lakukan.
Functional Requirements
50.	Toast notification untuk aksi ringan (tersimpan ke favorit, tautan disalin, dsb.) — sudah ada di prototype dan dipertahankan.
51.	Push notification (fase 2) untuk pengingat episode baru dari drama favorit, promo VIP, dan pengingat misi harian yang belum diklaim.
52.	Notifikasi transaksional (email/WhatsApp) untuk konfirmasi pembayaran dan pengingat perpanjangan langganan.
Business Rules
•	Push notification harus melalui opt-in eksplisit sesuai kebijakan platform (iOS/Android) dan regulasi privasi.
 
7.13 Dashboard Admin (Content & Business Management System)
Dashboard Admin adalah panel internal berbasis web (terpisah dari aplikasi konsumen) yang digunakan tim internal (content team, finance, operasional) untuk mengelola seluruh konten dan konfigurasi bisnis aplikasi tanpa perlu mengubah kode program. Ini menggantikan seluruh data hardcoded pada prototype (daftar drama, episode, harga paket, dsb.) dengan sistem manajemen yang dinamis.
7.13.1. Manajemen Drama & Upload Video Episode (Integrasi Bunny.net)
Prioritas: Must Have
User Story
Sebagai admin konten, saya ingin membuat judul drama baru dan mengunggah video untuk setiap episode/part secara terpisah, agar video tersebut otomatis tampil di aplikasi setelah selesai diunggah.
Functional Requirements
53.	Form "Tambah Drama Baru" berisi: judul, genre/tag, sinopsis, bahasa (dubbing/subtitle), dan status (draft/publish).
54.	Di dalam satu drama, admin dapat menambahkan episode/part satu per satu secara berurutan (Part 1, Part 2, dst.), masing-masing dengan judul episode, deskripsi/cuplikan adegan, dan penanda "Gratis" atau "Terkunci (VIP/Iklan)".
55.	Upload video dilakukan langsung ke Bunny.net Stream melalui Bunny Stream API (disarankan menggunakan TUS resumable upload agar unggahan file besar tahan gangguan koneksi), bukan disimpan di server aplikasi sendiri.
56.	Setiap episode yang diunggah akan mendapatkan `videoId`/GUID dari Bunny Stream, yang disimpan di database sebagai referensi pemutaran (bukan menyimpan file video itu sendiri di database aplikasi).
57.	Dashboard menampilkan status pemrosesan video secara real-time: "Mengunggah" → "Sedang Diproses/Encoding" → "Siap Tayang" — mengikuti status encoding dari Bunny Stream (via polling API atau webhook Bunny bila tersedia).
58.	Video yang berstatus "Siap Tayang" dan drama/episode berstatus "Publish" akan OTOMATIS muncul di aplikasi konsumen tanpa perlu deploy ulang aplikasi — cukup melalui pembaruan data dari API katalog.
59.	Admin dapat mengatur ulang urutan episode/part (drag-and-drop atau field nomor urut) serta mengedit/menghapus/menonaktifkan (unpublish) episode yang sudah tayang.
60.	Validasi format file di sisi admin (mis. mp4/mov, resolusi minimum, durasi maksimum) sebelum upload dimulai agar konsisten dengan format vertikal 9:16.
Business Rules
•	Video tidak boleh tampil ke pengguna sebelum berstatus "Siap Tayang" dari Bunny.net DAN drama/episode ditandai "Publish" oleh admin — dua syarat ini harus terpenuhi bersamaan.
•	Kredensial API Key Bunny.net (Library API Key, Stream API Key) hanya boleh digunakan di sisi server/backend admin, tidak pernah diekspos ke aplikasi konsumen atau browser publik.
•	Pemutaran video di aplikasi konsumen menggunakan Bunny CDN Pull Zone / HLS playback URL, idealnya dengan Token Authentication (signed URL) milik Bunny.net agar tautan video tidak dapat diakses/dibagikan bebas oleh pengguna non-VIP di luar aplikasi.
Edge Case / Perlu Diperhatikan
•	Upload terputus di tengah jalan (koneksi admin terputus) → didukung resume otomatis via TUS, admin tidak perlu mengunggah ulang dari awal.
•	Encoding gagal di sisi Bunny.net → dashboard menampilkan status "Gagal Diproses" dengan opsi unggah ulang, bukan diam-diam menampilkan episode kosong ke pengguna.
7.13.2. Manajemen Thumbnail & Metadata Tampilan
Prioritas: Must Have
User Story
Sebagai admin konten, saya ingin mengunggah gambar sampul (cover) drama dan thumbnail per episode agar tampilan katalog di aplikasi menarik dan konsisten.
Functional Requirements
61.	Upload thumbnail/cover drama (untuk grid katalog & hero banner) dan thumbnail per episode/part (opsional, untuk drawer pemilihan episode) melalui form yang sama dengan manajemen drama/episode.
62.	Thumbnail disimpan di object storage (disarankan Bunny.net Storage/CDN agar satu ekosistem dengan video, atau layanan storage gambar lain yang sudah dipakai tim) dan diakses melalui CDN untuk kecepatan muat yang konsisten dengan katalog.
63.	Preview otomatis ukuran gambar sebelum publish (rasio disarankan: 3:4 untuk cover katalog, 16:9 atau 9:16 untuk banner/hero sesuai posisi tampil).
64.	Bunny Stream juga menyediakan thumbnail otomatis hasil ekstraksi dari video (auto-generated thumbnail) yang dapat dipakai sebagai default apabila admin belum mengunggah thumbnail manual.
65.	Badge/tag tampilan (mis. "Trending", "Dub Indo", "Baru") dapat diatur manual oleh admin per judul drama.
Business Rules
•	Ukuran file thumbnail dibatasi (mis. maksimum 2MB) dan divalidasi format (JPEG/PNG/WebP) sebelum diunggah.
7.13.3. Manajemen Iklan (Ad Settings)
Prioritas: Must Have
User Story
Sebagai admin bisnis, saya ingin mengatur perilaku iklan untuk pengguna non-VIP tanpa perlu melibatkan tim teknis, agar strategi monetisasi dapat disesuaikan kapan saja.
Functional Requirements
66.	Panel konfigurasi iklan berisi: aktif/nonaktifkan iklan secara global, jumlah episode gratis awal per drama (default N episode sebelum paywall), jumlah episode yang terbuka setelah 1 iklan berhasil ditonton (mis. 1 iklan = buka 2 episode), dan batas maksimum unlock-via-iklan per pengguna per hari.
67.	Pengaturan penyedia/SDK iklan (mis. Google AdMob, AppLovin MAX) beserta Ad Unit ID per platform (Android/iOS/Web), sehingga pergantian jaringan iklan tidak memerlukan rilis ulang aplikasi.
68.	Pengaturan misi iklan harian pada tab Hadiah (jumlah iklan yang harus ditonton, reward yang didapat) dapat diubah admin tanpa mengubah kode.
69.	Admin dapat mengatur pengecualian: drama/episode tertentu yang selalu gratis tanpa iklan (untuk promosi) atau selalu terkunci penuh (VIP-only, tidak bisa dibuka lewat iklan sama sekali).
Business Rules
•	Pengguna berstatus VIP aktif selalu melewati seluruh iklan, terlepas dari pengaturan yang dibuat admin.
7.13.4. Manajemen Harga & Paket Langganan VIP
Prioritas: Must Have
User Story
Sebagai admin bisnis, saya ingin mengubah harga dan detail paket VIP kapan saja (misalnya untuk promo) tanpa menunggu rilis aplikasi baru.
Functional Requirements
70.	CRUD paket langganan: nama paket, durasi (mingguan/bulanan/lainnya), harga, label promo (mis. "Hemat 30%"), dan status aktif/nonaktif.
71.	Admin dapat membuat paket promosi sementara dengan periode berlaku (tanggal mulai–selesai) yang otomatis tampil/hilang di aplikasi sesuai jadwal.
72.	Perubahan harga TIDAK memengaruhi pengguna yang sudah membayar dengan harga lama pada periode langganan berjalan (grandfathering), hanya berlaku untuk transaksi baru.
73.	Pratinjau tampilan paket sebagaimana akan terlihat di halaman checkout aplikasi, sebelum admin mempublikasikan perubahan harga.
Business Rules
•	Setiap perubahan harga tercatat di log audit (siapa, kapan, harga lama → harga baru) untuk kebutuhan akuntansi dan audit internal.
7.13.5. Manajemen Rekening/Nomor Pembayaran Manual & Verifikasi Transaksi
Prioritas: Must Have
User Story
Sebagai admin finance, saya ingin memasukkan dan mengelola nomor rekening bank/e-wallet secara manual yang ditampilkan kepada pengguna sebagai tujuan transfer, serta memverifikasi pembayaran yang masuk.
Functional Requirements
74.	Form manajemen daftar rekening/nomor pembayaran manual: nama bank/e-wallet (mis. BCA, Mandiri, DANA, OVO), nomor rekening/nomor tujuan, dan nama pemilik rekening — dapat ditambah, diedit, diaktifkan/dinonaktifkan oleh admin kapan saja.
75.	Admin dapat menandai salah satu atau beberapa rekening sebagai "aktif ditampilkan" ke pengguna saat checkout, sehingga rotasi rekening (mis. saat rekening penuh/bermasalah) dapat dilakukan tanpa update aplikasi.
76.	Saat pengguna memilih metode transfer manual di aplikasi, sistem menampilkan nomor rekening yang sedang aktif beserta jumlah tagihan dan (disarankan) kode unik nominal (mis. Rp 45.000 + Rp 27 kode unik) agar admin dapat mencocokkan pembayaran masuk dengan transaksi yang tepat.
77.	Dashboard Admin menampilkan daftar transaksi berstatus "Menunggu Verifikasi" berikut bukti transfer yang diunggah pengguna (upload bukti bayar), dan admin dapat menekan tombol "Verifikasi & Aktifkan VIP" atau "Tolak" secara manual.
78.	Begitu admin menandai transaksi terverifikasi, status VIP pengguna otomatis aktif di aplikasi tanpa perlu aksi tambahan dari pengguna.
Business Rules
•	Nomor rekening yang ditampilkan ke pengguna WAJIB diambil dari data yang dikelola admin melalui dashboard, bukan nilai statis yang ditulis langsung di kode aplikasi (seperti pada prototype saat ini).
•	Aktivasi VIP melalui jalur transfer manual hanya boleh dilakukan oleh peran admin dengan hak akses "Finance/Verifikator" (lihat 7.13.6), dan tercatat log siapa yang memverifikasi serta kapan.
•	Metode transfer manual sebaiknya diposisikan sebagai pelengkap/cadangan, sementara QRIS/e-wallet/VA otomatis melalui payment gateway (lihat 7.11) tetap menjadi jalur utama — transfer manual memerlukan verifikasi manusia sehingga aktivasi VIP tidak instan dan berisiko human error/keterlambatan.
Edge Case / Perlu Diperhatikan
•	Pengguna transfer dengan nominal tidak sesuai/tanpa kode unik → transaksi tetap masuk status "Menunggu Verifikasi" dan admin perlu mencocokkan manual atau menghubungi pengguna, bukan otomatis ditolak sistem.
•	Bukti transfer tidak diunggah pengguna → beri tenggat waktu dan pengingat otomatis, transaksi kedaluwarsa otomatis jika tidak ada tindak lanjut dalam periode tertentu (mis. 24 jam).
7.13.6. Manajemen Pengguna, Role Admin & Log Aktivitas
Prioritas: Should Have
User Story
Sebagai pemilik produk, saya ingin memastikan hanya staf yang berwenang yang dapat mengubah harga, memverifikasi pembayaran, atau menerbitkan konten.
Functional Requirements
79.	Role admin minimal: Super Admin (akses penuh), Content Editor (kelola drama/episode/thumbnail/iklan saja), dan Finance/Verifikator (kelola rekening pembayaran & verifikasi transaksi saja).
80.	Daftar pengguna aplikasi (konsumen) dengan pencarian, status VIP, dan riwayat transaksi masing-masing, untuk kebutuhan dukungan pelanggan (mis. menelusuri komplain pembayaran).
81.	Log audit seluruh aksi sensitif: perubahan harga, publish/unpublish konten, verifikasi/penolakan transaksi manual, perubahan rekening pembayaran.
Business Rules
•	Login Dashboard Admin wajib menggunakan autentikasi terpisah dari akun pengguna aplikasi konsumen, dengan opsi 2FA untuk peran Super Admin dan Finance.
7.13.7. Dashboard Analitik & Ringkasan Bisnis (Admin)
Prioritas: Could Have
User Story
Sebagai pemilik produk, saya ingin melihat ringkasan performa konten dan pendapatan tanpa perlu membuka banyak sistem terpisah.
Functional Requirements
82.	Ringkasan angka utama: jumlah pengguna aktif, jumlah VIP aktif, pendapatan periode berjalan (gateway otomatis + transfer manual terverifikasi), dan drama terpopuler berdasarkan jumlah tontonan.
83.	Grafik tren harian/mingguan untuk views per drama dan funnel konversi paywall → checkout → sukses bayar.
Business Rules
•	Data analitik pada dashboard admin cukup diperbarui berkala (mis. tiap beberapa menit/jam), tidak wajib real-time ketat.
 
8. Model Data (Ringkas)
Struktur data berikut diturunkan dari mock data pada prototype dan diperluas untuk kebutuhan produksi (multi-user, backend tersentralisasi).
8.1 Entitas: Drama
Field	Tipe	Keterangan
id	string/UUID	Identifier unik drama
title	string	Judul drama
genre	string / array	Genre utama; produksi disarankan mendukung multi-genre
tag	string	Badge tampilan (Trending, Hot Drama, Dub Indo, dst.)
cover	URL	Gambar sampul (disarankan pakai CDN + berbagai resolusi)
synopsis	text	Ringkasan cerita
rating	float	Rata-rata rating agregat (baru, belum ada di prototype)
totalEpisodes	integer	Total episode dalam judul
freeEpisodeCount	integer	Jumlah episode gratis default (konfigurable per judul)
releaseDate	datetime	Untuk logika kategori "Terbaru" (belum ada di prototype)
status	enum	draft / published / archived
8.2 Entitas: Episode
Field	Tipe	Keterangan
id	UUID	Identifier unik episode
dramaId	FK	Relasi ke Drama
epNumber	integer	Nomor urut episode
title	string	Judul episode
description	text	Deskripsi/cuplikan adegan
bunnyVideoId	string (GUID)	ID video pada Bunny.net Stream — sumber kebenaran lokasi file video
bunnyLibraryId	string	ID Video Library Bunny.net tempat video disimpan
playbackUrl	URL (HLS, via Bunny CDN)	URL pemutaran adaptif dari Bunny CDN Pull Zone (idealnya signed/token-authenticated)
thumbnailUrl	URL	Thumbnail episode (upload manual admin atau auto-generated Bunny Stream)
durationSec	integer	Durasi video, diperoleh otomatis dari metadata Bunny Stream
processingStatus	enum	uploading / processing / ready / failed — mengikuti status encoding Bunny.net
isFreeDefault	boolean	Apakah gratis secara default
publishStatus	enum	draft / published / unpublished — dikontrol admin di Dashboard
8.3 Entitas: User
Field	Tipe	Keterangan
id	UUID	Identifier unik pengguna
authProvider	enum	google / apple / phone / guest
displayName	string	
email/phone	string	
vipStatus	enum	none / active / expired
vipExpiryDate	datetime	Tanggal berakhir langganan aktif
createdAt	datetime	
8.4 Entitas: UnlockedEpisode, WatchHistory, Favorite, Transaction
•	UnlockedEpisode: { userId, dramaId, episodeId, unlockMethod (free/ad/vip), unlockedAt } — menggantikan Set() in-memory pada prototype agar persisten di server.
•	WatchHistory: { userId, dramaId, episodeId, lastPositionSec, watchedAt } — mendukung fitur resume playback.
•	Favorite: { userId, dramaId, addedAt }
•	Transaction: { id, userId, package (weekly/monthly), amount, paymentMethod (gateway/manual_transfer), gatewayReferenceId, paymentAccountId, proofOfPaymentUrl, verifiedBy, status (pending/success/failed/expired/rejected), createdAt, paidAt }
8.5 Entitas Tambahan untuk Dashboard Admin
Entitas	Field Utama	Keterangan
AdminUser	id, name, email, role (super_admin/content_editor/finance), passwordHash, is2FAEnabled	Akun staf internal, terpisah dari akun pengguna konsumen
SubscriptionPlan	id, name, durationDays, price, promoLabel, isActive, validFrom, validUntil	Paket VIP yang dikelola dinamis oleh admin (menggantikan harga hardcoded)
PaymentAccount	id, channelType (bank/e-wallet), bankOrProviderName, accountNumber, accountHolderName, isActive	Daftar rekening/nomor tujuan transfer manual yang dikelola admin
AdSetting	id, adsEnabled, freeEpisodeCount, episodesUnlockedPerAd, dailyAdUnlockLimit, adUnitIds (per platform)	Konfigurasi perilaku iklan & paywall yang dapat diubah tanpa rilis ulang aplikasi
AuditLog	id, adminId, action, entityType, entityId, oldValue, newValue, createdAt	Jejak audit seluruh aksi sensitif admin (harga, publish konten, verifikasi transaksi)
 
9. Kebutuhan Non-Fungsional
Kategori	Kebutuhan
Performa	Waktu buka aplikasi (cold start) < 2.5 detik; episode berikutnya mulai diputar < 500ms setelah swipe (via preloading); First Contentful Paint Beranda < 2 detik pada jaringan 4G.
Keamanan	Semua status kepemilikan (VIP, episode terbuka) divalidasi & disimpan di server, bukan hanya klien. Kredensial payment gateway dan Firebase/API key produksi TIDAK boleh ditanam langsung sebagai literal di kode sisi klien tanpa pembatasan (App Check/domain restriction) — kunci pada prototype saat ini bersifat contoh dan wajib diganti kredensial produksi dengan pembatasan akses yang tepat.
Skalabilitas	Backend katalog & streaming harus mendukung pertumbuhan katalog (ratusan judul, ribuan episode) dan trafik streaming bersamaan — gunakan CDN video (mis. Cloudflare Stream, AWS CloudFront + MediaConvert, atau Mux) alih-alih hosting video statis.
Keandalan	Uptime layanan streaming & pembayaran ≥ 99.5%. Kegagalan pembayaran tidak boleh membuat status VIP "menggantung" — perlu job reconciliation berkala dengan gateway.
Aksesibilitas	Kontras warna teks memadai (khususnya teks putih di atas gambar/gradient sesuai standar WCAG AA), target tap area minimal 44x44px, dukungan pembesaran teks sistem.
Lokalisasi	Fase 1 penuh Bahasa Indonesia; arsitektur konten disiapkan agar dapat menambah subtitle/bahasa lain tanpa migrasi besar.
Kompatibilitas Perangkat	Mendukung Android 8+ dan iOS 14+ untuk aplikasi native; versi web-app minimal mendukung 2 versi terakhir Chrome, Safari, dan Samsung Internet.
Observability	Logging error klien (crash reporting) dan analitik event terpasang sejak awal (lihat bagian 13).
10. Arsitektur Teknis & Rekomendasi Stack
Prototype saat ini adalah aplikasi front-end tunggal (single HTML file) dengan Tailwind CSS, Lucide Icons, dan JavaScript vanilla, memakai data mock in-memory serta inisialisasi Firebase (Auth + Firestore) yang belum benar-benar terhubung ke logika fitur. Untuk versi produksi, direkomendasikan arsitektur berikut:
10.1 Frontend
•	Aplikasi mobile native atau cross-platform (React Native/Flutter) untuk performa video dan akses SDK iklan/pembayaran yang lebih baik dibanding web murni.
•	Jika tetap web/PWA, gunakan framework modern (React/Next.js) dengan pemutar video berbasis HLS.js dan state management terstruktur — menggantikan manipulasi DOM manual (innerHTML) pada prototype yang rawan bug dan sulit dipelihara.
10.2 Backend
•	Backend API terpusat (REST/GraphQL) untuk katalog, entitlement (kepemilikan episode/VIP), riwayat, dan transaksi — Firestore dapat dipertahankan sebagai database namun akses tulis status VIP/unlock HARUS melalui Cloud Functions tervalidasi, bukan ditulis langsung dari klien.
•	Integrasi payment gateway (Midtrans/Xendit) dengan endpoint webhook terverifikasi signature untuk update status transaksi & VIP secara aman.
•	Integrasi SDK iklan (AdMob/AppLovin) di sisi native, dengan verifikasi server-side reward callback bila SDK mendukung (S2S rewarded ad verification) untuk mencegah kecurangan.
10.3 Konten & Media — Integrasi Bunny.net
Sesuai keputusan produk, video di-hosting menggunakan Bunny.net Stream (Bunny Stream) sebagai layanan penyimpanan sekaligus CDN video, menggantikan animasi placeholder pada prototype.
•	Upload: Dashboard Admin mengunggah file video melalui Bunny Stream API (direct upload / TUS resumable upload) ke Video Library yang telah dibuat di akun Bunny.net.
•	Encoding: Bunny Stream otomatis melakukan transcoding ke berbagai bitrate/resolusi (adaptive HLS) sehingga aplikasi konsumen tidak perlu menangani proses encoding sendiri.
•	Thumbnail: Bunny Stream menyediakan thumbnail otomatis per video; admin dapat menimpanya dengan thumbnail manual bila diperlukan (lihat 7.13.2).
•	Playback: Aplikasi konsumen memutar video melalui URL HLS dari Bunny CDN Pull Zone. Untuk episode berbayar/VIP-only, disarankan mengaktifkan Token Authentication (signed URL dengan masa berlaku singkat) bawaan Bunny.net agar tautan video tidak dapat diakses langsung/dibagikan di luar aplikasi oleh pengguna yang belum berhak.
•	Keamanan kredensial: Library API Key dan Stream API Key Bunny.net hanya disimpan di server/backend Dashboard Admin (environment variable/secret manager), tidak pernah dikirim ke aplikasi konsumen.
•	Sinkronisasi status: begitu status video di Bunny Stream berubah menjadi "ready" (final encoding selesai), backend memperbarui `processingStatus` episode terkait — dapat dilakukan melalui polling terjadwal atau webhook Bunny.net apabila tersedia untuk paket akun yang digunakan.
10.4 Dashboard Admin (Panel Terpisah)
•	Dashboard Admin dibangun sebagai aplikasi web terpisah dari aplikasi konsumen (mis. domain admin.microdramatv.com), dengan backend API sendiri namun berbagi database katalog/transaksi yang sama.
•	Perubahan yang dipublikasikan admin (drama/episode baru, harga paket, pengaturan iklan, rekening pembayaran) diakses aplikasi konsumen melalui API katalog/konfigurasi yang sama — sehingga perubahan tampil di aplikasi tanpa perlu rilis ulang aplikasi mobile/web.
•	Akses Dashboard Admin dibatasi melalui autentikasi staf terpisah (lihat entitas AdminUser) dan idealnya dari jaringan/VPN terbatas atau minimal proteksi 2FA, mengingat panel ini mengendalikan harga, konten, dan verifikasi pembayaran.
11. Model Monetisasi & Strategi Harga
Sumber Pendapatan	Mekanisme	Catatan
Langganan VIP Mingguan	Rp 15.000 / 7 hari (referensi prototype)	Cocok untuk pengguna yang ingin menuntaskan 1-2 judul secara maraton
Langganan VIP Bulanan	Rp 45.000 / 30 hari (referensi prototype, ~30% lebih hemat)	Target utama konversi jangka panjang, auto-renewal
Rewarded Video Ads	Iklan CPM/CPI melalui SDK mediasi (AdMob/AppLovin)	Sumber pendapatan dari pengguna non-pembayar
(Opsional Fase 2) Pembelian Episode Satuan / Coin	Mikro-transaksi per episode/paket koin	Alternatif bagi pengguna yang hanya ingin 1 judul tertentu tanpa langganan penuh
Catatan: seluruh nominal harga bersifat referensi dari prototype dan wajib divalidasi ulang oleh tim bisnis berdasarkan riset kompetitor (ReelShort, DramaBox versi Indonesia) dan uji A/B harga sebelum peluncuran.
12. Kepatuhan & Legal
•	UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP): wajib ada kebijakan privasi eksplisit, persetujuan (consent) pengumpulan data, dan mekanisme permintaan penghapusan akun/data.
•	Kebijakan langganan berulang (auto-renewal) harus sesuai pedoman Google Play Billing dan Apple App Store (pemberitahuan sebelum penagihan, kemudahan pembatalan) apabila didistribusikan lewat kedua platform tersebut.
•	Klasifikasi usia/rating konten drama (beberapa tema seperti perselingkuhan, balas dendam, kekerasan dalam rumah tangga) perlu ditinjau agar sesuai pedoman konten Google Play/App Store dan tidak melanggar ketentuan platform iklan.
•	Integrasi payment gateway harus menggunakan penyedia jasa pembayaran (PJP) berizin Bank Indonesia/OJK (mis. Midtrans, Xendit, DOKU).
•	Ketentuan Layanan & Kebijakan Privasi (saat ini hanya disebut sebagai teks statis pada modal login) wajib berupa dokumen hukum aktif yang dapat diakses & disetujui secara eksplisit.
13. Analitik & KPI
Event tracking minimum yang perlu diinstrumentasi sejak versi produksi pertama:
Event	Kapan Terjadi	Tujuan
app_open	Aplikasi dibuka	DAU/MAU, retensi
drama_view	Pengguna membuka detail drama	Popularitas konten, CTR dari beranda
episode_start / episode_complete	Episode mulai/selesai diputar	Completion rate, drop-off per episode
paywall_shown	Overlay paywall muncul	Volume titik konversi
ad_watch_complete	Iklan reward selesai ditonton	Ad view rate, pendapatan iklan
vip_checkout_start / vip_purchase_success	Mulai checkout / pembayaran sukses	Funnel konversi & pendapatan langganan
mission_claimed	Klaim misi harian	Efektivitas gamifikasi terhadap retensi
favorite_added / share_clicked	Aksi engagement	Viralitas & loyalitas konten
Direkomendasikan menggunakan kombinasi Firebase Analytics/Amplitude untuk event produk dan dashboard bisnis terpisah untuk metrik finansial (pendapatan, ARPU, LTV).
14. Rencana Rilis / Roadmap
Fase 1 — MVP Produksi (Target: 8–10 minggu)
•	Backend katalog & entitlement dasar (menggantikan mock data & in-memory state)
•	Dashboard Admin: manajemen drama/episode, upload video ke Bunny.net Stream, upload thumbnail, dan alur publish
•	Dashboard Admin: manajemen harga paket VIP, pengaturan iklan (jumlah episode gratis, rasio unlock-per-iklan), dan manajemen rekening pembayaran manual
•	Autentikasi Google + akun tamu (aplikasi konsumen) dan autentikasi staf terpisah (Dashboard Admin)
•	Pemutar video real (HLS via Bunny CDN) menggantikan simulasi canvas
•	Paywall episode dengan validasi server-side
•	Integrasi payment gateway produksi (QRIS, e-wallet, VA) via Midtrans/Xendit, serta alur verifikasi transfer manual oleh admin sebagai pelengkap
•	Riwayat & favorit tersinkron server
•	Analitik dasar terpasang (aplikasi konsumen & ringkasan admin)
Fase 2 — Optimalisasi & Retensi (Target: +6–8 minggu)
•	Integrasi SDK rewarded ads produksi + verifikasi server-side
•	Sistem misi harian & gamifikasi penuh dengan reset berbasis server time
•	Push notification (episode baru, pengingat misi, promo VIP)
•	Panel admin/CMS untuk manajemen konten drama
•	Auto-renewal & manajemen langganan lengkap (upgrade/downgrade/cancel)
Fase 3 — Personalisasi & Skala (Target: berkelanjutan)
•	Rekomendasi berbasis machine learning untuk tab "Untuk Anda"
•	Multi-bahasa/subtitle
•	Fitur sosial ringan (like publik, share tracking, leaderboard misi)
•	Ekspansi katalog & kemitraan konten pihak ketiga
15. Risiko & Asumsi
15.1 Risiko
Risiko	Dampak	Mitigasi
Status VIP/unlock dapat dimanipulasi jika logika hanya di sisi klien	Kehilangan pendapatan langsung	Validasi & penyimpanan status sepenuhnya di server (lihat 7.11, 9)
Fill rate rendah pada rewarded ads di pasar Indonesia	Pengguna gratis terjebak tanpa jalur buka episode	Gunakan mediasi multi-jaringan iklan; sediakan fallback promo VIP
Ketergantungan konten pihak ketiga (lisensi drama)	Risiko hukum/hak cipta bila konten tidak berlisensi resmi	Pastikan seluruh judul memiliki hak distribusi/lisensi sah sebelum publikasi
Churn tinggi pasca masa promosi awal	Pendapatan langganan tidak stabil	Program retensi: pengingat konten baru, diskon perpanjangan, gamifikasi
Verifikasi pembayaran transfer manual bergantung pada kecepatan admin	Aktivasi VIP tertunda, pengalaman pengguna buruk, potensi human error	Terapkan kode unik nominal transfer, SLA verifikasi maksimum (mis. < 1 jam pada jam kerja), dan dorong migrasi bertahap ke metode otomatis (QRIS/VA) sebagai jalur utama
Kredensial Bunny.net API Key bocor/disalahgunakan	Video dapat diunggah/dihapus pihak tidak berwenang, biaya storage/bandwidth membengkak	Simpan API Key hanya di backend Dashboard Admin, aktifkan pembatasan akses & rotasi key berkala
Konten video VIP-only dapat dibagikan di luar aplikasi bila URL tidak diamankan	Kebocoran akses konten berbayar, kerugian pendapatan	Aktifkan Token Authentication (signed URL) Bunny.net dengan masa berlaku singkat untuk episode berbayar
15.2 Asumsi
•	Tim memiliki atau akan memperoleh hak distribusi sah atas konten drama yang ditayangkan.
•	Target awal peluncuran adalah pasar Indonesia dengan Bahasa Indonesia sebagai bahasa utama.
•	Aplikasi akan didistribusikan setidaknya melalui Google Play Store; distribusi App Store & web bersifat opsional/fase lanjutan.
16. Pertanyaan Terbuka
84.	Apakah konten drama akan diproduksi/dilisensikan sendiri, atau bekerja sama dengan agregator konten pihak ketiga?
85.	Apakah target platform utama adalah aplikasi native (Android/iOS) atau tetap web-app/PWA?
86.	Payment gateway mana yang akan menjadi mitra resmi (Midtrans/Xendit/DOKU/lainnya), dan bagaimana skema fee-nya?
87.	Apakah akan ada model coin/mikro-transaksi per-episode di luar langganan VIP pada fase awal?
88.	Berapa anggaran akuisisi pengguna (UA) dan target CAC yang dapat diterima untuk periode 6 bulan pertama?
89.	Apakah dibutuhkan dukungan multi-bahasa/subtitle sejak peluncuran awal mengingat potensi ekspansi regional?
 
17. Lampiran: Analisis Gap Prototype vs Kebutuhan Produksi
Ringkasan celah teknis utama yang ditemukan pada prototype HTML/JS yang perlu ditutup sebelum rilis produksi.
Area	Kondisi pada Prototype	Rekomendasi Produksi
Data Drama & Episode	Array JavaScript statis (hardcoded) di dalam kode	Backend/CMS dinamis dengan API katalog
Video Playback & Hosting	Animasi canvas partikel sebagai pengganti video sungguhan; tidak ada mekanisme upload video	Video di-hosting & di-stream via Bunny.net Stream (upload dari Dashboard Admin, playback via Bunny CDN HLS, lihat 7.13.1 & 10.3)
Panel Admin/CMS	Tidak ada sama sekali — seluruh drama, episode, harga, dan pengaturan iklan tertulis langsung di kode aplikasi	Dashboard Admin terpisah untuk kelola konten, harga, iklan, dan rekening pembayaran manual (lihat 7.13)
Rekening/Nomor Pembayaran	Tidak ada; hanya simulasi gateway otomatis	Dikelola dinamis oleh admin (entitas PaymentAccount) dengan alur verifikasi transaksi manual (lihat 7.13.5)
Status VIP & Unlock Episode	Disimpan di variabel in-memory (`state`), hilang saat refresh, dapat dimanipulasi via console	Disimpan & divalidasi di server per akun pengguna
Pembayaran	Tombol "Konfirmasi Selesai Bayar" memicu sukses secara manual tanpa verifikasi gateway sungguhan	Payment gateway resmi (Midtrans/Xendit) dengan webhook signature verification
Autentikasi	Tombol Google Sign-In adalah tiruan visual (tidak memanggil OAuth sungguhan); modul Firebase diinisialisasi namun hanya melakukan sign-in anonim dan belum terhubung ke fitur	OAuth 2.0 Google Sign-In fungsional, tersambung ke seluruh state pengguna (VIP, riwayat, favorit)
Iklan	Layar simulasi iklan dengan progress bar dummy	SDK rewarded ads produksi (AdMob/AppLovin) dengan verifikasi reward
Riwayat & Favorit	Disimpan di memori browser (hilang saat reload)	Tersimpan di database server, tersinkron lintas perangkat
Kredensial Konfigurasi	Firebase config (apiKey, dsb.) berupa nilai contoh tertulis langsung di kode	Kredensial produksi dikelola melalui environment/secret management dengan pembatasan domain/App Check
Kategori "Terbaru"	Logika `array.slice(1)` tanpa dasar tanggal rilis	Filter berbasis field `releaseDate` aktual
— Akhir Dokumen —

PRODUCT REQUIREMENTS DOCUMENT
MicroDrama TV (MD TV)
Platform Streaming Drama Vertikal Berbasis Episode (Short Drama App)
Disusun berdasarkan analisis prototype MVP "MicroDrama TV" (drama_fuad.html)
Atribut	Detail
Nama Produk	MicroDrama TV (MD TV)
Jenis Dokumen	Product Requirements Document (PRD)
Versi	1.1
Tanggal	18 Juli 2026 (revisi: penambahan spesifikasi Dashboard Admin/CMS)
Status	Draft untuk Review
Sumber	Reverse-engineered dari prototype HTML/JS (frontend-only, mock data)
Kategori Produk	Vertical Short Drama / Micro-Drama Streaming App (mirip ReelShort, DramaBox, NetShort)
 
1. Ringkasan Eksekutif
MicroDrama TV (MD TV) adalah aplikasi streaming "micro-drama" atau "short drama" vertikal — konten drama serial berdurasi pendek (1-3 menit per episode) yang dikonsumsi dalam format video 9:16, mengikuti tren global yang dipopulerkan aplikasi seperti ReelShort, DramaBox, dan NetShort. Produk ini menyasar pasar Indonesia dengan konten drama ber-genre miliarder, romantis, dan balas dendam yang di-dubbing/disulihsuarakan ke Bahasa Indonesia.
Model bisnis utama adalah freemium dengan mekanisme "coinless paywall": setiap drama menyediakan 1-2 episode pertama gratis, episode selanjutnya dikunci dan dapat dibuka dengan (a) menonton iklan video sisipan, atau (b) berlangganan paket VIP untuk akses penuh tanpa iklan ke seluruh katalog. Pembayaran VIP mendukung metode lokal Indonesia: QRIS, DANA, dan Virtual Account bank.
Dokumen ini disusun berdasarkan analisis menyeluruh terhadap prototype front-end (HTML/Tailwind/JavaScript) yang telah dibangun, mencakup seluruh alur pengguna, komponen UI, dan logika bisnis yang telah disimulasikan di sisi klien. Prototype saat ini menggunakan data drama statis (mock data) dan pembayaran simulasi (sandbox palsu) — dokumen ini mendefinisikan kebutuhan produk secara lengkap agar prototype dapat dikembangkan menjadi produk produksi yang solid, aman, dan siap diskalakan.
Dokumen ini ditujukan bagi Product Manager, UI/UX Designer, Engineering Lead (Frontend, Backend, Mobile), QA, dan pemangku kepentingan bisnis (Growth & Monetization) sebagai acuan tunggal kebutuhan produk.
2. Latar Belakang & Peluang Pasar
2.1 Konteks Pasar
•	Tren "micro-drama" / "short drama vertikal" tumbuh pesat secara global sejak 2023–2025, dipelopori aplikasi asal Tiongkok (ReelShort, DramaBox, ShortMax) yang kini merambah pasar Asia Tenggara termasuk Indonesia.
•	Konsumsi video vertikal singkat (format TikTok/Reels) sudah menjadi kebiasaan mayoritas pengguna mobile Indonesia, sehingga adopsi format konten ini relatif rendah friksi.
•	Model monetisasi hybrid (iklan + langganan) terbukti efektif pada kategori ini karena mayoritas pengguna sensitif harga namun bersedia menonton iklan atau membayar nominal kecil (mikro-transaksi) demi kelanjutan cerita.
•	Metode pembayaran lokal (QRIS, e-wallet, VA) adalah keharusan mutlak untuk konversi di pasar Indonesia — kartu kredit bukan metode utama.
2.2 Masalah yang Diselesaikan
•	Pengguna ingin hiburan cerita drama yang padat, adiktif, dan bisa dikonsumsi kapan saja dalam waktu singkat (commuting, jeda kerja), tanpa komitmen menonton serial panjang.
•	Kreator/penerbit konten drama pendek membutuhkan platform distribusi dengan monetisasi yang jelas dan terukur.
2.3 Peluang Bisnis
•	Pendapatan ganda: pendapatan iklan (impresi + reward ad) dan pendapatan langganan berulang (VIP mingguan/bulanan).
•	Potensi retensi tinggi melalui mekanisme cliffhanger per-episode dan sistem misi harian (daily check-in, gamifikasi).
3. Tujuan & Sasaran Produk
3.1 Tujuan Produk
1.	Menyediakan pengalaman menonton drama vertikal yang cepat, mulus, dan adiktif dengan navigasi swipe layaknya media sosial short-video.
2.	Memaksimalkan konversi pengguna gratis menjadi pelanggan VIP berbayar melalui paywall episode yang persuasif namun tidak mengganggu (non-intrusive).
3.	Menyediakan jalur monetisasi alternatif melalui iklan tervalidasi (rewarded video ads) bagi pengguna yang belum ingin membayar.
4.	Membangun kebiasaan harian pengguna melalui gamifikasi (misi harian, check-in, reward bebas iklan sementara).
3.2 Sasaran Terukur (Success Metrics) — Indikatif 6 Bulan Pasca Peluncuran
Metrik	Target Indikatif	Keterangan
DAU/MAU Ratio (Stickiness)	≥ 20%	Mengindikasikan kebiasaan menonton harian
D1 Retention	≥ 35%	Standar industri aplikasi hiburan mobile
D7 Retention	≥ 15%	
Free-to-VIP Conversion Rate	3% – 6%	Dari total pengguna terdaftar aktif bulanan
Rewarded Ad View Rate	≥ 40%	Dari pengguna non-VIP yang menemui paywall
Episode Completion Rate	≥ 60%	Rasio penonton yang menyelesaikan episode yang dimulai
ARPU (Average Revenue per User)	Ditentukan tim Growth	Baseline diukur pasca 3 bulan live
Churn VIP Bulanan	< 15%	
4. Target Pengguna & Persona
4.1 Profil Demografis Utama
•	Perempuan & pria usia 18–40 tahun, mayoritas pengguna aktif media sosial short-video (TikTok, Reels, Shorts).
•	Pengguna mobile-first di Indonesia, terbiasa dengan metode pembayaran digital (QRIS/e-wallet).
•	Penggemar genre drama populer: cinta terlarang, balas dendam, kisah miliarder/CEO, keluarga.
4.2 Persona
Persona	Deskripsi	Kebutuhan Utama	Perilaku Monetisasi
"Rani" – Penonton Kasual	Wanita 24 th, karyawan kantoran, menonton saat commuting/istirahat.	Konten cepat, bisa berhenti kapan saja, tidak ribet.	Menonton iklan untuk buka episode, jarang berlangganan.
"Dimas" – Penggemar Berat (Binge-watcher)	Pria 29 th, suka menyelesaikan cerita dalam sekali duduk.	Akses instan semua episode, bebas iklan.	Kandidat kuat konversi VIP bulanan.
"Sari" – Pemburu Promo	Wanita 31 th, sensitif harga, suka reward/misi.	Cara gratis membuka episode, hadiah harian.	Aktif di tab Hadiah, mengandalkan iklan & check-in.
5. Ruang Lingkup Produk
5.1 Dalam Lingkup (In-Scope) — MVP Produksi
•	Autentikasi pengguna (Google Sign-In / Sign-In With Apple / nomor HP)
•	Katalog drama dengan pencarian dan filter kategori/genre
•	Halaman detail drama (sinopsis, rating, daftar episode)
•	Pemutar video vertikal dengan navigasi swipe antar-episode
•	Sistem paywall episode berbasis coinless (gratis N episode pertama)
•	Rewarded video ads untuk membuka episode terkunci
•	Langganan VIP (mingguan & bulanan) dengan akses penuh tanpa iklan
•	Integrasi payment gateway lokal (QRIS, e-wallet, Virtual Account)
•	Sistem misi harian & gamifikasi (check-in, berbagi, tonton iklan)
•	Riwayat tontonan & daftar favorit pengguna
•	Halaman profil & manajemen akun/langganan
•	Sistem notifikasi dalam-aplikasi (toast) dan (fase selanjutnya) push notification
•	Dashboard Admin (CMS) untuk manajemen konten drama/episode, upload video ke Bunny.net, dan manajemen data rekening pembayaran manual
5.2 Di Luar Lingkup (Out-of-Scope) — Fase 1
•	Fitur sosial: komentar, forum, rating/review publik antar-pengguna
•	Multi-bahasa/multi-subtitle (fase 1 hanya Bahasa Indonesia dubbing)
•	Konten user-generated / upload drama oleh kreator eksternal
•	Fitur unduh video untuk ditonton offline
•	Aplikasi companion Smart TV / Android TV
•	Sistem rekomendasi berbasis machine learning yang kompleks (fase 1 memakai aturan sederhana/manual curation)
 
6. Alur Pengguna Utama (Core User Flows)
Alur	Langkah Utama
Onboarding & Penemuan Konten	Splash screen → Beranda (tanpa wajib login) → cari/filter kategori → buka detail drama
Menonton Episode Gratis	Detail drama → pilih episode gratis → pemutar video → swipe ke episode berikutnya
Terkena Paywall	Swipe ke episode terkunci → overlay paywall muncul → pilih "Tonton Iklan" ATAU "Aktifkan VIP"
Buka via Iklan	Tekan "Tonton 1 Iklan Video" → layar simulasi iklan (durasi berjalan) → episode +1/+2 otomatis terbuka → kembali ke player
Konversi ke VIP	Tekan "Aktifkan VIP" → pilih paket (mingguan/bulanan) → pilih metode bayar (QRIS/DANA/VA) → checkout → gateway pembayaran → konfirmasi sukses → status VIP aktif di seluruh app
Autentikasi	Pengguna memicu aksi yang butuh akun (mis. checkout VIP) → modal Google Sign-In → autentikasi → sesi tersimpan lintas perangkat
Gamifikasi Harian	Tab Hadiah → cek status misi harian → tonton iklan misi / check-in / bagikan drama → klaim reward (episode bonus / bebas iklan sementara)
Manajemen Koleksi	Tab Daftar Saya → lihat riwayat tontonan terakhir → lanjut menonton dari titik terakhir, atau kelola daftar favorit
 
7. Spesifikasi Fitur Detail
Setiap fitur berikut memetakan langsung ke modul yang telah ada pada prototype, dilengkapi kebutuhan fungsional untuk versi produksi.
7.1. Splash Screen & Onboarding
Prioritas: Must Have
User Story
Sebagai pengguna baru, saya ingin melihat identitas merek yang jelas saat membuka aplikasi agar saya mengenali dan mempercayai aplikasi ini.
Functional Requirements
5.	Menampilkan logo, nama aplikasi, dan tagline selama maksimal 2–2.5 detik sebelum transisi ke Beranda.
6.	Splash harus di-cache secara native (bukan render ulang tiap kali) pada versi aplikasi mobile.
7.	Tidak memblokir pengguna dengan proses loading yang lebih lama dari yang diperlukan — gunakan splash sebagai waktu prefetch data katalog awal.
Business Rules
•	Pengguna tidak wajib login untuk mengakses Beranda dan menonton episode gratis (guest browsing diperbolehkan).
Edge Case / Perlu Diperhatikan
•	Jika koneksi lambat, splash harus punya fallback timeout dan menampilkan state error/retry, bukan layar putih/hitam tanpa akhir.
7.2. Autentikasi Pengguna
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin masuk dengan akun Google agar status VIP dan riwayat tontonan saya tersimpan di semua perangkat.
Functional Requirements
8.	Menyediakan Google Sign-In (OAuth 2.0) sebagai metode utama; direkomendasikan menambah Sign-In With Apple untuk iOS dan opsi nomor HP + OTP untuk menjangkau pengguna tanpa akun Google.
9.	Membuat akun tamu (guest/anonymous) otomatis saat instalasi pertama agar histori tontonan tetap tersinkron secara lokal sebelum login, lalu digabungkan (merge) begitu pengguna login.
10.	Menyimpan sesi menggunakan token yang aman (refresh token) agar pengguna tidak perlu login ulang setiap membuka aplikasi.
11.	Prompt login hanya ditampilkan pada titik keputusan penting (checkout VIP, klaim reward tertentu) — bukan memblokir penjelajahan konten gratis.
Business Rules
•	Satu akun VIP terhubung ke satu identitas pengguna (Google ID / nomor HP terverifikasi), bukan ke perangkat.
•	Data anonim pengguna sebelum login harus di-merge, bukan dihapus, saat pengguna login.
Edge Case / Perlu Diperhatikan
•	Login gagal/dibatalkan pengguna → kembali ke state sebelumnya tanpa error yang mengganggu alur.
7.3. Beranda (Home) — Katalog & Discovery
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin menjelajahi dan mencari drama berdasarkan kategori favorit saya dengan cepat.
Functional Requirements
12.	Search bar dengan pencarian real-time (debounced) berdasarkan judul dan genre.
13.	Filter kategori horizontal: Semua, Terbaru, dan genre-genre utama (Miliarder, Romantis, Balas Dendam, dst.) — daftar genre harus dikelola secara dinamis dari backend/CMS, bukan hardcoded.
14.	Hero banner menampilkan konten unggulan/trending, idealnya carousel multi-slide dengan auto-rotate.
15.	Grid rekomendasi personalisasi ("Rekomendasi Terpanas") menampilkan cover, judul, genre, dan badge (mis. Trending, Baru, Dub Indo).
16.	Infinite scroll / paginasi untuk grid drama saat katalog bertambah besar (prototype saat ini me-render seluruh data sekaligus, tidak scalable untuk katalog besar).
Business Rules
•	Hasil pencarian kosong harus menampilkan empty state yang jelas dan sugesti (mis. kategori populer), bukan grid kosong tanpa keterangan.
Edge Case / Perlu Diperhatikan
•	Genre "Terbaru" pada prototype saat ini hanya melakukan slice array tanpa logika tanggal rilis — versi produksi wajib menggunakan field `releaseDate` aktual.
7.4. Untuk Anda (Personalized Feed)
Prioritas: Should Have
User Story
Sebagai pengguna, saya ingin ditawari klip/potongan drama yang relevan dengan selera saya tanpa harus mencari manual.
Functional Requirements
17.	Fase 1: Feed berbasis aturan sederhana (rule-based) — kombinasi drama trending, genre yang sering ditonton, dan drama belum selesai ditonton.
18.	Fase 2: Model rekomendasi kolaboratif/berbasis konten menggunakan sinyal watch-time, like, dan completion rate.
19.	Pengalaman swipe vertikal langsung memutar potongan (preview) episode, konsisten dengan pemutar video utama.
Business Rules
•	Feed tidak boleh menampilkan drama yang sudah 100% VIP-locked kepada pengguna yang belum login/VIP tanpa jalur konversi yang jelas.
7.5. Halaman Detail Drama
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin melihat sinopsis dan daftar episode sebelum memutuskan menonton, serta menyimpannya ke favorit.
Functional Requirements
20.	Menampilkan cover, judul, genre/tag, rating, jumlah episode, bahasa (dubbing/original+subtitle), dan sinopsis lengkap.
21.	Grid episode dengan indikator status: gratis, terkunci, atau sudah ditonton (perlu ditambahkan — prototype belum membedakan "terkunci" vs "sudah ditonton").
22.	Tombol simpan/hapus dari favorit dan tombol bagikan (deep link ke drama spesifik).
23.	Rating harus berasal dari data agregat riil (rata-rata rating pengguna atau editorial), bukan angka statis seperti pada prototype.
Business Rules
•	Episode ke-1 dan ke-2 setiap judul default gratis (dapat dikonfigurasi per judul melalui CMS/admin panel).
7.6. Pemutar Video Vertikal (Core Player)
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin menonton episode secara mulus dan berpindah episode berikutnya hanya dengan swipe, seperti menonton reels.
Functional Requirements
24.	Player video 9:16 full-screen dengan kontrol: tap untuk play/pause, swipe atas/bawah untuk episode selanjutnya/sebelumnya.
25.	Streaming adaptif (HLS/DASH) dengan multi-bitrate agar buffering minimal pada koneksi lambat — prototype saat ini menggunakan animasi canvas sebagai pengganti video asli dan wajib diganti dengan real video player (mis. ExoPlayer/AVPlayer/HLS.js) di versi produksi.
26.	Tombol Like, Share, dan drawer pemilihan episode cepat.
27.	Preload episode berikutnya di background untuk transisi swipe yang instan.
28.	Auto-resume dari posisi terakhir ditonton (resume playback position) bila pengguna kembali menonton episode yang sama.
29.	Menyimpan progres tontonan ke riwayat (history) segera setelah episode mulai diputar.
Business Rules
•	Swipe ke episode terkunci memicu overlay paywall (lihat 7.7), video tidak diputar sebelum akses diberikan.
Edge Case / Perlu Diperhatikan
•	Autoplay dengan suara harus menghormati kebijakan autoplay platform (mobile browser/App Store) — video sebaiknya mulai muted lalu unmute saat interaksi pertama jika berjalan di web.
7.7. Model Monetisasi: Paywall Episode & Rewarded Ads
Prioritas: Must Have
User Story
Sebagai pengguna gratis, saya ingin punya opsi membuka episode selanjutnya tanpa membayar, dengan menonton iklan.
Functional Requirements
30.	Saat episode terkunci diakses, tampilkan overlay paywall dengan dua opsi setara: "Tonton 1 Iklan Video" dan "Aktifkan VIP".
31.	Integrasi SDK rewarded ads pihak ketiga (mis. Google AdMob Rewarded, AppLovin MAX, Unity Ads) — prototype saat ini memakai simulasi iklan statis (progress bar dummy) dan wajib diganti SDK nyata.
32.	Setelah iklan selesai ditonton penuh (tidak di-skip), sistem otomatis membuka 1–2 episode berikutnya dan mencatat hal ini di backend agar konsisten lintas perangkat/sesi.
33.	Batasi jumlah unlock-via-iklan per hari per pengguna untuk menjaga keseimbangan monetisasi (dikonfigurasi backend, mis. maksimal 10 unlock/hari).
Business Rules
•	Status episode terbuka (unlocked) harus disimpan di server per akun pengguna, bukan hanya di memori/local state klien (agar tidak hilang saat re-install atau ganti perangkat).
•	Pengguna VIP melewati seluruh paywall tanpa pengecualian selama masa langganan aktif.
Edge Case / Perlu Diperhatikan
•	Iklan gagal dimuat (fill rate rendah) → sediakan fallback pesan yang jujur dan tawarkan opsi VIP, jangan biarkan pengguna terjebak di layar loading.
7.8. Hadiah & Misi Harian (Gamifikasi)
Prioritas: Should Have
User Story
Sebagai pengguna yang sensitif harga, saya ingin mendapatkan akses tambahan gratis dengan menyelesaikan misi sederhana setiap hari.
Functional Requirements
34.	Misi harian: menonton N iklan misi, check-in harian, dan berbagi drama ke media sosial/WhatsApp/Telegram.
35.	Progress misi ditampilkan real-time (mis. "Menonton 2/3 Iklan Misi") dan direset otomatis setiap 24 jam (server time, bukan waktu lokal perangkat, untuk mencegah kecurangan).
36.	Reward berupa "bebas iklan sementara" atau "episode bonus" harus tervalidasi di server agar tidak dapat dimanipulasi dari sisi klien.
37.	Verifikasi aksi berbagi (share) idealnya menggunakan deep link tracking, bukan hanya asumsi klik tombol.
Business Rules
•	Reward harian bersifat sekali klaim per jenis misi per hari per akun.
7.9. Daftar Saya (Riwayat & Favorit)
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin melanjutkan drama yang sedang saya tonton dan mengakses cepat drama favorit saya.
Functional Requirements
38.	Riwayat tontonan menampilkan drama & episode terakhir ditonton, diurutkan dari yang paling baru, dengan aksi "lanjutkan menonton".
39.	Daftar favorit menampilkan seluruh drama yang ditandai favorit dengan opsi hapus.
40.	Data riwayat & favorit tersinkron ke server per akun (bukan hanya in-memory seperti pada prototype saat ini, yang hilang saat refresh halaman).
Business Rules
•	Riwayat dibatasi maksimal N entri terbaru yang ditampilkan (mis. 50), dengan opsi "lihat semua".
7.10. Profil & Pengaturan Akun
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin melihat status keanggotaan saya dan mengakses bantuan/dukungan dengan mudah.
Functional Requirements
41.	Menampilkan nama, identitas akun, badge status VIP (aktif/tidak) beserta tanggal kedaluwarsa langganan.
42.	Menu "Dompet Saya & Transaksi" menampilkan riwayat pembayaran/invoice yang jelas (nomor transaksi, tanggal, nominal, status).
43.	Menu bantuan terhubung ke kanal dukungan resmi (live chat/WhatsApp Business/helpdesk), bukan nomor statis pada kode.
44.	Opsi logout dan hapus akun (wajib untuk kepatuhan UU Pelindungan Data Pribadi/PDP).
Business Rules
•	Badge VIP harus real-time reflect status langganan dari backend, termasuk auto-update saat langganan berakhir/diperbarui.
7.11. Langganan VIP & Checkout Pembayaran
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin berlangganan VIP dengan cepat menggunakan metode pembayaran lokal yang saya percaya.
Functional Requirements
45.	Menyediakan minimal dua paket: VIP Mingguan (referensi harga prototype: Rp 15.000) dan VIP Bulanan (referensi harga prototype: Rp 45.000, mengklaim hemat ~30%) — harga final ditentukan tim bisnis & dapat dikelola dinamis dari backend.
46.	Metode pembayaran: QRIS (GoPay/OVO/ShopeePay dsb.), DANA direct, dan Virtual Account bank (BCA/Mandiri/BRI/BNI).
47.	Integrasi payment gateway resmi berlisensi (mis. Midtrans, Xendit, atau DOKU) menggantikan simulator gateway pada prototype — mencakup webhook konfirmasi pembayaran server-to-server, bukan tombol "Konfirmasi Selesai Bayar" manual yang dapat dipicu pengguna sendiri.
48.	Auto-renewal (perpanjangan otomatis) untuk paket bulanan dengan pemberitahuan H-3 sebelum penagihan, serta opsi berhenti berlangganan (cancel) yang jelas.
49.	Menampilkan invoice/struk digital pasca-pembayaran berhasil.
Business Rules
•	Status VIP HANYA diaktifkan setelah menerima konfirmasi sukses resmi dari payment gateway (webhook), tidak pernah dari input/aksi sisi klien semata — ini adalah temuan kritikal dari prototype yang harus diperbaiki sebelum produksi.
•	Kode Virtual Account harus unik per transaksi dan punya batas waktu pembayaran (mis. 24 jam) sesuai kebijakan gateway.
Edge Case / Perlu Diperhatikan
•	Pembayaran pending/gagal/timeout harus punya state UI tersendiri (bukan hanya sukses/tidak ada respons).
7.12. Notifikasi & Umpan Balik Sistem
Prioritas: Should Have
User Story
Sebagai pengguna, saya ingin mendapat konfirmasi jelas dan cepat atas setiap aksi yang saya lakukan.
Functional Requirements
50.	Toast notification untuk aksi ringan (tersimpan ke favorit, tautan disalin, dsb.) — sudah ada di prototype dan dipertahankan.
51.	Push notification (fase 2) untuk pengingat episode baru dari drama favorit, promo VIP, dan pengingat misi harian yang belum diklaim.
52.	Notifikasi transaksional (email/WhatsApp) untuk konfirmasi pembayaran dan pengingat perpanjangan langganan.
Business Rules
•	Push notification harus melalui opt-in eksplisit sesuai kebijakan platform (iOS/Android) dan regulasi privasi.
 
7.13 Dashboard Admin (Content & Business Management System)
Dashboard Admin adalah panel internal berbasis web (terpisah dari aplikasi konsumen) yang digunakan tim internal (content team, finance, operasional) untuk mengelola seluruh konten dan konfigurasi bisnis aplikasi tanpa perlu mengubah kode program. Ini menggantikan seluruh data hardcoded pada prototype (daftar drama, episode, harga paket, dsb.) dengan sistem manajemen yang dinamis.
7.13.1. Manajemen Drama & Upload Video Episode (Integrasi Bunny.net)
Prioritas: Must Have
User Story
Sebagai admin konten, saya ingin membuat judul drama baru dan mengunggah video untuk setiap episode/part secara terpisah, agar video tersebut otomatis tampil di aplikasi setelah selesai diunggah.
Functional Requirements
53.	Form "Tambah Drama Baru" berisi: judul, genre/tag, sinopsis, bahasa (dubbing/subtitle), dan status (draft/publish).
54.	Di dalam satu drama, admin dapat menambahkan episode/part satu per satu secara berurutan (Part 1, Part 2, dst.), masing-masing dengan judul episode, deskripsi/cuplikan adegan, dan penanda "Gratis" atau "Terkunci (VIP/Iklan)".
55.	Upload video dilakukan langsung ke Bunny.net Stream melalui Bunny Stream API (disarankan menggunakan TUS resumable upload agar unggahan file besar tahan gangguan koneksi), bukan disimpan di server aplikasi sendiri.
56.	Setiap episode yang diunggah akan mendapatkan `videoId`/GUID dari Bunny Stream, yang disimpan di database sebagai referensi pemutaran (bukan menyimpan file video itu sendiri di database aplikasi).
57.	Dashboard menampilkan status pemrosesan video secara real-time: "Mengunggah" → "Sedang Diproses/Encoding" → "Siap Tayang" — mengikuti status encoding dari Bunny Stream (via polling API atau webhook Bunny bila tersedia).
58.	Video yang berstatus "Siap Tayang" dan drama/episode berstatus "Publish" akan OTOMATIS muncul di aplikasi konsumen tanpa perlu deploy ulang aplikasi — cukup melalui pembaruan data dari API katalog.
59.	Admin dapat mengatur ulang urutan episode/part (drag-and-drop atau field nomor urut) serta mengedit/menghapus/menonaktifkan (unpublish) episode yang sudah tayang.
60.	Validasi format file di sisi admin (mis. mp4/mov, resolusi minimum, durasi maksimum) sebelum upload dimulai agar konsisten dengan format vertikal 9:16.
Business Rules
•	Video tidak boleh tampil ke pengguna sebelum berstatus "Siap Tayang" dari Bunny.net DAN drama/episode ditandai "Publish" oleh admin — dua syarat ini harus terpenuhi bersamaan.
•	Kredensial API Key Bunny.net (Library API Key, Stream API Key) hanya boleh digunakan di sisi server/backend admin, tidak pernah diekspos ke aplikasi konsumen atau browser publik.
•	Pemutaran video di aplikasi konsumen menggunakan Bunny CDN Pull Zone / HLS playback URL, idealnya dengan Token Authentication (signed URL) milik Bunny.net agar tautan video tidak dapat diakses/dibagikan bebas oleh pengguna non-VIP di luar aplikasi.
Edge Case / Perlu Diperhatikan
•	Upload terputus di tengah jalan (koneksi admin terputus) → didukung resume otomatis via TUS, admin tidak perlu mengunggah ulang dari awal.
•	Encoding gagal di sisi Bunny.net → dashboard menampilkan status "Gagal Diproses" dengan opsi unggah ulang, bukan diam-diam menampilkan episode kosong ke pengguna.
7.13.2. Manajemen Thumbnail & Metadata Tampilan
Prioritas: Must Have
User Story
Sebagai admin konten, saya ingin mengunggah gambar sampul (cover) drama dan thumbnail per episode agar tampilan katalog di aplikasi menarik dan konsisten.
Functional Requirements
61.	Upload thumbnail/cover drama (untuk grid katalog & hero banner) dan thumbnail per episode/part (opsional, untuk drawer pemilihan episode) melalui form yang sama dengan manajemen drama/episode.
62.	Thumbnail disimpan di object storage (disarankan Bunny.net Storage/CDN agar satu ekosistem dengan video, atau layanan storage gambar lain yang sudah dipakai tim) dan diakses melalui CDN untuk kecepatan muat yang konsisten dengan katalog.
63.	Preview otomatis ukuran gambar sebelum publish (rasio disarankan: 3:4 untuk cover katalog, 16:9 atau 9:16 untuk banner/hero sesuai posisi tampil).
64.	Bunny Stream juga menyediakan thumbnail otomatis hasil ekstraksi dari video (auto-generated thumbnail) yang dapat dipakai sebagai default apabila admin belum mengunggah thumbnail manual.
65.	Badge/tag tampilan (mis. "Trending", "Dub Indo", "Baru") dapat diatur manual oleh admin per judul drama.
Business Rules
•	Ukuran file thumbnail dibatasi (mis. maksimum 2MB) dan divalidasi format (JPEG/PNG/WebP) sebelum diunggah.
7.13.3. Manajemen Iklan (Ad Settings)
Prioritas: Must Have
User Story
Sebagai admin bisnis, saya ingin mengatur perilaku iklan untuk pengguna non-VIP tanpa perlu melibatkan tim teknis, agar strategi monetisasi dapat disesuaikan kapan saja.
Functional Requirements
66.	Panel konfigurasi iklan berisi: aktif/nonaktifkan iklan secara global, jumlah episode gratis awal per drama (default N episode sebelum paywall), jumlah episode yang terbuka setelah 1 iklan berhasil ditonton (mis. 1 iklan = buka 2 episode), dan batas maksimum unlock-via-iklan per pengguna per hari.
67.	Pengaturan penyedia/SDK iklan (mis. Google AdMob, AppLovin MAX) beserta Ad Unit ID per platform (Android/iOS/Web), sehingga pergantian jaringan iklan tidak memerlukan rilis ulang aplikasi.
68.	Pengaturan misi iklan harian pada tab Hadiah (jumlah iklan yang harus ditonton, reward yang didapat) dapat diubah admin tanpa mengubah kode.
69.	Admin dapat mengatur pengecualian: drama/episode tertentu yang selalu gratis tanpa iklan (untuk promosi) atau selalu terkunci penuh (VIP-only, tidak bisa dibuka lewat iklan sama sekali).
Business Rules
•	Pengguna berstatus VIP aktif selalu melewati seluruh iklan, terlepas dari pengaturan yang dibuat admin.
7.13.4. Manajemen Harga & Paket Langganan VIP
Prioritas: Must Have
User Story
Sebagai admin bisnis, saya ingin mengubah harga dan detail paket VIP kapan saja (misalnya untuk promo) tanpa menunggu rilis aplikasi baru.
Functional Requirements
70.	CRUD paket langganan: nama paket, durasi (mingguan/bulanan/lainnya), harga, label promo (mis. "Hemat 30%"), dan status aktif/nonaktif.
71.	Admin dapat membuat paket promosi sementara dengan periode berlaku (tanggal mulai–selesai) yang otomatis tampil/hilang di aplikasi sesuai jadwal.
72.	Perubahan harga TIDAK memengaruhi pengguna yang sudah membayar dengan harga lama pada periode langganan berjalan (grandfathering), hanya berlaku untuk transaksi baru.
73.	Pratinjau tampilan paket sebagaimana akan terlihat di halaman checkout aplikasi, sebelum admin mempublikasikan perubahan harga.
Business Rules
•	Setiap perubahan harga tercatat di log audit (siapa, kapan, harga lama → harga baru) untuk kebutuhan akuntansi dan audit internal.
7.13.5. Manajemen Rekening/Nomor Pembayaran Manual & Verifikasi Transaksi
Prioritas: Must Have
User Story
Sebagai admin finance, saya ingin memasukkan dan mengelola nomor rekening bank/e-wallet secara manual yang ditampilkan kepada pengguna sebagai tujuan transfer, serta memverifikasi pembayaran yang masuk.
Functional Requirements
74.	Form manajemen daftar rekening/nomor pembayaran manual: nama bank/e-wallet (mis. BCA, Mandiri, DANA, OVO), nomor rekening/nomor tujuan, dan nama pemilik rekening — dapat ditambah, diedit, diaktifkan/dinonaktifkan oleh admin kapan saja.
75.	Admin dapat menandai salah satu atau beberapa rekening sebagai "aktif ditampilkan" ke pengguna saat checkout, sehingga rotasi rekening (mis. saat rekening penuh/bermasalah) dapat dilakukan tanpa update aplikasi.
76.	Saat pengguna memilih metode transfer manual di aplikasi, sistem menampilkan nomor rekening yang sedang aktif beserta jumlah tagihan dan (disarankan) kode unik nominal (mis. Rp 45.000 + Rp 27 kode unik) agar admin dapat mencocokkan pembayaran masuk dengan transaksi yang tepat.
77.	Dashboard Admin menampilkan daftar transaksi berstatus "Menunggu Verifikasi" berikut bukti transfer yang diunggah pengguna (upload bukti bayar), dan admin dapat menekan tombol "Verifikasi & Aktifkan VIP" atau "Tolak" secara manual.
78.	Begitu admin menandai transaksi terverifikasi, status VIP pengguna otomatis aktif di aplikasi tanpa perlu aksi tambahan dari pengguna.
Business Rules
•	Nomor rekening yang ditampilkan ke pengguna WAJIB diambil dari data yang dikelola admin melalui dashboard, bukan nilai statis yang ditulis langsung di kode aplikasi (seperti pada prototype saat ini).
•	Aktivasi VIP melalui jalur transfer manual hanya boleh dilakukan oleh peran admin dengan hak akses "Finance/Verifikator" (lihat 7.13.6), dan tercatat log siapa yang memverifikasi serta kapan.
•	Metode transfer manual sebaiknya diposisikan sebagai pelengkap/cadangan, sementara QRIS/e-wallet/VA otomatis melalui payment gateway (lihat 7.11) tetap menjadi jalur utama — transfer manual memerlukan verifikasi manusia sehingga aktivasi VIP tidak instan dan berisiko human error/keterlambatan.
Edge Case / Perlu Diperhatikan
•	Pengguna transfer dengan nominal tidak sesuai/tanpa kode unik → transaksi tetap masuk status "Menunggu Verifikasi" dan admin perlu mencocokkan manual atau menghubungi pengguna, bukan otomatis ditolak sistem.
•	Bukti transfer tidak diunggah pengguna → beri tenggat waktu dan pengingat otomatis, transaksi kedaluwarsa otomatis jika tidak ada tindak lanjut dalam periode tertentu (mis. 24 jam).
7.13.6. Manajemen Pengguna, Role Admin & Log Aktivitas
Prioritas: Should Have
User Story
Sebagai pemilik produk, saya ingin memastikan hanya staf yang berwenang yang dapat mengubah harga, memverifikasi pembayaran, atau menerbitkan konten.
Functional Requirements
79.	Role admin minimal: Super Admin (akses penuh), Content Editor (kelola drama/episode/thumbnail/iklan saja), dan Finance/Verifikator (kelola rekening pembayaran & verifikasi transaksi saja).
80.	Daftar pengguna aplikasi (konsumen) dengan pencarian, status VIP, dan riwayat transaksi masing-masing, untuk kebutuhan dukungan pelanggan (mis. menelusuri komplain pembayaran).
81.	Log audit seluruh aksi sensitif: perubahan harga, publish/unpublish konten, verifikasi/penolakan transaksi manual, perubahan rekening pembayaran.
Business Rules
•	Login Dashboard Admin wajib menggunakan autentikasi terpisah dari akun pengguna aplikasi konsumen, dengan opsi 2FA untuk peran Super Admin dan Finance.
7.13.7. Dashboard Analitik & Ringkasan Bisnis (Admin)
Prioritas: Could Have
User Story
Sebagai pemilik produk, saya ingin melihat ringkasan performa konten dan pendapatan tanpa perlu membuka banyak sistem terpisah.
Functional Requirements
82.	Ringkasan angka utama: jumlah pengguna aktif, jumlah VIP aktif, pendapatan periode berjalan (gateway otomatis + transfer manual terverifikasi), dan drama terpopuler berdasarkan jumlah tontonan.
83.	Grafik tren harian/mingguan untuk views per drama dan funnel konversi paywall → checkout → sukses bayar.
Business Rules
•	Data analitik pada dashboard admin cukup diperbarui berkala (mis. tiap beberapa menit/jam), tidak wajib real-time ketat.
 
8. Model Data (Ringkas)
Struktur data berikut diturunkan dari mock data pada prototype dan diperluas untuk kebutuhan produksi (multi-user, backend tersentralisasi).
8.1 Entitas: Drama
Field	Tipe	Keterangan
id	string/UUID	Identifier unik drama
title	string	Judul drama
genre	string / array	Genre utama; produksi disarankan mendukung multi-genre
tag	string	Badge tampilan (Trending, Hot Drama, Dub Indo, dst.)
cover	URL	Gambar sampul (disarankan pakai CDN + berbagai resolusi)
synopsis	text	Ringkasan cerita
rating	float	Rata-rata rating agregat (baru, belum ada di prototype)
totalEpisodes	integer	Total episode dalam judul
freeEpisodeCount	integer	Jumlah episode gratis default (konfigurable per judul)
releaseDate	datetime	Untuk logika kategori "Terbaru" (belum ada di prototype)
status	enum	draft / published / archived
8.2 Entitas: Episode
Field	Tipe	Keterangan
id	UUID	Identifier unik episode
dramaId	FK	Relasi ke Drama
epNumber	integer	Nomor urut episode
title	string	Judul episode
description	text	Deskripsi/cuplikan adegan
bunnyVideoId	string (GUID)	ID video pada Bunny.net Stream — sumber kebenaran lokasi file video
bunnyLibraryId	string	ID Video Library Bunny.net tempat video disimpan
playbackUrl	URL (HLS, via Bunny CDN)	URL pemutaran adaptif dari Bunny CDN Pull Zone (idealnya signed/token-authenticated)
thumbnailUrl	URL	Thumbnail episode (upload manual admin atau auto-generated Bunny Stream)
durationSec	integer	Durasi video, diperoleh otomatis dari metadata Bunny Stream
processingStatus	enum	uploading / processing / ready / failed — mengikuti status encoding Bunny.net
isFreeDefault	boolean	Apakah gratis secara default
publishStatus	enum	draft / published / unpublished — dikontrol admin di Dashboard
8.3 Entitas: User
Field	Tipe	Keterangan
id	UUID	Identifier unik pengguna
authProvider	enum	google / apple / phone / guest
displayName	string	
email/phone	string	
vipStatus	enum	none / active / expired
vipExpiryDate	datetime	Tanggal berakhir langganan aktif
createdAt	datetime	
8.4 Entitas: UnlockedEpisode, WatchHistory, Favorite, Transaction
•	UnlockedEpisode: { userId, dramaId, episodeId, unlockMethod (free/ad/vip), unlockedAt } — menggantikan Set() in-memory pada prototype agar persisten di server.
•	WatchHistory: { userId, dramaId, episodeId, lastPositionSec, watchedAt } — mendukung fitur resume playback.
•	Favorite: { userId, dramaId, addedAt }
•	Transaction: { id, userId, package (weekly/monthly), amount, paymentMethod (gateway/manual_transfer), gatewayReferenceId, paymentAccountId, proofOfPaymentUrl, verifiedBy, status (pending/success/failed/expired/rejected), createdAt, paidAt }
8.5 Entitas Tambahan untuk Dashboard Admin
Entitas	Field Utama	Keterangan
AdminUser	id, name, email, role (super_admin/content_editor/finance), passwordHash, is2FAEnabled	Akun staf internal, terpisah dari akun pengguna konsumen
SubscriptionPlan	id, name, durationDays, price, promoLabel, isActive, validFrom, validUntil	Paket VIP yang dikelola dinamis oleh admin (menggantikan harga hardcoded)
PaymentAccount	id, channelType (bank/e-wallet), bankOrProviderName, accountNumber, accountHolderName, isActive	Daftar rekening/nomor tujuan transfer manual yang dikelola admin
AdSetting	id, adsEnabled, freeEpisodeCount, episodesUnlockedPerAd, dailyAdUnlockLimit, adUnitIds (per platform)	Konfigurasi perilaku iklan & paywall yang dapat diubah tanpa rilis ulang aplikasi
AuditLog	id, adminId, action, entityType, entityId, oldValue, newValue, createdAt	Jejak audit seluruh aksi sensitif admin (harga, publish konten, verifikasi transaksi)
 
9. Kebutuhan Non-Fungsional
Kategori	Kebutuhan
Performa	Waktu buka aplikasi (cold start) < 2.5 detik; episode berikutnya mulai diputar < 500ms setelah swipe (via preloading); First Contentful Paint Beranda < 2 detik pada jaringan 4G.
Keamanan	Semua status kepemilikan (VIP, episode terbuka) divalidasi & disimpan di server, bukan hanya klien. Kredensial payment gateway dan Firebase/API key produksi TIDAK boleh ditanam langsung sebagai literal di kode sisi klien tanpa pembatasan (App Check/domain restriction) — kunci pada prototype saat ini bersifat contoh dan wajib diganti kredensial produksi dengan pembatasan akses yang tepat.
Skalabilitas	Backend katalog & streaming harus mendukung pertumbuhan katalog (ratusan judul, ribuan episode) dan trafik streaming bersamaan — gunakan CDN video (mis. Cloudflare Stream, AWS CloudFront + MediaConvert, atau Mux) alih-alih hosting video statis.
Keandalan	Uptime layanan streaming & pembayaran ≥ 99.5%. Kegagalan pembayaran tidak boleh membuat status VIP "menggantung" — perlu job reconciliation berkala dengan gateway.
Aksesibilitas	Kontras warna teks memadai (khususnya teks putih di atas gambar/gradient sesuai standar WCAG AA), target tap area minimal 44x44px, dukungan pembesaran teks sistem.
Lokalisasi	Fase 1 penuh Bahasa Indonesia; arsitektur konten disiapkan agar dapat menambah subtitle/bahasa lain tanpa migrasi besar.
Kompatibilitas Perangkat	Mendukung Android 8+ dan iOS 14+ untuk aplikasi native; versi web-app minimal mendukung 2 versi terakhir Chrome, Safari, dan Samsung Internet.
Observability	Logging error klien (crash reporting) dan analitik event terpasang sejak awal (lihat bagian 13).
10. Arsitektur Teknis & Rekomendasi Stack
Prototype saat ini adalah aplikasi front-end tunggal (single HTML file) dengan Tailwind CSS, Lucide Icons, dan JavaScript vanilla, memakai data mock in-memory serta inisialisasi Firebase (Auth + Firestore) yang belum benar-benar terhubung ke logika fitur. Untuk versi produksi, direkomendasikan arsitektur berikut:
10.1 Frontend
•	Aplikasi mobile native atau cross-platform (React Native/Flutter) untuk performa video dan akses SDK iklan/pembayaran yang lebih baik dibanding web murni.
•	Jika tetap web/PWA, gunakan framework modern (React/Next.js) dengan pemutar video berbasis HLS.js dan state management terstruktur — menggantikan manipulasi DOM manual (innerHTML) pada prototype yang rawan bug dan sulit dipelihara.
10.2 Backend
•	Backend API terpusat (REST/GraphQL) untuk katalog, entitlement (kepemilikan episode/VIP), riwayat, dan transaksi — Firestore dapat dipertahankan sebagai database namun akses tulis status VIP/unlock HARUS melalui Cloud Functions tervalidasi, bukan ditulis langsung dari klien.
•	Integrasi payment gateway (Midtrans/Xendit) dengan endpoint webhook terverifikasi signature untuk update status transaksi & VIP secara aman.
•	Integrasi SDK iklan (AdMob/AppLovin) di sisi native, dengan verifikasi server-side reward callback bila SDK mendukung (S2S rewarded ad verification) untuk mencegah kecurangan.
10.3 Konten & Media — Integrasi Bunny.net
Sesuai keputusan produk, video di-hosting menggunakan Bunny.net Stream (Bunny Stream) sebagai layanan penyimpanan sekaligus CDN video, menggantikan animasi placeholder pada prototype.
•	Upload: Dashboard Admin mengunggah file video melalui Bunny Stream API (direct upload / TUS resumable upload) ke Video Library yang telah dibuat di akun Bunny.net.
•	Encoding: Bunny Stream otomatis melakukan transcoding ke berbagai bitrate/resolusi (adaptive HLS) sehingga aplikasi konsumen tidak perlu menangani proses encoding sendiri.
•	Thumbnail: Bunny Stream menyediakan thumbnail otomatis per video; admin dapat menimpanya dengan thumbnail manual bila diperlukan (lihat 7.13.2).
•	Playback: Aplikasi konsumen memutar video melalui URL HLS dari Bunny CDN Pull Zone. Untuk episode berbayar/VIP-only, disarankan mengaktifkan Token Authentication (signed URL dengan masa berlaku singkat) bawaan Bunny.net agar tautan video tidak dapat diakses langsung/dibagikan di luar aplikasi oleh pengguna yang belum berhak.
•	Keamanan kredensial: Library API Key dan Stream API Key Bunny.net hanya disimpan di server/backend Dashboard Admin (environment variable/secret manager), tidak pernah dikirim ke aplikasi konsumen.
•	Sinkronisasi status: begitu status video di Bunny Stream berubah menjadi "ready" (final encoding selesai), backend memperbarui `processingStatus` episode terkait — dapat dilakukan melalui polling terjadwal atau webhook Bunny.net apabila tersedia untuk paket akun yang digunakan.
10.4 Dashboard Admin (Panel Terpisah)
•	Dashboard Admin dibangun sebagai aplikasi web terpisah dari aplikasi konsumen (mis. domain admin.microdramatv.com), dengan backend API sendiri namun berbagi database katalog/transaksi yang sama.
•	Perubahan yang dipublikasikan admin (drama/episode baru, harga paket, pengaturan iklan, rekening pembayaran) diakses aplikasi konsumen melalui API katalog/konfigurasi yang sama — sehingga perubahan tampil di aplikasi tanpa perlu rilis ulang aplikasi mobile/web.
•	Akses Dashboard Admin dibatasi melalui autentikasi staf terpisah (lihat entitas AdminUser) dan idealnya dari jaringan/VPN terbatas atau minimal proteksi 2FA, mengingat panel ini mengendalikan harga, konten, dan verifikasi pembayaran.
11. Model Monetisasi & Strategi Harga
Sumber Pendapatan	Mekanisme	Catatan
Langganan VIP Mingguan	Rp 15.000 / 7 hari (referensi prototype)	Cocok untuk pengguna yang ingin menuntaskan 1-2 judul secara maraton
Langganan VIP Bulanan	Rp 45.000 / 30 hari (referensi prototype, ~30% lebih hemat)	Target utama konversi jangka panjang, auto-renewal
Rewarded Video Ads	Iklan CPM/CPI melalui SDK mediasi (AdMob/AppLovin)	Sumber pendapatan dari pengguna non-pembayar
(Opsional Fase 2) Pembelian Episode Satuan / Coin	Mikro-transaksi per episode/paket koin	Alternatif bagi pengguna yang hanya ingin 1 judul tertentu tanpa langganan penuh
Catatan: seluruh nominal harga bersifat referensi dari prototype dan wajib divalidasi ulang oleh tim bisnis berdasarkan riset kompetitor (ReelShort, DramaBox versi Indonesia) dan uji A/B harga sebelum peluncuran.
12. Kepatuhan & Legal
•	UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP): wajib ada kebijakan privasi eksplisit, persetujuan (consent) pengumpulan data, dan mekanisme permintaan penghapusan akun/data.
•	Kebijakan langganan berulang (auto-renewal) harus sesuai pedoman Google Play Billing dan Apple App Store (pemberitahuan sebelum penagihan, kemudahan pembatalan) apabila didistribusikan lewat kedua platform tersebut.
•	Klasifikasi usia/rating konten drama (beberapa tema seperti perselingkuhan, balas dendam, kekerasan dalam rumah tangga) perlu ditinjau agar sesuai pedoman konten Google Play/App Store dan tidak melanggar ketentuan platform iklan.
•	Integrasi payment gateway harus menggunakan penyedia jasa pembayaran (PJP) berizin Bank Indonesia/OJK (mis. Midtrans, Xendit, DOKU).
•	Ketentuan Layanan & Kebijakan Privasi (saat ini hanya disebut sebagai teks statis pada modal login) wajib berupa dokumen hukum aktif yang dapat diakses & disetujui secara eksplisit.
13. Analitik & KPI
Event tracking minimum yang perlu diinstrumentasi sejak versi produksi pertama:
Event	Kapan Terjadi	Tujuan
app_open	Aplikasi dibuka	DAU/MAU, retensi
drama_view	Pengguna membuka detail drama	Popularitas konten, CTR dari beranda
episode_start / episode_complete	Episode mulai/selesai diputar	Completion rate, drop-off per episode
paywall_shown	Overlay paywall muncul	Volume titik konversi
ad_watch_complete	Iklan reward selesai ditonton	Ad view rate, pendapatan iklan
vip_checkout_start / vip_purchase_success	Mulai checkout / pembayaran sukses	Funnel konversi & pendapatan langganan
mission_claimed	Klaim misi harian	Efektivitas gamifikasi terhadap retensi
favorite_added / share_clicked	Aksi engagement	Viralitas & loyalitas konten
Direkomendasikan menggunakan kombinasi Firebase Analytics/Amplitude untuk event produk dan dashboard bisnis terpisah untuk metrik finansial (pendapatan, ARPU, LTV).
14. Rencana Rilis / Roadmap
Fase 1 — MVP Produksi (Target: 8–10 minggu)
•	Backend katalog & entitlement dasar (menggantikan mock data & in-memory state)
•	Dashboard Admin: manajemen drama/episode, upload video ke Bunny.net Stream, upload thumbnail, dan alur publish
•	Dashboard Admin: manajemen harga paket VIP, pengaturan iklan (jumlah episode gratis, rasio unlock-per-iklan), dan manajemen rekening pembayaran manual
•	Autentikasi Google + akun tamu (aplikasi konsumen) dan autentikasi staf terpisah (Dashboard Admin)
•	Pemutar video real (HLS via Bunny CDN) menggantikan simulasi canvas
•	Paywall episode dengan validasi server-side
•	Integrasi payment gateway produksi (QRIS, e-wallet, VA) via Midtrans/Xendit, serta alur verifikasi transfer manual oleh admin sebagai pelengkap
•	Riwayat & favorit tersinkron server
•	Analitik dasar terpasang (aplikasi konsumen & ringkasan admin)
Fase 2 — Optimalisasi & Retensi (Target: +6–8 minggu)
•	Integrasi SDK rewarded ads produksi + verifikasi server-side
•	Sistem misi harian & gamifikasi penuh dengan reset berbasis server time
•	Push notification (episode baru, pengingat misi, promo VIP)
•	Panel admin/CMS untuk manajemen konten drama
•	Auto-renewal & manajemen langganan lengkap (upgrade/downgrade/cancel)
Fase 3 — Personalisasi & Skala (Target: berkelanjutan)
•	Rekomendasi berbasis machine learning untuk tab "Untuk Anda"
•	Multi-bahasa/subtitle
•	Fitur sosial ringan (like publik, share tracking, leaderboard misi)
•	Ekspansi katalog & kemitraan konten pihak ketiga
15. Risiko & Asumsi
15.1 Risiko
Risiko	Dampak	Mitigasi
Status VIP/unlock dapat dimanipulasi jika logika hanya di sisi klien	Kehilangan pendapatan langsung	Validasi & penyimpanan status sepenuhnya di server (lihat 7.11, 9)
Fill rate rendah pada rewarded ads di pasar Indonesia	Pengguna gratis terjebak tanpa jalur buka episode	Gunakan mediasi multi-jaringan iklan; sediakan fallback promo VIP
Ketergantungan konten pihak ketiga (lisensi drama)	Risiko hukum/hak cipta bila konten tidak berlisensi resmi	Pastikan seluruh judul memiliki hak distribusi/lisensi sah sebelum publikasi
Churn tinggi pasca masa promosi awal	Pendapatan langganan tidak stabil	Program retensi: pengingat konten baru, diskon perpanjangan, gamifikasi
Verifikasi pembayaran transfer manual bergantung pada kecepatan admin	Aktivasi VIP tertunda, pengalaman pengguna buruk, potensi human error	Terapkan kode unik nominal transfer, SLA verifikasi maksimum (mis. < 1 jam pada jam kerja), dan dorong migrasi bertahap ke metode otomatis (QRIS/VA) sebagai jalur utama
Kredensial Bunny.net API Key bocor/disalahgunakan	Video dapat diunggah/dihapus pihak tidak berwenang, biaya storage/bandwidth membengkak	Simpan API Key hanya di backend Dashboard Admin, aktifkan pembatasan akses & rotasi key berkala
Konten video VIP-only dapat dibagikan di luar aplikasi bila URL tidak diamankan	Kebocoran akses konten berbayar, kerugian pendapatan	Aktifkan Token Authentication (signed URL) Bunny.net dengan masa berlaku singkat untuk episode berbayar
15.2 Asumsi
•	Tim memiliki atau akan memperoleh hak distribusi sah atas konten drama yang ditayangkan.
•	Target awal peluncuran adalah pasar Indonesia dengan Bahasa Indonesia sebagai bahasa utama.
•	Aplikasi akan didistribusikan setidaknya melalui Google Play Store; distribusi App Store & web bersifat opsional/fase lanjutan.
16. Pertanyaan Terbuka
84.	Apakah konten drama akan diproduksi/dilisensikan sendiri, atau bekerja sama dengan agregator konten pihak ketiga?
85.	Apakah target platform utama adalah aplikasi native (Android/iOS) atau tetap web-app/PWA?
86.	Payment gateway mana yang akan menjadi mitra resmi (Midtrans/Xendit/DOKU/lainnya), dan bagaimana skema fee-nya?
87.	Apakah akan ada model coin/mikro-transaksi per-episode di luar langganan VIP pada fase awal?
88.	Berapa anggaran akuisisi pengguna (UA) dan target CAC yang dapat diterima untuk periode 6 bulan pertama?
89.	Apakah dibutuhkan dukungan multi-bahasa/subtitle sejak peluncuran awal mengingat potensi ekspansi regional?
 
17. Lampiran: Analisis Gap Prototype vs Kebutuhan Produksi
Ringkasan celah teknis utama yang ditemukan pada prototype HTML/JS yang perlu ditutup sebelum rilis produksi.
Area	Kondisi pada Prototype	Rekomendasi Produksi
Data Drama & Episode	Array JavaScript statis (hardcoded) di dalam kode	Backend/CMS dinamis dengan API katalog
Video Playback & Hosting	Animasi canvas partikel sebagai pengganti video sungguhan; tidak ada mekanisme upload video	Video di-hosting & di-stream via Bunny.net Stream (upload dari Dashboard Admin, playback via Bunny CDN HLS, lihat 7.13.1 & 10.3)
Panel Admin/CMS	Tidak ada sama sekali — seluruh drama, episode, harga, dan pengaturan iklan tertulis langsung di kode aplikasi	Dashboard Admin terpisah untuk kelola konten, harga, iklan, dan rekening pembayaran manual (lihat 7.13)
Rekening/Nomor Pembayaran	Tidak ada; hanya simulasi gateway otomatis	Dikelola dinamis oleh admin (entitas PaymentAccount) dengan alur verifikasi transaksi manual (lihat 7.13.5)
Status VIP & Unlock Episode	Disimpan di variabel in-memory (`state`), hilang saat refresh, dapat dimanipulasi via console	Disimpan & divalidasi di server per akun pengguna
Pembayaran	Tombol "Konfirmasi Selesai Bayar" memicu sukses secara manual tanpa verifikasi gateway sungguhan	Payment gateway resmi (Midtrans/Xendit) dengan webhook signature verification
Autentikasi	Tombol Google Sign-In adalah tiruan visual (tidak memanggil OAuth sungguhan); modul Firebase diinisialisasi namun hanya melakukan sign-in anonim dan belum terhubung ke fitur	OAuth 2.0 Google Sign-In fungsional, tersambung ke seluruh state pengguna (VIP, riwayat, favorit)
Iklan	Layar simulasi iklan dengan progress bar dummy	SDK rewarded ads produksi (AdMob/AppLovin) dengan verifikasi reward
Riwayat & Favorit	Disimpan di memori browser (hilang saat reload)	Tersimpan di database server, tersinkron lintas perangkat
Kredensial Konfigurasi	Firebase config (apiKey, dsb.) berupa nilai contoh tertulis langsung di kode	Kredensial produksi dikelola melalui environment/secret management dengan pembatasan domain/App Check
Kategori "Terbaru"	Logika `array.slice(1)` tanpa dasar tanggal rilis	Filter berbasis field `releaseDate` aktual
— Akhir Dokumen —

PRODUCT REQUIREMENTS DOCUMENT
MicroDrama TV (MD TV)
Platform Streaming Drama Vertikal Berbasis Episode (Short Drama App)
Disusun berdasarkan analisis prototype MVP "MicroDrama TV" (drama_fuad.html)
Atribut	Detail
Nama Produk	MicroDrama TV (MD TV)
Jenis Dokumen	Product Requirements Document (PRD)
Versi	1.1
Tanggal	18 Juli 2026 (revisi: penambahan spesifikasi Dashboard Admin/CMS)
Status	Draft untuk Review
Sumber	Reverse-engineered dari prototype HTML/JS (frontend-only, mock data)
Kategori Produk	Vertical Short Drama / Micro-Drama Streaming App (mirip ReelShort, DramaBox, NetShort)
 
1. Ringkasan Eksekutif
MicroDrama TV (MD TV) adalah aplikasi streaming "micro-drama" atau "short drama" vertikal — konten drama serial berdurasi pendek (1-3 menit per episode) yang dikonsumsi dalam format video 9:16, mengikuti tren global yang dipopulerkan aplikasi seperti ReelShort, DramaBox, dan NetShort. Produk ini menyasar pasar Indonesia dengan konten drama ber-genre miliarder, romantis, dan balas dendam yang di-dubbing/disulihsuarakan ke Bahasa Indonesia.
Model bisnis utama adalah freemium dengan mekanisme "coinless paywall": setiap drama menyediakan 1-2 episode pertama gratis, episode selanjutnya dikunci dan dapat dibuka dengan (a) menonton iklan video sisipan, atau (b) berlangganan paket VIP untuk akses penuh tanpa iklan ke seluruh katalog. Pembayaran VIP mendukung metode lokal Indonesia: QRIS, DANA, dan Virtual Account bank.
Dokumen ini disusun berdasarkan analisis menyeluruh terhadap prototype front-end (HTML/Tailwind/JavaScript) yang telah dibangun, mencakup seluruh alur pengguna, komponen UI, dan logika bisnis yang telah disimulasikan di sisi klien. Prototype saat ini menggunakan data drama statis (mock data) dan pembayaran simulasi (sandbox palsu) — dokumen ini mendefinisikan kebutuhan produk secara lengkap agar prototype dapat dikembangkan menjadi produk produksi yang solid, aman, dan siap diskalakan.
Dokumen ini ditujukan bagi Product Manager, UI/UX Designer, Engineering Lead (Frontend, Backend, Mobile), QA, dan pemangku kepentingan bisnis (Growth & Monetization) sebagai acuan tunggal kebutuhan produk.
2. Latar Belakang & Peluang Pasar
2.1 Konteks Pasar
•	Tren "micro-drama" / "short drama vertikal" tumbuh pesat secara global sejak 2023–2025, dipelopori aplikasi asal Tiongkok (ReelShort, DramaBox, ShortMax) yang kini merambah pasar Asia Tenggara termasuk Indonesia.
•	Konsumsi video vertikal singkat (format TikTok/Reels) sudah menjadi kebiasaan mayoritas pengguna mobile Indonesia, sehingga adopsi format konten ini relatif rendah friksi.
•	Model monetisasi hybrid (iklan + langganan) terbukti efektif pada kategori ini karena mayoritas pengguna sensitif harga namun bersedia menonton iklan atau membayar nominal kecil (mikro-transaksi) demi kelanjutan cerita.
•	Metode pembayaran lokal (QRIS, e-wallet, VA) adalah keharusan mutlak untuk konversi di pasar Indonesia — kartu kredit bukan metode utama.
2.2 Masalah yang Diselesaikan
•	Pengguna ingin hiburan cerita drama yang padat, adiktif, dan bisa dikonsumsi kapan saja dalam waktu singkat (commuting, jeda kerja), tanpa komitmen menonton serial panjang.
•	Kreator/penerbit konten drama pendek membutuhkan platform distribusi dengan monetisasi yang jelas dan terukur.
2.3 Peluang Bisnis
•	Pendapatan ganda: pendapatan iklan (impresi + reward ad) dan pendapatan langganan berulang (VIP mingguan/bulanan).
•	Potensi retensi tinggi melalui mekanisme cliffhanger per-episode dan sistem misi harian (daily check-in, gamifikasi).
3. Tujuan & Sasaran Produk
3.1 Tujuan Produk
1.	Menyediakan pengalaman menonton drama vertikal yang cepat, mulus, dan adiktif dengan navigasi swipe layaknya media sosial short-video.
2.	Memaksimalkan konversi pengguna gratis menjadi pelanggan VIP berbayar melalui paywall episode yang persuasif namun tidak mengganggu (non-intrusive).
3.	Menyediakan jalur monetisasi alternatif melalui iklan tervalidasi (rewarded video ads) bagi pengguna yang belum ingin membayar.
4.	Membangun kebiasaan harian pengguna melalui gamifikasi (misi harian, check-in, reward bebas iklan sementara).
3.2 Sasaran Terukur (Success Metrics) — Indikatif 6 Bulan Pasca Peluncuran
Metrik	Target Indikatif	Keterangan
DAU/MAU Ratio (Stickiness)	≥ 20%	Mengindikasikan kebiasaan menonton harian
D1 Retention	≥ 35%	Standar industri aplikasi hiburan mobile
D7 Retention	≥ 15%	
Free-to-VIP Conversion Rate	3% – 6%	Dari total pengguna terdaftar aktif bulanan
Rewarded Ad View Rate	≥ 40%	Dari pengguna non-VIP yang menemui paywall
Episode Completion Rate	≥ 60%	Rasio penonton yang menyelesaikan episode yang dimulai
ARPU (Average Revenue per User)	Ditentukan tim Growth	Baseline diukur pasca 3 bulan live
Churn VIP Bulanan	< 15%	
4. Target Pengguna & Persona
4.1 Profil Demografis Utama
•	Perempuan & pria usia 18–40 tahun, mayoritas pengguna aktif media sosial short-video (TikTok, Reels, Shorts).
•	Pengguna mobile-first di Indonesia, terbiasa dengan metode pembayaran digital (QRIS/e-wallet).
•	Penggemar genre drama populer: cinta terlarang, balas dendam, kisah miliarder/CEO, keluarga.
4.2 Persona
Persona	Deskripsi	Kebutuhan Utama	Perilaku Monetisasi
"Rani" – Penonton Kasual	Wanita 24 th, karyawan kantoran, menonton saat commuting/istirahat.	Konten cepat, bisa berhenti kapan saja, tidak ribet.	Menonton iklan untuk buka episode, jarang berlangganan.
"Dimas" – Penggemar Berat (Binge-watcher)	Pria 29 th, suka menyelesaikan cerita dalam sekali duduk.	Akses instan semua episode, bebas iklan.	Kandidat kuat konversi VIP bulanan.
"Sari" – Pemburu Promo	Wanita 31 th, sensitif harga, suka reward/misi.	Cara gratis membuka episode, hadiah harian.	Aktif di tab Hadiah, mengandalkan iklan & check-in.
5. Ruang Lingkup Produk
5.1 Dalam Lingkup (In-Scope) — MVP Produksi
•	Autentikasi pengguna (Google Sign-In / Sign-In With Apple / nomor HP)
•	Katalog drama dengan pencarian dan filter kategori/genre
•	Halaman detail drama (sinopsis, rating, daftar episode)
•	Pemutar video vertikal dengan navigasi swipe antar-episode
•	Sistem paywall episode berbasis coinless (gratis N episode pertama)
•	Rewarded video ads untuk membuka episode terkunci
•	Langganan VIP (mingguan & bulanan) dengan akses penuh tanpa iklan
•	Integrasi payment gateway lokal (QRIS, e-wallet, Virtual Account)
•	Sistem misi harian & gamifikasi (check-in, berbagi, tonton iklan)
•	Riwayat tontonan & daftar favorit pengguna
•	Halaman profil & manajemen akun/langganan
•	Sistem notifikasi dalam-aplikasi (toast) dan (fase selanjutnya) push notification
•	Dashboard Admin (CMS) untuk manajemen konten drama/episode, upload video ke Bunny.net, dan manajemen data rekening pembayaran manual
5.2 Di Luar Lingkup (Out-of-Scope) — Fase 1
•	Fitur sosial: komentar, forum, rating/review publik antar-pengguna
•	Multi-bahasa/multi-subtitle (fase 1 hanya Bahasa Indonesia dubbing)
•	Konten user-generated / upload drama oleh kreator eksternal
•	Fitur unduh video untuk ditonton offline
•	Aplikasi companion Smart TV / Android TV
•	Sistem rekomendasi berbasis machine learning yang kompleks (fase 1 memakai aturan sederhana/manual curation)
 
6. Alur Pengguna Utama (Core User Flows)
Alur	Langkah Utama
Onboarding & Penemuan Konten	Splash screen → Beranda (tanpa wajib login) → cari/filter kategori → buka detail drama
Menonton Episode Gratis	Detail drama → pilih episode gratis → pemutar video → swipe ke episode berikutnya
Terkena Paywall	Swipe ke episode terkunci → overlay paywall muncul → pilih "Tonton Iklan" ATAU "Aktifkan VIP"
Buka via Iklan	Tekan "Tonton 1 Iklan Video" → layar simulasi iklan (durasi berjalan) → episode +1/+2 otomatis terbuka → kembali ke player
Konversi ke VIP	Tekan "Aktifkan VIP" → pilih paket (mingguan/bulanan) → pilih metode bayar (QRIS/DANA/VA) → checkout → gateway pembayaran → konfirmasi sukses → status VIP aktif di seluruh app
Autentikasi	Pengguna memicu aksi yang butuh akun (mis. checkout VIP) → modal Google Sign-In → autentikasi → sesi tersimpan lintas perangkat
Gamifikasi Harian	Tab Hadiah → cek status misi harian → tonton iklan misi / check-in / bagikan drama → klaim reward (episode bonus / bebas iklan sementara)
Manajemen Koleksi	Tab Daftar Saya → lihat riwayat tontonan terakhir → lanjut menonton dari titik terakhir, atau kelola daftar favorit
 
7. Spesifikasi Fitur Detail
Setiap fitur berikut memetakan langsung ke modul yang telah ada pada prototype, dilengkapi kebutuhan fungsional untuk versi produksi.
7.1. Splash Screen & Onboarding
Prioritas: Must Have
User Story
Sebagai pengguna baru, saya ingin melihat identitas merek yang jelas saat membuka aplikasi agar saya mengenali dan mempercayai aplikasi ini.
Functional Requirements
5.	Menampilkan logo, nama aplikasi, dan tagline selama maksimal 2–2.5 detik sebelum transisi ke Beranda.
6.	Splash harus di-cache secara native (bukan render ulang tiap kali) pada versi aplikasi mobile.
7.	Tidak memblokir pengguna dengan proses loading yang lebih lama dari yang diperlukan — gunakan splash sebagai waktu prefetch data katalog awal.
Business Rules
•	Pengguna tidak wajib login untuk mengakses Beranda dan menonton episode gratis (guest browsing diperbolehkan).
Edge Case / Perlu Diperhatikan
•	Jika koneksi lambat, splash harus punya fallback timeout dan menampilkan state error/retry, bukan layar putih/hitam tanpa akhir.
7.2. Autentikasi Pengguna
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin masuk dengan akun Google agar status VIP dan riwayat tontonan saya tersimpan di semua perangkat.
Functional Requirements
8.	Menyediakan Google Sign-In (OAuth 2.0) sebagai metode utama; direkomendasikan menambah Sign-In With Apple untuk iOS dan opsi nomor HP + OTP untuk menjangkau pengguna tanpa akun Google.
9.	Membuat akun tamu (guest/anonymous) otomatis saat instalasi pertama agar histori tontonan tetap tersinkron secara lokal sebelum login, lalu digabungkan (merge) begitu pengguna login.
10.	Menyimpan sesi menggunakan token yang aman (refresh token) agar pengguna tidak perlu login ulang setiap membuka aplikasi.
11.	Prompt login hanya ditampilkan pada titik keputusan penting (checkout VIP, klaim reward tertentu) — bukan memblokir penjelajahan konten gratis.
Business Rules
•	Satu akun VIP terhubung ke satu identitas pengguna (Google ID / nomor HP terverifikasi), bukan ke perangkat.
•	Data anonim pengguna sebelum login harus di-merge, bukan dihapus, saat pengguna login.
Edge Case / Perlu Diperhatikan
•	Login gagal/dibatalkan pengguna → kembali ke state sebelumnya tanpa error yang mengganggu alur.
7.3. Beranda (Home) — Katalog & Discovery
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin menjelajahi dan mencari drama berdasarkan kategori favorit saya dengan cepat.
Functional Requirements
12.	Search bar dengan pencarian real-time (debounced) berdasarkan judul dan genre.
13.	Filter kategori horizontal: Semua, Terbaru, dan genre-genre utama (Miliarder, Romantis, Balas Dendam, dst.) — daftar genre harus dikelola secara dinamis dari backend/CMS, bukan hardcoded.
14.	Hero banner menampilkan konten unggulan/trending, idealnya carousel multi-slide dengan auto-rotate.
15.	Grid rekomendasi personalisasi ("Rekomendasi Terpanas") menampilkan cover, judul, genre, dan badge (mis. Trending, Baru, Dub Indo).
16.	Infinite scroll / paginasi untuk grid drama saat katalog bertambah besar (prototype saat ini me-render seluruh data sekaligus, tidak scalable untuk katalog besar).
Business Rules
•	Hasil pencarian kosong harus menampilkan empty state yang jelas dan sugesti (mis. kategori populer), bukan grid kosong tanpa keterangan.
Edge Case / Perlu Diperhatikan
•	Genre "Terbaru" pada prototype saat ini hanya melakukan slice array tanpa logika tanggal rilis — versi produksi wajib menggunakan field `releaseDate` aktual.
7.4. Untuk Anda (Personalized Feed)
Prioritas: Should Have
User Story
Sebagai pengguna, saya ingin ditawari klip/potongan drama yang relevan dengan selera saya tanpa harus mencari manual.
Functional Requirements
17.	Fase 1: Feed berbasis aturan sederhana (rule-based) — kombinasi drama trending, genre yang sering ditonton, dan drama belum selesai ditonton.
18.	Fase 2: Model rekomendasi kolaboratif/berbasis konten menggunakan sinyal watch-time, like, dan completion rate.
19.	Pengalaman swipe vertikal langsung memutar potongan (preview) episode, konsisten dengan pemutar video utama.
Business Rules
•	Feed tidak boleh menampilkan drama yang sudah 100% VIP-locked kepada pengguna yang belum login/VIP tanpa jalur konversi yang jelas.
7.5. Halaman Detail Drama
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin melihat sinopsis dan daftar episode sebelum memutuskan menonton, serta menyimpannya ke favorit.
Functional Requirements
20.	Menampilkan cover, judul, genre/tag, rating, jumlah episode, bahasa (dubbing/original+subtitle), dan sinopsis lengkap.
21.	Grid episode dengan indikator status: gratis, terkunci, atau sudah ditonton (perlu ditambahkan — prototype belum membedakan "terkunci" vs "sudah ditonton").
22.	Tombol simpan/hapus dari favorit dan tombol bagikan (deep link ke drama spesifik).
23.	Rating harus berasal dari data agregat riil (rata-rata rating pengguna atau editorial), bukan angka statis seperti pada prototype.
Business Rules
•	Episode ke-1 dan ke-2 setiap judul default gratis (dapat dikonfigurasi per judul melalui CMS/admin panel).
7.6. Pemutar Video Vertikal (Core Player)
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin menonton episode secara mulus dan berpindah episode berikutnya hanya dengan swipe, seperti menonton reels.
Functional Requirements
24.	Player video 9:16 full-screen dengan kontrol: tap untuk play/pause, swipe atas/bawah untuk episode selanjutnya/sebelumnya.
25.	Streaming adaptif (HLS/DASH) dengan multi-bitrate agar buffering minimal pada koneksi lambat — prototype saat ini menggunakan animasi canvas sebagai pengganti video asli dan wajib diganti dengan real video player (mis. ExoPlayer/AVPlayer/HLS.js) di versi produksi.
26.	Tombol Like, Share, dan drawer pemilihan episode cepat.
27.	Preload episode berikutnya di background untuk transisi swipe yang instan.
28.	Auto-resume dari posisi terakhir ditonton (resume playback position) bila pengguna kembali menonton episode yang sama.
29.	Menyimpan progres tontonan ke riwayat (history) segera setelah episode mulai diputar.
Business Rules
•	Swipe ke episode terkunci memicu overlay paywall (lihat 7.7), video tidak diputar sebelum akses diberikan.
Edge Case / Perlu Diperhatikan
•	Autoplay dengan suara harus menghormati kebijakan autoplay platform (mobile browser/App Store) — video sebaiknya mulai muted lalu unmute saat interaksi pertama jika berjalan di web.
7.7. Model Monetisasi: Paywall Episode & Rewarded Ads
Prioritas: Must Have
User Story
Sebagai pengguna gratis, saya ingin punya opsi membuka episode selanjutnya tanpa membayar, dengan menonton iklan.
Functional Requirements
30.	Saat episode terkunci diakses, tampilkan overlay paywall dengan dua opsi setara: "Tonton 1 Iklan Video" dan "Aktifkan VIP".
31.	Integrasi SDK rewarded ads pihak ketiga (mis. Google AdMob Rewarded, AppLovin MAX, Unity Ads) — prototype saat ini memakai simulasi iklan statis (progress bar dummy) dan wajib diganti SDK nyata.
32.	Setelah iklan selesai ditonton penuh (tidak di-skip), sistem otomatis membuka 1–2 episode berikutnya dan mencatat hal ini di backend agar konsisten lintas perangkat/sesi.
33.	Batasi jumlah unlock-via-iklan per hari per pengguna untuk menjaga keseimbangan monetisasi (dikonfigurasi backend, mis. maksimal 10 unlock/hari).
Business Rules
•	Status episode terbuka (unlocked) harus disimpan di server per akun pengguna, bukan hanya di memori/local state klien (agar tidak hilang saat re-install atau ganti perangkat).
•	Pengguna VIP melewati seluruh paywall tanpa pengecualian selama masa langganan aktif.
Edge Case / Perlu Diperhatikan
•	Iklan gagal dimuat (fill rate rendah) → sediakan fallback pesan yang jujur dan tawarkan opsi VIP, jangan biarkan pengguna terjebak di layar loading.
7.8. Hadiah & Misi Harian (Gamifikasi)
Prioritas: Should Have
User Story
Sebagai pengguna yang sensitif harga, saya ingin mendapatkan akses tambahan gratis dengan menyelesaikan misi sederhana setiap hari.
Functional Requirements
34.	Misi harian: menonton N iklan misi, check-in harian, dan berbagi drama ke media sosial/WhatsApp/Telegram.
35.	Progress misi ditampilkan real-time (mis. "Menonton 2/3 Iklan Misi") dan direset otomatis setiap 24 jam (server time, bukan waktu lokal perangkat, untuk mencegah kecurangan).
36.	Reward berupa "bebas iklan sementara" atau "episode bonus" harus tervalidasi di server agar tidak dapat dimanipulasi dari sisi klien.
37.	Verifikasi aksi berbagi (share) idealnya menggunakan deep link tracking, bukan hanya asumsi klik tombol.
Business Rules
•	Reward harian bersifat sekali klaim per jenis misi per hari per akun.
7.9. Daftar Saya (Riwayat & Favorit)
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin melanjutkan drama yang sedang saya tonton dan mengakses cepat drama favorit saya.
Functional Requirements
38.	Riwayat tontonan menampilkan drama & episode terakhir ditonton, diurutkan dari yang paling baru, dengan aksi "lanjutkan menonton".
39.	Daftar favorit menampilkan seluruh drama yang ditandai favorit dengan opsi hapus.
40.	Data riwayat & favorit tersinkron ke server per akun (bukan hanya in-memory seperti pada prototype saat ini, yang hilang saat refresh halaman).
Business Rules
•	Riwayat dibatasi maksimal N entri terbaru yang ditampilkan (mis. 50), dengan opsi "lihat semua".
7.10. Profil & Pengaturan Akun
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin melihat status keanggotaan saya dan mengakses bantuan/dukungan dengan mudah.
Functional Requirements
41.	Menampilkan nama, identitas akun, badge status VIP (aktif/tidak) beserta tanggal kedaluwarsa langganan.
42.	Menu "Dompet Saya & Transaksi" menampilkan riwayat pembayaran/invoice yang jelas (nomor transaksi, tanggal, nominal, status).
43.	Menu bantuan terhubung ke kanal dukungan resmi (live chat/WhatsApp Business/helpdesk), bukan nomor statis pada kode.
44.	Opsi logout dan hapus akun (wajib untuk kepatuhan UU Pelindungan Data Pribadi/PDP).
Business Rules
•	Badge VIP harus real-time reflect status langganan dari backend, termasuk auto-update saat langganan berakhir/diperbarui.
7.11. Langganan VIP & Checkout Pembayaran
Prioritas: Must Have
User Story
Sebagai pengguna, saya ingin berlangganan VIP dengan cepat menggunakan metode pembayaran lokal yang saya percaya.
Functional Requirements
45.	Menyediakan minimal dua paket: VIP Mingguan (referensi harga prototype: Rp 15.000) dan VIP Bulanan (referensi harga prototype: Rp 45.000, mengklaim hemat ~30%) — harga final ditentukan tim bisnis & dapat dikelola dinamis dari backend.
46.	Metode pembayaran: QRIS (GoPay/OVO/ShopeePay dsb.), DANA direct, dan Virtual Account bank (BCA/Mandiri/BRI/BNI).
47.	Integrasi payment gateway resmi berlisensi (mis. Midtrans, Xendit, atau DOKU) menggantikan simulator gateway pada prototype — mencakup webhook konfirmasi pembayaran server-to-server, bukan tombol "Konfirmasi Selesai Bayar" manual yang dapat dipicu pengguna sendiri.
48.	Auto-renewal (perpanjangan otomatis) untuk paket bulanan dengan pemberitahuan H-3 sebelum penagihan, serta opsi berhenti berlangganan (cancel) yang jelas.
49.	Menampilkan invoice/struk digital pasca-pembayaran berhasil.
Business Rules
•	Status VIP HANYA diaktifkan setelah menerima konfirmasi sukses resmi dari payment gateway (webhook), tidak pernah dari input/aksi sisi klien semata — ini adalah temuan kritikal dari prototype yang harus diperbaiki sebelum produksi.
•	Kode Virtual Account harus unik per transaksi dan punya batas waktu pembayaran (mis. 24 jam) sesuai kebijakan gateway.
Edge Case / Perlu Diperhatikan
•	Pembayaran pending/gagal/timeout harus punya state UI tersendiri (bukan hanya sukses/tidak ada respons).
7.12. Notifikasi & Umpan Balik Sistem
Prioritas: Should Have
User Story
Sebagai pengguna, saya ingin mendapat konfirmasi jelas dan cepat atas setiap aksi yang saya lakukan.
Functional Requirements
50.	Toast notification untuk aksi ringan (tersimpan ke favorit, tautan disalin, dsb.) — sudah ada di prototype dan dipertahankan.
51.	Push notification (fase 2) untuk pengingat episode baru dari drama favorit, promo VIP, dan pengingat misi harian yang belum diklaim.
52.	Notifikasi transaksional (email/WhatsApp) untuk konfirmasi pembayaran dan pengingat perpanjangan langganan.
Business Rules
•	Push notification harus melalui opt-in eksplisit sesuai kebijakan platform (iOS/Android) dan regulasi privasi.
 
7.13 Dashboard Admin (Content & Business Management System)
Dashboard Admin adalah panel internal berbasis web (terpisah dari aplikasi konsumen) yang digunakan tim internal (content team, finance, operasional) untuk mengelola seluruh konten dan konfigurasi bisnis aplikasi tanpa perlu mengubah kode program. Ini menggantikan seluruh data hardcoded pada prototype (daftar drama, episode, harga paket, dsb.) dengan sistem manajemen yang dinamis.
7.13.1. Manajemen Drama & Upload Video Episode (Integrasi Bunny.net)
Prioritas: Must Have
User Story
Sebagai admin konten, saya ingin membuat judul drama baru dan mengunggah video untuk setiap episode/part secara terpisah, agar video tersebut otomatis tampil di aplikasi setelah selesai diunggah.
Functional Requirements
53.	Form "Tambah Drama Baru" berisi: judul, genre/tag, sinopsis, bahasa (dubbing/subtitle), dan status (draft/publish).
54.	Di dalam satu drama, admin dapat menambahkan episode/part satu per satu secara berurutan (Part 1, Part 2, dst.), masing-masing dengan judul episode, deskripsi/cuplikan adegan, dan penanda "Gratis" atau "Terkunci (VIP/Iklan)".
55.	Upload video dilakukan langsung ke Bunny.net Stream melalui Bunny Stream API (disarankan menggunakan TUS resumable upload agar unggahan file besar tahan gangguan koneksi), bukan disimpan di server aplikasi sendiri.
56.	Setiap episode yang diunggah akan mendapatkan `videoId`/GUID dari Bunny Stream, yang disimpan di database sebagai referensi pemutaran (bukan menyimpan file video itu sendiri di database aplikasi).
57.	Dashboard menampilkan status pemrosesan video secara real-time: "Mengunggah" → "Sedang Diproses/Encoding" → "Siap Tayang" — mengikuti status encoding dari Bunny Stream (via polling API atau webhook Bunny bila tersedia).
58.	Video yang berstatus "Siap Tayang" dan drama/episode berstatus "Publish" akan OTOMATIS muncul di aplikasi konsumen tanpa perlu deploy ulang aplikasi — cukup melalui pembaruan data dari API katalog.
59.	Admin dapat mengatur ulang urutan episode/part (drag-and-drop atau field nomor urut) serta mengedit/menghapus/menonaktifkan (unpublish) episode yang sudah tayang.
60.	Validasi format file di sisi admin (mis. mp4/mov, resolusi minimum, durasi maksimum) sebelum upload dimulai agar konsisten dengan format vertikal 9:16.
Business Rules
•	Video tidak boleh tampil ke pengguna sebelum berstatus "Siap Tayang" dari Bunny.net DAN drama/episode ditandai "Publish" oleh admin — dua syarat ini harus terpenuhi bersamaan.
•	Kredensial API Key Bunny.net (Library API Key, Stream API Key) hanya boleh digunakan di sisi server/backend admin, tidak pernah diekspos ke aplikasi konsumen atau browser publik.
•	Pemutaran video di aplikasi konsumen menggunakan Bunny CDN Pull Zone / HLS playback URL, idealnya dengan Token Authentication (signed URL) milik Bunny.net agar tautan video tidak dapat diakses/dibagikan bebas oleh pengguna non-VIP di luar aplikasi.
Edge Case / Perlu Diperhatikan
•	Upload terputus di tengah jalan (koneksi admin terputus) → didukung resume otomatis via TUS, admin tidak perlu mengunggah ulang dari awal.
•	Encoding gagal di sisi Bunny.net → dashboard menampilkan status "Gagal Diproses" dengan opsi unggah ulang, bukan diam-diam menampilkan episode kosong ke pengguna.
7.13.2. Manajemen Thumbnail & Metadata Tampilan
Prioritas: Must Have
User Story
Sebagai admin konten, saya ingin mengunggah gambar sampul (cover) drama dan thumbnail per episode agar tampilan katalog di aplikasi menarik dan konsisten.
Functional Requirements
61.	Upload thumbnail/cover drama (untuk grid katalog & hero banner) dan thumbnail per episode/part (opsional, untuk drawer pemilihan episode) melalui form yang sama dengan manajemen drama/episode.
62.	Thumbnail disimpan di object storage (disarankan Bunny.net Storage/CDN agar satu ekosistem dengan video, atau layanan storage gambar lain yang sudah dipakai tim) dan diakses melalui CDN untuk kecepatan muat yang konsisten dengan katalog.
63.	Preview otomatis ukuran gambar sebelum publish (rasio disarankan: 3:4 untuk cover katalog, 16:9 atau 9:16 untuk banner/hero sesuai posisi tampil).
64.	Bunny Stream juga menyediakan thumbnail otomatis hasil ekstraksi dari video (auto-generated thumbnail) yang dapat dipakai sebagai default apabila admin belum mengunggah thumbnail manual.
65.	Badge/tag tampilan (mis. "Trending", "Dub Indo", "Baru") dapat diatur manual oleh admin per judul drama.
Business Rules
•	Ukuran file thumbnail dibatasi (mis. maksimum 2MB) dan divalidasi format (JPEG/PNG/WebP) sebelum diunggah.
7.13.3. Manajemen Iklan (Ad Settings)
Prioritas: Must Have
User Story
Sebagai admin bisnis, saya ingin mengatur perilaku iklan untuk pengguna non-VIP tanpa perlu melibatkan tim teknis, agar strategi monetisasi dapat disesuaikan kapan saja.
Functional Requirements
66.	Panel konfigurasi iklan berisi: aktif/nonaktifkan iklan secara global, jumlah episode gratis awal per drama (default N episode sebelum paywall), jumlah episode yang terbuka setelah 1 iklan berhasil ditonton (mis. 1 iklan = buka 2 episode), dan batas maksimum unlock-via-iklan per pengguna per hari.
67.	Pengaturan penyedia/SDK iklan (mis. Google AdMob, AppLovin MAX) beserta Ad Unit ID per platform (Android/iOS/Web), sehingga pergantian jaringan iklan tidak memerlukan rilis ulang aplikasi.
68.	Pengaturan misi iklan harian pada tab Hadiah (jumlah iklan yang harus ditonton, reward yang didapat) dapat diubah admin tanpa mengubah kode.
69.	Admin dapat mengatur pengecualian: drama/episode tertentu yang selalu gratis tanpa iklan (untuk promosi) atau selalu terkunci penuh (VIP-only, tidak bisa dibuka lewat iklan sama sekali).
Business Rules
•	Pengguna berstatus VIP aktif selalu melewati seluruh iklan, terlepas dari pengaturan yang dibuat admin.
7.13.4. Manajemen Harga & Paket Langganan VIP
Prioritas: Must Have
User Story
Sebagai admin bisnis, saya ingin mengubah harga dan detail paket VIP kapan saja (misalnya untuk promo) tanpa menunggu rilis aplikasi baru.
Functional Requirements
70.	CRUD paket langganan: nama paket, durasi (mingguan/bulanan/lainnya), harga, label promo (mis. "Hemat 30%"), dan status aktif/nonaktif.
71.	Admin dapat membuat paket promosi sementara dengan periode berlaku (tanggal mulai–selesai) yang otomatis tampil/hilang di aplikasi sesuai jadwal.
72.	Perubahan harga TIDAK memengaruhi pengguna yang sudah membayar dengan harga lama pada periode langganan berjalan (grandfathering), hanya berlaku untuk transaksi baru.
73.	Pratinjau tampilan paket sebagaimana akan terlihat di halaman checkout aplikasi, sebelum admin mempublikasikan perubahan harga.
Business Rules
•	Setiap perubahan harga tercatat di log audit (siapa, kapan, harga lama → harga baru) untuk kebutuhan akuntansi dan audit internal.
7.13.5. Manajemen Rekening/Nomor Pembayaran Manual & Verifikasi Transaksi
Prioritas: Must Have
User Story
Sebagai admin finance, saya ingin memasukkan dan mengelola nomor rekening bank/e-wallet secara manual yang ditampilkan kepada pengguna sebagai tujuan transfer, serta memverifikasi pembayaran yang masuk.
Functional Requirements
74.	Form manajemen daftar rekening/nomor pembayaran manual: nama bank/e-wallet (mis. BCA, Mandiri, DANA, OVO), nomor rekening/nomor tujuan, dan nama pemilik rekening — dapat ditambah, diedit, diaktifkan/dinonaktifkan oleh admin kapan saja.
75.	Admin dapat menandai salah satu atau beberapa rekening sebagai "aktif ditampilkan" ke pengguna saat checkout, sehingga rotasi rekening (mis. saat rekening penuh/bermasalah) dapat dilakukan tanpa update aplikasi.
76.	Saat pengguna memilih metode transfer manual di aplikasi, sistem menampilkan nomor rekening yang sedang aktif beserta jumlah tagihan dan (disarankan) kode unik nominal (mis. Rp 45.000 + Rp 27 kode unik) agar admin dapat mencocokkan pembayaran masuk dengan transaksi yang tepat.
77.	Dashboard Admin menampilkan daftar transaksi berstatus "Menunggu Verifikasi" berikut bukti transfer yang diunggah pengguna (upload bukti bayar), dan admin dapat menekan tombol "Verifikasi & Aktifkan VIP" atau "Tolak" secara manual.
78.	Begitu admin menandai transaksi terverifikasi, status VIP pengguna otomatis aktif di aplikasi tanpa perlu aksi tambahan dari pengguna.
Business Rules
•	Nomor rekening yang ditampilkan ke pengguna WAJIB diambil dari data yang dikelola admin melalui dashboard, bukan nilai statis yang ditulis langsung di kode aplikasi (seperti pada prototype saat ini).
•	Aktivasi VIP melalui jalur transfer manual hanya boleh dilakukan oleh peran admin dengan hak akses "Finance/Verifikator" (lihat 7.13.6), dan tercatat log siapa yang memverifikasi serta kapan.
•	Metode transfer manual sebaiknya diposisikan sebagai pelengkap/cadangan, sementara QRIS/e-wallet/VA otomatis melalui payment gateway (lihat 7.11) tetap menjadi jalur utama — transfer manual memerlukan verifikasi manusia sehingga aktivasi VIP tidak instan dan berisiko human error/keterlambatan.
Edge Case / Perlu Diperhatikan
•	Pengguna transfer dengan nominal tidak sesuai/tanpa kode unik → transaksi tetap masuk status "Menunggu Verifikasi" dan admin perlu mencocokkan manual atau menghubungi pengguna, bukan otomatis ditolak sistem.
•	Bukti transfer tidak diunggah pengguna → beri tenggat waktu dan pengingat otomatis, transaksi kedaluwarsa otomatis jika tidak ada tindak lanjut dalam periode tertentu (mis. 24 jam).
7.13.6. Manajemen Pengguna, Role Admin & Log Aktivitas
Prioritas: Should Have
User Story
Sebagai pemilik produk, saya ingin memastikan hanya staf yang berwenang yang dapat mengubah harga, memverifikasi pembayaran, atau menerbitkan konten.
Functional Requirements
79.	Role admin minimal: Super Admin (akses penuh), Content Editor (kelola drama/episode/thumbnail/iklan saja), dan Finance/Verifikator (kelola rekening pembayaran & verifikasi transaksi saja).
80.	Daftar pengguna aplikasi (konsumen) dengan pencarian, status VIP, dan riwayat transaksi masing-masing, untuk kebutuhan dukungan pelanggan (mis. menelusuri komplain pembayaran).
81.	Log audit seluruh aksi sensitif: perubahan harga, publish/unpublish konten, verifikasi/penolakan transaksi manual, perubahan rekening pembayaran.
Business Rules
•	Login Dashboard Admin wajib menggunakan autentikasi terpisah dari akun pengguna aplikasi konsumen, dengan opsi 2FA untuk peran Super Admin dan Finance.
7.13.7. Dashboard Analitik & Ringkasan Bisnis (Admin)
Prioritas: Could Have
User Story
Sebagai pemilik produk, saya ingin melihat ringkasan performa konten dan pendapatan tanpa perlu membuka banyak sistem terpisah.
Functional Requirements
82.	Ringkasan angka utama: jumlah pengguna aktif, jumlah VIP aktif, pendapatan periode berjalan (gateway otomatis + transfer manual terverifikasi), dan drama terpopuler berdasarkan jumlah tontonan.
83.	Grafik tren harian/mingguan untuk views per drama dan funnel konversi paywall → checkout → sukses bayar.
Business Rules
•	Data analitik pada dashboard admin cukup diperbarui berkala (mis. tiap beberapa menit/jam), tidak wajib real-time ketat.
 
8. Model Data (Ringkas)
Struktur data berikut diturunkan dari mock data pada prototype dan diperluas untuk kebutuhan produksi (multi-user, backend tersentralisasi).
8.1 Entitas: Drama
Field	Tipe	Keterangan
id	string/UUID	Identifier unik drama
title	string	Judul drama
genre	string / array	Genre utama; produksi disarankan mendukung multi-genre
tag	string	Badge tampilan (Trending, Hot Drama, Dub Indo, dst.)
cover	URL	Gambar sampul (disarankan pakai CDN + berbagai resolusi)
synopsis	text	Ringkasan cerita
rating	float	Rata-rata rating agregat (baru, belum ada di prototype)
totalEpisodes	integer	Total episode dalam judul
freeEpisodeCount	integer	Jumlah episode gratis default (konfigurable per judul)
releaseDate	datetime	Untuk logika kategori "Terbaru" (belum ada di prototype)
status	enum	draft / published / archived
8.2 Entitas: Episode
Field	Tipe	Keterangan
id	UUID	Identifier unik episode
dramaId	FK	Relasi ke Drama
epNumber	integer	Nomor urut episode
title	string	Judul episode
description	text	Deskripsi/cuplikan adegan
bunnyVideoId	string (GUID)	ID video pada Bunny.net Stream — sumber kebenaran lokasi file video
bunnyLibraryId	string	ID Video Library Bunny.net tempat video disimpan
playbackUrl	URL (HLS, via Bunny CDN)	URL pemutaran adaptif dari Bunny CDN Pull Zone (idealnya signed/token-authenticated)
thumbnailUrl	URL	Thumbnail episode (upload manual admin atau auto-generated Bunny Stream)
durationSec	integer	Durasi video, diperoleh otomatis dari metadata Bunny Stream
processingStatus	enum	uploading / processing / ready / failed — mengikuti status encoding Bunny.net
isFreeDefault	boolean	Apakah gratis secara default
publishStatus	enum	draft / published / unpublished — dikontrol admin di Dashboard
8.3 Entitas: User
Field	Tipe	Keterangan
id	UUID	Identifier unik pengguna
authProvider	enum	google / apple / phone / guest
displayName	string	
email/phone	string	
vipStatus	enum	none / active / expired
vipExpiryDate	datetime	Tanggal berakhir langganan aktif
createdAt	datetime	
8.4 Entitas: UnlockedEpisode, WatchHistory, Favorite, Transaction
•	UnlockedEpisode: { userId, dramaId, episodeId, unlockMethod (free/ad/vip), unlockedAt } — menggantikan Set() in-memory pada prototype agar persisten di server.
•	WatchHistory: { userId, dramaId, episodeId, lastPositionSec, watchedAt } — mendukung fitur resume playback.
•	Favorite: { userId, dramaId, addedAt }
•	Transaction: { id, userId, package (weekly/monthly), amount, paymentMethod (gateway/manual_transfer), gatewayReferenceId, paymentAccountId, proofOfPaymentUrl, verifiedBy, status (pending/success/failed/expired/rejected), createdAt, paidAt }
8.5 Entitas Tambahan untuk Dashboard Admin
Entitas	Field Utama	Keterangan
AdminUser	id, name, email, role (super_admin/content_editor/finance), passwordHash, is2FAEnabled	Akun staf internal, terpisah dari akun pengguna konsumen
SubscriptionPlan	id, name, durationDays, price, promoLabel, isActive, validFrom, validUntil	Paket VIP yang dikelola dinamis oleh admin (menggantikan harga hardcoded)
PaymentAccount	id, channelType (bank/e-wallet), bankOrProviderName, accountNumber, accountHolderName, isActive	Daftar rekening/nomor tujuan transfer manual yang dikelola admin
AdSetting	id, adsEnabled, freeEpisodeCount, episodesUnlockedPerAd, dailyAdUnlockLimit, adUnitIds (per platform)	Konfigurasi perilaku iklan & paywall yang dapat diubah tanpa rilis ulang aplikasi
AuditLog	id, adminId, action, entityType, entityId, oldValue, newValue, createdAt	Jejak audit seluruh aksi sensitif admin (harga, publish konten, verifikasi transaksi)
 
9. Kebutuhan Non-Fungsional
Kategori	Kebutuhan
Performa	Waktu buka aplikasi (cold start) < 2.5 detik; episode berikutnya mulai diputar < 500ms setelah swipe (via preloading); First Contentful Paint Beranda < 2 detik pada jaringan 4G.
Keamanan	Semua status kepemilikan (VIP, episode terbuka) divalidasi & disimpan di server, bukan hanya klien. Kredensial payment gateway dan Firebase/API key produksi TIDAK boleh ditanam langsung sebagai literal di kode sisi klien tanpa pembatasan (App Check/domain restriction) — kunci pada prototype saat ini bersifat contoh dan wajib diganti kredensial produksi dengan pembatasan akses yang tepat.
Skalabilitas	Backend katalog & streaming harus mendukung pertumbuhan katalog (ratusan judul, ribuan episode) dan trafik streaming bersamaan — gunakan CDN video (mis. Cloudflare Stream, AWS CloudFront + MediaConvert, atau Mux) alih-alih hosting video statis.
Keandalan	Uptime layanan streaming & pembayaran ≥ 99.5%. Kegagalan pembayaran tidak boleh membuat status VIP "menggantung" — perlu job reconciliation berkala dengan gateway.
Aksesibilitas	Kontras warna teks memadai (khususnya teks putih di atas gambar/gradient sesuai standar WCAG AA), target tap area minimal 44x44px, dukungan pembesaran teks sistem.
Lokalisasi	Fase 1 penuh Bahasa Indonesia; arsitektur konten disiapkan agar dapat menambah subtitle/bahasa lain tanpa migrasi besar.
Kompatibilitas Perangkat	Mendukung Android 8+ dan iOS 14+ untuk aplikasi native; versi web-app minimal mendukung 2 versi terakhir Chrome, Safari, dan Samsung Internet.
Observability	Logging error klien (crash reporting) dan analitik event terpasang sejak awal (lihat bagian 13).
10. Arsitektur Teknis & Rekomendasi Stack
Prototype saat ini adalah aplikasi front-end tunggal (single HTML file) dengan Tailwind CSS, Lucide Icons, dan JavaScript vanilla, memakai data mock in-memory serta inisialisasi Firebase (Auth + Firestore) yang belum benar-benar terhubung ke logika fitur. Untuk versi produksi, direkomendasikan arsitektur berikut:
10.1 Frontend
•	Aplikasi mobile native atau cross-platform (React Native/Flutter) untuk performa video dan akses SDK iklan/pembayaran yang lebih baik dibanding web murni.
•	Jika tetap web/PWA, gunakan framework modern (React/Next.js) dengan pemutar video berbasis HLS.js dan state management terstruktur — menggantikan manipulasi DOM manual (innerHTML) pada prototype yang rawan bug dan sulit dipelihara.
10.2 Backend
•	Backend API terpusat (REST/GraphQL) untuk katalog, entitlement (kepemilikan episode/VIP), riwayat, dan transaksi — Firestore dapat dipertahankan sebagai database namun akses tulis status VIP/unlock HARUS melalui Cloud Functions tervalidasi, bukan ditulis langsung dari klien.
•	Integrasi payment gateway (Midtrans/Xendit) dengan endpoint webhook terverifikasi signature untuk update status transaksi & VIP secara aman.
•	Integrasi SDK iklan (AdMob/AppLovin) di sisi native, dengan verifikasi server-side reward callback bila SDK mendukung (S2S rewarded ad verification) untuk mencegah kecurangan.
10.3 Konten & Media — Integrasi Bunny.net
Sesuai keputusan produk, video di-hosting menggunakan Bunny.net Stream (Bunny Stream) sebagai layanan penyimpanan sekaligus CDN video, menggantikan animasi placeholder pada prototype.
•	Upload: Dashboard Admin mengunggah file video melalui Bunny Stream API (direct upload / TUS resumable upload) ke Video Library yang telah dibuat di akun Bunny.net.
•	Encoding: Bunny Stream otomatis melakukan transcoding ke berbagai bitrate/resolusi (adaptive HLS) sehingga aplikasi konsumen tidak perlu menangani proses encoding sendiri.
•	Thumbnail: Bunny Stream menyediakan thumbnail otomatis per video; admin dapat menimpanya dengan thumbnail manual bila diperlukan (lihat 7.13.2).
•	Playback: Aplikasi konsumen memutar video melalui URL HLS dari Bunny CDN Pull Zone. Untuk episode berbayar/VIP-only, disarankan mengaktifkan Token Authentication (signed URL dengan masa berlaku singkat) bawaan Bunny.net agar tautan video tidak dapat diakses langsung/dibagikan di luar aplikasi oleh pengguna yang belum berhak.
•	Keamanan kredensial: Library API Key dan Stream API Key Bunny.net hanya disimpan di server/backend Dashboard Admin (environment variable/secret manager), tidak pernah dikirim ke aplikasi konsumen.
•	Sinkronisasi status: begitu status video di Bunny Stream berubah menjadi "ready" (final encoding selesai), backend memperbarui `processingStatus` episode terkait — dapat dilakukan melalui polling terjadwal atau webhook Bunny.net apabila tersedia untuk paket akun yang digunakan.
10.4 Dashboard Admin (Panel Terpisah)
•	Dashboard Admin dibangun sebagai aplikasi web terpisah dari aplikasi konsumen (mis. domain admin.microdramatv.com), dengan backend API sendiri namun berbagi database katalog/transaksi yang sama.
•	Perubahan yang dipublikasikan admin (drama/episode baru, harga paket, pengaturan iklan, rekening pembayaran) diakses aplikasi konsumen melalui API katalog/konfigurasi yang sama — sehingga perubahan tampil di aplikasi tanpa perlu rilis ulang aplikasi mobile/web.
•	Akses Dashboard Admin dibatasi melalui autentikasi staf terpisah (lihat entitas AdminUser) dan idealnya dari jaringan/VPN terbatas atau minimal proteksi 2FA, mengingat panel ini mengendalikan harga, konten, dan verifikasi pembayaran.
11. Model Monetisasi & Strategi Harga
Sumber Pendapatan	Mekanisme	Catatan
Langganan VIP Mingguan	Rp 15.000 / 7 hari (referensi prototype)	Cocok untuk pengguna yang ingin menuntaskan 1-2 judul secara maraton
Langganan VIP Bulanan	Rp 45.000 / 30 hari (referensi prototype, ~30% lebih hemat)	Target utama konversi jangka panjang, auto-renewal
Rewarded Video Ads	Iklan CPM/CPI melalui SDK mediasi (AdMob/AppLovin)	Sumber pendapatan dari pengguna non-pembayar
(Opsional Fase 2) Pembelian Episode Satuan / Coin	Mikro-transaksi per episode/paket koin	Alternatif bagi pengguna yang hanya ingin 1 judul tertentu tanpa langganan penuh
Catatan: seluruh nominal harga bersifat referensi dari prototype dan wajib divalidasi ulang oleh tim bisnis berdasarkan riset kompetitor (ReelShort, DramaBox versi Indonesia) dan uji A/B harga sebelum peluncuran.
12. Kepatuhan & Legal
•	UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP): wajib ada kebijakan privasi eksplisit, persetujuan (consent) pengumpulan data, dan mekanisme permintaan penghapusan akun/data.
•	Kebijakan langganan berulang (auto-renewal) harus sesuai pedoman Google Play Billing dan Apple App Store (pemberitahuan sebelum penagihan, kemudahan pembatalan) apabila didistribusikan lewat kedua platform tersebut.
•	Klasifikasi usia/rating konten drama (beberapa tema seperti perselingkuhan, balas dendam, kekerasan dalam rumah tangga) perlu ditinjau agar sesuai pedoman konten Google Play/App Store dan tidak melanggar ketentuan platform iklan.
•	Integrasi payment gateway harus menggunakan penyedia jasa pembayaran (PJP) berizin Bank Indonesia/OJK (mis. Midtrans, Xendit, DOKU).
•	Ketentuan Layanan & Kebijakan Privasi (saat ini hanya disebut sebagai teks statis pada modal login) wajib berupa dokumen hukum aktif yang dapat diakses & disetujui secara eksplisit.
13. Analitik & KPI
Event tracking minimum yang perlu diinstrumentasi sejak versi produksi pertama:
Event	Kapan Terjadi	Tujuan
app_open	Aplikasi dibuka	DAU/MAU, retensi
drama_view	Pengguna membuka detail drama	Popularitas konten, CTR dari beranda
episode_start / episode_complete	Episode mulai/selesai diputar	Completion rate, drop-off per episode
paywall_shown	Overlay paywall muncul	Volume titik konversi
ad_watch_complete	Iklan reward selesai ditonton	Ad view rate, pendapatan iklan
vip_checkout_start / vip_purchase_success	Mulai checkout / pembayaran sukses	Funnel konversi & pendapatan langganan
mission_claimed	Klaim misi harian	Efektivitas gamifikasi terhadap retensi
favorite_added / share_clicked	Aksi engagement	Viralitas & loyalitas konten
Direkomendasikan menggunakan kombinasi Firebase Analytics/Amplitude untuk event produk dan dashboard bisnis terpisah untuk metrik finansial (pendapatan, ARPU, LTV).
14. Rencana Rilis / Roadmap
Fase 1 — MVP Produksi (Target: 8–10 minggu)
•	Backend katalog & entitlement dasar (menggantikan mock data & in-memory state)
•	Dashboard Admin: manajemen drama/episode, upload video ke Bunny.net Stream, upload thumbnail, dan alur publish
•	Dashboard Admin: manajemen harga paket VIP, pengaturan iklan (jumlah episode gratis, rasio unlock-per-iklan), dan manajemen rekening pembayaran manual
•	Autentikasi Google + akun tamu (aplikasi konsumen) dan autentikasi staf terpisah (Dashboard Admin)
•	Pemutar video real (HLS via Bunny CDN) menggantikan simulasi canvas
•	Paywall episode dengan validasi server-side
•	Integrasi payment gateway produksi (QRIS, e-wallet, VA) via Midtrans/Xendit, serta alur verifikasi transfer manual oleh admin sebagai pelengkap
•	Riwayat & favorit tersinkron server
•	Analitik dasar terpasang (aplikasi konsumen & ringkasan admin)
Fase 2 — Optimalisasi & Retensi (Target: +6–8 minggu)
•	Integrasi SDK rewarded ads produksi + verifikasi server-side
•	Sistem misi harian & gamifikasi penuh dengan reset berbasis server time
•	Push notification (episode baru, pengingat misi, promo VIP)
•	Panel admin/CMS untuk manajemen konten drama
•	Auto-renewal & manajemen langganan lengkap (upgrade/downgrade/cancel)
Fase 3 — Personalisasi & Skala (Target: berkelanjutan)
•	Rekomendasi berbasis machine learning untuk tab "Untuk Anda"
•	Multi-bahasa/subtitle
•	Fitur sosial ringan (like publik, share tracking, leaderboard misi)
•	Ekspansi katalog & kemitraan konten pihak ketiga
15. Risiko & Asumsi
15.1 Risiko
Risiko	Dampak	Mitigasi
Status VIP/unlock dapat dimanipulasi jika logika hanya di sisi klien	Kehilangan pendapatan langsung	Validasi & penyimpanan status sepenuhnya di server (lihat 7.11, 9)
Fill rate rendah pada rewarded ads di pasar Indonesia	Pengguna gratis terjebak tanpa jalur buka episode	Gunakan mediasi multi-jaringan iklan; sediakan fallback promo VIP
Ketergantungan konten pihak ketiga (lisensi drama)	Risiko hukum/hak cipta bila konten tidak berlisensi resmi	Pastikan seluruh judul memiliki hak distribusi/lisensi sah sebelum publikasi
Churn tinggi pasca masa promosi awal	Pendapatan langganan tidak stabil	Program retensi: pengingat konten baru, diskon perpanjangan, gamifikasi
Verifikasi pembayaran transfer manual bergantung pada kecepatan admin	Aktivasi VIP tertunda, pengalaman pengguna buruk, potensi human error	Terapkan kode unik nominal transfer, SLA verifikasi maksimum (mis. < 1 jam pada jam kerja), dan dorong migrasi bertahap ke metode otomatis (QRIS/VA) sebagai jalur utama
Kredensial Bunny.net API Key bocor/disalahgunakan	Video dapat diunggah/dihapus pihak tidak berwenang, biaya storage/bandwidth membengkak	Simpan API Key hanya di backend Dashboard Admin, aktifkan pembatasan akses & rotasi key berkala
Konten video VIP-only dapat dibagikan di luar aplikasi bila URL tidak diamankan	Kebocoran akses konten berbayar, kerugian pendapatan	Aktifkan Token Authentication (signed URL) Bunny.net dengan masa berlaku singkat untuk episode berbayar
15.2 Asumsi
•	Tim memiliki atau akan memperoleh hak distribusi sah atas konten drama yang ditayangkan.
•	Target awal peluncuran adalah pasar Indonesia dengan Bahasa Indonesia sebagai bahasa utama.
•	Aplikasi akan didistribusikan setidaknya melalui Google Play Store; distribusi App Store & web bersifat opsional/fase lanjutan.
16. Pertanyaan Terbuka
84.	Apakah konten drama akan diproduksi/dilisensikan sendiri, atau bekerja sama dengan agregator konten pihak ketiga?
85.	Apakah target platform utama adalah aplikasi native (Android/iOS) atau tetap web-app/PWA?
86.	Payment gateway mana yang akan menjadi mitra resmi (Midtrans/Xendit/DOKU/lainnya), dan bagaimana skema fee-nya?
87.	Apakah akan ada model coin/mikro-transaksi per-episode di luar langganan VIP pada fase awal?
88.	Berapa anggaran akuisisi pengguna (UA) dan target CAC yang dapat diterima untuk periode 6 bulan pertama?
89.	Apakah dibutuhkan dukungan multi-bahasa/subtitle sejak peluncuran awal mengingat potensi ekspansi regional?
 
17. Lampiran: Analisis Gap Prototype vs Kebutuhan Produksi
Ringkasan celah teknis utama yang ditemukan pada prototype HTML/JS yang perlu ditutup sebelum rilis produksi.
Area	Kondisi pada Prototype	Rekomendasi Produksi
Data Drama & Episode	Array JavaScript statis (hardcoded) di dalam kode	Backend/CMS dinamis dengan API katalog
Video Playback & Hosting	Animasi canvas partikel sebagai pengganti video sungguhan; tidak ada mekanisme upload video	Video di-hosting & di-stream via Bunny.net Stream (upload dari Dashboard Admin, playback via Bunny CDN HLS, lihat 7.13.1 & 10.3)
Panel Admin/CMS	Tidak ada sama sekali — seluruh drama, episode, harga, dan pengaturan iklan tertulis langsung di kode aplikasi	Dashboard Admin terpisah untuk kelola konten, harga, iklan, dan rekening pembayaran manual (lihat 7.13)
Rekening/Nomor Pembayaran	Tidak ada; hanya simulasi gateway otomatis	Dikelola dinamis oleh admin (entitas PaymentAccount) dengan alur verifikasi transaksi manual (lihat 7.13.5)
Status VIP & Unlock Episode	Disimpan di variabel in-memory (`state`), hilang saat refresh, dapat dimanipulasi via console	Disimpan & divalidasi di server per akun pengguna
Pembayaran	Tombol "Konfirmasi Selesai Bayar" memicu sukses secara manual tanpa verifikasi gateway sungguhan	Payment gateway resmi (Midtrans/Xendit) dengan webhook signature verification
Autentikasi	Tombol Google Sign-In adalah tiruan visual (tidak memanggil OAuth sungguhan); modul Firebase diinisialisasi namun hanya melakukan sign-in anonim dan belum terhubung ke fitur	OAuth 2.0 Google Sign-In fungsional, tersambung ke seluruh state pengguna (VIP, riwayat, favorit)
Iklan	Layar simulasi iklan dengan progress bar dummy	SDK rewarded ads produksi (AdMob/AppLovin) dengan verifikasi reward
Riwayat & Favorit	Disimpan di memori browser (hilang saat reload)	Tersimpan di database server, tersinkron lintas perangkat
Kredensial Konfigurasi	Firebase config (apiKey, dsb.) berupa nilai contoh tertulis langsung di kode	Kredensial produksi dikelola melalui environment/secret management dengan pembatasan domain/App Check
Kategori "Terbaru"	Logika `array.slice(1)` tanpa dasar tanggal rilis	Filter berbasis field `releaseDate` aktual
— Akhir Dokumen —

