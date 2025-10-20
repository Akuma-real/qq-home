<template>
  <section class="vip" id="vip">
    <div class="vip__inner">
      <div class="vip__copy">
        <h2>QQ 会员 · 解锁尊享特权</h2>
        <p>
          点亮尊贵图标、专属气泡、红名片、超大网盘与音乐绿钻，丰富权益让你的 QQ 与众不同。
        </p>
        <ul class="vip__perks">
          <li>专属身份标识与个性装扮</li>
          <li>超级会员 3TB 超大云存储</li>
          <li>高清语音视频、极速文件传输</li>
          <li>音乐绿钻、腾讯视频等多平台联合特权</li>
        </ul>
        <a class="vip__cta" href="https://vip.qq.com/" target="_blank" rel="noreferrer">前往开通</a>
      </div>
      <div class="vip__visual" aria-hidden="true">
        <img src="https://qq-web.cdn-go.cn/im.qq.com_new/54c486e3/img/pc/vip.webp" alt="QQ 会员特权" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.vip {
  padding: 120px 0;
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.25), transparent 55%), #060e1e;
  color: #ffffff;
}

.vip__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 40px;
  align-items: center;
}

.vip__copy {
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.vip__copy h2 {
  margin: 0;
  font-size: clamp(36px, 4vw, 48px);
}

.vip__copy p {
  margin: 0;
  color: rgba(255, 245, 216, 0.82);
  line-height: 1.8;
}

.vip__perks {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
  color: rgba(255, 245, 216, 0.9);
}

.vip__perks li::before {
  content: '◆';
  color: #ffd54f;
  margin-right: 10px;
}

.vip__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  background: linear-gradient(120deg, #ffef99, #ffb300);
  color: #402400;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vip__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 36px rgba(255, 193, 7, 0.45);
}

.vip__visual {
  grid-column: span 6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vip__visual img {
  width: min(480px, 100%);
  filter: drop-shadow(0 28px 48px rgba(0, 0, 0, 0.35));
}

@media (max-width: 1024px) {
  .vip__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .vip__copy,
  .vip__visual {
    grid-column: span 12;
  }

  .vip__copy {
    align-items: center;
  }

  .vip__perks {
    justify-items: center;
  }
}
</style>
