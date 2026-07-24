<template>
    <div class="w-full">
        <div class="grid grid-cols-12 pt-16 pb-12 bg-[var(--highlight)]">
            <div class="col-span-12 lg:col-span-10 lg:col-start-2 grid lg:grid-cols-7 grid-cols-2 gap-x-8 justify-items-center text-center">
                <slot name="nav" />
            </div>
        </div>
        <div>
            <slot name="copyright" />
        </div>
    </div>
</template>