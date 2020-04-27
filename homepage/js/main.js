/**
 * Created by Noisky on 17/05/13.
 * Revised by Noisky on 19/09/10.
 */
$(document).ready(function () {
    /**
     * 随机获取背景图片
     */
    var imgUrl = 'https://api.starskim.cn/background';
    // 替换页面中的背景图片地址
    $("header").css("background-image", "url(" + imgUrl + ")");

    /**
     * 移动端下拉菜单栏
     */
    var nw = $('.navigation-wrapper');

    // 定义菜单关闭事件
    function bounceOutUp() {
        nw.on(function () {
            nw.toggleClass('visible animated bounceOutUp');
        });
        nw.toggleClass('animated bounceInDown animated bounceOutUp');
    }

    // 根据菜单状态定义单击的操作
    $('.btn-mobile-menu').click(function () {
        if (nw.css('display') === "block") {
            bounceOutUp();
        } else {
            nw.toggleClass('visible animated bounceInDown');
        }
        $('.btn-mobile-menu_icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });
    // 点击下拉菜单以外的其他标签区域收起菜单生效
    $(".panel-main").on('click', ':not(.mobile,.btn-mobile-menu,.navigation-wrapper)', function () {
        if (nw.hasClass("bounceInDown")) {
            bounceOutUp();
            $('.btn-mobile-menu_icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
        }
    });
    // 阻止冒泡事件执行
    nw.click(function (event) {
        event.stopPropagation();
    });
    /**
     * 底部年份动态化
     */
    $('.year').html(new Date().getFullYear());

    /**
     * 异步加载一言
     */
      axios.get('https://v1.hitokoto.cn')
    .then(({ data }) => {
      const hitokoto = document.getElementById('hitokoto')
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)
    // (function getHitokoto() {
    //     $.ajax({
    //         url: "https://v1.hitokoto.cn/?encode=json&charset=utf-8",
    //         dataType: "jsonp",
    //         async: true,
    //         jsonp: "callback",
    //         jsonpCallback: "hitokoto",
    //         success: function (result) {
    //             $('#hitokoto').html("<p>" + result.hitokoto + "</p>")
    //         },
    //         error: function () {
    //             $('#hitokoto').html("<p>读取数据失败了的说……_(:з」∠)_</p>")
    //         }
    //     });
    // })();

    /**
     * 获取URL
     */
    $('.url').html(window.location.host);

    /* 标签title切换 */
    var OriginTitile = document.title, titleTime;
    document.addEventListener("visibilitychange",
        function () {
            if (document.hidden) {
                document.title = "你别走吖 Σ(っ °Д °;)っ";
                clearTimeout(titleTime)
            } else {
                document.title = "你可算回来了 (｡•ˇ‸ˇ•｡)" + OriginTitile;
                titleTime = setTimeout(function () {
                        document.title = OriginTitile
                    },
                    2000)
            }
        });

    /* 鼠标特效 */
    var a_idx = 0;
    jQuery(document).ready(function ($) {
        $("body").click(function (e) {
            var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "#ff6651"
            });
            $("body").append($i);
            $i.animate({
                    "top": y - 180,
                    "opacity": 0
                },
                1500,
                function () {
                    $i.remove();
                });
        });
    });
});

/**
 * 运行时间
 */
function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    BirthDay = new Date("2017/07/17 23:59:00");
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000;
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000;
    e_daysold = timeold / msPerDay;
    daysold = Math.floor(e_daysold);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = Math.floor(e_hrsold);
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold = Math.floor((e_hrsold - hrsold) * 60);
    seconds = Math.floor((e_minsold - minsold) * 60);
    span_dt_dt.innerHTML = "本站已萌萌哒运行" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
};
show_date_time()
