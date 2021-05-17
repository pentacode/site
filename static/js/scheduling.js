(() => {
    function loadCalendly() {
        if (typeof window.Calendly !== "undefined") {
            return;
        }

        return Promise.all([
            new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "https://assets.calendly.com/assets/external/widget.js";
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            }).then(() => console.log("script loaded")),
            new Promise((resolve, reject) => {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://assets.calendly.com/assets/external/widget.css";
                link.onload = resolve;
                link.onerror = reject;
                document.head.appendChild(link);
            }).then(() => console.log("styles loaded")),
        ]);
    }

    window.openScheduler = () => {
        loadCalendly().then(() => Calendly.initPopupWidget({ url: "https://calendly.com/pentacode/demo" }));
        return false;
    };
})();
