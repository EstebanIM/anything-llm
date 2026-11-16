function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((_mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm(".topbar-wrapper").then((elm) => {
  const brandName = window.SWAGGER_BRAND_NAME || "Developer API";
  const link = document.createElement("a");
  link.href = window.location.origin;
  link.textContent = brandName;
  link.style.color = "#fff";
  link.style.fontSize = "20px";
  link.style.fontWeight = "700";
  link.style.textDecoration = "none";
  elm.replaceChildren(link);
});
