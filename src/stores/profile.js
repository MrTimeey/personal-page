import { defineStore } from 'pinia';

export const useProfileStore = defineStore({
    id: 'profile',
    state: () => ({
        profile: {
            name: 'Tim Kruse',
            imagePath: '../../public/profile.jpg',
            position: 'Software Developer',
            location: 'Bremen - Germany',
            description: 'Totally optional short description about yourself, what you do and so on.',
            contact: {
                mail: 'coding@tim-kruse.com',
                subject: 'Hello from profile homepage',
            },
        },
    }),
});
