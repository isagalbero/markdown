module.exports.getLinksFromMd = function getLinksFromMd(text){

  if (!text) {
    throw new Error("No parameter");
  } else if (text === 1) {
    throw new Error("Parameter should be a string");
  } 

  let regexHref = new RegExp(/(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]\/)*\b|\b))/g);
  let regexText = /(?<=\[)([\w\d]*)(?=\])/g;

  let mdHref = text.match(regexHref);
  let mdText = text.match(regexText);

  let links = [];

  if (mdHref !== null && mdText !== null){
    links = mdHref.map((value, index) => ({
      href: value,
      text: mdText[index]
    }));
    return links;
  }

  return links;
  
};

