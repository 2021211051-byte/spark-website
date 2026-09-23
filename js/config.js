/* ============================================================
 * SPARK 火花服 · 官网配置文件
 * ------------------------------------------------------------
 * 想修改网站内容？只需要改这个文件，不用动其他代码！
 *
 * 常用操作：
 *   1. 改文字  -> 直接修改下面引号里的内容
 *   2. 换图片  -> 把图片放进 images/ 文件夹，
 *                然后把对应的路径写进来（例如 "images/my-photo.jpg"）
 *   3. 加画廊图 -> 在 gallery 数组里加一行 { src: "images/xxx.jpg", caption: "说明" }
 *   4. 加团队成员 -> 在 team 数组里加一行
 *      头像不填则自动显示名字首字母
 * ============================================================ */

/* 中文版内容 */
const SITE_ZH = {
    /* ---------- 导航栏 ---------- */
  nav: {
    about: "关于我们",
    gallery: "画廊",
    hardware: "硬件支持",
    team: "成员列表",
    map: "地图",
    join: "加入我们",
  },

  /* ---------- 基本信息 ---------- */
  name: "SPARK",
  nameFull: "Server of Playing Architecture & Redstone Knowledge",
  slogan: "SPARK 火花服",
  heroSubtitle: "「生电 × 建筑 · 让火花点燃创造」",
  heroNote: "与 SPARK 的成员们，携手并进",

  /* 服务器开服日期（用于首页运行时间计时，格式：月/日/年 时:分:秒） */
  startDate: "8/8/2026 20:23:00",

  /* 顶部按钮：href 可换成你的 QQ 群链接 / 开黑啦邀请链接等 */
  buttons: [
    { text: "加入我们", href: "#join" },
    { text: "了解详情", href: "#about" },
  ],

  /* ---------- 运行时间 / 提示文案 ---------- */
  uptimePrefix: "服务器已运行",
  uptimeUnits: ["天", "小时", "分", "秒"],
  comingSoon: "敬请期待",
  toastCopied: "群号 {id} 已复制，打开 QQ 搜索加群吧！",
  promptCopy: "复制群号：",

  /* ---------- 关于我们 ---------- */
  about: {
    title: "关 于 我 们",
    paragraphs: [
      "SPARK 火花服，全称 Server of Playing Architecture & Redstone Knowledge，是一个由 BCIS 2029 届部分学生开放的 Minecraft 服务器。",
      "我们致力于同时发展生电科技以及建筑，鼓励每一位成员探索技术与创造之美。",
      "服务器使用强劲性能的云服务器，每日一次备份，保证充足的性能并保障数据安全。",
      "同时，服务器配备了自研娱乐模组以及完整的辅助模组组，为成员提供更好的游戏体验。",
    ],
  },

    /* ---------- 画廊 ----------
   * 把截图放进 images/ 文件夹，然后在下面添加即可。
   * caption 是图片下方显示的文字说明，可留空 "" 。
   */
  gallery: {
    title: "画廊",
    subtitle: "火花之下的世界",
    images: [
      { src: "images/gallery-1.jpg", caption: "毛主席雕像 by: joey/QevD" },
      { src: "images/gallery-2.jpg", caption: "教堂 by: qaivu" },
      { src: "images/gallery-3.jpg", caption: "猪人农场 by: joey" },
      { src: "images/portrait.jpg", caption: "画像 by: Ruby" },
      { src: "images/gallery-4.jpg", caption: "歌剧院 by: joey QevD sofia Nemophilist（后勤）" },
    ],
  },

  /* ---------- 硬件支持 ---------- */
  hardware: {
    title: "硬件支持",
    subtitle: "强劲的服务与支持为服务器保驾护航",
    items: [
      { icon: "cpu", title: "9950X", desc: "强大性能！多核心高频处理器稳定带动全服" },
      { icon: "ram", title: "8G 内存", desc: "为高频读写与区块加载提供充足缓存" },
      { icon: "disk", title: "15G 储存", desc: "每日一次备份，保障数据安全" },
      { icon: "mod", title: "自研娱乐模组", desc: "自研模组 + 完整辅助模组组，实现多种功能" },
    ],
  },

  /* ---------- 管理团队 ----------
   * img 留空 "" 则自动显示名字首字母头像。
   * link 可填 B 站空间等链接，点卡片会跳转，不需要则留空 "" 。
   */
  team: {
    title: "成员列表",
    subtitle: "点击成员卡片可跳转主页",
    members: [
      { name: "joey", role: "技术服主 / 红石 / 建筑 / 后勤", img: "images/avatars/joey.png", link: "" },
      { name: "QevD", role: "服主 / 建筑 / 后勤", img: "images/avatars/qevd.png", link: "https://www.douyin.com/user/MS4wLjABAAAA8OWfHkQVEBoLXSjAiZICqi739mC0hw6G_IxCoEvb5GU?from_tab_name=main" },
      { name: "Nemophilist", role: "后勤", img: "images/avatars/nemophilist.png", link: "" },
      { name: "Moore", role: "红石", img: "images/avatars/moore.png", link: "" },
      { name: "sofia", role: "后勤", img: "images/avatars/sofia.png", link: "" },
      { name: "qaivu", role: "建筑 / 红石 / 后勤", img: "images/avatars/qaivu.png", link: "" },
      { name: "Ruby", role: "画师", img: "", link: "" },
    ],
  },

  /* ---------- 页脚 / 联系方式 ---------- */
  footer: {
    joinTitle: "加入我们",          // “加入我们”区块标题
    joinText: "欢迎加入 SPARK 火花服交流群，一起生电、一起建筑！点击按钮复制群号，打开 QQ 搜索即可加群。", // 邀请文案
    joinButton: "复制群号，加入交流群", // 按钮文字
    // 加群方式（三选一）：
    //   1. 填 QQ 群号（纯数字）-> 点击按钮自动复制群号
    //   2. 填邀请链接（手机QQ: 群聊->右上角菜单->邀请->复制链接）
    //   3. 留空 "#" -> 不跳转
    joinLink: "115992682",
    contact: "QQ 群：115992682", // 联系方式
    credits: [
      "官网设计 / SPARK 团队",
      "技术支持 / joey",
    ],
    icp: "",                        // 备案号（没有就留空）
  },
};

/* ============================================================
 * 英文版内容（切换语言按钮会用到，结构需与中文版一致）
 * ============================================================ */
const SITE_EN = {
  /* ---------- Navbar ---------- */
  nav: {
    about: "About",
    gallery: "Gallery",
    hardware: "Hardware",
    team: "Members",
    map: "Map",
    join: "Join Us",
  },

  /* ---------- Basic info ---------- */
  name: "SPARK",
  nameFull: "Server of Playing Architecture & Redstone Knowledge",
  slogan: "SPARK Minecraft Server",
  heroSubtitle: "「Redstone × Architecture · Let Sparks Ignite Creation」",
  heroNote: "Moving forward hand in hand with the members of SPARK",

  startDate: "8/8/2026 20:23:00",

  buttons: [
    { text: "Join Us", href: "#join" },
    { text: "Learn More", href: "#about" },
  ],

  /* ---------- Uptime / misc text ---------- */
  uptimePrefix: "Server uptime:",
  uptimeUnits: ["d ", "h ", "m ", "s"],
  comingSoon: "Coming soon",
  toastCopied: "Group ID {id} copied! Open QQ and search to join.",
  promptCopy: "Copy group ID:",

  /* ---------- About ---------- */
  about: {
    title: "ABOUT US",
    paragraphs: [
      "SPARK, short for Server of Playing Architecture & Redstone Knowledge, is a Minecraft server run by students of the BCIS class of 2029.",
      "We are dedicated to both redstone engineering and architecture, encouraging every member to explore the beauty of technology and creation.",
      "The server runs on a powerful cloud machine with daily backups, ensuring great performance and data safety.",
      "It also features our own custom entertainment mods plus a full suite of utility mods for a better gameplay experience.",
    ],
  },

  /* ---------- Gallery ---------- */
  gallery: {
    title: "Gallery",
    subtitle: "The world beneath the sparks",
    images: [
      { src: "images/gallery-1.jpg", caption: "Statue of Chairman Mao by: joey/QevD" },
      { src: "images/gallery-2.jpg", caption: "Church by: qaivu" },
      { src: "images/gallery-3.jpg", caption: "Zombie Piglin Farm by: joey" },
      { src: "images/portrait.jpg", caption: "Portrait by: Ruby" },
      { src: "images/gallery-4.jpg", caption: "Opera House by: joey QevD sofia Nemophilist (logistics)" },
    ],
  },

  /* ---------- Hardware ---------- */
  hardware: {
    title: "Hardware",
    subtitle: "Powerful servers and support keep the world running",
    items: [
      { icon: "cpu", title: "9950X", desc: "Beastly performance! A high-clock, multi-core CPU driving the whole server" },
      { icon: "ram", title: "8G RAM", desc: "Plenty of cache for high-frequency I/O and chunk loading" },
      { icon: "disk", title: "15G Storage", desc: "Backed up once a day to keep your data safe" },
      { icon: "mod", title: "Custom Mods", desc: "Self-developed mods + a full utility mod set with many features" },
    ],
  },

  /* ---------- Team ---------- */
  team: {
    title: "Members",
    subtitle: "Click a member card to visit their profile",
    members: [
      { name: "joey", role: "Tech Admin / Redstone / Architecture / Logistics", img: "images/avatars/joey.png", link: "" },
      { name: "QevD", role: "Admin / Architecture / Logistics", img: "images/avatars/qevd.png", link: "https://www.douyin.com/user/MS4wLjABAAAA8OWfHkQVEBoLXSjAiZICqi739mC0hw6G_IxCoEvb5GU?from_tab_name=main" },
      { name: "Nemophilist", role: "Logistics", img: "images/avatars/nemophilist.png", link: "" },
      { name: "Moore", role: "Redstone", img: "images/avatars/moore.png", link: "" },
      { name: "sofia", role: "Logistics", img: "images/avatars/sofia.png", link: "" },
      { name: "qaivu", role: "Architecture / Redstone / Logistics", img: "images/avatars/qaivu.png", link: "" },
      { name: "Ruby", role: "Artist", img: "", link: "" },
    ],
  },

  /* ---------- Footer / contact ---------- */
  footer: {
    joinTitle: "Join Us",
    joinText: "Welcome to the SPARK community group! Let's do redstone and build together. Click the button to copy the group ID, then search it in QQ to join.",
    joinButton: "Copy Group ID & Join",
    joinLink: "115992682",
    contact: "QQ Group: 115992682",
    credits: [
      "Website design / SPARK Team",
      "Tech support / joey",
    ],
    icp: "",
  },
};

/* ============================================================
 * 语言切换：根据浏览器本地存储选择中文或英文配置
 * （通过页面右上角的语言按钮切换）
 * ============================================================ */
const SITE_LANG = localStorage.getItem("site-lang") || "zh";
const SITE = SITE_LANG === "en" ? SITE_EN : SITE_ZH;
