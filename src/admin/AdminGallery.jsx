import { useRestaurant } from "../context/RestaurantContext";
import { useToast } from "../hooks/useToast";
import AdminField from "../components/AdminField";
import AdminTextArea from "../components/AdminTextArea";
import AdminSaveBar from "../components/AdminSaveBar";
import Toast from "../components/Toast";

export default function AdminGallery() {
const { gallery, setGallery, galleryState } = useRestaurant();
const { save, reset, isDirty, lastSavedAt } = galleryState;
const { toast, show, clear } = useToast();

  function update(field, value) {
    setGallery((prev) => ({ ...prev, [field]: value }));
  }

  function updateImage(index, field, value) {
    setGallery((prev) => {
      const next = [...prev.images];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, images: next };
    });
  }

  function addImage() {
    const newId = `g${Date.now()}`;
    setGallery((prev) => ({
      ...prev,
      images: [...prev.images, { id: newId, src: "", alt: "", caption: "" }],
    }));
  }

  function removeImage(index) {
    setGallery((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  }

  return (
    <section className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Gallery</h1>
          <p className="admin-page-subtitle">Edit headings and photos.</p>
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
        <AdminField label="Label" value={gallery.label} onChange={(v) => update("label", v)} />
        <AdminField label="Heading (top)" value={gallery.headingTop} onChange={(v) => update("headingTop", v)} />
        <AdminField label="Heading (bottom)" value={gallery.headingBottom} onChange={(v) => update("headingBottom", v)} />
        <AdminTextArea label="Subtitle" value={gallery.subtitle} onChange={(v) => update("subtitle", v)} rows={3} />
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2 className="admin-card-title">Images</h2>
          <button className="admin-btn admin-btn--small" onClick={addImage}>+ Add image</button>
        </div>

        {gallery.images.map((img, i) => (
          <div key={img.id} className="admin-array-item admin-array-item--block">
            <AdminField label={`Image ${i + 1} — Src`} value={img.src} onChange={(v) => updateImage(i, "src", v)} />
            <AdminField label="Alt text" value={img.alt} onChange={(v) => updateImage(i, "alt", v)} />
            <AdminField label="Caption" value={img.caption} onChange={(v) => updateImage(i, "caption", v)} />
            <button className="admin-btn admin-btn--danger admin-btn--small" onClick={() => removeImage(i)}>
              Remove image
            </button>
          </div>
        ))}
      </div>
      {toast && <Toast key={toast.id} message={toast.message} onDone={clear} />}
    </section>
  );
}