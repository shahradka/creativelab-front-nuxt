<script setup lang="ts">

</script>

<template>
    <div class="w-full min-h-screen font-display flex flex-col items-center">
    <header class="w-full">
        <AppHeader>
            <HeaderMenu />
        </AppHeader>
    </header>
    <main class="grow w-full">
        <slot />
    </main>
    <footer>
        <AppFooter />
    </footer>
    </div>
</template>
