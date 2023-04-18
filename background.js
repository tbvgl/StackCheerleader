chrome.action.onClicked.addListener((tab) => {
    if (tab.url && tab.url.includes('https://stackoverflow.com/')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
        }, () => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        });
    }
});