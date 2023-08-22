chrome.contextMenus.create({
  id: "backy",
  title: "backy",
  contexts: ["page"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "backy") {
    const selectedText = new URL(tab.url).href.replace(/^https?:\/\//, '');
    const archiveUrl = `https://web.archive.org/web/20230000000000*/${selectedText}`
    chrome.tabs.create({ url: archiveUrl });
  }
});
