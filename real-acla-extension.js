class AclaExtension {
  constructor() {
    // Correct Replit URL format
    this.apiUrl = "https://acla-2-sep.helloperson1231.repl.co/api/ask"; 
  }

  getInfo() {
    return {
      id: "acla",
      name: "Acla AI",
      blocks: [
        {
          opcode: "askAcla",
          blockType: "reporter",
          text: "ask Acla [TEXT]",
          arguments: {
            TEXT: {
              type: "string",
              defaultValue: "Hello Acla!"
            }
          }
        }
      ]
    };
  }

  async askAcla(args) {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: args.TEXT })
      });

      const data = await response.json();
      return data.reply || "No response";
    } catch (err) {
      console.error("Error talking to Acla backend:", err);
      return "Error: could not reach Acla";
    }
  }
}

Scratch.extensions.register(new AclaExtension());
