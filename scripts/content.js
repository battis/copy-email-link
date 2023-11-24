(() => {
  chrome.runtime.onMessage.addListener((email, sender, sendResponse) => {
    window.focus();
    navigator.clipboard.writeText(
      window.location.href.replace(/(\/u\/0)\/.*\/(.+$)/, `/u/${email}/#all/$2`)
    );
    sendResponse(document.querySelector('.ha .hP').innerText);
  });
})();
