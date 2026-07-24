<template>
    <div class="col-span-2 flex flex-col gap-8">
        <div class="flex items-center lg:items-start flex-col">
            <Logo />
        </div>
        <p class="text-sm lg:text-start mb-8 px-4">
            Designing and developing high-quality digital experiences with a focus on user needs and business growth.
        </p>
    </div>
    <ul v-for="item in navItems" class="mb-4">
        <ol :key="item.title" class="pb-4 text-neutral-600 text-sm">
            {{ item.title }}
        </ol>
        <li class="pb-3 text-sm" :key="subItem.label" v-for="subItem in item.subItems">
            {{ subItem.label }}
        </li>
    </ul>
</template>