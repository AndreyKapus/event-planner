import { create } from 'zustand';

export const useSearch = create((set) => ({
    searchValue: '',

    handleChange: (value) => set({
        searchValue: value
    })
}))