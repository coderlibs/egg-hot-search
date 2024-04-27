module.exports = (app)=>{
    const { router, controller } = app;
    router.get('/', controller.index.index);
    router.get('/weibo', controller.news.weibo);
    router.get('/getWeiboList', controller.news.getWeiboList);
    router.get('/baidu', controller.news.baidu);
    router.get('/getBaiduList', controller.news.getBaiduList);
    router.get('/toutiao', controller.news.toutiao);
    router.get('/getToutiaoList', controller.news.getToutiaoList);
    router.get('/zhihu', controller.news.zhihu);
    router.get('/getZhihuList', controller.news.getZhihuList);
    router.get('/csdn', controller.news.csdn);
    router.get('/getCsdnList', controller.news.getCsdnList);
}