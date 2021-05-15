(() => {
    function initSection(section) {
        const buttons = section.querySelectorAll(".tab");

        function buttonMouseEnter(button) {
            button.classList.add("active");
            const inner = button.querySelector(".tab-inner");
            anime({ targets: button, scale: 1.05 });
            anime({ targets: button, height: inner.offsetHeight, easing: "easeInOutQuart", duration: 200 });
        }

        function buttonMouseLeave(button) {
            button.classList.remove("active");
            anime({ targets: button, scale: 1.0 });
            anime({ targets: button, height: 100, easing: "easeInOutQuart", duration: 200 });
        }

        for (const [i, button] of buttons.entries()) {
            button.onmouseenter = (e) => buttonMouseEnter(e.target);
            button.onmouseleave = (e) => buttonMouseLeave(e.target);
        }
    }

    function init() {
        const sections = document.querySelectorAll(".section-waterfall");
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
