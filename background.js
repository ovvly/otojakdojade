chrome.runtime.onMessage.addListener(function(message, sender, reply) {
    var lat = message.lat;
    var long = message.long;
    var url = `https://jakdojade.pl/warszawa/trasa/?fc=${lat}:${long}&tc=52.2302:21.0114`;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.create({
            url: url,
            index: activeTab.index + 1,
            active: true
        });
    });
});