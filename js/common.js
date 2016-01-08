// JavaScript Document


/* --------------------------------------------------
ページトップ
-------------------------------------------------- */
$(function(){
var widthA = $("nav ul li a").width(); // 円の横幅を取得
$("nav ul li a").height(widthA); //円の横幅を高さに設定
});
//ウインドウサイズが変わったとき
$( window ).resize(function(){
var widthA = $("nav ul li a").width();
$("nav ul li a").height(widthA);
});


$(document).ready(function(){
	var topBtn = $('#page-top');    
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
					topBtn.fadeIn();
			} else {
					topBtn.fadeOut();
			}
	});
	//スクロールしてトップ
	topBtn.click(function () {
			$('body,html').animate({
					scrollTop: 0
			}, 500);
			return false;
	});
});










