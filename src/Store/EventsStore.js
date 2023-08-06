import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import {devtools, persist, createJSONStorage} from 'zustand/middleware';

export const useEvents = create(devtools(persist((set, get) => ({
    events: [
        // {
        //     id: '24',
        //     title: 'Gallery opening',
        //     description: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
        //     date: '20.12',
        //     time: '20:30',
        //     location: 'Kyiv',
        //     category: 'business',
        //     addPicture: 'ds',
        //     priority: 'medium',
        // },
    ],
    
    addEvent: ({title, description, date, time, location, category, picture, priority}) => set(state => {
        const newEvent = {
            id: uuidv4(),
            title: title,
            description: description,
            date: date,
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
    setId: (value) => set({id: value}),
    setInitialId: () => ({id: ''}),
  }));