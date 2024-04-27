const cheerio = require("cheerio");
module.exports = async function (data) {
  const $ = cheerio.load(data);
  let list = [];
  // 操作dom
  // const wrap = $(".HotList-item");
  // wrap.map((index,item) =>{
  //   let title = $(item).find('.HotList-itemTitle')
  //   let hot = $(item).find('.HotList-itemMetrics').text()
  //   const keyword = title.text();
  //   const href = '';
  //   list.push({
  //     rank: index,
  //     keyword,
  //     url:  href || '',
  //     hotValue: hot,
  //   });
  // })
  // 解析js
  const scriptContent = JSON.parse($("#js-initialData").text());
  const initialState = scriptContent.initialState;
  const hotList = initialState.topstory.hotList;
  hotList.forEach((el,index) => {
    let target = el.target;
    let keyword = target.titleArea.text;
    let hot = target.metricsArea.text;
    let url = target.link.url;
    list.push({
      rank: index + 1,
      keyword,
      url:  url || '',
      hotValue: hot,
    });
  });
  return list;
};
