<script setup>
import { downloadEntrances } from '../data/content.js';
</script>

<template>
  <section class="downloads" id="security">
    <div class="downloads__inner">
      <header class="downloads__header">
        <h2>快速下载 QQ</h2>
        <p>官方渠道直达，确保软件安全可靠，畅享 QQ 全新体验。</p>
      </header>
      <div class="downloads__grid">
        <article v-for="entry in downloadEntrances" :key="entry.title" class="downloads__card">
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.action }}</p>
          <a class="downloads__btn" :href="entry.href" target="_blank" rel="noreferrer">下载</a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.downloads {
  padding: 120px 0;
  background: linear-gradient(180deg, #020612 0%, #040b1a 100%);
  color: #ffffff;
}

.downloads__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.downloads__header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 56px;
}

.downloads__header h2 {
  margin: 0;
  font-size: clamp(34px, 3.5vw, 44px);
}

.downloads__header p {
  margin: 20px 0 0;
  color: rgba(216, 232, 255, 0.76);
}

.downloads__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.downloads__card {
  padding: 28px;
  border-radius: 24px;
  background: rgba(6, 14, 30, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.downloads__card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 242, 255, 0.5);
}

.downloads__card h3 {
  margin: 0;
  font-size: 20px;
}

.downloads__card p {
  margin: 0;
  color: rgba(214, 228, 255, 0.76);
}

.downloads__btn {
  margin-top: auto;
  align-self: flex-start;
  padding: 10px 20px;
  border-radius: 999px;
  background: linear-gradient(120deg, #00f5ff, #0066ff);
  color: #020612;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.downloads__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 32px rgba(0, 110, 255, 0.45);
}

@media (max-width: 1024px) {
  .downloads__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .downloads__grid {
    grid-template-columns: 1fr;
  }

  .downloads {
    padding: 80px 0;
  }
}
</style>
