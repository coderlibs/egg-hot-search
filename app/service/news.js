const weiboHandle = require("../util/weibo");
const { Service } = require("egg");
class NewsService extends Service {
  // 微博爬虫
  async weibo() {
    const { ctx } = this;
    const { weiboNewsListUrl } = this.config.news;
    const result = await ctx.curl(weiboNewsListUrl, {
      method: "GET",
      headers: {
        cookie:
          "SUB=_2AkMUyd_if8NxqwJRmPEUyG_nZYxxywrEieKilS45JRMxHRl-yT9kqhM7tRB6P0nxDZ4zxhf3lrgWw7MspSiu1KeEIl0p; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WFr.6pWKcvAemEC1fh1cK-P; _s_tentry=passport.weibo.com; Apache=1220588513494.8425.1670729942935; SINAGLOBAL=1220588513494.8425.1670729942935; ULV=1670729942962:1:1:1:1220588513494.8425.1670729942935:",
        referer: "https://passport.weibo.com/",
      },
      dataType: "text",
    });
    return weiboHandle.call(this, result.data);
  }
}
module.exports = NewsService;
