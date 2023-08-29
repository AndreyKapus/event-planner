import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import {devtools, persist, createJSONStorage} from 'zustand/middleware';

export const useEvents = create(devtools(persist((set, get) => ({
    events: [],
    
    addEvent: ({title, description, startDate, time, location, category, picture, priority}) => set(state => {
        const newEvent = {
            id: uuidv4(),
            title: title,
            description: description,
            date: startDate.getDate(),
            year: startDate.getMonth(),
            time: time,
            location: location,
            category: category,
            addPicture: picture,
            priority: priority,
        };

       return { events: [...state.events, newEvent] }
    }),

    deleteEvent: (eId) => set(state => {
        return {
            events: state.events.filter(ev => ev.id !== eId)
        }
    }),
}),
    {
    name: 'events-storage',
    storage: createJSONStorage(() => localStorage),
  })));


  export const useId = create(set => ({
    id: '',
    setId: (value) => set({
        id: value
    }),
    setInitialId: () => ({
        id: ''
    }),
  }));