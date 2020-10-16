window.$crisp = []; window.CRISP_WEBSITE_ID = "c284a5b8-44b6-449a-bde9-7b2be1a13d23"; (function () { d = document; s = d.createElement("script"); s.src = "https://client.crisp.chat/l.js"; s.async = 1; d.getElementsByTagName("head")[0].appendChild(s); })();
/* 标签title切换 */
/* var OriginTitile = document.title, titleTime;
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
    }); */

/* 鼠标特效 */
/* var a_idx = 0;
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
}); */
/* document.onkeydown = function(){
    if(window.event && window.event.keyCode == 123) {
        layer.msg("F12被禁用");
        event.keyCode=0;
        event.returnValue=false;
    }
} */