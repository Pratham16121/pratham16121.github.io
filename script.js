(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const links = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
  const progress = document.querySelector(".progress");
  const marks = Array.from(document.querySelectorAll(".float-mark"));
  const darkBands = Array.from(document.querySelectorAll(".hero-name, .travel"));

  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Close" : "Menu";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setMenu(open);
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 900) setMenu(false);
    });
  }

  function overlaps(a, b) {
    return a.top < b.bottom && a.bottom > b.top && a.left < b.right && a.right > b.left;
  }

  function updateMarks() {
    if (!marks.length) return;
    const darkRects = darkBands.map((band) => band.getBoundingClientRect());
    marks.forEach((mark) => {
      const rect = mark.getBoundingClientRect();
      const onDark = darkRects.some((band) => overlaps(rect, band));
      mark.classList.toggle("on-dark", onDark);
    });
  }

  function onScroll() {
    if (progress) {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const amount = height > 0 ? window.scrollY / height : 0;
      progress.style.transform = "scaleX(" + amount + ")";
    }
    updateMarks();
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateMarks);

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });

        let current = null;
        sections.forEach((section) => {
          if (visible.has(section)) current = section;
        });

        links.forEach((link) => {
          if (current && link.getAttribute("href") === "#" + current.id) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  const revealEls = document.querySelectorAll(".reveal, .reveal-line");
  if (revealEls.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  }
})();
