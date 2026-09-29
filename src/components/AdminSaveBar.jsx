// src/components/AdminSaveBar.jsx
import { useEffect } from "react";

function timeAgo(ts) {
  if (!ts) return null;
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  return new Date(ts).toLocaleDateString();
}

export default function AdminSaveBar({ isDirty, lastSavedAt, onSave, onDiscard, onToast }) {
  // Warn if leaving with unsaved changes
  useEffect(() => {
    if (!isDirty) return;
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [isDirty]);

  function handleSave() {
    onSave();
    onToast?.("Saved");
  }

  function handleDiscard() {
    if (window.confirm("Discard all unsaved changes?")) {
      onDiscard();
      onToast?.("Changes discarded");
    }
  }

  return (
    <div className="admin-savebar">
      {isDirty && (
        <span className="admin-unsaved" aria-live="polite">
          ● Unsaved changes
        </span>
      )}
      {!isDirty && lastSavedAt && (
        <span className="admin-saved-at">
          Saved {timeAgo(lastSavedAt)}
        </span>
      )}
      <button
        type="button"
        className="admin-btn admin-btn--ghost"
        onClick={handleDiscard}
        disabled={!isDirty}
      >
        Discard
      </button>
      <button
        type="button"
        className="admin-btn admin-btn--primary"
        onClick={handleSave}
        disabled={!isDirty}
      >
        Save
      </button>
    </div>
  );
}