(() => {
    let loadCalendlyPromise = undefined;

    function loadCalendly() {
        if (!loadCalendlyPromise) {
            loadCalendlyPromise = Promise.all([
                new Promise((resolve, reject) => {
                    const script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = "https://assets.calendly.com/assets/external/widget.js";
                    script.onload = resolve;
                    script.onerror = reject;
                    document.head.appendChild(script);
                }),
                new Promise((resolve, reject) => {
                    const link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.href = "https://assets.calendly.com/assets/external/widget.css";
                    link.onload = resolve;
                    link.onerror = reject;
                    document.head.appendChild(link);
                }),
            ]);
        }

        return loadCalendlyPromise;
    }

    function openScheduler(url = "https://calendly.com/pentacode/demo") {
        loadCalendly().then(() =>
            Calendly.initPopupWidget({ url: `${url}?hide_gdpr_banner=1` })
        );
        return false;
    }

    function addListeners() {
        const schedulingButtons = document.querySelectorAll("[data-open-scheduler]");
        for (const button of schedulingButtons) {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                openScheduler(button.getAttribute("href") || undefined);
            });
        }

        window.addEventListener("message", (e) => {
            if ((e.origin = "https://calendly.com" && e.data?.event?.startsWith("calendly"))) {
                if (!window.dataLayer) {
                    window.dataLayer = [];
                }
                window.dataLayer.push({
                    event: e.data.event,
                });
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", addListeners);
    } else {
        addListeners();
    }
})();
