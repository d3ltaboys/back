(function () {
  var runLinkSystem = function () {
    if (window.linkBoxLoaded) return;
    window.linkBoxLoaded = true;

    var clients = {
      "example.ir": {
        active: true,
        mainUrl: "https://site-shart1.com",
        title: "معتبرترین سایت انفجار با ضریب بالا",
        description: "برای بازی در محیطی ایمن و با واریز آنی کلیک کنید.",
        buttonText: "ورود به سایت معتبر",
        keywords: [
          { text: "الگوریتم بازی انفجار", url: "https://site-shart1.com/algo" },
          { text: "سایت انفجار معتبر", url: "https://site-shart1.com/valid" },
          { text: "برنامه بازی انفجار", url: "https://site-shart1.com/app" }
        ]
      },

      "another-domain.com": {
        active: true,
        mainUrl: "https://site-shart2.com",
        title: "سایت شرط بندی با بونوس ویژه",
        description: "بیشترین بونوس خوش‌آمدگویی برای کاربران جدید.",
        buttonText: "دریافت بونوس",
        keywords: [
          { text: "پیش‌بینی فوتبال", url: "https://site-shart2.com/football" },
          { text: "کازینو آنلاین", url: "https://site-shart2.com/casino" }
        ]
      },

      "default": {
        active: true,
        mainUrl: "https://behtarin-site-shartbandienfejar.com",
        title: "بهترین سایت شرط بندی انفجار",
        description: "معرفی برترین و معتبرترین سایت‌های بازی انفجار ایران.",
        buttonText: "مشاهده لیست برترین‌ها",
        keywords: [
          { text: "انفجار رایگان", url: "https://behtarin-site-shartbandienfejar.com/free" }
        ]
      }
    };

    var host = window.location.hostname.replace(/^www\./, "").toLowerCase();
    var linkData = clients[host];

    // اگر مشتری خودش غیرفعال بود، هیچ چیزی نشان نده
    if (linkData && linkData.active === false) return;

    // اگر مشتری پیدا نشد، فقط default فعال را نشان بده
    if (!linkData) {
      linkData = clients["default"];
    }

    if (!linkData || linkData.active !== true || !linkData.mainUrl) return;

    var box = document.createElement("div");
    box.style.cssText = "margin:25px 0; padding:20px; background:#f9f9f9; border:1px solid #ddd; border-right:6px solid #007bff; border-radius:12px; font-family:tahoma,arial; direction:rtl; text-align:right; box-sizing:border-box; color:#333;";

    var title = document.createElement("a");
    title.href = linkData.mainUrl;
    title.target = "_blank";
    title.rel = "noopener noreferrer";
    title.textContent = linkData.title;
    title.style.cssText = "display:block; font-size:18px; font-weight:bold; color:#000; text-decoration:none; margin-bottom:10px;";
    box.appendChild(title);

    var desc = document.createElement("p");
    desc.textContent = linkData.description;
    desc.style.cssText = "font-size:14px; color:#555; line-height:1.7; margin-bottom:15px;";
    box.appendChild(desc);

    if (linkData.keywords && linkData.keywords.length > 0) {
      var keyBox = document.createElement("div");
      keyBox.style.cssText = "margin-bottom:15px; border-top:1px solid #eee; padding-top:10px;";

      linkData.keywords.forEach(function (key) {
        if (!key || !key.text || !key.url) return;

        var kLink = document.createElement("a");
        kLink.href = key.url;
        kLink.target = "_blank";
        kLink.rel = "noopener noreferrer";
        kLink.textContent = key.text;
        kLink.style.cssText = "display:inline-block; margin:5px 0 5px 10px; padding:4px 12px; background:#fff; border:1px solid #e0e0e0; border-radius:20px; color:#007bff; font-size:12px; text-decoration:none;";
        keyBox.appendChild(kLink);
      });

      box.appendChild(keyBox);
    }

    var btn = document.createElement("a");
    btn.href = linkData.mainUrl;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
    btn.textContent = linkData.buttonText;
    btn.style.cssText = "display:inline-block; background:#007bff; color:#fff; padding:10px 25px; border-radius:8px; text-decoration:none; font-weight:bold; font-size:14px;";
    box.appendChild(btn);

    var content = document.querySelectorAll("p");
    if (content.length >= 3) {
      content[2].after(box);
    } else if (content.length > 0) {
      content[content.length - 1].after(box);
    } else {
      document.body.appendChild(box);
    }
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    runLinkSystem();
  } else {
    document.addEventListener("DOMContentLoaded", runLinkSystem);
  }
})();
