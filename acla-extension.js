class AclaExtension {
    constructor() {
        // Use your Uptime Robot-pinged Repl URL
        this.apiUrl = "https://750ddbe6-d569-4995-80a1-72813edfbd24-00-3bd78324shld4.worf.replit.dev/api/ask";
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
