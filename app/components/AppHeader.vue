<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headerWrapperRef = ref<HTMLElement | null>(null)
const headerLogoRef = ref<HTMLElement | null>(null)

const gsap = useGSAP()
onMounted(async() => {
gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.create({
        start:"top -15px",
        onEnter:() =>{
                gsap.to(headerWrapperRef.value, {width:"50%"})
                gsap.to(headerLogoRef.value, { y: -100, onComplete:() => {gsap.to(headerLogoRef.value, {width:0, height:0, padding:0})}})
        },
        onLeaveBack: () =>{
                gsap.to(headerWrapperRef.value, {width:"auto"})
                gsap.to(headerLogoRef.value, {y: 0, height: "auto", width: "auto"})
        }
})
})

</script>
<template>
        <div class="w-full flex flex-row h-20 absolute z-10 items-center">
                <div ref="headerLogoRef" class="text-sm mr-4">
                        <NuxtImg class="inline" src="/images/Logomark.svg" width="40" height="40" />
                        Creative <span class="font-bold text-primary">LAB</span>
                </div>
                <div ref="headerWrapperRef" id="header-wrapper" class="m-auto flex flex-col justify-center shadow-2xl">
                        <slot />
                </div>
        </div>
</template>

<style>

</style>