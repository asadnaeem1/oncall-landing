type WaveformProps = {
  bars?: number;
  className?: string;
  height?: number | string;
  color?: string;
};

// A voice-audio waveform: vertical bars scaling in a travelling ripple.
// Decorative — the product is a phone call, so this is the recurring motif.
export default function Waveform({
  bars = 32,
  className,
  height = 40,
  color,
}: WaveformProps) {
  return (
    <div
      className={className ? `waveform ${className}` : "waveform"}
      style={{ height, color }}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${(i * 0.05).toFixed(2)}s`,
            animationDuration: `${(1 + (i % 5) * 0.08).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}
