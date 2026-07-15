<template>
    <div class="w-full h-160 flex flex-rom bg-accent items-center justify-center relative">
        <div class="absolute size-full z-0"> 
            <video autoplay loop muted playsinline class="size-full object-cover">
                <source src="/videos/hero-background.mkv" type="video/webm" />
              </video>
        </div>
        <div class="xl:w-300 lg:w-250 absolute z-10">
            <slot />
        </div>
    </div>
</template>
