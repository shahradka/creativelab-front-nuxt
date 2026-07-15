<script setup lang="ts">

useHead({
  bodyAttrs: {
    class: 'antialiased'
  }
})
</script>

<template>
    <HeroBase>
        <HeroContent/>
    </HeroBase>
    <CoreStackBase>
      <CoreStackItems />
    </CoreStackBase>
    <JobTimelineBase>
      <JobTimelineLastJobPos />
      <JobTimelineJobPos>
          <template #left>
            <JobTimelineJobDesc :items="[...asanPardakht]" 
            desc="Payment Company A well-known PSP (Payment Service Provider) company with an active and fast-paced environment" title="Asan Pardakht (App)">
                <NuxtImg src="images/app.svg" width="36" height="36" />
            </JobTimelineJobDesc>
          </template>
          <template #right>
            <JobTimelineJobPosImg place="right">
              <NuxtImg fit="fill" src="/images/invi.png" width="500" height="300"/>
            </JobTimelineJobPosImg>
          </template>
        </JobTimelineJobPos>
          <JobTimelineJobPos img-place="left">
          <template #right>
            <JobTimelineJobDesc :items="[...codeTech]" 
            desc="An international company located in Slovakia, where I participated in numerous web3-based projects centered around Core Coin." title="CodeTech">
                <NuxtImg src="images/codetech.png" width="36" height="36" />
            </JobTimelineJobDesc>
          </template>
          <template #left>
            <JobTimelineJobPosImg place="left">
                <NuxtImg fit="fill" src="/images/codetech-screen.png" width="500" height="300"/>
            </JobTimelineJobPosImg>
          </template>
        </JobTimelineJobPos>
        <JobTimelineJobPos img-place="right">
          <template #left>
            <JobTimelineJobDesc :items="[...tata]" 
            desc="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks." title="Tata">
                <NuxtImg src="images/tiddev.png" width="36" height="36" />
            </JobTimelineJobDesc>
          </template>
          <template #right>
            <JobTimelineJobPosImg place="right">
                <NuxtImg fit="fill" src="/images/tiddev-screen.png" width="500" height="300"/>
            </JobTimelineJobPosImg>
          </template>
        </JobTimelineJobPos>
        <JobTimelineJobPos img-place="left">
          <template #right>
            <JobTimelineJobDesc :items="[...samanehPaydar]" 
            desc="An all-in-one customer service platform that helps you balance everything your customers need to be happy." title="Samaneh Paydar">
                <NuxtImg src="images/zap.png" width="36" height="36" />
            </JobTimelineJobDesc>
          </template>
          <template #left>
            <JobTimelineJobPosImg place="left">
                <NuxtImg fit="fill" src="/images/samaneh-paydar.png" width="500" height="300"/>
            </JobTimelineJobPosImg>
          </template>
        </JobTimelineJobPos>
    </JobTimelineBase>
</template>