(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var clients = {
      "site1.com": {
        active: true,
        url: "https://behtarin-site-shartbandienfejar.com",
        title: "بهترین سایت انفجار",
        description: "بهترین سایت انفجار",
        buttonText: "بهترین سایت انفجار"
      },
      "site2.com": {
        active: true,
        url: "https://originalsite.com/page-2",
        title: "منبع مرتبط",
        description: "برای اطلاعات بیشتر این منبع را ببینید.",
        buttonText: "مشاهده لینک"
      },
      "default": {
        active: true,
        url: "https://behtarin-site-shartbandienfejar.com",
        title: "بهترین سایت انفجار",
        description: "بهترین سایت انفجار",
        buttonText: "بهترین سایت انفجار"
      }
    };

    var host = window.location.hostname.replace(/^www\./, "");
    var linkData = clients[host];

    if (!linkData || linkData.active !== true) {
      linkData = clients["default"];
    }

    if (!linkData || !linkData.url) {
      return;
    }

    var box = document.createElement("div");
    box.style.margin = "25px 0";
    box.style.padding = "18px 20px";
    box.style.background = "#f8f9fa";
    box.style.border = "1px solid #e2e2e2";
    box.style.borderRight = "5px solid #007bff";
    box.style.borderRadius = "10px";
    box.style.fontFamily = "inherit";
    box.style.direction = "rtl";
    box.style.textAlign = "right";
    box.style.boxSizing = "border-box";

    var title = document.createElement("a");
    title.href = linkData.url;
    title.target = "_blank";
    title.rel = "noopener noreferrer";
    title.textContent = linkData.title;
    title.style.display = "block";
    title.style.fontSize = "17px";
    title.style.fontWeight = "bold";
    title.style.color = "#222";
    title.style.textDecoration = "none";
    title.style.marginBottom = "8px";

    var desc = document.createElement("div");
    desc.textContent = linkData.description;
    desc.style.fontSize = "14px";
    desc.style.color = "#555";
    desc.style.lineHeight = "1.8";
    desc.style.marginBottom = "12px";

    var button = document.createElement("a");
    button.href = linkData.url;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.textContent = linkData.buttonText;
    button.style.display = "inline-block";
    button.style.background = "#007bff";
    button.style.color = "#fff";
    button.style.padding = "9px 18px";
    button.style.borderRadius = "7px";
    button.style.textDecoration = "none";
    button.style.fontSize = "14px";
    button.style.fontWeight = "bold";

    box.appendChild(title);
    box.appendChild(desc);
    box.appendChild(button);

    var paragraphs = document.querySelectorAll("p");

    if (paragraphs.length >= 3) {
      paragraphs[2].parentNode.insertBefore(box, paragraphs[2].nextSibling);
    } else if (paragraphs.length > 0) {
      paragraphs[paragraphs.length - 1].parentNode.insertBefore(
        box,
        paragraphs[paragraphs.length - 1].nextSibling
      );
    } else {
      document.body.appendChild(box);
    }
  });
})();
