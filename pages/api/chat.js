// pages/api/chat.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Only POST allowed" });
    }
  
    const HF_KEY = process.env.HF_API_KEY;
    if (!HF_KEY) {
      return res.status(500).json({ error: "HF_API_KEY missing in server env" });
    }
  
    const userMessage = req.body?.message || "";
    const lower = userMessage.toLowerCase();
  
    // --- SPECIAL CASES (contact, links, address) ---
    if (lower.includes("contact")) {
      return res.status(200).json({
        reply: "Here is my contact info:",
        meta: {
          type: "contact",
          phone: "+91-98765-43210",
          email: "prayag@example.com",
          address: "Nasrullaganj, Madhya Pradesh"
        }
      });
    }
  
    if (lower.includes("address")) {
      return res.status(200).json({
        reply: "My address is:",
        meta: {
          type: "contact",
          address: "Nasrullaganj, Madhya Pradesh"
        }
      });
    }
  
    if (lower.includes("link") || lower.includes("portfolio")) {
      return res.status(200).json({
        reply: "Here are my links:",
        meta: {
          type: "links",
          links: [
            { label: "Portfolio", url: "https://your-portfolio-link" },
            { label: "GitHub", url: "https://github.com/Prayag0222" }
          ]
        }
      });
    }
  
    // --- AI MODE (HuggingFace) ---
    try {
      const hfResponse = await fetch(
        "https://router.huggingface.co/mistralai/Mistral-7B-Instruct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HF_KEY}`
          },
          body: JSON.stringify({
            inputs: userMessage
          })
        }
      );
  
      const data = await hfResponse.json();
  
      // HuggingFace returns array with generated_text
      const reply =
        data?.[0]?.generated_text ||
        "Sorry, I couldn't generate a response. Try again.";
  
      return res.status(200).json({ reply });
    } catch (error) {
      console.error("HF Error:", error);
      return res.status(500).json({ error: "AI request failed" });
    }
  }
  