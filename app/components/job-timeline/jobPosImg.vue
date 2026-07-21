<script setup lang="ts">
import { cn } from '~/lib/utils';

    const props = withDefaults(defineProps<{
        place:"right" | "left"
    }>(), {
        place: "right"
    })
</script>

<template>
<div :class="cn('bg-neutral-950 h-128 flex flex-col items-center justify-center border-y-4 border-foreground', place === 'right' ? 'rounded-l-2xl border-l-4' : 'rounded-r-2xl border-r-4')">        
    <slot />
    </div>
</template>
