import Waveform from "./Waveform";
import { CheckCircleIcon } from "./icons";

// A looping simulation of the product doing its one job: a lead comes in,
// OnCall answers, the conversation runs (waveform), the status advances
// ringing → talking → qualified → booked, and an appointment is confirmed.
// Purely decorative and CSS-driven, so it's hidden from assistive tech.
export default function HeroCallPanel() {
  return (
    <div className="hero-media" aria-hidden="true">
      <div className="hero-call blueprint">
        <i className="corner tl" />
        <i className="corner tr" />
        <i className="corner bl" />
        <i className="corner br" />

        <div className="hc-head">
          <span className="hc-live">
            <span className="hc-dot" />
            OnCall agent
          </span>
          <span className="hc-chip">Answering</span>
        </div>

        <div className="hc-lead">
          <span className="hc-avatar">SM</span>
          <div>
            <div className="hc-name">New lead · Sarah M.</div>
            <div className="hc-src">Zillow · 9:14 PM</div>
          </div>
        </div>

        <div className="hc-wave">
          <Waveform bars={36} height={40} />
        </div>

        <div className="hc-steps">
          <span className="hc-step">Ringing</span>
          <span className="hc-step">Talking</span>
          <span className="hc-step">Qualified</span>
          <span className="hc-step">Booked</span>
        </div>

        <div className="hc-booked">
          <CheckCircleIcon size={18} color="currentColor" />
          Appointment booked · Thu 2:30 PM
        </div>
      </div>
    </div>
  );
}
