chrome.runtime.onMessage.addListener(function(message, sender, reply) {
    var fcLat = message.lat;
    var fcLong = message.long;
    var tcLat = 52.2302;
    var tcLong = 21.0114;
    var hour = '09:00';
    var isArrival = 'true'; 

    var url = `https://jakdojade.pl/warszawa/trasa/?fc=${fcLat}:${fcLong}&tc=${tcLat}:${tcLong}&h=${hour}&ia=${isArrival}`;
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.create({
            url: url,
            index: activeTab.index + 1,
            active: true
        });
    });
});