/**
 * Created by lenovo on 2017/11/8.
 */
$(function () {
  

  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getbaicaijiatitle",
    dataType:"json",
    success:function (data) {
      console.log(data);
      $(".nav_tab_title ul").html(template("tpl",data));
    }
  })
  
  
  var titleid = tools.getparam("titleId")

  //商品劵渲染
  titleid = 0;
  render();
  function render() {
      

  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getbaicaijiaproduct",
    dataType:"json",
    data:{
      titleid:titleid,
    },
    success:function (data) {
      console.log(data);
      $(".baicaijia_contemt ul").html(template("product",data));
    }
    
  })
  }
  render();
  //点击tab上面的标题  跳转到相应对面
  
  $(".nav").on("click",".nav_tab_title li",function () {
  $(this).addClass("now").siblings().removeClass("now");
    var id = $(this).data("title")
    // console.log(id);
    titleid =id;
    render();
  
  })
  
  //
  
  
})