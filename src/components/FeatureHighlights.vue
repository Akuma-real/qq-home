<script setup>
import { featureHighlights } from '../data/content.js';
</script>

<template>
  <section class="features" id="features">
    <div class="features__inner">
      <header class="features__header">
        <h2>QQ 特色能力</h2>
        <p>多元的功能与创意体验，满足你对沟通、表达与娱乐的全部想象。</p>
      </header>
      <div class="features__grid">
        <article
          v-for="item in featureHighlights"
          :key="item.title"
          class="features__card"
          :class="`features__card--${item.theme}`"
        >
          <div class="features__visual">
            <img :src="item.image" :alt="item.title" loading="lazy" />
          </div>
          <div class="features__content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background: linear-gradient(180deg, #020612 0%, #040b1a 100%);
  padding: 120px 0;
  color: #ffffff;
}

.features__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.features__header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 64px;
}

.features__header h2 {
  margin: 0;
  font-size: clamp(36px, 4vw, 48px);
  font-weight: 700;
}

.features__header p {
  margin: 20px 0 0;
  font-size: 16px;
  color: rgba(216, 232, 255, 0.75);
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.features__card {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  background: rgba(15, 26, 48, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.04);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 340px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.features__card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.6;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.28), transparent 58%);
  mix-blend-mode: screen;
  pointer-events: none;
}

.features__card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(0, 18, 54, 0.45);
}

.features__visual {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.features__visual img {
  width: 100%;
  max-width: 260px;
  filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.35));
}

.features__content h3 {
  margin: 0 0 12px;
  font-size: 24px;
}

.features__content p {
  margin: 0;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(210, 226, 255, 0.78);
}

.features__card--purple {
  background: linear-gradient(140deg, rgba(82, 62, 255, 0.28), rgba(9, 13, 32, 0.95));
}

.features__card--blue {
  background: linear-gradient(140deg, rgba(0, 136, 255, 0.28), rgba(9, 13, 32, 0.95));
}

.features__card--cyan {
  background: linear-gradient(140deg, rgba(0, 249, 255, 0.28), rgba(9, 13, 32, 0.95));
}

@media (max-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .features {
    padding: 80px 0;
  }

  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
