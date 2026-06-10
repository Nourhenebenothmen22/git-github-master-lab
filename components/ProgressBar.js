export default function ProgressBar({ value, label = "Progression" }) {
  return (
    <div className="progress-wrap">
      <div className="progress-label"><span>{label}</span><strong>{Math.round(value)}%</strong></div>
      <div className="progress-track"><span style={{ width: `${Math.min(100, value)}%` }} /></div>
    </div>
  );
}
