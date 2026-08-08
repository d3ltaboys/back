(function () {
    var runLinkSystem = function () {
        if (window.linkBoxLoaded) return;
        window.linkBoxLoaded = true;

        // لیست مشتریان - هر کدام که true باشد نمایش داده می‌شود
        var clients = [
            {
                active: true,
                mainUrl: "https://behtarin-site-shartbandienfejar.com/",
                title: "بهترین سایت شرط بندی انفجار",
                description: "برای بازی در محیطی ایمن و با واریز آنی کلیک کنید.",
                buttonText: "ورود به سایت شرط بندی انفجار",
                keywords: [
                    { text: "الگوریتم بازی انفجار", url: "https://behtarin-site-shartbandienfejar.com" },
                    { text: "سایت انفجار معتبر", url: "https://behtarin-site-shartbandienfejar.com" }
                ]
            },
            {
                active: false,
                mainUrl: "https://site-shart2.com",
                title: "سایت شرط بندی با بونوس ویژه",
                description: "بیشترین بونوس خوش‌آمدگویی برای کاربران جدید.",
                buttonText: "دریافت بونوس",
                keywords: [
                    { text: "پیش‌بینی فوتبال", url: "https://site-shart2.com/football" },
                    { text: "کازینو آنلاین", url: "https://site-shart2.com/casino" }
                ]
            }
        ];

        // پیدا کردن پاراگراف هدف برای جاگذاری
        var paragraphs = document.getElementsByTagName("p");
        var targetElement = null;

        if (paragraphs.length >= 3) {
            targetElement = paragraphs[2];
        } else if (paragraphs.length > 0) {
            targetElement = paragraphs[paragraphs.length - 1];
        } else {
            targetElement = document.body;
        }

        // ایجاد باکس برای هر مشتری فعال
        for (var i = 0; i < clients.length; i++) {
            var data = clients[i];
            if (data.active !== true) continue;

            var box = document.createElement("div");
            box.setAttribute("style", "margin:25px 0; padding:20px; background:#f9f9f9; border:1px solid #ddd; border-right:6px solid #007bff; border-radius:12px; font-family:tahoma,arial; direction:rtl; text-align:right; box-sizing:border-box; color:#333; clear:both;");

            // عنوان
            var title = document.createElement("a");
            title.href = data.mainUrl;
            title.target = "_blank";
            title.rel = "noopener noreferrer";
            title.innerHTML = data.title;
            title.setAttribute("style", "display:block; font-size:18px; font-weight:bold; color:#000; text-decoration:none; margin-bottom:10px;");
            box.appendChild(title);

            // توضیحات
            var desc = document.createElement("p");
            desc.innerHTML = data.description;
            desc.setAttribute("style", "font-size:14px; color:#555; line-height:1.7; margin:0 0 15px 0;");
            box.appendChild(desc);

            // کیوردها
            if (data.keywords && data.keywords.length > 0) {
                var keyContainer = document.createElement("div");
                keyContainer.setAttribute("style", "margin-bottom:15px; border-top:1px solid #eee; padding-top:10px;");
                
                for (var j = 0; j < data.keywords.length; j++) {
                    var k = data.keywords[j];
                    var kLink = document.createElement("a");
                    kLink.href = k.url;
                    kLink.target = "_blank";
                    kLink.innerHTML = k.text;
                    kLink.setAttribute("style", "display:inline-block; margin:5px 0 5px 10px; padding:4px 12px; background:#fff; border:1px solid #e0e0e0; border-radius:20px; color:#007bff; font-size:12px; text-decoration:none;");
                    keyContainer.appendChild(kLink);
                }
                box.appendChild(keyContainer);
            }

            // دکمه
            var btn = document.createElement("a");
            btn.href = data.mainUrl;
            btn.target = "_blank";
            btn.innerHTML = data.buttonText;
            btn.setAttribute("style", "display:inline-block; background:#007bff; color:#fff; padding:10px 25px; border-radius:8px; text-decoration:none; font-weight:bold; font-size:14px;");
            box.appendChild(btn);

            // تزریق باکس به صفحه
            if (targetElement === document.body) {
                document.body.appendChild(box);
            } else {
                targetElement.parentNode.insertBefore(box, targetElement.nextSibling);
                targetElement = box; // برای اینکه باکس بعدی زیر همین باکس بیاید
            }
        }
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
        runLinkSystem();
    } else {
        document.addEventListener("DOMContentLoaded", runLinkSystem);
    }
})();
