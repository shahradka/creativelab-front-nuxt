<script setup lang="ts">
const props = defineProps<{
    items: {name:string, value:string}[],
    title: string
    desc: string
}>()
</script>

<template>
    <div class="flex flex-col text-left place-self-center px-8">
        <div class="mb-6 outline-8 outline-[var(--highlight)]:brightness-30 size-14 rounded-full bg-[var(--highlight)] flex flex-col justify-center items-center">
            <slot />
        </div>
        <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <div class="text-2xl font-bold">
                    {{ props.title }}
                </div>
                <div class="text-sm text-neutral-600">
                    {{ props.desc }}
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <div class="flex flex-row gap-2 items-center" v-for="(item, index) in props.items" :key="index">
                   <NuxtImg class="text-cyan-400" src="/images/check-mark.svg"/> {{ item.name }}
                </div>
            </div>
        </div>
    </div>
</template>
