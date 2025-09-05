class AclaExtension {
    constructor() {
        // Your backend URL
        this.apiUrl = "https://acla-2-sep.helloperson1231.repl.co/api/ask";
    }

    async ask(prompt) {
        try {
            const response = await fetch(this.apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            return data.reply;
        } catch (err) {
            console.error("Error reaching Acla:", err);
            return "Error: could not reach Acla";
        }
    }
}

// Make it global for TurboWarp
window.AclaExtension = new AclaExtension();
