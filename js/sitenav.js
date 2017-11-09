/**
 * Created by lenovo on 2017/11/8.
 */
$(function () {
  
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getsitenav",
    dataType:"json",
    success:function (data) {
      console.log(data);
      $(".link").html(template("link",data));
    }
  })
  
  
  
})