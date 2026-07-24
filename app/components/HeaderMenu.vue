<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { cn } from '~/lib/utils';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const viewPort = useViewport()

const headerWrapperRef = ref<HTMLElement | null>(null)

const gsap = useGSAP()

onMounted(async() => {
gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
            start:"top -15px",
            onEnter:() =>{
                    gsap.to(headerWrapperRef.value, {boxShadow:"0px 0px 6px 0px #777", borderBottom: "1px solid #EEE", backgroundColor:"rgba(240, 240, 240, 0.5)", backdropFilter:"blur(20px)"})
            },
            onLeaveBack: () =>{
                    gsap.to(headerWrapperRef.value, {boxShadow:"none", borderBottom: "none", backgroundColor:"rgba(240, 240, 240, 0.0)", backdropFilter:"none"})

            }
    })

})
</script>

<template>
    <div ref="headerWrapperRef" class="nav-menu lg:m-auto">
        <Logo class="shrink" />
        <div class="grow flex items-center lg:justify-center justify-end">
            <NavigationMenu>
                <NavigationMenuList >
                    <NavigationMenuItem v-if="viewPort.isGreaterThan('tablet')" v-for="item in navItems">
                        <NavigationMenuLink as-child :class="cn(navigationMenuTriggerStyle(), 'text-xs bg-transparent')">
                        <a :href="item.link">{{ item.title }}</a>
                        </NavigationMenuLink>            
                    </NavigationMenuItem>
                    <NavigationMenuItem v-else>
                        <NavigationMenuLink as-child :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
                            <a><NuxtImg width="24" height="24" src="/images/burger.svg" /></a>
                        </NavigationMenuLink>    
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>
</template>

<style scoped>
    @reference "~/assets/css/tailwind.css";
    .nav-menu {
        @apply size-full flex flex-row justify-center ;

    }

    .nav-menu.moving{
        @apply bg-background/40 shadow-sm justify-center items-center border border-neutral-300 backdrop-blur-sm
    }
</style>