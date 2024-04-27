module.exports = (app)=>{
    const { router, controller } = app;
    router.get('/', controller.index.index);
    router.get('/weibo', controller.news.weibo);
    router.get('/getWeiboList', controller.news.getWeiboList);
    router.get('/baidu', controller.news.baidu);
    router.get('/getBaiduList', controller.news.getBaiduList);
}