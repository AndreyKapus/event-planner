import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import {devtools, persist, createJSONStorage} from 'zustand/middleware';

export const useEvents = create(devtools(persist((set, get) => ({
    events: [
        {
            id: 'w',
            title: 'e',
            description: 'r',
            date: 't',
            time: 't',
            location: 't',
            category: 'd',
            addPicture: 'ds',
            priority: 'ds',
        },
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
}),
{
    name: 'events-storage',
    storage: createJSONStorage(() => localStorage),
  })))