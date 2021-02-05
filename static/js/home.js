window.addEventListener("load", function () {
    const animations = {
        hero: {
            in: () => {},
            out: () => {},
        },
        simple: {
            in: () =>
                anime({
                    targets: "section.simple .animate",
                    opacity: [0, 1],
                    translateY: ["10%", "0"],
                    delay: anime.stagger(300),
                    duration: 3000,
                }),
            out: () =>
                anime({
                    targets: "section.simple .animate",
                    opacity: [1, 0],
                    translateY: ["0", "-10%"],
                    delay: anime.stagger(300),
                    duration: 3000,
                }),
        },
        secure: {
            in: () =>
                anime({
                    targets: "section.secure .animate",
                    opacity: [0, 1],
                    translateY: ["30%", "0"],
                    delay: anime.stagger(100),
                    duration: 2000,
                }),
            out: () =>
                anime({
                    targets: "section.secure .animate",
                    opacity: [1, 0],
                    translateY: ["0", "-30%"],
                    delay: anime.stagger(100),
                    duration: 2000,
                }),
        },
        controlling: {
            in: () =>
                anime({
                    targets: "section.controlling .animate",
                    opacity: [0, 1],
                    translateZ: [200, 0],
                    delay: anime.stagger(200),
                    duration: 1000,
                    easing: "easeOutBounce",
                }),
            out: () =>
                anime({
                    targets: "section.controlling .animate",
                    opacity: [1, 0],
                    translateY: [0, -200],
                    delay: anime.stagger(200),
                    duration: 1000,
                    easing: "easeInQuad",
                }),
        },
        savings: {
            in: () =>
                anime({
                    targets: "section.savings .animate",
                    opacity: [0, 1],
                    translateY: ["10%", "0"],
                    delay: anime.stagger(300),
                    duration: 3000,
                }),
            out: () =>
                anime({
                    targets: "section.savings .animate",
                    opacity: [1, 0],
                    translateY: ["0", "-10%"],
                    delay: anime.stagger(300),
                    duration: 3000,
                }),
        },
        innovative: {
            in: () =>
                anime({
                    targets: "section.innovative .animate",
                    opacity: [0, 1],
                    translateY: ["10%", "0"],
                    delay: anime.stagger(300),
                    duration: 3000,
                }),
            out: () =>
                anime({
                    targets: "section.innovative .animate",
                    opacity: [1, 0],
                    translateY: ["0", "-10%"],
                    delay: anime.stagger(300),
                    duration: 3000,
                }),
        },
        offer: {
            in: () => {},
            out: () => {},
        },
    };

    const sections = Array.from(document.querySelectorAll("section"));

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                const section = entry.target.dataset.section;
                const animation = animations[section];
                if (!animation) {
                    return;
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

    for (const button of document.querySelectorAll("button, .btn")) {
        button.onmouseenter = (e) => anime({ targets: e.target, scale: 1.02 });
        button.onmouseleave = (e) => anime({ targets: e.target, scale: 1 });
    }

    for (const popover of document.querySelectorAll(".popover")) {
        const anchor = popover.parentElement;
        const bg = popover.querySelector(".bg");
        anchor.addEventListener("mouseenter", () => {
            anime({ targets: popover, scale: [0.95, 1], opacity: 1, translateY: [-20, 0] });
        });
        anchor.addEventListener("mouseleave", (e) => {
            console.log(e.target);
            anime({ targets: popover, opacity: 0 });
        });
    }
});
