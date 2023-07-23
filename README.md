# Custom New Tab Extension for Chrome

This is a simple Chrome extension that allows you to customize the new tab URL to your desired website.

## Installation

1. Clone or download this repository.

2. Open Google Chrome and go to `chrome://extensions`.

3. Turn on the Developer mode in the top right corner.

4. Click on the "Load unpacked" button and select the cloned/downloaded repository folder.

5. The extension should now be installed and active.

## Usage

Once the extension is installed, it will set the default new tab URL to "https://www.google.com/". Every time you open a new tab, it will redirect you to the specified URL.

If you want to change the new tab URL, follow these steps:

1. Click on the extension icon in the Chrome toolbar.

2. Enter your desired URL in the popup window.

3. Click "Save" to apply the changes.

Now, whenever you open a new tab, it will redirect you to the new specified URL.

## Code Explanation

The extension uses the Chrome runtime and tabs APIs to achieve the custom new tab functionality.

### Setting the New Tab URL on Installation

```javascript
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({new_tab_url: "https://www.google.com/"}, function() {
        console.log("New Tab URL Set");
    });
});
```

This code snippet sets the default new tab URL to "https://www.google.com/" when the extension is installed or updated. It utilizes the chrome.storage.sync API to store the URL in the synchronized storage, ensuring the data is synced across devices if the user is signed in.