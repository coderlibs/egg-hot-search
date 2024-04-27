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
  // 百度列表
  async getBaiduList() {
    const { ctx } = this;
    let size = ctx.query.size || 20;
    let list = [];
    list = this.app.cache.baidu || [];
    let maxSize = list.length;
    list = list.slice(0, maxSize > size ? size : maxSize);
    ctx.body = {
      list,
    };
  }
  // 头条页面
  async toutiao() {
    const { ctx } = this;
    let list = [];
    list = this.app.cache.toutiao || [];
    await ctx.render("toutiao", { list });
  }
  // 头条列表
  async getToutiaoList() {
    const { ctx } = this;
    let size = ctx.query.size || 20;
    let list = [];
    list = this.app.cache.toutiao;
    let maxSize = list.length;
    list = list.slice(0, maxSize > size ? size : maxSize);
    ctx.body = {
      list,
    };
  }
  // 知乎页面
  async zhihu() {
    const { ctx } = this;
    let list = [];
    list = this.app.cache.zhihu || [];
    await ctx.render("zhihu", { list });
  }
  // 知乎列表
  async getZhihuList() {
    const { ctx } = this;
    let size = ctx.query.size || 20;
    let list = [];
    list = this.app.cache.zhihu;
    let maxSize = list.length;
    list = list.slice(0, maxSize > size ? size : maxSize);
    ctx.body = {
      list,
    };
  }
  // csdn页面
  async csdn() {
    const { ctx } = this;
    let list = [];
    list = this.app.cache.csdn || [];
    await ctx.render("csdn", { list });
  }
  // CSDN列表
  async getCsdnList() {
    const { ctx } = this;
    let size = ctx.query.size || 20;
    let list = [];
    list = this.app.cache.csdn;
    let maxSize = list.length;
    list = list.slice(0, maxSize > size ? size : maxSize);
    ctx.body = {
      list,
    };
  }
}
module.exports = NewsController;
