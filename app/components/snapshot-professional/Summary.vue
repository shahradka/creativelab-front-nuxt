<script setup lang="ts">
import { cn } from '~/lib/utils';

const projectItemClass = "flex flex-col items-center justify-center text-4xl text-accent font-bold"
const projectItemDescClass= "text-lg font-normal text-foreground"
</script>
<template>
    <div class="col-span-6 col-start-4 grid lg:grid-cols-3">
        <div :class="cn(projectItemClass, 'lg:border-r mb-8 lg:mb-0')">
            <span>11+</span> 
            <span :class="projectItemDescClass">Years</span>
        </div>
        <div :class="cn(projectItemClass, 'lg:border-r mb-8 lg:mb-0')">
            <span>50</span>
            <span :class="projectItemDescClass">Projects</span>
        </div>
        <div :class="projectItemClass">
            <span>30+</span>
            <span :class="projectItemDescClass">Skills</span>
        </div>
    </div>
</template>