/* ============================================================
 * SPARK 火花服 · 主逻辑
 * 从 config.js 的 SITE 读取内容并渲染页面。
 * 一般情况下不需要修改这个文件，改 config.js 就够了。
 * ============================================================ */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  /* ---------- 首屏 ---------- */
  $("#hero-title").textContent = SITE.name;
  $("#hero-fullname").textContent = SITE.nameFull;
  $("#hero-subtitle").textContent = SITE.heroSubtitle;
  $("#hero-note").textContent = SITE.heroNote;
  document.title = SITE.slogan;

  const btnBox = $("#hero-buttons");
  SITE.buttons.forEach((b) => {
    const a = document.createElement("a");
    a.className = "btn";
    a.href = b.href;
    a.textContent = b.text;
    btnBox.appendChild(a);
  });

  /* ---------- 关于我们 ---------- */
  $("#about-title").textContent = SITE.about.title;
  const aboutBox = $("#about-paragraphs");
  SITE.about.paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    aboutBox.appendChild(p);
  });

  /* ---------- 画廊轮播 ---------- */
  $("#gallery-title").textContent = SITE.gallery.title;
  $("#gallery-subtitle").textContent = SITE.gallery.subtitle;

  const bg = $("#gallery-bg");
  const dotsBox = $("#carousel-dots");
  const images = SITE.gallery.images;
  let current = 0;
  let timer = null;

  images.forEach((img, i) => {
    const slide = document.createElement("div");
    slide.className = "gallery-slide" + (i === 0 ? " active" : "");

    const im = document.createElement("img");
    im.alt = img.caption || SITE.gallery.title + " " + (i + 1);
    if (i === 0) {
      // 首张立即加载
      im.src = img.src;
    } else {
      // 非首张：懒加载，滚动到画廊附近时才真正请求
      im.loading = "lazy";
      im.dataset.src = img.src;
    }
    // 竖版图片完整展示，不裁剪
    im.addEventListener("load", () => {
      if (im.naturalHeight > im.naturalWidth) slide.classList.add("is-portrait");
    });
    if (im.complete && im.naturalWidth) {
      if (im.naturalHeight > im.naturalWidth) slide.classList.add("is-portrait");
    }
    slide.appendChild(im);

    if (img.caption) {
      const cap = document.createElement("div");
      cap.className = "gallery-caption";
      cap.textContent = img.caption;
      slide.appendChild(cap);
    }
    bg.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = i === 0 ? "active" : "";
    dot.setAttribute("aria-label", "第 " + (i + 1) + " 张");
    dot.addEventListener("click", () => { goTo(i); restart(); });
    dotsBox.appendChild(dot);
  });

  // 触发某张图的真正加载（尚未加载时）
  function loadImage(i) {
    const im = bg.children[i] && bg.children[i].querySelector("img");
    if (im && im.dataset.src && !im.src) {
      im.src = im.dataset.src;
      delete im.dataset.src;
    }
  }

  // 画廊即将滚入视口时，按顺序陆续加载剩余图片
  let preloadIdx = 1;
  function preloadNext() {
    if (preloadIdx >= images.length) return;
    const i = preloadIdx++;
    const im = bg.children[i] && bg.children[i].querySelector("img");
    if (!im) return preloadNext();
    if (im.dataset.src && !im.src) {
      im.addEventListener("load", () => setTimeout(preloadNext, 200), { once: true });
      im.addEventListener("error", () => setTimeout(preloadNext, 200), { once: true });
      im.src = im.dataset.src;
      delete im.dataset.src;
    } else {
      preloadNext();
    }
  }
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { preloadNext(); io.disconnect(); }
    }, { rootMargin: "0px 0px 50% 0px" });
    io.observe(document.getElementById("gallery"));
  } else {
    preloadNext();
  }

  function goTo(i) {
    current = (i + images.length) % images.length;
    loadImage(current);
    const slides = bg.querySelectorAll(".gallery-slide");
    slides.forEach((s, idx) =>
      s.classList.toggle("active", idx === current)
    );
    dotsBox.querySelectorAll("button").forEach((d, idx) =>
      d.classList.toggle("active", idx === current)
    );
    // 竖版画像：单独取消上下变暗
    document.getElementById("gallery").classList.toggle(
      "no-dim",
      slides[current].classList.contains("is-portrait")
    );
  }

  goTo(0);

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  $("#carousel-prev").addEventListener("click", () => { goTo(current - 1); restart(); });
  $("#carousel-next").addEventListener("click", () => { goTo(current + 1); restart(); });
  if (images.length > 1) restart();

  /* ---------- 运行时间 ---------- */
  const birth = new Date(SITE.startDate);
  const uptimeEl = $("#uptime");
  function tick() {
    const diff = Date.now() - birth.getTime();
    if (isNaN(diff) || diff < 0) { uptimeEl.textContent = "敬请期待"; return; }
    const days = Math.floor(diff / 86400000);
    const hrs = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    uptimeEl.textContent = days + "天" + hrs + "小时" + mins + "分" + secs + "秒";
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- 硬件支持 ---------- */
  $("#hardware-title").textContent = SITE.hardware.title;
  $("#hardware-subtitle").textContent = SITE.hardware.subtitle;

  const ICONS = {
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="#f5511c" stroke-width="1.6"><rect x="5" y="5" width="14" height="14"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
    ram: '<svg viewBox="0 0 24 24" fill="none" stroke="#f5511c" stroke-width="1.6"><rect x="2" y="8" width="20" height="9"/><path d="M6 8V5M10 8V5M14 8V5M18 8V5M6 12h2M11 12h2M16 12h2M2 20h20"/></svg>',
    disk: '<svg viewBox="0 0 24 24" fill="none" stroke="#f5511c" stroke-width="1.6"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
    mod: '<svg viewBox="0 0 24 24" fill="none" stroke="#f5511c" stroke-width="1.6"><path d="M14 7l-8.5 8.5a2.1 2.1 0 003 3L17 10"/><path d="M14 7l3-3 3 3-3 3zM17 10l4-1-1 4"/><rect x="3" y="3" width="18" height="18" stroke-dasharray="2 3"/></svg>',
  };

  const hwGrid = $("#hw-grid");
  SITE.hardware.items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "hw-card";
    card.innerHTML =
      '<div class="hw-icon">' + (ICONS[item.icon] || ICONS.cpu) + "</div>" +
      "<h4></h4><p></p>";
    card.querySelector("h4").textContent = item.title;
    card.querySelector("p").textContent = item.desc;
    hwGrid.appendChild(card);
  });

  /* ---------- 管理团队 ---------- */
  $("#team-title").textContent = SITE.team.title;
  $("#team-subtitle").textContent = SITE.team.subtitle;

  const teamGrid = $("#team-grid");
  SITE.team.members.forEach((m) => {
    const card = document.createElement(m.link ? "a" : "div");
    card.className = "team-card";
    if (m.link) {
      card.href = m.link;
      card.target = "_blank";
      card.rel = "noopener";
    }

    const avatar = document.createElement("div");
    avatar.className = "team-avatar";
    if (m.img) {
      const im = document.createElement("img");
      im.src = m.img;
      im.alt = m.name;
      avatar.appendChild(im);
    } else {
      avatar.textContent = m.name.trim().charAt(0).toUpperCase();
    }
    card.appendChild(avatar);

    const h3 = document.createElement("h3");
    h3.textContent = m.name;
    card.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = m.role;
    card.appendChild(p);

    teamGrid.appendChild(card);
  });

  /* ---------- 加入我们 / 页脚 ---------- */
  $("#join-title").textContent = SITE.footer.joinTitle;
  $("#join-text").textContent = SITE.footer.joinText;
  const joinBtn = $("#join-button");
  joinBtn.textContent = SITE.footer.joinButton;

  // 提示条（复制群号时显示）
  const toast = document.createElement("div");
  toast.style.cssText =
    "position:fixed;left:50%;bottom:40px;transform:translateX(-50%);" +
    "background:#1a1816;color:#f7b512;padding:12px 28px;font-size:15px;" +
    "letter-spacing:1px;border:2px solid #f7b512;z-index:999;display:none;";
  document.body.appendChild(toast);
  function showToast(msg) {
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => (toast.style.display = "none"), 2500);
  }

  const joinLink = SITE.footer.joinLink.trim();
  if (/^\d{5,}$/.test(joinLink)) {
    // 纯数字 = QQ 群号，点击复制
    joinBtn.href = "#";
    joinBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const done = () => showToast("群号 " + joinLink + " 已复制，打开 QQ 搜索加群吧！");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(joinLink).then(done).catch(() => {
          window.prompt("复制群号：", joinLink);
        });
      } else {
        window.prompt("复制群号：", joinLink);
      }
    });
  } else if (joinLink && joinLink !== "#") {
    joinBtn.href = joinLink;
  }

  $("#footer-credits").textContent = SITE.footer.credits.join("　·　");
  $("#footer-contact").textContent = SITE.footer.contact;
  $("#footer-icp").textContent = SITE.footer.icp;

  /* ---------- 移动端导航 ---------- */
  const toggle = $("#nav-toggle");
  const links = $("#nav-links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
})();
