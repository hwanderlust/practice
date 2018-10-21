// sow4063@gmail.com, tallglassofmike, ShawnKoga, 1VinceP, kswensen, a.montoya (plus 12 more warriors)
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// mine
function domainName(url) {
  let result = url

  if(result.match('//')) {
    result = result.substr(result.match('//').index+2, result.length)
  }

  if(result.match('www')) {
    result = result.substr(result.match('www').index + 4, result.length)
  }

  result = result.split('.')[0]
  console.log(`result:`, result)
  return result
}

domainName("http://github.com/carbonfive/raygun") // == "github"
domainName("http://www.zombie-bites.com") // == "zombie-bites"
domainName("https://www.cnet.com") // == "cnet"
domainName("http://google.com") //, "google");
domainName("http://google.co.jp") //, "google");
domainName("www.xakep.ru") //, "xakep");
domainName("https://youtube.com") // , "youtube");
