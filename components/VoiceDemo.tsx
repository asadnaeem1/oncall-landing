"use client";

import { useCallback, useState } from "react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";
import Waveform from "./Waveform";
import { MicIcon } from "./icons";
import { ELEVENLABS_AGENT_ID } from "@/lib/constants";

const startBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  background: "#fff",
  color: "var(--color-accent-900)",
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  fontSize: 18,
  letterSpacing: "0.01em",
  padding: "16px 30px",
  minHeight: 56,
  border: "1px solid #fff",
  cursor: "pointer",
};

const endBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  background: "transparent",
  color: "#fff",
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  fontSize: 16,
  letterSpacing: "0.01em",
  padding: "13px 24px",
  minHeight: 48,
  border: "1px solid color-mix(in srgb,#fff 55%,transparent)",
  cursor: "pointer",
};

function VoiceDemoInner() {
  const [requesting, setRequesting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      setRequesting(false);
      setError(null);
    },
    onDisconnect: () => setRequesting(false),
    onError: () => {
      setRequesting(false);
      setError("The demo agent hit a connection problem. Please try again.");
    },
  });

  const { status, isSpeaking, startSession, endSession } = conversation;
  const connected = status === "connected";
  const connecting = requesting && !connected;

  const startCall = useCallback(async () => {
    setError(null);
    setRequesting(true);
    try {
      // Ask for the mic up front so the browser prompt is tied to the click.
      await navigator.mediaDevices.getUserMedia({ audio: true });
      // Public agent — connects client-side over WebRTC, no backend/API key.
      startSession({ agentId: ELEVENLABS_AGENT_ID });
    } catch (err) {
      setRequesting(false);
      const name = (err as { name?: string })?.name;
      setError(
        name === "NotAllowedError" || name === "NotFoundError"
          ? "We need microphone access to start the call. Allow it in your browser, then try again."
          : "Couldn't start the call. Check your connection and try again.",
      );
    }
  }, [startSession]);

  const endCall = useCallback(() => {
    endSession();
  }, [endSession]);

  return (
    <div style={{ marginTop: "clamp(30px,4vw,44px)" }}>
      {connected ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: "min(440px,100%)",
              color: "var(--color-accent-200)",
              opacity: isSpeaking ? 1 : 0.5,
              transition: "opacity 0.25s ease",
            }}
          >
            <Waveform bars={44} height={48} />
          </div>
          <p
            aria-live="polite"
            style={{
              margin: 0,
              fontFamily: "var(--font-heading)",
              fontSize: 15,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--color-accent-200)",
            }}
          >
            {isSpeaking ? "The agent is speaking…" : "Listening — go ahead"}
          </p>
          <button type="button" onClick={endCall} style={endBtn}>
            End call
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <button
            type="button"
            onClick={startCall}
            disabled={connecting}
            style={{ ...startBtn, opacity: connecting ? 0.7 : 1 }}
          >
            <MicIcon size={22} color="var(--color-accent-900)" />
            {connecting ? "Connecting…" : "Talk to the demo agent"}
          </button>
          {error ? (
            <p
              role="alert"
              style={{ margin: 0, fontSize: 15, lineHeight: 1.5, maxWidth: "42ch", color: "#ffd9d2" }}
            >
              {error}
            </p>
          ) : (
            <p style={{ margin: 0, fontSize: 16, letterSpacing: "0.02em", color: "var(--color-accent-200)" }}>
              No form. No phone number. Just your microphone.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// useConversation must live inside a ConversationProvider (SDK v1.x). Scoping
// the provider here keeps the whole voice feature a self-contained client
// island rather than wrapping the entire app.
export default function VoiceDemo() {
  return (
    <ConversationProvider>
      <VoiceDemoInner />
    </ConversationProvider>
  );
}
