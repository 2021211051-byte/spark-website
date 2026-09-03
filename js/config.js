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

const SITE = {
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
      { src: "images/gallery-1.jpg", caption: "服务器风景" },
      { src: "images/gallery-2.jpg", caption: "建筑作品" },
      { src: "images/gallery-3.jpg", caption: "红石机器" },
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
    title: "管理团队",
    subtitle: "点击成员卡片可跳转主页",
    members: [
      { name: "joey", role: "技术服主 / 红石 / 建筑 / 后勤", img: "images/avatars/joey.png", link: "" },
      { name: "QevD", role: "服主 / 建筑 / 后勤", img: "images/avatars/qevd.png", link: "" },
      { name: "Nemophilist", role: "后勤", img: "images/avatars/nemophilist.png", link: "" },
      { name: "Moore", role: "红石", img: "images/avatars/moore.png", link: "" },
      { name: "sofia", role: "后勤", img: "images/avatars/sofia.png", link: "" },
      { name: "qaivu", role: "建筑 / 红石 / 后勤", img: "images/avatars/qaivu.png", link: "" },
    ],
  },

  /* ---------- 页脚 / 联系方式 ---------- */
  footer: {
    joinTitle: "加入我们",          // “加入我们”区块标题
    joinText: "欢迎加入 SPARK 火花服交流群，一起生电、一起建筑！", // 邀请文案
    joinButton: "加入交流群",        // 按钮文字
    joinLink: "#",                  // ← 改成你的 QQ 群链接
    contact: "QQ 群：115992682", // 联系方式
    credits: [
      "官网设计 / SPARK 团队",
      "技术支持 / joey",
    ],
    icp: "",                        // 备案号（没有就留空）
  },
};
