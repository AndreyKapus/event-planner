import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';

export const useEvents = create((set, get)=> ({
    events: [
        {
            id: uuidv4(),
            title: 'meet',
            description: 'bla-bla',
            date: '20.20.2020',
            time: '20:11',
            category: 'business',
            addPicture: 'picture',
            priority: 'strong',
        },
    ],

    addEvent: (title) => set(state => {
        const newEvent = {
            id: uuidv4(),
            title: 'meet',
            description: 'bla-bla',
            date: '20.20.2020',
            time: '20:11',
            category: 'business',
            addPicture: 'picture',
            priority: 'strong',
        }
        return {events: {...state.events, newEvent}}
    })
}))