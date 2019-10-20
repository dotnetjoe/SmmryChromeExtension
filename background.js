chrome.browserAction.onClicked.addListener(function(activeTab)
{
  // Select the active tab in the window
  chrome.tabs.query({ active: true, lastFocusedWindow: true},
  
  function(tabs) {
      // array for active tab in current window
      var activeTab = tabs[0];
      var url = "http://smmry.com/" + activeTab.url + "#&SM_IGNORE_LENGTH";

      httpGetAsync(url, function(responseText) {
         console.log(responseText)
      });
      
      chrome.tabs.create({ url: url });
  });

  function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  }
});
