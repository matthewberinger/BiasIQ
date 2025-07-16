document.getElementById('extractBtn').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['Readability.js']
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['extract_article.js']
  });
});