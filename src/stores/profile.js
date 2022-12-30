import { defineStore } from 'pinia';

export const useProfileStore = defineStore({
    id: 'profile',
    state: () => ({
        profile: {
            name: 'Tim Kruse',
            position: 'Software Developer',
            location: 'Bremen - Germany',
            description: 'Totally optional short description about yourself, what you do and so on.',
            mail: 'coding@tim-kruse.com',
        },
    }),
});
