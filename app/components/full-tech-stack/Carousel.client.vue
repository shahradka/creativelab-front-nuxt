<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import { horizontalLoop } from '~/utils/horizontalLoop'

const frontSkillCarousel = ref<any>(null)
const carouselContainerFrontend = ref<HTMLElement | null>(null)

const backendSkillCarousel = ref<any>(null)
const carouselContainerBackend = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()

  if (carouselContainerFrontend.value) {
    const images = carouselContainerFrontend.value.querySelectorAll('img')
    
    const imageLoadPromises = Array.from(images).map((img) => {
      if (img.complete) return Promise.resolve() 
      return new Promise((resolve) => {
        img.onload = resolve
        img.onerror = resolve
      })
    })

    await Promise.all(imageLoadPromises)

    frontSkillCarousel.value = horizontalLoop(".front-skill", {
      speed: 0.5,
      repeat: -1,
      paddingRight: 50
    })
  }

   if (carouselContainerBackend.value) {
    const images = carouselContainerBackend.value.querySelectorAll('img')
    
    const imageLoadPromises = Array.from(images).map((img) => {
      if (img.complete) return Promise.resolve() 
      return new Promise((resolve) => {
        img.onload = resolve
        img.onerror = resolve
      })
    })

    await Promise.all(imageLoadPromises)

    backendSkillCarousel.value = horizontalLoop(".back-skill", {
      speed: 0.3,
      repeat: -1,
      paddingRight: 19
    })
  }
})
</script>

<template>
  <div class="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 overflow-hidden relative">
    <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
    <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

    <div ref="carouselContainerFrontend" class="carousel gap-[50px] flex justify-center w-200 mb-10">
  
      <div class="front-skill">
        <NuxtImg class="skill" alt="CSS" width="40" height="40" src="/images/skills/css.svg" />
      </div>
      <div class="front-skill">
        <NuxtImg class="skill" alt="JS" width="40" height="40" src="/images/skills/js.svg" />
      </div>
      <div class="front-skill">
        <NuxtImg class="skill" alt="HTML" width="40" height="40" src="/images/skills/html.svg" />
      </div>
      <div class="front-skill">
        <NuxtImg class="skill" alt="React" width="40" height="40" src="/images/skills/react.svg" />
      </div>
      <div class="front-skill">
        <NuxtImg class="skill" alt="Electron" width="40" height="40" src="/images/skills/electron.svg" />
      </div>
      <div class="front-skill">
        <NuxtImg class="skill" alt="Redux" width="40" height="40" src="/images/skills/redux.svg" />
      </div>
      <div class="front-skill">
        <NuxtImg class="skill" alt="TS" width="40" height="40" src="/images/skills/ts.svg" />
      </div>
      <div class="front-skill">
        <NuxtImg class="skill" alt="Vue" width="40" height="40" src="/images/skills/vue.svg" />
      </div>
    </div>
    <div ref="carouselContainerBackend" class="carousel col-start-4 col-span-6 gap-[19px] flex justify-center w-200">
  
          <div className="back-skill">
              <NuxtImg
                class="skill"
                alt=""
                width="40"
                height="40"
                src="/images/skills/docker.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg
                class="skill"
                alt=""
                width="40"
                height="40"
                src="/images/skills/github.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg
                class="skill"
                alt=""
                width="40"
                height="40"
                src="/images/skills/java.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg
                class="skill"
                alt=""
                width="40"
                height="40"
                src="/images/skills/kuber.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg
                alt=""
              class="skill"
                width="40"
                height="40"
                src="/images/skills/mongo.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg class="skill"
                alt=""
                width="40"
                height="40"
                src="/images/skills/nest.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg class="skill"
                alt=""
                width="40"
                height="40"
                src="/images/skills/node.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg class="skill"
                alt=""
  
                width="40"
                height="40"
                src="/images/skills/postgres.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg class="skill"
  
                alt=""
                width="40"
                height="40"
                src="/images/skills/python.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg class="skill"
                alt=""
                width="40"
                height="40"
                src="/images/skills/pytorch.svg"
              />
            </div>
            <div className="back-skill">
              <NuxtImg class="skill" alt="" width="40" height="40" src="/images/skills/svn.svg" />
            </div>
      </div>
  </div>
</template>

<style>
    .skill{
        width: 64px;
    }
</style>
