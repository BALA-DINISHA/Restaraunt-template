// src/admin/AdminAbout.jsx
import { useRestaurant } from "../context/RestaurantContext";
import { useToast } from "../hooks/useToast";
import AdminField from "../components/AdminField";
import AdminTextArea from "../components/AdminTextArea";
import AdminSaveBar from "../components/AdminSaveBar";
import Toast from "../components/Toast";

export default function AdminAbout() {
  const { about, setAbout, aboutState } = useRestaurant();
  const { save, reset, isDirty, lastSavedAt } = aboutState;
  const { toast, show, clear } = useToast();

  function update(field, value) {
    setAbout((prev) => ({ ...prev, [field]: value }));
  }

  function updateParagraph(index, value) {
    setAbout((prev) => {
      const next = [...prev.paragraphs];
      next[index] = value;
      return { ...prev, paragraphs: next };
    });
  }

  function addParagraph() {
    setAbout((prev) => ({ ...prev, paragraphs: [...prev.paragraphs, ""] }));
  }

  function removeParagraph(index) {
    setAbout((prev) => ({
      ...prev,
      paragraphs: prev.paragraphs.filter((_, i) => i !== index),
    }));
  }

  return (
    <section className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">About</h1>
          <p className="admin-page-subtitle">
            Edit the About section of the customer site.
          </p>
        </div>

        <AdminSaveBar
          isDirty={isDirty}
          lastSavedAt={lastSavedAt}
          onSave={save}
          onDiscard={reset}
          onToast={show}
        />
      </header>

      <div className="admin-card">
        <AdminField label="Label" value={about.label} onChange={(v) => update("label", v)} />
        <AdminField label="Heading" value={about.heading} onChange={(v) => update("heading", v)} />
        <AdminField label="Main image URL" value={about.mainImage || ""} onChange={(v) => update("mainImage", v)} />
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2 className="admin-card-title">Paragraphs</h2>
          <button className="admin-btn admin-btn--small" onClick={addParagraph}>
            + Add paragraph
          </button>
        </div>

        {about.paragraphs.map((text, i) => (
          <div key={i} className="admin-array-item">
            <AdminTextArea
              label={`Paragraph ${i + 1}`}
              value={text}
              onChange={(v) => updateParagraph(i, v)}
              rows={4}
            />
            <button
              className="admin-btn admin-btn--danger admin-btn--small"
              onClick={() => removeParagraph(i)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {toast && <Toast key={toast.id} message={toast.message} onDone={clear} />}
    </section>
  );
}