// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('main').className += 'loaded';
// });
alert('重要提示：\r\n1：页面并没有为不同设备、浏览器做适配工作\r\n2：页面左侧动画点击回到首页\r\n3：页面右侧动画点击分别为bgm的播放与暂停\r\n4：bgm：林俊杰-伟大的渺小');
setTimeout(function() {
    var e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    document.getElementById("clnav").dispatchEvent(e);
}, 999);

setTimeout(function() {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        document.getElementById("cl").dispatchEvent(e);
}, 0);

// function start() {
//     var au = document.getElementById('audio');
//     au.play();
//     var circle1 = document.getElementById('circle1');
//     circle1.style.display='none';
//     var circle2 = document.getElementById('circle2');
//     circle2.style.display="block";
// }

function Play() {
    var au = document.getElementById('audio');
    au.play();
    var circle1 = document.getElementById('circle1');
    setTimeout("circle1.style.transition='opacity 1s'", 0);
    setTimeout("circle1.style.opacity=0", 0);
    setTimeout("circle1.style.display='none'", 1000);
    var circle2 = document.getElementById('circle2');
    setTimeout("circle2.style.display='block';", 00);
    setTimeout("circle2.style.opacity=0;", 00);
    setTimeout("circle2.style.transition='opacity 2s'", 1);
    setTimeout("circle2.style.opacity=1", 500);
}

function Pause() {
    var au = document.getElementById('audio');
    au.pause();
    var circle1 = document.getElementById('circle2');
    setTimeout("circle2.style.transition='opacity 1s'", 0);
    setTimeout("circle2.style.opacity=0", 0);
    setTimeout("circle2.style.display='none'", 1000);
    var circle2 = document.getElementById('circle1');
    setTimeout("circle1.style.display='block';", 0);
    setTimeout("circle1.style.opacity=0;", 0);
    setTimeout("circle1.style.transition='opacity 2s'", 1);
    setTimeout("circle1.style.opacity=1", 500);
}