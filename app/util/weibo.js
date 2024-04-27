const cheerio = require("cheerio");
module.exports = async function (data) {
  const $ = cheerio.load(data);
  const $a = $("tr td a");
  const $span = $("tr td span");
  let weibo = "https://s.weibo.com/";
  let list = [];
  $a.map((index, a) => {
    const href = $(a).attr("href");
    const keyword = $(a).text();
    if (index) {
      list.push({
        rank: index,
        keyword,
        url: weibo + href,
        hotValue: 0,
      });
    }
  });
  $span.map((index, span) => {
    const text = $(span).text();
    list[index].hotValue = text.trim();
  });
  list = list.filter((item) => {
    if (item.hotValue) {
      return true;
    }
  });
  return list;
};
