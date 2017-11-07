/**
 * Created by lenovo on 2017/11/6.
 */
//获取 优惠券 获取数据

$(function () {
  
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getcoupon",
    dataType:"json",
    success:function (data) {
      console.log(data);
      $(".coupon_title ul").html(template("tpl",data));
    }
  })
  
  
})