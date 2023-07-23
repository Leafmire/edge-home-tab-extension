chrome.tabs.onCreated.addListener(
	  async function(tab) {	
		 const newURL = await chrome.storage.sync.get(['new_tab_url']).then((result) => {
			return result.new_tab_url;
		});
		if (tab.pendingUrl == "chrome://newtab/" || tab.pendingUrl == "edge://newtab/") {
			chrome.tabs.update(tab.id, { url: newURL });
		}
	  }
);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if(changeInfo.url) {
	  console.log("TabUpdated: " + changeInfo.url);
	}
});