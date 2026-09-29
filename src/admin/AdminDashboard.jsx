// src/admin/AdminDashboard.jsx
import { useRef } from "react";
import { useRestaurant } from "../context/RestaurantContext";

export default function AdminDashboard() {
  const {
    hero, about, signature, gallery, contact, footer,
    heroState, aboutState, signatureState, galleryState, contactState, footerState,
  } = useRestaurant();

  const fileInputRef = useRef(null);

  const stats = [
    { label: "Signature dishes", value: signature.length },
    { label: "Gallery images",   value: gallery.images.length },
    { label: "About paragraphs", value: about.paragraphs.length },
    { label: "Quick links",      value: footer.quickLinks.length },
  ];

  function resetEverything() {
    if (!window.confirm("Reset ALL sections to defaults? This cannot be undone.")) return;
    heroState.reset();
    aboutState.reset();
    signatureState.reset();
    galleryState.reset();
    contactState.reset();
    footerState.reset();
  }

  function exportJSON() {
    const data = { hero, about, signature, gallery, contact, footer };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `restaurant-content-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (parsed.hero) heroState.setValue(parsed.hero);
        if (parsed.about) aboutState.setValue(parsed.about);
        if (parsed.signature) signatureState.setValue(parsed.signature);
        if (parsed.gallery) galleryState.setValue(parsed.gallery);
        if (parsed.contact) contactState.setValue(parsed.contact);
        if (parsed.footer) footerState.setValue(parsed.footer);
        alert("Imported. Click Save on each section to persist.");
      } catch {
        alert("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  }

  return (
    <section className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Dashboard</h1>
          <p className="admin-page-subtitle">Overview and bulk actions.</p>
        </div>

        <div className="admin-savebar">
          <button className="admin-btn admin-btn--ghost" onClick={exportJSON}>
            Export JSON
          </button>
          <button
            className="admin-btn admin-btn--ghost"
            onClick={() => fileInputRef.current?.click()}
          >
            Import JSON
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            style={{ display: "none" }}
            onChange={handleImport}
          />
          <button className="admin-btn admin-btn--danger" onClick={resetEverything}>
            Reset all
          </button>
        </div>
      </header>

      <div className="admin-stats">
        {stats.map((s) => (
          <div key={s.label} className="admin-stat">
            <div className="admin-stat-value">{s.value}</div>
            <div className="admin-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="admin-tip">
        <strong>Tip:</strong> Edit any section from the sidebar. Click <em>Save</em> to persist
        changes. <em>Export JSON</em> downloads your whole site's content as a file.
      </div>
    </section>
  );
}