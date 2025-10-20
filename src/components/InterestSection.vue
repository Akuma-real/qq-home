<script setup>
import { interestTopics } from '../data/content.js';
</script>

<template>
  <section class="interests" id="interests">
    <div class="interests__inner">
      <div class="interests__header">
        <h2>兴趣社区 · 有趣的人正在相遇</h2>
        <p>无论是音乐、二次元、游戏还是生活方式，QQ 都能帮你找到最对味的同好。</p>
      </div>
      <div class="interests__grid">
        <article
          v-for="topic in interestTopics"
          :key="topic.title"
          class="interests__card"
          :style="{ '--accent': topic.accent }"
        >
          <div class="interests__badge"></div>
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.description }}</p>
          <button class="interests__cta" type="button">立即加入</button>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.interests {
  padding: 120px 0;
  background: radial-gradient(circle at top left, rgba(0, 110, 255, 0.18), transparent 55%),
    #040b1a;
  color: #ffffff;
}

.interests__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.interests__header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
}

.interests__header h2 {
  margin: 0;
  font-size: clamp(34px, 4vw, 46px);
}

.interests__header p {
  margin-top: 16px;
  font-size: 16px;
  color: rgba(210, 226, 255, 0.78);
}

.interests__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.interests__card {
  position: relative;
  border-radius: 24px;
  padding: 32px;
  background: rgba(7, 16, 36, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: 0 20px 40px rgba(4, 12, 32, 0.45);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.interests__card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 35%, transparent), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.interests__card:hover {
  transform: translateY(-6px);
  border-color: color-mix(in srgb, var(--accent) 40%, rgba(255, 255, 255, 0.1));
}

.interests__card:hover::before {
  opacity: 1;
}

.interests__badge {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: var(--accent);
  opacity: 0.8;
}

.interests__card h3 {
  margin: 0;
  font-size: 22px;
}

.interests__card p {
  margin: 0;
  color: rgba(214, 228, 255, 0.78);
  line-height: 1.7;
}

.interests__cta {
  margin-top: auto;
  align-self: flex-start;
  padding: 10px 18px;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.interests__cta:hover {
  background: var(--accent);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .interests__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .interests__grid {
    grid-template-columns: 1fr;
  }

  .interests {
    padding: 80px 0;
  }
}
</style>
