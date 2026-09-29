// src/components/Toast.jsx
import { useEffect } from "react";

export default function Toast({ message, onDone, duration = 2000 }) {
  useEffect(() => {
    const id = setTimeout(onDone, duration);
    return () => clearTimeout(id);
  }, [onDone, duration]);

  return (
    <div className="toast" role="status" aria-live="polite">
      <span className="toast-icon" aria-hidden="true">✓</span>
      <span>{message}</span>
    </div>
  );
}