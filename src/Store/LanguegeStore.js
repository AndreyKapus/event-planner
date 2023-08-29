import { create } from 'zustand';

export const useLang = create((set, get) => ({
    lang: 'en',

    setLang: (value) => set({
        lang: value
    }),
}))