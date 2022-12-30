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
            socialMedia: {
                github: 'https://github.com/MrTimeey/',
                instagram: 'https://www.instagram.com/mrtimeey/',
                twitter: 'https://twitter.com/tim_siegler',
                xing: 'https://www.xing.com/profile/Tim_Siegler3',
                youtube: 'https://www.youtube.com/channel/UC9XNrdrDvHtiRGZ2ru7mgRA',
            },
        },
    }),
});
