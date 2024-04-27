const { Subscription } = require("egg");

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: "10m", // 10 分钟间隔
      type: "all", // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const { service } = this;
    // 热搜
    const weibo = await service.news.weibo();
    const baidu = await service.news.baidu();
    const toutiao = await service.news.toutiao();
    this.ctx.app.cache = { weibo, baidu, toutiao };
  }
}

module.exports = UpdateCache;
