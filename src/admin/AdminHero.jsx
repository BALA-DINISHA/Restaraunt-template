import { useRestaurant } from "../context/RestaurantContext";
import { useToast } from "../hooks/useToast";
import AdminField from "../components/AdminField";
import AdminSaveBar from "../components/AdminSaveBar";
import Toast from "../components/Toast";

export default function AdminHero() {
const { hero, setHero, heroState } = useRestaurant();
const { save, reset, isDirty, lastSavedAt } = heroState;
const { toast, show, clear } = useToast();
  function update(field, value) {
    setHero((prev) => ({ ...prev, [field]: value }));
  }

  function updateCta(field, value) {
    setHero((prev) => ({ ...prev, cta: { ...prev.cta, [field]: value } }));
  }

  return (
    <section className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Hero</h1>
          <p className="admin-page-subtitle">
            Edit the welcome section of the customer site.
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
        <AdminField
          label="Subtitle"
          value={hero.subtitle}
          onChange={(v) => update("subtitle", v)}
          placeholder="Welcome to"
        />
        <AdminField
          label="Heading"
          value={hero.heading}
          onChange={(v) => update("heading", v)}
          placeholder="AROMA RESTAURANT"
        />
        <AdminField
          label="Description"
          value={hero.description}
          onChange={(v) => update("description", v)}
          placeholder="Authentic flavors, memorable moments."
        />
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Call to Action</h2>

        <AdminField
          label="Button label"
          value={hero.cta?.label || ""}
          onChange={(v) => updateCta("label", v)}
          placeholder="Explore Our Menu"
        />
        <AdminField
          label="Button link (href)"
          value={hero.cta?.href || ""}
          onChange={(v) => updateCta("href", v)}
          placeholder="#menu"
        />
      </div>
      {toast && <Toast key={toast.id} message={toast.message} onDone={clear} />}
    </section>
  );
}