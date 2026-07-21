<script setup lang="ts">
    const itemClass = "flex justify-center items-center gap-2 text-xs"
</script>

<template>
    <div class="col-span-10 col-start-2 grid grid-cols-5 mt-12">
        <span :class="itemClass">
            <NuxtImg width="46" height="50" src="/images/authority-svgfind-com.svg" />
            <span>
                Technical Leadership
            </span>
        </span>
        <span :class="itemClass">
            <NuxtImg width="46" height="50" src="/images/analytical and synthetic methods-svgfind-com.svg" />
            <span>
                Analytical Problem Solving
            </span>
        </span>
       <span :class="itemClass">

            <NuxtImg width="46" height="50" src="/images/Mentoring.svg" />
            <span>
                Mentorship & Coaching
            </span>
        </span>
        <span :class="itemClass">
            <NuxtImg width="46" height="50" src="/images/Cross docking-svgfind-com.svg" />
            <span>
            Cross-functional Collaboration
            </span>
        </span>
        <span  :class="itemClass">
            <NuxtImg width="46" height="50" src="/images/agile methodology-svgfind-com.svg" />
            <span>
            Agile Mindset
            </span>
        </span>
    </div>
</template>