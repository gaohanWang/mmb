/**
 * Created by lenovo on 2017/11/9.
 */
$(function () {
  
  
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getbrandtitle",
    dataType:"json",
    success:function (data) {
      console.log(data);
      $(".menu_title").html(template("tpl",data));
      

      var brandtitleid = tools.getparam("brandTitleId")

        $.ajax({
          type:"get",
          url:"http://192.168.32.101:9090/api/getbrand",
          dataType:"json",
          data:{
            brandtitleid:brandtitleid
          },
          success:function (data) {

            
          }
        })

      
      
      
    }
  })
  
  
  
  
  
  
})