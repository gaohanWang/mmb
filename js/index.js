/**
 * Created by lenovo on 2017/11/5.
 */


$(function () {
  
  // 获取数据
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getindexmenu",
    dataType:"json",
    success:function (data) {
      // console.log(data);
      console.log(data.result);
      $(".menu_logo ul").html(template("tpl",data));
      
      $(".menu_logo li:nth-child(9),.menu_logo li:nth-child(10),.menu_logo li:nth-child(11),.menu_logo li:nth-child(12)").css({display:"none"});
      
      $(".menu_logo ul").on("click",$(".menu_logo li:nth-child(8)"),function () {
        console.log(11);
        
        $(".menu_logo li:nth-child(9),.menu_logo li:nth-child(10),.menu_logo li:nth-child(11),.menu_logo li:nth-child(12)").toggle();
        
      })
      
      
      // $(".menu_logo ul a").each(function(i,e){
      //   console.log(data.result[i].img);
      //
      //   $(this).prepend(data.result[i].img);
      //   //点击隐藏
      //   $(".menu_logo").on("click",'.seven',function () {
      //     console.log(1);
      //   })
      // })
    }
    
  })
  
//获取商品的信息
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getmoneyctrl",
    dataType:"json",
    success:function (data) {
      // console.log(data);
      $(".product_content ul").html(template("tplproduct",data));
    }
    
  })
  
  
  // //点击更多优惠跳转到 省钱控的页面
  // $(".gdjz a").on("click",function () {
  //   // location.href = "moneyctrl.html";
  //   console.log(11);
  // })
  //
  //点击返回顶部回到顶部
  $(".footer_top .gototop").on("click",function () {
    // console.log(11);
    $("body,html").stop().animate({scrollTop:0},300);
  })

  
})