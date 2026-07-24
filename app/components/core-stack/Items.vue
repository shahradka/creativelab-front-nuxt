<script setup lang="ts">
    const itemStyles = "text-lg gap-3 flex items-center flex-col lg:flex-row";
</script>

<template>
<div class="grid lg:grid-flow-col gap-4 grid-cols-2 lg:grid-cols-none justify-items-center lg:justify-items-stretch lg:col-start-2 col-span-10">        
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