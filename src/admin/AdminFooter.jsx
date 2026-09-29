import { useRestaurant } from "../context/RestaurantContext";
import { useToast } from "../hooks/useToast";
import AdminField from "../components/AdminField";
import AdminSaveBar from "../components/AdminSaveBar";
import Toast from "../components/Toast";

export default function AdminFooter() {
const { footer, setFooter, footerState } = useRestaurant();
const { save, reset, isDirty, lastSavedAt } = footerState;
const { toast, show, clear } = useToast();
  function updateBrand(field, value) {
    setFooter((prev) => ({ ...prev, brand: { ...prev.brand, [field]: value } }));
  }

  function updateContact(field, value) {
    setFooter((prev) => ({ ...prev, contact: { ...prev.contact, [field]: value } }));
  }

  function updateArrayItem(arrayName, index, field, value) {
    setFooter((prev) => {
      const next = [...prev[arrayName]];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, [arrayName]: next };
    });
  }

  function addArrayItem(arrayName, template) {
    setFooter((prev) => ({ ...prev, [arrayName]: [...prev[arrayName], template] }));
  }

  function removeArrayItem(arrayName, index) {
    setFooter((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index),
    }));
  }

  return (
    <section className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Footer</h1>
          <p className="admin-page-subtitle">Edit links, contact info, and hours.</p>
        </div>
   <AdminSaveBar
  isDirty={isDirty}
  lastSavedAt={lastSavedAt}
  onSave={save}
  onDiscard={reset}
  onToast={show}
/>
      </header>

      {/* Brand */}
      <div className="admin-card">
        <h2 className="admin-card-title">Brand</h2>
        <AdminField label="Name" value={footer.brand.name} onChange={(v) => updateBrand("name", v)} />
        <AdminField label="Tagline" value={footer.brand.tagline} onChange={(v) => updateBrand("tagline", v)} />
      </div>

      {/* Quick links */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h2 className="admin-card-title">Quick Links</h2>
          <button className="admin-btn admin-btn--small" onClick={() => addArrayItem("quickLinks", { label: "New", href: "#" })}>
            + Add link
          </button>
        </div>
        {footer.quickLinks.map((link, i) => (
          <div key={i} className="admin-array-item admin-array-item--two">
            <AdminField label="Label" value={link.label} onChange={(v) => updateArrayItem("quickLinks", i, "label", v)} />
            <AdminField label="Href" value={link.href} onChange={(v) => updateArrayItem("quickLinks", i, "href", v)} />
            <button className="admin-btn admin-btn--danger admin-btn--small" onClick={() => removeArrayItem("quickLinks", i)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="admin-card">
        <h2 className="admin-card-title">Contact Info</h2>
        <AdminField label="Heading" value={footer.contact.heading} onChange={(v) => updateContact("heading", v)} />
        <AdminField label="Phone label" value={footer.contact.phone.label} onChange={(v) => setFooter((prev) => ({ ...prev, contact: { ...prev.contact, phone: { ...prev.contact.phone, label: v } } }))} />
        <AdminField label="Phone href" value={footer.contact.phone.href} onChange={(v) => setFooter((prev) => ({ ...prev, contact: { ...prev.contact, phone: { ...prev.contact.phone, href: v } } }))} />
        <AdminField label="Email label" value={footer.contact.email.label} onChange={(v) => setFooter((prev) => ({ ...prev, contact: { ...prev.contact, email: { ...prev.contact.email, label: v } } }))} />
        <AdminField label="Email href" value={footer.contact.email.href} onChange={(v) => setFooter((prev) => ({ ...prev, contact: { ...prev.contact, email: { ...prev.contact.email, href: v } } }))} />
      </div>

      {/* Social links */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h2 className="admin-card-title">Social Links</h2>
          <button className="admin-btn admin-btn--small" onClick={() => addArrayItem("socialLinks", { label: "New", href: "#" })}>
            + Add social
          </button>
        </div>
        {footer.socialLinks.map((link, i) => (
          <div key={i} className="admin-array-item admin-array-item--two">
            <AdminField label="Label" value={link.label} onChange={(v) => updateArrayItem("socialLinks", i, "label", v)} />
            <AdminField label="Href" value={link.href} onChange={(v) => updateArrayItem("socialLinks", i, "href", v)} />
            <button className="admin-btn admin-btn--danger admin-btn--small" onClick={() => removeArrayItem("socialLinks", i)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Hours */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h2 className="admin-card-title">Hours</h2>
          <button className="admin-btn admin-btn--small" onClick={() => setFooter((prev) => ({ ...prev, hours: { ...prev.hours, groups: [...prev.hours.groups, { label: "New", time: "" }] } }))}>
            + Add hours
          </button>
        </div>
        {footer.hours.groups.map((group, i) => (
          <div key={i} className="admin-array-item admin-array-item--two">
            <AdminField label="Days" value={group.label} onChange={(v) => setFooter((prev) => ({ ...prev, hours: { ...prev.hours, groups: prev.hours.groups.map((g, j) => j === i ? { ...g, label: v } : g) } }))} />
            <AdminField label="Time" value={group.time} onChange={(v) => setFooter((prev) => ({ ...prev, hours: { ...prev.hours, groups: prev.hours.groups.map((g, j) => j === i ? { ...g, time: v } : g) } }))} />
            <button className="admin-btn admin-btn--danger admin-btn--small" onClick={() => setFooter((prev) => ({ ...prev, hours: { ...prev.hours, groups: prev.hours.groups.filter((_, j) => j !== i) } }))}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <AdminField label="Copyright" value={footer.copyright} onChange={(v) => setFooter((prev) => ({ ...prev, copyright: v }))} />
      </div>
      {toast && <Toast key={toast.id} message={toast.message} onDone={clear} />}
    </section>
  );
}