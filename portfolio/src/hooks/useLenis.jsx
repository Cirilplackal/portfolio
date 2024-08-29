// hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Adjust duration for a more tailored experience
      easing: (t) => t * (2 - t), // Alternative easing function
      smooth: true,
    });

    const update = (time) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
