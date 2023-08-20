import { create } from 'zustand';

export const useSort = create((set, get) => ({
    filter: '',

    setSortFilter: (value) => set({filter: value
    }),
}))