
<template>
    <div id="main" class="w-full min-h-screen font-display flex flex-col items-center">
    <header class="w-full sticky h-20 top-0 z-30">
        <AppHeader>
            <HeaderMenu />
        </AppHeader>
    </header>
    <main class="grow w-full -mt-20">
        <slot />
    </main>
    <footer>
        <AppFooter />
    </footer>
    </div>
</template>