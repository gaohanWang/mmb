/**
 * Created by lenovo on 2017/11/8.
 */
$(function () {
  
  
  
  var productid = tools.getparam("productId")
  
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getdiscountproduct",
    dataType:"json",
    data:{
      productid:productid
    },
    success:function (data) {
      console.log(data);
      $(".contarner_content").html(template("content",data));
      $(".container_comment").html(template("comment",data));
    }
  })
  
  
  
  
})