document.querySelector('#submit').addEventListener('click', () => {
	chrome.storage.sync.set({ new_tab_url: document.querySelector('#url').value }).then(() => {
		console.log('Value is set to ' + document.querySelector('#url').value);
	});
});