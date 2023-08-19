import { create } from 'zustand';

export const useFilter = create((set, get) => ({
    filter: '',

    setCategoryFilter: (category) => set({filter: category
    }),
}))