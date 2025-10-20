<script setup>
import { deviceShowcase } from '../data/content.js';
</script>

<template>
  <section class="devices" id="download">
    <div class="devices__inner">
      <div class="devices__intro">
        <h2>多端体验 · 随时在线</h2>
        <p>
          QQ 支持 Windows、macOS、iOS 与 Android 全平台，让你的聊天、文件与创作素材实时同步，再也不错过重要瞬间。
        </p>
        <a class="devices__cta" href="https://im.qq.com/">了解不同版本</a>
      </div>
      <div class="devices__list">
        <article v-for="device in deviceShowcase" :key="device.name" class="devices__card">
          <header class="devices__card-header">
            <span class="devices__dot"></span>
            <h3>{{ device.name }}</h3>
          </header>
          <p>{{ device.description }}</p>
          <a class="devices__link" :href="device.download" target="_blank" rel="noreferrer">前往下载</a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.devices {
  padding: 120px 0;
  background: linear-gradient(180deg, #040b1a 0%, #020612 100%);
  color: #ffffff;
}

.devices__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: minmax(0, 360px) 1fr;
  gap: 48px;
  align-items: start;
}

.devices__intro h2 {
  margin: 0;
  font-size: clamp(36px, 4vw, 48px);
}

.devices__intro p {
  margin: 24px 0 32px;
  font-size: 16px;
  color: rgba(216, 232, 255, 0.76);
  line-height: 1.9;
}

.devices__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease;
}

.devices__cta:hover {
  background: rgba(0, 242, 255, 0.45);
  transform: translateY(-3px);
}

.devices__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.devices__card {
  border-radius: 24px;
  padding: 28px;
  background: rgba(6, 14, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.devices__card:hover {
  border-color: rgba(0, 214, 255, 0.6);
  transform: translateY(-6px);
}

.devices__card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.devices__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00f5ff, #0066ff);
  box-shadow: 0 0 12px rgba(0, 174, 255, 0.6);
}

.devices__card h3 {
  margin: 0;
  font-size: 20px;
}

.devices__card p {
  margin: 0;
  color: rgba(214, 228, 255, 0.78);
  line-height: 1.7;
}

.devices__link {
  margin-top: auto;
  color: #00f5ff;
  font-weight: 600;
  text-decoration: none;
}

.devices__link:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .devices__inner {
    grid-template-columns: 1fr;
  }

  .devices__list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .devices__list {
    grid-template-columns: 1fr;
  }

  .devices {
    padding: 80px 0;
  }
}
</style>
