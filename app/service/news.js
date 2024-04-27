const weiboHandle = require("../util/weibo");
const baiduHandle = require("../util/baidu");
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
  // 百度爬虫
  async baidu() {
    const { ctx } = this;
    const { baiduNewsListUrl } = this.config.news;
    const result = await ctx.curl(baiduNewsListUrl, {
      method: "GET",
      headers: {
        cookie:
          "BIDUPSID=B2114E3DC7779B79B6EEE7FA435D513F; PSTM=1713674825; BAIDUID=B2114E3DC7779B79B6EEE7FA435D513F:FG=1; BAIDUID_BFESS=B2114E3DC7779B79B6EEE7FA435D513F:FG=1; ZFY=rrpomKcY:BVGPHMYaiKwMUP98Akl1DXx4qpdJQk5JsW8:C; BDRCVFR[Zh1eoDf3ZW3]=mk3SLVN4HKm; delPer=0; H_PS_PSSID=40304_40445_40080_60140_40463_60175_60186; PSINO=1; BA_HECTOR=840k000k248k8g248la5ag0k2v0uo21j2ngj91s; H_WISE_SIDS=40304_40445_40080_60140_40463_60175_60186; BDORZ=FFFB88E999055A3F8A630C64834BD6D0",
        referer: "https://top.baidu.com/board",
      },
      dataType: "text",
    });
    return baiduHandle.call(this, result.data);
  }
    // 头条爬虫
    async toutiao() {
      const { ctx } = this;
      const { toutiaoNewsListUrl } = this.config.news;
      const result = await ctx.curl(toutiaoNewsListUrl, {
        method: "GET",
        dataType: "json",
      });
      let list = result.data.data;
      let arr = []
      list.forEach((el,index) => {
        arr.push({
          rank: index + 1,
          keyword: el.Title,
          url:  el.Url,
          hotValue: el.HotValue,
        });
      });
      return arr;
    }
}
module.exports = NewsService;
