/**
 * Created by lenovo on 2017/11/5.
 */
//点击返回顶部回到顶部
$(".footer_top .gototop").on("click",function () {
  // console.log(11);
  $("body,html").stop().animate({scrollTop:0},300);
})


//获取商品的信息
$.ajax({
  type:"get",
  url:"http://192.168.32.101:9090/api/getmoneyctrl",
  dataType:"json",
  success:function (data) {
    console.log(data);
    $(".product_content ul").html(template("tplproduct",data));
  }
  
})


//封装字符串截取 地址栏里面的值

var tools = {
  getparamObj:function () {
    var obj = {};
    var search = location.search;
    search = search.slice(1);
    var arr = search.split("&");
    for(var i = 0 ; i<arr.length;i++){
      var key = arr[i].split("=")[0];
      var value = decodeURI(arr[i].split("=")[1]);
      obj[key] = value;
    }
    return obj;
  },
  
  getparam:function (key) {
    return this.getparamObj()[key];
  }
};








