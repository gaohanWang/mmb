/**
 * Created by lenovo on 2017/11/6.
 */
//国内商品 展示 拿数据

$(function () {
    
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getinlanddiscount",
    dataType:"json",
    success:function(data){
      console.log(data);
      $(".product_content").html(template("tpl",data));
    }
    
  })
  
  
  
})