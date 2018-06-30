

function getNowFormatDate(){
    var date = new Date();
    var day=["一","二","三","四","五","六","日"];
    var a=date.getDay()-1;
    var currentdate = date.getFullYear() +"-"+ (date.getMonth()+1) + "-"+ date.getDate()+"  "+"星期"+day[a];
    return currentdate;
};
$(function(){
    $("#time").text(getNowFormatDate());
});
$("#bttn").click(function(){
    $("#app").css("background","#58CD83");
});
$(document).ready(function(){
    $("#hide").click(function(){
    $("ol").hide();
    });
    $("#show").click(function(){
    $("ol").show();
    });
});
