module.exports.getLinksFromMd = function getLinksFromMd(text){

  let regexHref = new RegExp(/(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]\/)*\b|\b))/g);

  let regexText = new RegExp(/(?<=\[)([a-z0-9]*)(?=\])/g);

  let mdHref = text.match(regexHref);
  let mdText = text.match(regexText);

  let empty_array_result = [];

  empty_array_result = mdHref.map((value, index) => {
    obj = {
      href: value,
      text: mdText[index]
    }

    // empty_array_result.push(obj);
  });
  
  return empty_array_result;
}

