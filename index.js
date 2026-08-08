<script>
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const div = document.createElement("div");

  div.innerHTML = '<a href="https://example.com" target="_blank">متن لینک شما</a>';
  div.style.textAlign = "center";
  div.style.padding = "10px";

  if (footer) {
    footer.insertAdjacentElement("afterend", div);
  }
});
</script>
