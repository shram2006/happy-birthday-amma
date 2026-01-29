document.addEventListener("DOMContentLoaded", () => {

  /* Fade-in on scroll */
  const fades = document.querySelectorAll('.fade');

  function reveal() {
    fades.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal(); // run once on load

  /* Background Music */
  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");

  let isPlaying = false;
  music.volume = 0.3;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play()
        .then(() => {
          musicBtn.textContent = "⏸ Pause Music";
          isPlaying = true;
        })
        .catch(err => console.log("Audio error:", err));
    } else {
      music.pause();
      musicBtn.textContent = "🎵 Music On";
      isPlaying = false;
    }
  });

});
