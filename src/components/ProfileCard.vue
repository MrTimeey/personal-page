<template>
    <div class="font-sans antialiased background leading-normal tracking-wider bg-cover">
        <div>
            <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                <div id="profile" class="w-full rounded-lg lg:rounded-l-lg hadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                    <div class="p-4 md:p-12 text-center lg:text-left">
                        <div class="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" :style="`background-image: url(${profile.imagePath})`"></div>

                        <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{ profile.name }}</h1>
                        <div class="mx-auto lg:mx-0 pt-3 border-b-2 border-color opacity-25"></div>
                        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                            <WorkIcon />
                            {{ profile.position }}
                        </p>
                        <p class="pt-2 text-color text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                            <WorldIcon />
                            {{ profile.location }}
                        </p>
                        <p class="pt-8 text-sm">{{ profile.description }}</p>

                        <div class="pt-12 pb-8">
                            <button class="button-color lg:w-full text-white font-bold py-2 px-4 rounded-full" @click="contactFunction(profile.contact)">Get In Touch</button>
                        </div>

                        <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                            <SocialMediaHandle icon="facebook" />
                            <SocialMediaHandle icon="twitter" />
                            <SocialMediaHandle icon="github" href="https://google.com" />
                            <SocialMediaHandle icon="unsplash" />
                            <SocialMediaHandle icon="dribble" />
                            <SocialMediaHandle icon="instagram" href="" />
                            <SocialMediaHandle icon="youtube" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WorkIcon from './icons/WorkIcon.vue';
import WorldIcon from './icons/WorldIcon.vue';
import SocialMediaHandle from './icons/social/SocialMediaHandle.vue';
import { useProfileStore } from '../stores/profile.js';
import { storeToRefs } from 'pinia';

const { profile } = storeToRefs(useProfileStore());
const contactFunction = (contact) => {
    const subject = encodeURIComponent(contact.subject);
    location.href = `mailto:${contact.mail}?subject=${subject}`;
};
</script>
