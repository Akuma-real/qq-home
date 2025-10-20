<script setup>
import { navLinks } from '../data/content.js';
</script>

<template>
  <header class="header" id="top">
    <div class="header__inner">
      <a class="header__brand" href="#hero" aria-label="QQ 官网">
        <img
          class="header__logo"
          src="https://qq-web.cdn-go.cn/im.qq.com_new/54c486e3/img/pc/logo.svg"
          alt="QQ logo"
        />
        <span class="header__title">QQ</span>
      </a>
      <nav class="header__nav" aria-label="主导航">
        <a v-for="link in navLinks" :key="link.label" class="header__link" :href="link.href">
          {{ link.label }}
        </a>
      </nav>
      <div class="header__actions">
        <a class="header__download" href="#download">下载 QQ</a>
        <a class="header__login" href="https://qzone.qq.com/" target="_blank" rel="noreferrer">
          立即登录
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(16px);
  background: rgba(6, 14, 30, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.header__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.header__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
}

.header__logo {
  width: 36px;
  height: 36px;
}

.header__nav {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 28px;
}

.header__link {
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
  font-weight: 500;
  position: relative;
  transition: color 0.2s ease;
}

.header__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #06f, #5cf1ff);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s ease;
}

.header__link:hover,
.header__link:focus {
  color: #ffffff;
}

.header__link:hover::after,
.header__link:focus::after {
  transform: scaleX(1);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.header__download,
.header__login {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.header__download {
  color: #040b1a;
  background: linear-gradient(130deg, #00f5ff 0%, #0066ff 100%);
  box-shadow: 0 12px 24px rgba(0, 118, 255, 0.35);
}

.header__download:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(0, 118, 255, 0.45);
}

.header__login {
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: rgba(255, 255, 255, 0.9);
}

.header__login:hover {
  border-color: rgba(255, 255, 255, 0.6);
  color: #ffffff;
}

@media (max-width: 960px) {
  .header__inner {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding: 16px 20px;
  }

  .header__nav {
    flex-wrap: wrap;
    gap: 16px;
  }

  .header__actions {
    width: 100%;
    justify-content: center;
  }
}
</style>
