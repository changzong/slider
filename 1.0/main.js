//var main_sub = [];
//main_sub.push("mainSubPage0");
//var head = [], head_sub = [];
//head.push(head_sub);
var main_sub = "mainSubPage0";
var head_sub = "headSub0Page0";
$(document).ready(function(){
    $("#mainPage").load('pages/mainpage.html #pageContainer');
    $("<div id=" + main_sub + "></div>").appendTo($("#mainSubPages"));
    $("#" + main_sub).load("pages/mainsubpage0.html #pageContainer");
    $("#headPage0").load("pages/headpage0.html #pageContainer");
    $("<div id=" + head_sub +"></div>").appendTo($("#headSub0Pages"));
    $("#" + head_sub).load("pages/headsub0page0.html #pageContainer");
});