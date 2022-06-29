// File: fade.js
// Import Highway
import Highway from 'highway';

// GSAP Library
const Tween = window.gsap;

// Fade
class Fade extends Highway.Transition {
  in({ from, to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0);

    // Remove Old View
    from.remove();

    // Animation
    Tween.fromTo(to, 0.5,
      {x: 1999 },
      {
        x: 0,
        onComplete: done
      }
    );
  }

  out({ from, done }) {
    // Animation
    Tween.fromTo(from, 0.5,
      { x: 0 },
      {
         x: 1999,
        onComplete: done
      }
    );
  }
}

export default Fade;