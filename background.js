
function searchyahoofinance(info)
{
 var searchurl    = info.linkUrl;
 var n1           = searchurl.indexOf("%3A") + 3;
 var n2           = searchurl.indexOf("&");
 var n3           = searchurl.indexOf("www.google.com/finance");
 var ticker       = searchurl.substring(n1, n2);
 var searchstring = ticker;

 if ( n3 > 0 )
   chrome.tabs.create({url: "http://finance.yahoo.com/q?s=" + searchstring});
}

function searchthelion(info)
{
 var searchurl    = info.linkUrl;
 var m1           = searchurl.indexOf("%3A") + 3;
 var m2           = searchurl.indexOf("&");
 var m3           = searchurl.indexOf("www.google.com/finance");
 var ticker       = searchurl.substring(m1, m2);
 var searchstring = ticker;

 if ( m3 > 0 )
   chrome.tabs.create({url: "http://www.thelion.com/bin/aio_msg.cgi?cmd=search&symbol=" + searchstring});
}

function searchedgar(info)
{
 var searchstring   = info.selectionText;
 var urlfirstpart   = "http://www.sec.gov/cgi-bin/browse-edgar?company=";
 var urlsecondpart  = "&owner=exclude&action=getcompany";
 var urlcompanypart = encodeURI(searchstring);

 chrome.tabs.create({url: urlfirstpart + urlcompanypart + urlsecondpart});
}

chrome.contextMenus.create({title: "Search Edgar", contexts:["selection"], onclick: searchedgar});
chrome.contextMenus.create({title: "Search Yahoo Finance", contexts:["link"], onclick: searchyahoofinance});
chrome.contextMenus.create({title: "Search TheLion", contexts:["link"], onclick: searchthelion});

