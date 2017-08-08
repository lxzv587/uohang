
//注册
Vue.component('compon_header',{
    template:'<div class="div header">'+
    '<img src="img/logo.jpg" alt="">'+
    '<img src="img/text.jpg" alt="">'+
    '<input type="text" value="Search on Airchina site">'+
    '<div class="clear"></div>'+    
    '</div>'
});
Vue.component('compon_nav',{
    template:'<div class="wrap nav"><div class="div"><img src="img/nav.png" alt=""></div></div>'
});
Vue.component('compon_banner',{
    template:'<div class="wrap banner"><img src="img/banner.jpg" alt=""></div>'
});
Vue.component('compon_list',{
    template:'<div class="div list">'+
    '<p><img class="img" src="img/icon.jpg" alt=""><span class="span">中国热门目的地推荐</span></p>'+
    '<div class="clear"></div>'+
    '<h2 class="h2">上海 <b>INR <s>13,800</s></b> 起<span></span>广州  <b>INR <s>13,800</s></b> 起<span></span>杭州 <b>INR <s>13,800</s></b> 起<span></span>深圳  <b>INR <s>13,800</s></b> 起</h2>'+
    '<p class="p"><img class="img" src="img/icon2.jpg" alt=""><span class="span">A330-300执飞机型介绍</span></p>'+
    '<div class="clear"></div>'+
    '<h3 class="h2 h3">国航中远程航线的主力机型，拥有安静的双通道宽体客舱、更大的个人空间、更宽敞的座位和更丰富的客舱娱乐系统。</h3>'+
    '<div class="icon"><img src="img/list1.jpg" alt=""><img src="img/list2.jpg" alt=""><img src="img/list3.jpg" alt=""></div>'+
    '<div class="clear"></div>'+
    '<p class="pp"><img class="img" src="img/icon3.jpg" alt=""><span class="span">庆贺孟买北京再启航  推出<b>"升公务舱特惠"</b>活动  </span></p>'+
    '<div class="clear"></div>'+
    '<h3 class="h4"><p>超级经济舱 升 <b>公务舱</b></br> <b class="b">INR10,000</b></p><p>经济舱 升 <b>公务舱</b></br> <b class="b">INR15,000</b></p></h3>'+
    '<div class="h5"><p>销售日期：即日起—2017.03.31</p><p>旅行日期：2016.10.31-2017.03.31</p><p>销售渠道：起飞前3天到营业部直属柜台 或  起飞当天在机场值机柜台办理</p><p>里程累积：按照原客票舱位累积</p><p>行李额：按照原客票舱位执行</p><p>自愿退票：升舱后如需退票,按变更前的舱位票价使用条件执行,全额退还补收的差额。</p><p>客票改期：升舱后不允许自愿改期</p></div>'+
    '<p class="pp"><img class="img" src="img/icon4.jpg" alt=""><span class="span">北美机票推荐</span></p>'+
    '<div class="clear"></div>'+
    '<div class="show">' +
    '<div class="rease">' +
    '<p>纽约  <b>INR</b> <b>21,160</b> <b>起</b></p>' +
    '</div>' +
    '<div class="rease">' +
    '<p>纽约  <b>INR</b> <b>21,160</b> <b>起</b></p>' +
    '</div>' +
    '<div class="rease">' +
    '<p>纽约  <b>INR</b> <b>21,160</b> <b>起</b></p>' +
    '</div>' +
    '<div class="rease">' +
    '<p>纽约  <b>INR</b> <b>21,160</b> <b>起</b></p>' +
    '</div>' +
    '<div class="rease">' +
    '<p>纽约  <b>INR</b> <b>21,160</b> <b>起</b></p>' +
    '</div>' +
    '<div class="rease">' +
    '<p>纽约  <b>INR</b> <b>21,160</b> <b>起</b></p>' +
    '</div>' +
    '<div class="rease">' +
    '<p>纽约  <b>INR</b> <b>21,160</b> <b>起</b></p>' +
    '</div>' +
    '<div class="rease">' +
    '<p>纽约  <b>INR</b> <b>21,160</b> <b>起</b></p>' +
    '</div>' +
    '</div>'+
    '<div class="clear"></div>'+
    '<p><img class="img" src="img/icon5.jpg" alt=""><span class="span">更多国航信息</span></p>'+
    '<div class="clear"></div>'+
    '<div class="footer">' +
    '<div class="liaojie">' +
    '<h3>了解国航</h3>' +
    '<p>我们的自我介绍。</p>' +
    '</div>' +
    '<div class="liaojie zhuce">' +
    '<h3>新会员注册  奖励800公里非定级里程</h3>' +
    '<p>加入国航常旅客计划，成为Phoenix miles会员。累积里程，获得奖励。</p>' +
    '</div>' +
    '<div class="liaojie cuxiao">' +
    '<h3>免费订阅国航 促销邮件</h3>' +
    '<p>优选折扣机票信息，以及国航新闻报道。</p>' +
    '</div>' +
    '</div>'+
    '</div>'
});
//创建根实例
var app=new Vue({
    'el':'.lxz_wrap'
})