(function () {
  function runLinkSystem() {
    if (window.linkBoxLoaded) return;
    window.linkBoxLoaded = true;

    var clients = [
      {
        active: true,
        mainUrl: "https://site-shart1.com",
        title: "معتبرترین سایت انفجار با ضریب بالا",
        description: "برای بازی در محیطی ایمن و با واریز آنی کلیک کنید.",
        buttonText: "ورود به سایت معتبر",
        keywords: [
          {
            text: "الگوریتم بازی انفجار",
            url: "https://site-shart1.com/algo"
          },
          {
            text: "سایت انفجار معتبر",
            url: "https://site-shart1.com/valid"
          },
          {
            text: "برنامه بازی انفجار",
            url: "https://site-shart1.com/app"
          }
        ]
      },

      {
        active: true,
        mainUrl: "https://site-shart2.com",
        title: "سایت شرط بندی با بونوس ویژه",
        description: "بیشترین بونوس خوش‌آمدگویی برای کاربران جدید.",
        buttonText: "دریافت بونوس",
        keywords: [
          {
            text: "پیش‌بینی فوتبال",
            url: "https://site-shart2.com/football"
          },
          {
            text: "کازینو آنلاین",
            url: "https://site-shart2.com/casino"
          }
        ]
      },

      {
        active: true,
        mainUrl: "https://site-shart3.com",
        title: "مشتری سوم",
        description: "توضیحات مربوط به مشتری سوم.",
        buttonText: "مشاهده لینک",
        keywords: [
          {
            text: "کیورد مشتری سوم",
            url: "https://site-shart3.com/keyword"
          }
        ]
      }
    ];

    // فقط مشتری‌هایی که active آن‌ها true است نمایش داده می‌شوند
    var activeClients = clients.filter(function (client) {
      return client.active === true && client.mainUrl;
    });

    if (activeClients.length === 0) return;

    var allBoxes = document.createDocumentFragment();

    activeClients.forEach(function (linkData) {
      var box = document.createElement("div");

      box.style.cssText =
        "margin:25px 0;" +
        "padding:20px;" +
        "background:#f9f9f9;" +
        "border:1px solid #ddd;" +
        "border-right:6px solid #007bff;" +
        "border-radius:12px;" +
        "font-family:tahoma,arial;" +
        "direction:rtl;" +
        "text-align:right;" +
        "box-sizing:border-box;" +
        "color:#333;";

      // عنوان لینک‌دار
      var title = document.createElement("a");
      title.href = linkData.mainUrl;
      title.target = "_blank";
      title.rel = "noopener noreferrer sponsored nofollow";
      title.textContent = linkData.title;

      title.style.cssText =
        "display:block;" +
        "font-size:18px;" +
        "font-weight:bold;" +
        "color:#000;" +
        "text-decoration:none;" +
        "margin-bottom:10px;";

      box.appendChild(title);

      // توضیحات
      var desc = document.createElement("p");
      desc.textContent = linkData.description || "";
      desc.style.cssText =
        "font-size:14px;" +
        "color:#555;" +
        "line-height:1.7;" +
        "margin:0 0 15px;";

      box.appendChild(desc);

      // کلمات کلیدی
      if (
        Array.isArray(linkData.keywords) &&
        linkData.keywords.length > 0
      ) {
        var keyBox = document.createElement("div");

        keyBox.style.cssText =
          "margin-bottom:15px;" +
          "border-top:1px solid #eee;" +
          "padding-top:10px;";

        linkData.keywords.slice(0, 10).forEach(function (key) {
          if (!key || !key.text || !key.url) return;

          var keywordLink = document.createElement("a");
          keywordLink.href = key.url;
          keywordLink.target = "_blank";
          keywordLink.rel = "noopener noreferrer sponsored nofollow";
          keywordLink.textContent = key.text;

          keywordLink.style.cssText =
            "display:inline-block;" +
            "margin:5px 0 5px 10px;" +
            "padding:4px 12px;" +
            "background:#fff;" +
            "border:1px solid #e0e0e0;" +
            "border-radius:20px;" +
            "color:#007bff;" +
            "font-size:12px;" +
            "text-decoration:none;";

          keyBox.appendChild(keywordLink);
        });

        box.appendChild(keyBox);
      }

      // دکمه اصلی
      var button = document.createElement("a");
      button.href = linkData.mainUrl;
      button.target = "_blank";
      button.rel = "noopener noreferrer sponsored nofollow";
      button.textContent = linkData.buttonText || "مشاهده لینک";

      button.style.cssText =
        "display:inline-block;" +
        "background:#007bff;" +
        "color:#fff;" +
        "padding:10px 25px;" +
        "border-radius:8px;" +
        "text-decoration:none;" +
        "font-weight:bold;" +
        "font-size:14px;";

      box.appendChild(button);
      allBoxes.appendChild(box);
    });

    // محل قرارگیری همه باکس‌ها
    var content = document.querySelectorAll("p");

    if (content.length >= 3) {
      content[2].after(allBoxes);
    } else if (content.length > 0) {
      content[content.length - 1].after(allBoxes);
    } else {
      document.body.appendChild(allBoxes);
    }
  }

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    runLinkSystem();
  } else {
    document.addEventListener("DOMContentLoaded", runLinkSystem);
  }
})();
