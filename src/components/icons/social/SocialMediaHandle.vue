<template>
    <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
    <a class="link" :href="props.href" :target="props.target">
        <svg class="h-6 fill-current text-color icon-hover" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{{ icons[props.icon].title }}</title>
            <path :d="icons[props.icon].path" />
        </svg>
    </a>
</template>

<script setup>
import icons from './icons.json';

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: false,
        default: undefined,
    },
    target: {
        type: String,
        required: false,
        default: '_blank',
    },
});

if (!Object.keys(icons).includes(props.icon)) {
    throw new Error(`Invalid param '${props.icon}' in SocialMediaHandle component!`);
}
</script>
