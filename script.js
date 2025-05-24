const songs = [
  {
    title: "Mangu",
    artist: "Fourtwnty ft. Charita Utami",
    likes: 125000,
    plays: 27386203,
    file: "audio/Fourtwnty_Mangu_ft_Charita_Utami_Official_Audio_mDw83aS4ALo_140.mp3",
    image: "img/album1.jpg"
  },
  {
    title: "Serana",
    artist: "For Revenge",
    likes: 374000,
    plays: 107595270,
    file: "audio/1fdb8bdb_Serana.mp3",
    image: "img/album2.jpg"
  },
  {
    title: "You'll be in my heart",
    artist: "NIKI",
    likes: 78000,
    plays: 15927859,
    file: "audio/4_5913744923743492256.mp3",
    image: "img/album3.jpg"
  }
];

const listEl = document.getElementById("song-list");
const player = document.getElementById("audio-player");

// Fungsi untuk format angka
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + "Juta";
  if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + "K";
  return num;
}

songs.forEach((song) => {
  const card = document.createElement("div");
  card.className = "song-card";
  card.innerHTML = `
    <img src="${song.image}" alt="Cover ${song.title}" class="album-cover">
    <div class="song-title">${song.title}</div>
    <div class="song-meta">Penyanyi: ${song.artist}</div>
    <div class="song-meta">❤️ ${formatNumber(song.likes)} &nbsp; ▶️ ${formatNumber(song.plays)}</div>
  `;
  card.addEventListener("click", () => {
    player.src = song.file;
    player.play();
  });
  listEl.appendChild(card);
});
