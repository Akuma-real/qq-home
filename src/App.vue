<script setup>
import HeaderNav from './components/HeaderNav.vue';
import HeroSection from './components/HeroSection.vue';
import FeatureHighlights from './components/FeatureHighlights.vue';
import InterestSection from './components/InterestSection.vue';
import VipExperience from './components/VipExperience.vue';
import DeviceShowcase from './components/DeviceShowcase.vue';
import DownloadPanel from './components/DownloadPanel.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <div class="page">
    <HeaderNav />
    <main>
      <HeroSection />
      <FeatureHighlights />
      <InterestSection />
      <VipExperience />
      <DeviceShowcase />
      <DownloadPanel />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: #020612;
}

main {
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
