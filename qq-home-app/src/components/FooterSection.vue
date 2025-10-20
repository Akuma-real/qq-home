<script setup>
import { footerColumns, legalNotice } from '../data/content.js';
</script>

<template>
  <footer class="footer" id="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <img
          class="footer__logo"
          src="https://qq-web.cdn-go.cn/im.qq.com_new/54c486e3/img/pc/logo.svg"
          alt="QQ logo"
        />
        <p>QQ · 每一天，乐在沟通</p>
      </div>
      <div class="footer__columns">
        <div v-for="column in footerColumns" :key="column.title" class="footer__column">
          <h4>{{ column.title }}</h4>
          <ul>
            <li v-for="link in column.links" :key="link.label">
              <a :href="link.href" target="_blank" rel="noreferrer">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__legal">
      <p>{{ legalNotice }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #01040c;
  color: rgba(216, 232, 255, 0.76);
  padding: 80px 0 40px;
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px 48px;
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.footer__brand {
  min-width: 220px;
}

.footer__logo {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
}

.footer__brand p {
  margin: 0;
  font-size: 16px;
  color: #ffffff;
}

.footer__columns {
  display: flex;
  flex: 1;
  gap: 48px;
  flex-wrap: wrap;
}

.footer__column h4 {
  margin: 0 0 16px;
  color: #ffffff;
  font-size: 16px;
}

.footer__column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.footer__column a {
  color: rgba(216, 232, 255, 0.76);
  text-decoration: none;
  font-size: 14px;
}

.footer__column a:hover {
  color: #00f5ff;
}

.footer__legal {
  text-align: center;
  padding: 24px 16px 0;
  font-size: 13px;
  color: rgba(190, 207, 238, 0.6);
}
</style>
