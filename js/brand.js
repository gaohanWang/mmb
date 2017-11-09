/**
 * Created by lenovo on 2017/11/9.
 */


$(function () {
  

var brandtitleid = tools.getparam("brandTitleId")

$.ajax({
  type:"get",
  url:"http://192.168.32.101:9090/api/getbrand",
  dataType:"json",
  data:{
    brandtitleid:brandtitleid,
  },
  success:function (data) {
    console.log(data);
    
    $(".title ul").html(template("tpl",data));
  
  }
})
  
  
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getbrandproductlist",
    dataType:"json",
    data:{
      brandtitleid:brandtitleid,
      pagesize:4
    },
    success:function (data) {
      console.log(data);
      $(".product_list ul").html(template("tplproduct",data));
      //productId
      
      
    }
  })
  
  
})