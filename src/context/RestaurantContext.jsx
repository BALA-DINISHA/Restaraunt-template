// src/context/RestaurantContext.jsx
import { createContext, useContext } from "react";
import { usePersistentState } from "../hooks/usePersistentState";

import {
  restaurantProfile,     // ← add
  heroContent,
  aboutContent,
  signatureDishes,
  galleryIntro,
  contactIntro,
  footerContent,
} from "../data/restaurantData";
const RestaurantContext = createContext(null);

export function RestaurantProvider({ children }) {
  const profile   = usePersistentState("profile", restaurantProfile);

  const hero      = usePersistentState("hero", heroContent);
  const about     = usePersistentState("about", aboutContent);
  const signature = usePersistentState("signature", signatureDishes);
  const gallery   = usePersistentState("gallery", galleryIntro);
  const contact   = usePersistentState("contact", contactIntro);
  const footer    = usePersistentState("footer", footerContent);

  const value = {
    // read
      profile: profile.value,
    hero: hero.value,
    about: about.value,
    signature: signature.value,
    gallery: gallery.value,
    contact: contact.value,
    footer: footer.value,

    // write
    setProfile: profile.setValue,
    setHero: hero.setValue,
    setAbout: about.setValue,
    setSignature: signature.setValue,
    setGallery: gallery.setValue,
    setContact: contact.setValue,
    setFooter: footer.setValue,

    // save/reset/dirty — grouped by section
     profileState: profile, 
    heroState: hero,
    aboutState: about,
    signatureState: signature,
    galleryState: gallery,
    contactState: contact,
    footerState: footer,
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurant() {
  const ctx = useContext(RestaurantContext);
  if (!ctx) {
    throw new Error("useRestaurant must be used inside <RestaurantProvider>");
  }
  return ctx;
}