

/**
 * 滚动条
 */
/*$(window).scroll(function () {
    var scrollTop = $(this).scrollTop(); // 滚动条距离顶部的高度
    var scrollHeight = $(document).height(); // 当前页面的总高度
    var clientHeight = $(this).height(); // 当前可视的页面高度
    // console.log("top:"+scrollTop+",doc:"+scrollHeight+",client:"+clientHeight);
    if (scrollTop + clientHeight >= scrollHeight) { // 距离顶部+当前高度 >= 文档总高度 即代表滑动到底部         
        alert('已经到底了！');
    } else if (scrollTop <= 0) {
        alert('已经到顶了！');
    }
});
*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 获取星期几
 */

/*function getWeek(year, month, day) {
    var week = new Date(year, month - 1, day).getDay(); //计算2016.2.20日星期几
    switch (week) {
        case 0:
            console.log("星期日");
            break;
        case 1:
            console.log("星期一");
            break;
        case 2:
            console.log("星期二");
            break;
        case 3:
            console.log("星期三");
            break;
        case 4:
            console.log("星期四");
            break;
        case 5:
            console.log("星期五");
            break;
        case 6:
            console.log("星期六");
            break;
    }
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 圣杯模式
 */

/*var inherit = (function () {
    var F = function () {};
    return function (Parent, Child) {
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.prototype.uber = Parent.prototype;
    }
})();*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 *获取css样式
 */

/*function getStyle(ele, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[prop];
    } else {
        return ele.currentStyle[prop];
    }
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * fixed封装
 */

/*function fixed(ele) {
    var w = parseInt(getStyle(ele, 'left')),
        h = parseInt(getStyle(ele, 'top'));
    addEvent(ele, 'scroll', function () {
        ele.style.left = w + getScrollOffset().w + 'px';
        ele.style.top = h + getScrollOffset().h + 'px';
    })
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 绑定事件
 */

/*function addEvent(ele, type, handle) {
    if (ele.addEventListener) {
        ele.addEventListener(type, handle, false);
    } else if (ele.attachEvent) {
        ele['temp' + type + handle] = handle;
        ele[type + handle] = function () {
            ele['temp' + type + handle].call(ele);
        }
        ele.attachEvent('on' + type, ele[type + hadnle]);
    } else {
        ele['on' + type] = handle;
    }
}*/

