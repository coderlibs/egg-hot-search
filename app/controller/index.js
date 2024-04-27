const { Controller } = require("egg");
class IndexController extends Controller {
  async index() {
    const { ctx } = this;
    let list = [
      { link: "/weibo", name: "微博热搜" },
      { link: "/baidu", name: "百度热搜" },
    ];
    await ctx.render("index", { list });
  }
}
module.exports = IndexController;
