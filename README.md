# SPARK 火花服 · 官网

SPARK（Server of Playing Architecture & Redstone Knowledge）Minecraft 服务器的宣传官网。
工业橙 × 白配色，纯静态页面（HTML + CSS + JS），无需后端，打开即用。

## 目录结构

```
spark-website/
├── index.html          # 页面结构（一般不用改）
├── css/style.css       # 样式（一般不用改）
├── js/config.js        # ★ 网站所有内容都在这里改 ★
├── js/main.js          # 渲染逻辑（一般不用改）
├── assets/             # logo 等固定素材
│   ├── logo.png        # 完整 logo（关于我们 / 页脚用）
│   ├── icon.png        # 方块图标（导航栏 / 首屏 / 浏览器标签用）
│   └── logo-full.jpg   # logo 原图备份
└── images/             # 画廊图片放这里
    ├── hero-bg.jpg     # 首屏背景（可自行替换）
    ├── gallery-1.jpg   # 画廊图（占位图，换成你们的截图）
    ├── gallery-2.jpg
    └── gallery-3.jpg
```

## 如何修改内容

**所有文字、图片路径、团队成员都在 `js/config.js` 里**，打开它就能看到带注释的配置项，
改完保存、刷新浏览器即可生效。常用操作：

### 改文字
直接修改 `config.js` 里对应引号中的内容（如简介、标题、联系方式）。

### 添加画廊图片
1. 把截图文件放进 `images/` 文件夹（建议 `.jpg`，命名如 `gallery-4.jpg`）
2. 在 `config.js` 的 `gallery.images` 数组里加一行：
   ```js
   { src: "images/gallery-4.jpg", caption: "图片说明" },
   ```

### 添加 / 修改团队成员
在 `config.js` 的 `team.members` 数组里加一行：
```js
{ name: "新成员", role: "红石", img: "images/avatar.png", link: "https://space.bilibili.com/xxxx" },
```
- `img` 留空 `""` 会自动显示名字首字母圆形头像
- `link` 留空 `""` 则卡片不可点击

### 修改联系方式 / 加群链接
改 `config.js` 里的 `footer.joinLink`（QQ 群链接）和 `footer.contact`。

### 修改开服时间（运行计时）
改 `config.js` 里的 `startDate`（格式：`月/日/年 时:分:秒`）。

## 本地预览

```bash
cd spark-website
python3 -m http.server 8000
```
然后浏览器打开 http://localhost:8000

> 直接双击 `index.html` 也能打开，但用上面的方式预览更接近真实部署效果。

## 部署上线

这是纯静态网站，把整个 `spark-website` 文件夹上传到任意静态托管即可：
- **GitHub Pages**（免费）
- **Cloudflare Pages / Vercel / Netlify**（免费）
- 自己的服务器（Nginx 指向该目录）

设计参考：lzalien.org
