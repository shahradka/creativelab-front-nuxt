<template>
    <div id="hero-wrapper" class="w-full h-160 flex flex-rom bg-accent overflow-hidden
     items-center justify-center relative">
        <div class="absolute size-full z-0 min-w-400 lg:visible xl:visible"> 
            <video autoplay loop muted playsinline class="size-full object-cover">
                <source src="/videos/hero-background.mkv" type="video/webm" />
              </video>
        </div>
        <div class="z-10 grid lg:grid-cols-12 w-full md:justify-items-stretch">
            <slot />
        </div>
    </div>
</template>
