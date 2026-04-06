import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export const useCountUp = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.target || "0");
            const suffix = el.dataset.suffix || "";
            const prefix = el.dataset.prefix || "";
            let current = 0;
            const increment = Math.max(1, Math.floor(target / 60));
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
            }, 25);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("[data-countup]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
