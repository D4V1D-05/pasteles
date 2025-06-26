
  (function() {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;
    const maxIndex = items.length - 1;
    let intervalId;

    function updateCarousel() {
      const translateX = -currentIndex * 100;
      track.style.transform = 'translateX(' + translateX + '%)';
    }
    function showPrev() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    }
    function showNext() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }
    prevBtn.addEventListener('click', () => {
      showPrev();
      resetInterval();
    });
    nextBtn.addEventListener('click', () => {
      showNext();
      resetInterval();
    });

    function startInterval() {
      intervalId = setInterval(() => {
        showNext();
      }, 6000);
    }
    function resetInterval() {
      if(intervalId) clearInterval(intervalId);
      startInterval();
    }

    // Start auto-play
    startInterval();

    // Accessibility keyboard navigation for carousel items could be improved,
    // but basic tabindex=0 done for now on carousel items.
  })();