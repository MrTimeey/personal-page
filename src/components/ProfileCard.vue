<script setup>
import WorkIcon from './icons/WorkIcon.vue';
import WorldIcon from './icons/WorldIcon.vue';
import SocialMediaHandle from './icons/social/SocialMediaHandle.vue';
</script>

<template>
    <div class="font-sans antialiased background leading-normal tracking-wider bg-cover">
        <div>
            <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                <!--Main Col-->
                <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                    <div class="p-4 md:p-12 text-center lg:text-left">
                        <!-- Image for mobile view-->
                        <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('https://source.unsplash.com/MP0IUfwrn0A')"></div>

                        <h1 class="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
                        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-color opacity-25"></div>
                        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                            <WorkIcon />
                            What you do
                        </p>
                        <p class="pt-2 text-color text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                            <WorldIcon />
                            Your Location - 25.0000° N, 71.0000° W
                        </p>
                        <p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

                        <div class="pt-12 pb-8">
                            <button class="button-color text-white font-bold py-2 px-4 rounded-full">Get In Touch</button>
                        </div>

                        <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                            <SocialMediaHandle icon="facebook" />
                            <SocialMediaHandle icon="twitter" />
                            <SocialMediaHandle icon="github" href="https://google.com" />
                            <SocialMediaHandle icon="unsplash" />
                            <SocialMediaHandle icon="dribble" />
                            <SocialMediaHandle icon="instagram" />
                            <SocialMediaHandle icon="youtube" />
                        </div>
                    </div>
                </div>

                <!--Img Col-->
                <div class="w-full lg:w-2/5">
                    <!-- Big profile image for side bar (desktop) -->
                    <img src="https://source.unsplash.com/MP0IUfwrn0A" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
                </div>
            </div>
        </div>
    </div>
</template>
