module.exports = (app) => {
  let config = {};
  config.keys = "coderlibs";
  config.view = {
    defaultExtension: ".html",
    defaultViewEngine: "nunjucks",
    mapping: {
      ".html": "nunjucks",
    },
  };
  config.news = {
    weiboNewsListUrl: "https://s.weibo.com/top/summary?cate=realtimehot",
    baiduNewsListUrl: "https://top.baidu.com/board?tab=realtime",
    toutiaoNewsListUrl: "https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc&_signature=_02B4Z6wo00d01GQgu4QAAIDBigV.eV5CFchkBL8AAH8sBNHUAVJiX7nTdXxWuI8VrTIS7l8Cr641yT.QVcsmtDmgxuDDDyby3tKtkiIBG951yrIzxHpWOMnl-YeCGwiuD5CfZUUxXitHb0N3b6",
    csdnNewsListUrl: "https://blog.csdn.net/phoenix/web/blog/hot-rank?page=0&pageSize=25",
    zhihuNewListUrl: "https://www.zhihu.com/billboard"
  };
  config.cluster = {
    listen: {
      port: 8848,
      hostname: 'localhost', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
    },
  };
  return config;
};