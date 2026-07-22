const mockDramas = [
  {
    id: "d1",
    title: "Cinta Terlarang Sang CEO",
    genre: ["Miliarder", "Romantis"],
    tags: ["Trending", "Dub Indo"],
    cover: "assets/images/billionaire_cover.png",
    synopsis: "Ketika seorang asisten biasa tak sengaja mengetahui rahasia terbesar CEO dingin di perusahaannya, hidupnya berubah 180 derajat. Sebuah pernikahan kontrak pun tak terelakkan.",
    rating: 4.8,
    totalEpisodes: 50,
    freeEpisodeCount: 2,
    episodes: Array.from({length: 50}, (_, i) => ({
      id: `ep_${i+1}`,
      epNumber: i+1,
      title: `Episode ${i+1}`,
      isFreeDefault: i < 2
    }))
  },
  {
    id: "d2",
    title: "Pembalasan Sang Istri",
    genre: ["Balas Dendam", "Keluarga"],
    tags: ["Baru", "Hot Drama"],
    cover: "assets/images/revenge_cover.png",
    synopsis: "Dikhianati oleh suami dan sahabatnya sendiri, ia kembali 5 tahun kemudian dengan identitas baru dan rencana balas dendam yang sempurna.",
    rating: 4.9,
    totalEpisodes: 30,
    freeEpisodeCount: 2,
    episodes: Array.from({length: 30}, (_, i) => ({
      id: `ep_${i+1}`,
      epNumber: i+1,
      title: `Episode ${i+1}`,
      isFreeDefault: i < 2
    }))
  },
  {
    id: "d3",
    title: "Menanti Musim Semi",
    genre: ["Romantis"],
    tags: ["Populer"],
    cover: "assets/images/romance_cover.png",
    synopsis: "Kisah cinta manis antara dua sahabat masa kecil yang terpisah oleh waktu dan takdir, bertemu kembali di bawah pohon sakura.",
    rating: 4.7,
    totalEpisodes: 40,
    freeEpisodeCount: 2,
    episodes: Array.from({length: 40}, (_, i) => ({
      id: `ep_${i+1}`,
      epNumber: i+1,
      title: `Episode ${i+1}`,
      isFreeDefault: i < 2
    }))
  }
];

// Mock User State
const userState = {
  isVIP: false,
  unlockedEpisodes: new Set(), // Set of "dramaId_epId"
  watchHistory: {}
};
