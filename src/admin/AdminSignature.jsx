import { useRestaurant } from "../context/RestaurantContext";
import { useToast } from "../hooks/useToast";
import AdminField from "../components/AdminField";
import AdminTextArea from "../components/AdminTextArea";
import AdminSaveBar from "../components/AdminSaveBar";
import Toast from "../components/Toast";

export default function AdminSignature() {
const { signature, setSignature, signatureState } = useRestaurant();
const { save, reset, isDirty, lastSavedAt } = signatureState;
const { toast, show, clear } = useToast();

  function updateDish(index, field, value) {
    setSignature((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  function addDish() {
    const newId = `d${Date.now()}`;
    setSignature((prev) => [
      ...prev,
      {
        id: newId,
        name: "New Dish",
        tagline: "",
        description: "",
        image: "",
        bgImage: "",
        alt: "",
      },
    ]);
  }

  function removeDish(index) {
    setSignature((prev) => prev.filter((_, i) => i !== index));
  }

  function moveDish(index, direction) {
    setSignature((prev) => {
      const target = index + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  return (
    <section className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Signature Dishes</h1>
          <p className="admin-page-subtitle">
            Edit the carousel dishes shown on the customer site.
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
        <div className="admin-card-header">
          <h2 className="admin-card-title">Dishes ({signature.length})</h2>
          <button className="admin-btn admin-btn--small" onClick={addDish}>+ Add dish</button>
        </div>

        {signature.map((dish, i) => (
          <div key={dish.id} className="admin-array-item admin-array-item--block">
            <div className="admin-dish-header">
              <strong>Dish {i + 1}</strong>
              <div className="admin-dish-actions">
                <button className="admin-btn admin-btn--ghost admin-btn--small" onClick={() => moveDish(i, -1)} disabled={i === 0}>↑</button>
                <button className="admin-btn admin-btn--ghost admin-btn--small" onClick={() => moveDish(i, 1)} disabled={i === signature.length - 1}>↓</button>
                <button className="admin-btn admin-btn--danger admin-btn--small" onClick={() => removeDish(i)}>Remove</button>
              </div>
            </div>

            <AdminField label="Name" value={dish.name} onChange={(v) => updateDish(i, "name", v)} />
            <AdminField label="Tagline" value={dish.tagline} onChange={(v) => updateDish(i, "tagline", v)} />
            <AdminTextArea label="Description" value={dish.description} onChange={(v) => updateDish(i, "description", v)} rows={3} />
            <AdminField label="Image URL" value={dish.image} onChange={(v) => updateDish(i, "image", v)} />
            <AdminField label="Background image URL" value={dish.bgImage} onChange={(v) => updateDish(i, "bgImage", v)} />
            <AdminField label="Alt text" value={dish.alt} onChange={(v) => updateDish(i, "alt", v)} />
          </div>
        ))}
      </div>
      {toast && <Toast key={toast.id} message={toast.message} onDone={clear} />}
    </section>
  );
}