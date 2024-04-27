const cheerio = require("cheerio");
module.exports = async function (data) {
  const $ = cheerio.load(data);
  const wrap = $("*[class^='category-wrap']");
  let list = [];
  wrap.map((index,item) =>{
    let single = $(item).find('.c-single-text-ellipsis')
    const keyword = single.text();
    const href = $(single).parent().attr("href");
    const hot = $(item).find("*[class^='hot-index']").text();
    if (index) {
      list.push({
        rank: index,
        keyword,
        url:  href,
        hotValue: hot,
      });
    }
  })
  return list;
};
