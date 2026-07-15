<script setup lang="ts">
    const itemStyles = "text-xl gap-1 flex items-center";
</script>

<template>
    <div class="col-start-2 col-span-10 grid grid-flow-col justify-between">
        <div :class="itemStyles">
            <NuxtImg src="/images/Next.js.svg" alt="Next.js" width="50" height="50" />
            Next.js
        </div>
        <div :class="itemStyles">
            <NuxtImg src="/images/Nuxt.js.svg" alt="Next.js" width="50" height="50" />
            Nuxt.js
        </div>
        <div :class="itemStyles">
            <NuxtImg src="/images/CloudflareWorkers.svg" alt="Next.js" width="50" height="50" />
            Cloudflare Worker
        </div>
        <div :class="itemStyles">
            <NuxtImg src="/images/PostgresSQL.svg" alt="Next.js" width="50" height="50" />
            Postgres
        </div>
        <div :class="itemStyles, 'justify-self-end'">
            <NuxtImg src="/images/FastAPI.svg" alt="Next.js" width="50" height="50" />
            FastAPI
        </div>
    </div>
</template>