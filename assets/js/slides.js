(() => {
    function initSection(section) {
        const buttons = [...section.querySelectorAll(".tab")];
        const slidesContainer = section.querySelector(".slides");
        const slides = [...section.querySelectorAll(".slides-slide")];
        if (section.classList.contains("right")) {
            slides.reverse();
        }
        const containerWidth = slidesContainer.offsetWidth;

        const scroll = () => {
            for (const [i, slide] of slides.entries()) {
                const button = buttons[i];
                const width = slide.offsetWidth;
                const left = slide.offsetLeft;
                const img = slide.querySelector(".slides-slide-inner");

                const offset =
                    Math.abs(slidesContainer.scrollLeft - left + (containerWidth - width) / 2) / containerWidth;

                img.style.transform = `translateZ(${-offset * 300}px)`;

                const active = Math.abs(offset) < 0.15;
                // img.style["z-index"] = active ? "1" : "0";
                slide.style["pointer-events"] = active ? "none" : "";
                button.classList.toggle("active", active);
            }
        };

        function selectSlide(i) {
            const slide = slides[i];
            slidesContainer.scrollLeft = slide.offsetLeft - (containerWidth - slide.offsetWidth) / 2;
        }

        function buttonMouseEnter(button) {
            button.classList.add("expanded");
            const inner = button.querySelector(".tab-inner");
            anime({ targets: button, scale: 1.05 });
            anime({ targets: button, height: inner.offsetHeight, easing: "easeInOutQuart", duration: 200 });
            if (window.innerWidth <= 700) {
                button.classList.add("active");
            }
        }

        function buttonMouseLeave(button) {
            button.classList.remove("expanded");
            anime({ targets: button, scale: 1.0 });
            anime({ targets: button, height: 100, easing: "easeInOutQuart", duration: 200 });
            if (window.innerWidth <= 700) {
                button.classList.remove("active");
            }
        }

        function buttonClick(button) {
            if (window.innerWidth > 700) {
                selectSlide(buttons.indexOf(button));
            }
        }

        slidesContainer.addEventListener("scroll", scroll);
        scroll();

        for (const button of buttons) {
            button.addEventListener("click", () => buttonClick(button));
            button.onmouseenter = (e) => buttonMouseEnter(e.target);
            button.onmouseleave = (e) => buttonMouseLeave(e.target);
        }

        for (const [i, slide] of slides.entries()) {
            slide.addEventListener("click", () => selectSlide(i));
        }

        new IntersectionObserver(
            ([entry]) => {
                if (entry && entry.isIntersecting) {
                    selectSlide(0);
                }
            },
            { threshold: 0.25 }
        ).observe(section);

        // setTimeout(() => selectSlide(0), 100);
    }

    function init() {
        const sections = document.querySelectorAll(".section-slides");
        for (const section of sections) {
            initSection(section);
        }
    }

    if (["complete", "loaded", "interactive"].includes(document.readyState)) {
        init();
    } else {
        window.addEventListener("DOMContentLoaded", () => init());
    }
})();
