const { Controller } = require("egg");
class NewsController extends Controller {
  // 微博页面
  async weibo() {
    const { ctx } = this;
    let list = [];
    list = this.app.cache.weibo || [];
    await ctx.render("weibo", { list });
  }
  // 微博列表
  async getWeiboList() {
    const { ctx } = this;
    let size = ctx.query.size || 20;
    let list = [];
    list = this.app.cache.weibo || [];
    let maxSize = list.length;
    list = list.slice(0, maxSize > size ? size : maxSize);
    ctx.body = {
      list,
    };
  }
  // 百度页面
  async baidu() {
    const { ctx } = this;
    let list = [];
    list = this.app.cache.baidu || [];
    await ctx.render("baidu", { list });
  }
}
module.exports = NewsController;
