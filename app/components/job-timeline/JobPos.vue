<script setup lang="ts">
import { cn } from '~/lib/utils';

    const props = withDefaults(defineProps<{
        imgPlace?:"right" | "left"
    }>(), {
        imgPlace: "right"
    })
</script>

<template>
    <div :class="cn('col-span-12 grid grid-cols-2 gap-x-24', imgPlace === 'right'? 'col-start-2': 'col-end-12')">
        <slot name="left" />
        <slot name="right" />
    </div>
</template>