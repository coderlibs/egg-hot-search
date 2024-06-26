const { Controller } = require("egg");
class IndexController extends Controller {
  async index() {
    const { ctx } = this;
    let list = [
      { link: "/weibo", name: "微博热搜" },
      { link: "/baidu", name: "百度热搜" },
      { link: "/toutiao", name: "头条热搜" },
      { link: "/zhihu", name: "知乎热搜" },
      { link: "/csdn", name: "CSDN热搜" },
    ];
    await ctx.render("index", { list });
  }
}
module.exports = IndexController;