(() => {
    function init() {
        const animations = {
            slide_1: {
                in: (section) =>
                    anime({
                        targets: section.querySelectorAll(".animate"),
                        opacity: [0, 1],
                        translateY: ["10%", "0"],
                        delay: anime.stagger(300, {
                            direction: section.dataset.animation_direction || "normal",
                        }),
                        duration: 3000,
                    }),
                out: (section) =>
                    anime({
                        targets: section.querySelectorAll(".animate"),
                        opacity: [1, 0],
                        translateY: ["0", "-10%"],
                        delay: anime.stagger(300, {
                            direction: section.dataset.animation_direction || "normal",
                        }),
                        duration: 3000,
                    }),
            },
            slide_2: {
                in: (section) =>
                    anime({
                        targets: section.querySelectorAll(".animate"),
                        opacity: [0, 1],
                        translateY: ["30%", "0"],
                        delay: anime.stagger(100, {
                            direction: section.dataset.animation_direction || "normal",
                        }),
                        duration: 2000,
                    }),
                out: (section) =>
                    anime({
                        targets: section.querySelectorAll(".animate"),
                        opacity: [1, 0],
                        translateY: ["0", "-30%"],
                        delay: anime.stagger(100, {
                            direction: section.dataset.animation_direction || "normal",
                        }),
                        duration: 2000,
                    }),
            },
            drop: {
                in: (section) =>
                    anime({
                        targets: section.querySelectorAll(".animate"),
                        opacity: [0, 1],
                        translateZ: [200, 0],
                        delay: anime.stagger(200, {
                            direction: section.dataset.animation_direction || "normal",
                        }),
                        duration: 1000,
                        easing: "easeOutBounce",
                    }),
                out: (section) =>
                    anime({
                        targets: section.querySelectorAll(".animate"),
                        opacity: [1, 0],
                        translateY: [0, -200],
                        delay: anime.stagger(200, {
                            direction: section.dataset.animation_direction || "normal",
                        }),
                        duration: 1000,
                        easing: "easeInQuad",
                    }),
            },
        };

        const sections = Array.from(document.querySelectorAll("section"));

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const section = entry.target;
                    const animation = animations[section.dataset.animation];
                    if (!animation) {
                        continue;
                    }

                    if (entry.isIntersecting) {
                        animation.in(section);
                    } else {
                        animation.out(section);
                    }
                }
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));

        for (const button of document.querySelectorAll("button, .btn, .bouncy")) {
            button.onmouseenter = (e) => anime({ targets: e.target, scale: 1.05 });
            button.onmouseleave = (e) => anime({ targets: e.target, scale: 1 });
        }
    }

    if (["complete", "loaded", "interactive"].includes(document.readyState)) {
        init();
    } else {
        window.addEventListener("DOMContentLoaded", () => init());
    }
})();
