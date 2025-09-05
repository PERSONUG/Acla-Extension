class AclaExtension {
  constructor() {
    // Using your new working Replit URL
    this.apiUrl = "https://750ddbe6-d569-4995-80a1-72813edfbd24-00-3bd78324shld4.worf.replit.dev/api/ask";
  }

  async ask(prompt) {
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      try {
        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        return data.reply || "No response";
      } catch (err) {
        attempts++;
        console.warn(`Attempt ${attempts} failed:`, err);

        if (attempts < maxAttempts) {
          // wait before retrying — gives Replit a small buffer
          await new Promise(r => setTimeout(r, 2000));
        } else {
          return "Error: could not reach Acla (Replit might be waking up)";
        }
      }
    }
  }
}

window.AclaExtension = new AclaExtension();
