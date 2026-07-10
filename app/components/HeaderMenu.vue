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
</script>

<template>
    <div class="w-full h-10 bg-background flex flex-col justify-center items-center rounded-lg">
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :class="cn(navigationMenuTriggerStyle(), 'text-xs')">
                <a href="/docs">Home</a>
                </NavigationMenuLink>            
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :class="cn(navigationMenuTriggerStyle(), 'text-xs')">
                <a href="/docs">CI/CD</a>
                </NavigationMenuLink>      
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :class="cn(navigationMenuTriggerStyle(), 'text-xs')">
                <a href="/docs">Front-end</a>
                </NavigationMenuLink>      
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :class="cn(navigationMenuTriggerStyle(), 'text-xs')">
                <a href="/docs">Back-end</a>
                </NavigationMenuLink>      
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :class="cn(navigationMenuTriggerStyle(), 'text-xs')">
                <a href="/docs">AI</a>
                </NavigationMenuLink>      
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :class="cn(navigationMenuTriggerStyle(), 'text-xs')">
                <a href="/docs">Design</a>
                </NavigationMenuLink>      
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    </div>
</template>