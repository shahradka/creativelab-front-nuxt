<script setup lang="ts">
import { cn } from '~/lib/utils';

    const props = withDefaults(defineProps<{
        place:"right" | "left"
    }>(), {
        place: "right"
    })
</script>

<template>
<div :class="cn('bg-neutral-950 size-full flex flex-col items-center justify-center', place === 'right' ? 'rounded-l-2xl' : 'rounded-r-2xl')">        
    <slot />
    </div>
</template>
