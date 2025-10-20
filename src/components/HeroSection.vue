<script setup>
import { heroContent } from '../data/content.js';
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero__background" aria-hidden="true"></div>
    <div class="hero__inner">
      <div class="hero__copy">
        <p class="hero__eyebrow">Im QQ</p>
        <h1 class="hero__title">{{ heroContent.title }}</h1>
        <p class="hero__subtitle">{{ heroContent.subtitle }}</p>
        <p class="hero__description">{{ heroContent.description }}</p>
        <div class="hero__actions">
          <a class="hero__primary" :href="heroContent.primaryAction.href">
            {{ heroContent.primaryAction.label }}
          </a>
          <a class="hero__secondary" :href="heroContent.secondaryAction.href">
            {{ heroContent.secondaryAction.label }}
          </a>
        </div>
        <dl class="hero__badges">
          <div v-for="item in heroContent.floatingBadges" :key="item.label" class="hero__badge">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.description }}</dd>
          </div>
        </dl>
      </div>
      <div class="hero__visual" role="presentation">
        <img :src="heroContent.heroImage" alt="QQ 产品预览" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 140px 0 120px;
  background: radial-gradient(circle at 20% 20%, rgba(0, 153, 255, 0.35), transparent 45%),
    radial-gradient(circle at 75% 10%, rgba(0, 247, 255, 0.28), transparent 45%),
    linear-gradient(180deg, #040b1a 0%, #020612 100%);
  overflow: hidden;
  color: #ffffff;
}

.hero__background {
  position: absolute;
  inset: 0;
}

.hero__background::before,
.hero__background::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  filter: blur(120px);
  opacity: 0.8;
}

.hero__background::before {
  width: 480px;
  height: 480px;
  left: 12%;
  top: 10%;
  background: rgba(0, 110, 255, 0.45);
}

.hero__background::after {
  width: 420px;
  height: 420px;
  right: -80px;
  bottom: 0;
  background: rgba(0, 242, 255, 0.35);
}

.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 40px;
  align-items: center;
}

.hero__copy {
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero__eyebrow {
  font-size: 16px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.hero__title {
  margin: 0;
  font-size: clamp(48px, 6vw, 72px);
  font-weight: 700;
  line-height: 1.08;
}

.hero__subtitle {
  margin: 0;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.82);
}

.hero__description {
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(229, 241, 255, 0.75);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 12px;
}

.hero__primary,
.hero__secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.hero__primary {
  background: linear-gradient(130deg, #00f5ff 0%, #0066ff 100%);
  color: #020612;
  box-shadow: 0 20px 40px rgba(0, 110, 255, 0.4);
}

.hero__primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 26px 48px rgba(0, 110, 255, 0.48);
}

.hero__secondary {
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  backdrop-filter: blur(10px);
}

.hero__secondary:hover {
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-3px);
}

.hero__badges {
  display: flex;
  gap: 20px;
  margin: 32px 0 0;
  padding: 0;
}

.hero__badge {
  padding: 14px 20px;
  border-radius: 16px;
  background: rgba(4, 11, 26, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.hero__badge dt {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
}

.hero__badge dd {
  margin: 0;
  font-size: 13px;
  color: rgba(221, 236, 255, 0.7);
}

.hero__visual {
  grid-column: span 6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__visual img {
  width: min(520px, 100%);
  filter: drop-shadow(0 40px 100px rgba(0, 12, 46, 0.55));
}

@media (max-width: 1024px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__copy,
  .hero__visual {
    grid-column: span 12;
  }

  .hero__copy {
    align-items: center;
  }

  .hero__badges {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 100px 0 80px;
  }

  .hero__actions {
    flex-direction: column;
    width: 100%;
  }

  .hero__primary,
  .hero__secondary {
    width: 100%;
  }
}
</style>
