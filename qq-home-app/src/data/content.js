export const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '产品下载', href: '#download' },
  { label: '兴趣部落', href: '#interests' },
  { label: '功能特色', href: '#features' },
  { label: 'QQ安全', href: '#security' },
  { label: 'QQ会员', href: '#vip' },
  { label: '联系客服', href: '#footer' }
];

export const heroContent = {
  title: 'QQ · 轻松做自己',
  subtitle: '与你一起，探索更多年轻灵感。',
  description:
    '全新 QQ 以兴趣社交为核心，将聊天、创作与娱乐融为一体，让你随心记录每一个灵感瞬间。',
  primaryAction: {
    label: '免费下载 QQ',
    href: '#download'
  },
  secondaryAction: {
    label: '了解更多',
    href: '#features'
  },
  heroImage:
    'https://qq-web.cdn-go.cn/im.qq.com_new/54c486e3/img/pc/kv-mock.webp',
  floatingBadges: [
    { label: '畅聊', description: '高清语音&视频' },
    { label: '创作', description: '兴趣部落灵感不断' },
    { label: '娱乐', description: '音乐、直播随心看' }
  ]
};

export const featureHighlights = [
  {
    title: '兴趣社区，点燃灵感',
    description:
      '加入兴趣部落，与同好分享创意、心得与灵光一现，在多元社区中保持活力。',
    image: 'https://qq-web.cdn-go.cn/im.qq.com_new/54c486e3/img/pc/feature-club.webp',
    theme: 'purple'
  },
  {
    title: '自由聊天，畅所欲言',
    description:
      '高清语音、多人视频、群聊派对，搭配动态表情与互动，轻松表达真实自我。',
    image: 'https://qq-web.cdn-go.cn/im.qq.com_new/54c486e3/img/pc/feature-chat.webp',
    theme: 'blue'
  },
  {
    title: '多端同步，随时随地',
    description:
      '手机、电脑、平板与网页版数据同步，让重要消息与文件始终触手可及。',
    image: 'https://qq-web.cdn-go.cn/im.qq.com_new/54c486e3/img/pc/feature-sync.webp',
    theme: 'cyan'
  }
];

export const deviceShowcase = [
  {
    name: 'Windows',
    description: '全新视觉与便捷操作体验，满足办公与娱乐的双重需求。',
    download: 'https://im.qq.com/pcqq/'
  },
  {
    name: 'macOS',
    description: '与 macOS 深度融合，键盘快捷键与触控板手势皆能轻松上手。',
    download: 'https://im.qq.com/macqq/'
  },
  {
    name: 'iOS',
    description: '在 iPhone 与 iPad 上随时聊天、创作与浏览兴趣内容。',
    download: 'https://im.qq.com/mobileqq/'
  },
  {
    name: 'Android',
    description: '支持多设备登录与消息漫游，聊天记录云端同步无负担。',
    download: 'https://im.qq.com/mobileqq/'
  }
];

export const interestTopics = [
  {
    title: '音乐派对',
    description: '与好友一起聆听热门歌单，分享翻唱与原创作品。',
    accent: '#7c4dff'
  },
  {
    title: '二次元',
    description: '追番讨论、同人创作、Cos 分享，每个灵感都值得展示。',
    accent: '#00a8ff'
  },
  {
    title: 'ACG 游戏',
    description: '最新赛事情报、游戏攻略与直播精彩片段一网打尽。',
    accent: '#1de9b6'
  },
  {
    title: '生活记录',
    description: '美食、美景、宠物、日常，记录美好碎片，让朋友随时看到真实的你。',
    accent: '#ff7f50'
  }
];

export const downloadEntrances = [
  {
    title: '立即下载',
    action: '下载 QQ 安装包',
    href: 'https://dldir1.qq.com/qqfile/qq/PCQQ9.7.17/QQ9.7.17.29263.exe'
  },
  {
    title: 'QQ for Mac',
    action: '适配 Apple 芯片',
    href: 'https://dldir1.qq.com/qqfile/qq/QQforMac/QQ_V6.9.19.dmg'
  },
  {
    title: 'QQ for Android',
    action: '前往应用宝下载',
    href: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.mobileqq'
  },
  {
    title: 'QQ for iOS',
    action: '前往 App Store',
    href: 'https://apps.apple.com/cn/app/qq/id444934666'
  }
];

export const footerColumns = [
  {
    title: '产品服务',
    links: [
      { label: 'QQ 官网', href: 'https://im.qq.com/' },
      { label: 'QQ 空间', href: 'https://qzone.qq.com/' },
      { label: '腾讯视频', href: 'https://v.qq.com/' },
      { label: '腾讯音乐', href: 'https://y.qq.com/' }
    ]
  },
  {
    title: '关注我们',
    links: [
      { label: 'QQ 官方微博', href: 'https://weibo.com/qqcom' },
      { label: 'QQ 空间官方号', href: 'https://qzone.qq.com/' },
      { label: '腾讯客服', href: 'https://kf.qq.com/' }
    ]
  },
  {
    title: '帮助中心',
    links: [
      { label: '账号安全', href: 'https://aq.qq.com/' },
      { label: '找回密码', href: 'https://aq.qq.com/cn2/findpsw/mobile_find_psw' },
      { label: '意见反馈', href: 'https://support.qq.com/' }
    ]
  }
];

export const legalNotice = `© ${new Date().getFullYear()} Tencent. All Rights Reserved. 腾讯公司 版权所有`;
