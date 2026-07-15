<script setup lang="ts">
import { cn } from '~/lib/utils';

    const props = withDefaults(defineProps<{
        imgPlace?:"right" | "left"
    }>(), {
        imgPlace: "right"
    })
</script>

<template>
    <div v-if="imgPlace === 'left'"  class="col-span-1 bg-neutral-950 items-end" />
    <div :class="cn('col-span-10 grid grid-cols-2 gap-x-24', imgPlace === 'right'? 'col-start-2': '')">
        <slot name="left" />
        <slot name="right" />
    </div>
    <div v-if="imgPlace === 'right'"  class="col-span-1 bg-neutral-950 items-end" />
</template>