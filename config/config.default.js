// exports.keys = 'coderlibs';
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
  };
  config.cluster = {
    listen: {
      port: 8848,
      hostname: 'localhost', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
    },
  };
  return config;
};