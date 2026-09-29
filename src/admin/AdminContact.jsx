// src/admin/AdminContact.jsx
import { useRestaurant } from "../context/RestaurantContext";
import { useToast } from "../hooks/useToast";
import AdminField from "../components/AdminField";
import AdminTextArea from "../components/AdminTextArea";
import AdminSaveBar from "../components/AdminSaveBar";
import Toast from "../components/Toast";

export default function AdminContact() {
  const { contact, setContact, contactState } = useRestaurant();
  const { save, reset, isDirty, lastSavedAt } = contactState;
  const { toast, show, clear } = useToast();

  function update(field, value) {
    setContact((prev) => ({ ...prev, [field]: value }));
  }

  function updateMap(field, value) {
    setContact((prev) => ({ ...prev, map: { ...prev.map, [field]: value } }));
  }

  function updateForm(field, value) {
    setContact((prev) => ({ ...prev, form: { ...prev.form, [field]: value } }));
  }

  return (
    <section className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Contact</h1>
          <p className="admin-page-subtitle">Edit contact section and map.</p>
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
        <h2 className="admin-card-title">Header</h2>
        <AdminField label="Label" value={contact.label} onChange={(v) => update("label", v)} />
        <AdminField label="Heading (top)" value={contact.headingTop} onChange={(v) => update("headingTop", v)} />
        <AdminField label="Heading (bottom)" value={contact.headingBottom} onChange={(v) => update("headingBottom", v)} />
        <AdminTextArea label="Subtitle" value={contact.subtitle} onChange={(v) => update("subtitle", v)} rows={3} />
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Google Map</h2>
        <AdminTextArea label="Embed src URL" value={contact.map.embedSrc} onChange={(v) => updateMap("embedSrc", v)} rows={3} />
        <AdminField label="Directions link" value={contact.map.directionsHref} onChange={(v) => updateMap("directionsHref", v)} />
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Reservation Form</h2>
        <AdminField label="Form label" value={contact.form.label} onChange={(v) => updateForm("label", v)} />
        <AdminField label="Title" value={contact.form.title} onChange={(v) => updateForm("title", v)} />
        <AdminField label="Subtitle" value={contact.form.subtitle} onChange={(v) => updateForm("subtitle", v)} />
        <AdminField label="CTA label" value={contact.form.ctaLabel} onChange={(v) => updateForm("ctaLabel", v)} />
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Background</h2>
        <AdminField label="Background image URL" value={contact.bgImage} onChange={(v) => update("bgImage", v)} />
      </div>

      {toast && <Toast key={toast.id} message={toast.message} onDone={clear} />}
    </section>
  );
}