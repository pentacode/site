(() => {
    function init() {
        const dividers = [...document.querySelectorAll(".divider")].map((svg) => ({
            svg,
            lines: svg.querySelectorAll("mask > path"),
            bounds: svg.getBoundingClientRect(),
        }));
        const winHeight = window.innerHeight;

        const scroll = () => {
            const center = window.scrollY + winHeight / 2;

            for (const { lines, bounds } of dividers) {
                const offset = Math.max(-2, Math.min(2, ((center - bounds.top) / winHeight) * 2)) * 40;

                for (const [i, line] of lines.entries()) {
                    line.style.transform = `translate(${offset * (i + 1) - i * 50}px, ${offset * (i + 1) - i * 50}px)`;
                }
            }
        };

        // window.addEventListener("scroll", scroll);
        scroll();
    }

    if (["complete", "loaded", "interactive"].includes(document.readyState)) {
        init();
    } else {
        window.addEventListener("DOMContentLoaded", () => init());
    }
})();
