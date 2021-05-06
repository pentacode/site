window.addEventListener("load", function () {
    function buttonMouseEnter(button) {
        const inner = button.querySelector(".feature-button-inner");
        anime({ targets: button, scale: 1.02 })
        anime({ targets: button, height: inner.offsetHeight, easing: "easeInOutQuart", duration: 200 })
    }

    function buttonMouseLeave(button) {
        anime({ targets: button, scale: 1.00 })
        anime({ targets: button, height: 100, easing: "easeInOutQuart", duration: 200 })
    }

    for (const button of document.querySelectorAll(".feature-button")) {
        button.onmouseenter = (e) => buttonMouseEnter(e.target);
        button.onmouseleave = (e) => buttonMouseLeave(e.target);
    }
});
