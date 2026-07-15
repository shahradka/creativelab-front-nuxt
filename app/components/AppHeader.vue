<template>
        <div class="w-full flex flex-row h-20 absolute z-10 items-center">
                <div class="text-sm mr-4"><NuxtImg class="inline" src="/images/Logomark.svg" width="40" height="40" />
                Creative <span class="font-bold text-primary">LAB</span></div>
                <div class="m-auto flex flex-col justify-center">
                        <slot />
                </div>
        </div>
</template>