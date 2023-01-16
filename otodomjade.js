var script = document.getElementById("__NEXT_DATA__");
var json = script.text;
var data = JSON.parse(json);
var adData = data.props.pageProps.adTrackingData;
var lat = adData.lat;
var long = adData.long;
var url = `https://jakdojade.pl/warszawa/trasa/?fc=${lat}:${long}&tc=52.31420522649696:20.959419667518077`;

var button = document.createElement("button");
var title = document.createTextNode("jakdojade");
button.appendChild(title);

var next = document.getElementById("__next");
next.appendChild(button);

button.addEventListener("click", () => {
    chrome.runtime.sendMessage({
        'lat': lat,
        'long': long
    })
});