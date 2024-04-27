const weiboHandle = require("../util/weibo");
const baiduHandle = require("../util/baidu");
const zhihuHandle = require("../util/zhihu");
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
  // 知乎爬虫
  async zhihu() {
    const { ctx } = this;
    const { zhihuNewListUrl } = this.config.news;
    const result = await ctx.curl(zhihuNewListUrl, {
      method: "GET",
      headers: {
        cookie:
          "_xsrf=j8vvHWuS7l3DagaJdE6uikwuXwXy622h; _zap=b32a2299-27aa-43d4-9d0d-f97a96d26fe2; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1713682226; d_c0=ANAVUJLufxiPToOKmAZ1ZqzL1ZQvwSKEitM=|1713682226; __snaker__id=2ZGBVJvcXhgREI1r; captcha_session_v2=2|1:0|10:1713868386|18:captcha_session_v2|88:RG10Z3hiaU01N1N4NkNuS2syL25QOGVIYTVGYUNndEVROGlUVUFVbnBLMkU3ZitvUnZrRE1rUUZGUlRsRnNEWg==|0f2f08480cb2a391730d7669c297c414ba632761891ead2c12219ed78ecac7ce; gdxidpyhxdE=hCRQrEiS%5C33EDw9Ziq6P02KH6Sg6%2BTDN5ducHrdZrSIXUANcWnvHk2K17wzRAw0JLEX0ErEVzniLSJRKHHi3T0%5CArYbQBX3%2B0DtjsrtylahKSaq9PmC9zscJspwMgcbkc1Q77SJ3nDsvhNM2lctuW6lzUlljAM1YHeKGzaUZrKNZGqz%5C%3A1714147925134; SESSIONID=7lHa3aCMlBnVNUQaF4vFscNXZvaxjZWocyWLS4qs4Tx; JOID=UV8UBktZ-xGuhwMyXV6MDmuG9LVHapFdyrdmdxQ2vXn8zFVnOqk3O86AATBc1M-erlXg8DXaxV91XXK6y5T0Q4s=; osd=VVEVC05d9RCjggc8XFOJCmWH-bBDZJBQz7NodhkzuXf9wVBjNKg6PsqOAD1Z0MGfo1Dk_jTXwFt7XH-_z5r1To4=; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1714147101; KLBRSID=37f2e85292ebb2c2ef70f1d8e39c2b34|1714147102|1714147056",
      },
      dataType: "text",
    });
    return zhihuHandle.call(this, result.data);;
  }
}
module.exports = NewsService;
