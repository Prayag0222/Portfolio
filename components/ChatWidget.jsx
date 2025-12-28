// components/ChatWidget.jsx
import React, { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);
  const pointerInsideRef = useRef(false); // track if mouse is over the popup

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          from: "bot",
          text: "Hi — I'm the portfolio assistant. Ask me about projects, contact info or links.",
        },
      ]);
    }
  }, []);

  // Prevent background (page) scroll when widget is open (helpful for mobile)
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
  }, [open]);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, open]);

  // Robust wheel/touch handling for messages container: prevents scroll leak to page
  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // If mouse isn't inside popup (e.g., wheel triggered elsewhere) don't interfere
      if (!pointerInsideRef.current) return;

      // deltaY positive = scrolling down, negative = scrolling up
      const delta = e.deltaY;
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop <= 0;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

      // If the messages area *can* scroll in the wheel direction, allow native scrolling but stop propagation
      const canScrollDown = delta > 0 && !atBottom;
      const canScrollUp = delta < 0 && !atTop;

      if (canScrollDown || canScrollUp) {
        // stop event from reaching page, but allow default so the element scrolls
        e.stopPropagation();
        // do NOT call preventDefault() so the element receives the scroll
      } else {
        // messages area can't scroll further in that direction -> prevent page from scrolling
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Touch handling (for mobile swipes) — similar logic
    let startY = 0;
    const onTouchStart = (ev) => {
      startY = ev.touches?.[0]?.clientY || 0;
    };
    const onTouchMove = (ev) => {
      if (!pointerInsideRef.current) return;
      const currentY = ev.touches?.[0]?.clientY || 0;
      const delta = startY - currentY; // positive -> swipe up (scroll down)
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop <= 0;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

      const tryingToScrollDown = delta > 0;
      const tryingToScrollUp = delta < 0;

      if ((tryingToScrollDown && !atBottom) || (tryingToScrollUp && !atTop)) {
        // let the container scroll; stop propagation
        ev.stopPropagation();
        // don't preventDefault here so native scroll works
      } else {
        // container cannot scroll further -> prevent page scroll
        ev.preventDefault();
        ev.stopPropagation();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [messagesRef.current]);

// inside components/ChatWidget.jsx — replace the existing send() with this

const send = async () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { id: Date.now().toString(), from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
  
    // small timeout so fetch doesn't hang forever
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000); // 20s
  
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
        signal: controller.signal,
      });
  
      clearTimeout(timeout);
  
      // If server returns non-JSON or non-2xx, try to parse error info gracefully
      let data;
      try {
        data = await res.json();
      } catch (parseErr) {
        // Not JSON — create a fallback
        console.error("Response not JSON", parseErr);
        throw new Error(`Server returned status ${res.status} and non-JSON body`);
      }
  
      if (!res.ok) {
        // If API returns { error: "..." } we show that
        const errMsg = data?.error || `Server error (${res.status})`;
        console.error("API error", { status: res.status, body: data });
        setMessages((m) => [
          ...m,
          { id: "err" + Date.now().toString(), from: "bot", text: `Error: ${errMsg}` },
        ]);
        return;
      }
  
      // success path
      const botText = data?.reply ?? "Sorry, I didn't understand that.";
      const botMsg = { id: "b" + Date.now().toString(), from: "bot", text: botText, meta: data?.meta };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      // Network error, aborted, or unexpected error
      console.error("Fetch failed", err);
      let messageText = "Network error. Try again later.";
      if (err.name === "AbortError") messageText = "Request timed out. Try again.";
      else if (err.message) messageText = `Error: ${err.message}`;
  
      setMessages((m) => [
        ...m,
        { id: "err" + Date.now().toString(), from: "bot", text: messageText },
      ]);
    } finally {
      setLoading(false);
    }
  };
  
  const onKeyDown = (e) => {
    if (e.key === "Enter") send();
  };

  return (
    <>
      {/* Floating circular button */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Open chat"
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus:outline-none transition-transform transform hover:scale-105 bg-indigo-600 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12v5a2 2 0 01-2 2H7l-4 4V6a2 2 0 012-2h14a2 2 0 012 2v6z" />
          </svg>
        </button>
      </div>

      {/* Popup: fixed width + fixed max-height. Uses flex so header/input/footer are fixed */}
      <div
        className={`fixed right-6 bottom-24 z-50 transition-transform ${open ? "scale-100" : "scale-0"} transform origin-bottom-right`}
        style={{ width: 360, maxWidth: "calc(100vw - 48px)" }}
        // track pointer so wheel handling knows whether to block page scroll
        onMouseEnter={() => (pointerInsideRef.current = true)}
        onMouseLeave={() => (pointerInsideRef.current = false)}
      >
        <div
          className="flex flex-col rounded-xl shadow-2xl overflow-hidden border border-gray-200 bg-white"
          style={{ maxHeight: "480px", height: "480px" }}
        >
          {/* Header */}
          <div className="px-4 py-3 bg-indigo-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white">P</div>
              <div>
                <div className="font-semibold">Portfolio Assistant</div>
                <div className="text-xs opacity-90">Ask about projects, contact or links</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-white focus:outline-none"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div
            ref={messagesRef}
            className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {messages.map((m) => (
              <div key={m.id} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${m.from === "user" ? "bg-indigo-600 text-white" : "bg-white border border-gray-200 text-gray-800"}`}
                >
                  {m.text}
                  {m.meta?.type === "contact" && (
                    <div className="mt-2 text-xs">
                      <div><strong>Phone:</strong> {m.meta.phone}</div>
                      <div><strong>Email:</strong> {m.meta.email}</div>
                      <div><strong>Address:</strong> {m.meta.address}</div>
                    </div>
                  )}
                  {m.meta?.type === "links" && (
                    <div className="mt-2 space-y-1 text-xs">
                      {m.meta.links.map((l, i) => (
                        <div key={i}>
                          <a className="underline" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-xs text-gray-500">Assistant is typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="px-3 py-2 border-t border-gray-100 flex gap-2 items-center bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type a message..."
              className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
            />
            <button
              onClick={send}
              disabled={loading}
              className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm disabled:opacity-60"
            >
              Send
            </button>
          </div>

          {/* Footer small */}
          <div className="px-3 py-2 text-xs text-gray-400 bg-white">Responses are simulated for demo; add OPENAI_API_KEY to enable real AI.</div>
        </div>
      </div>
    </>
  );
}
