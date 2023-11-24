chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith('https://mail.google.com/mail')) {
    chrome.identity.getProfileUserInfo((info) => {
      chrome.tabs.sendMessage(tab.id, info.email, {}, (subject) => {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: chrome.runtime.getURL('images/logo-32px.png'),
          title: 'Copy Gmail Link',
          message: `Copied link to "${subject}" to  clipboard`
        });
      });
    });
  }
});
