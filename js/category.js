/**
 * Created by lenovo on 2017/11/6.
 */

$(function () {
  

$.ajax({
  type:"get",
  url:"http://192.168.32.101:9090/api/getcategorytitle",
  dataType:"json",
  success:function (data) {
    // console.log(data);
    $(".menu_title").html(template("tpl",data));
    
    //获取每个li的id
    var lis =  $(".menu_title").find("div");
    // console.log(lis);
    lis.on("click",function () {
        var index = $(this).data("id");
      lis.eq(index).next().toggleClass("hide");
    });
    //循环 拿到id值
    lis.each(function (i,e) {
        var id = $(this).data("id");
        var that =$(e);
      console.log(that)
      $.ajax({
        type:"get",
        url:"http://192.168.32.101:9090/api/getcategory",
        dataType:"json",
        data:{
          titleid:id
        },
        success:function (data) {
          console.log(data);
          that.next(".childtitle").html(template("category",data));
        }
      })
    })
    
    
  
  }
})
  

  
    // $.ajax({
    //   type:"get",
    //   url:"http://192.168.32.101:9090/api/getcategory",
    //   dataType:"json",
    //   data:{
    //     titleid:titleid
    //   },
    //   success:function (data) {
    //     console.log(data);
    //     $(".titleid").html(template("category",data));
    //     $(this).hasClass("hide").removeClass("hide")
    //   }
    // })
    

  
  
  
})