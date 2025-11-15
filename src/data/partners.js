export const partnerCategories = [
  {
    id: "delivery",
    title: "Platform & Layanan Pesan-Antar",
    description:
      "Bantu UMKM menjangkau pelanggan lebih luas lewat pemesanan online dan layanan delivery.",
  },
  {
    id: "payment",
    title: "Pembayaran & Layanan Keuangan",
    description:
      "Permudah transaksi non-tunai dengan QRIS dan dompet digital yang sudah familiar di masyarakat.",
  },
  {
    id: "technology",
    title: "Teknologi & Pendukung Operasional",
    description:
      "Tools digital yang membantu UMKM mengelola usaha, promosi, dan komunikasi dengan pelanggan.",
  },
];

export const partners = [
  {
    id: "gofood",
    name: "GoFood",
    categoryId: "delivery",
    type: "Delivery & Marketplace",
    logo: "/partners/gofood.webp",
    description:
      "Platform pesan-antar makanan dari Gojek yang banyak digunakan di Jakarta Selatan.",
    benefits: [
      "Jangkauan pelanggan luas",
      "Promosi & voucher dalam aplikasi",
      "Integrasi dengan GoPay & GoPayLater",
    ],
  },
  {
    id: "grabfood",
    name: "GrabFood",
    categoryId: "delivery",
    type: "Delivery & Marketplace",
    logo: "/partners/grab.webp",
    description:
      "Layanan pesan-antar makanan dari Grab yang kuat di area perkantoran dan mall.",
    benefits: [
      "Branding toko di aplikasi Grab",
      "Promo bareng GrabFood",
      "Dukungan armada delivery",
    ],
  },
  {
    id: "shopeefood",
    name: "ShopeeFood",
    categoryId: "delivery",
    type: "Delivery & Marketplace",
    logo: "/partners/shooppe.webp",
    description:
      "Layanan pesan-antar yang terhubung langsung dengan ekosistem e-commerce Shopee.",
    benefits: [
      "Akses ke pengguna Shopee",
      "Promo besar & flash sale",
      "Pembayaran via ShopeePay",
    ],
  },

  {
    id: "qris",
    name: "QRIS",
    categoryId: "payment",
    type: "Standar Pembayaran",
    logo: "/partners/qris.webp",
    description:
      "Standar pembayaran QR nasional yang memudahkan UMKM menerima pembayaran non-tunai dari berbagai e-wallet dan bank.",
    benefits: [
      "Satu QR untuk semua e-wallet & bank",
      "Catatan transaksi otomatis",
      "Kurangi uang cash di kasir",
    ],
  },
  {
    id: "ovo",
    name: "OVO",
    categoryId: "payment",
    type: "Dompet Digital",
    logo: "/partners/ovo.webp",
    description:
      "Dompet digital populer yang banyak dipakai untuk transaksi sehari-hari.",
    benefits: [
      "Cashback & promo ke pelanggan",
      "Transaksi cepat tanpa uang kembalian",
      "Integrasi dengan beberapa marketplace",
    ],
  },
  {
    id: "dana",
    name: "DANA",
    categoryId: "payment",
    type: "Dompet Digital",
    logo: "/partners/dana.webp",
    description:
      "Layanan dompet digital yang banyak digunakan di warung, kios, dan UMKM.",
    benefits: [
      "Biaya administrasi terjangkau",
      "Fitur kirim saldo dan tarik tunai",
      "Mudah dipakai pelanggan",
    ],
  },

  // TECHNOLOGY
  {
    id: "whatsapp-business",
    name: "WhatsApp Business",
    categoryId: "technology",
    type: "Komunikasi & Customer Service",
    logo: "/logos/whatsapp-business.png",
    description:
      "Aplikasi chat khusus bisnis dengan katalog produk, auto-reply, dan label pelanggan.",
    benefits: [
      "Mudah diakses pelanggan",
      "Katalog produk langsung di chat",
      "Label pelanggan & pesan otomatis",
    ],
  },
  {
    id: "google-maps",
    name: "Google Maps",
    categoryId: "technology",
    type: "Lokasi & Review",
    logo: "/logos/google-maps.png",
    description:
      "Membantu pelanggan menemukan lokasi UMKM dan membaca ulasan sebelum datang.",
    benefits: [
      "Lokasi mudah ditemukan",
      "Review publik menaikkan kepercayaan",
      "Bisa dipakai untuk rute & navigasi",
    ],
  },
];
