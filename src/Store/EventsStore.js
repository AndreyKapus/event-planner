import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';

export const useEvents = create((set, get)=> ({
    events: [
        {
            id: '',
            title: '',
            description: '',
            date: '',
            time: '',
            location: '',
            category: '',
            addPicture: '',
            priority: '',
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
        }
        return {events: [...state.events, newEvent]}
    })
}))