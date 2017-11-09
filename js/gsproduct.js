/**
 * Created by lenovo on 2017/11/9.
 */
$(function () {
    
  //渲染标题1
  function render1() {
    

  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getgsshop",
    dataType:"json",
    success:function (data) {
      console.log(data);
      $(".shopName").html(template("tpl1",data));
      
    }
  })
  }
  render1();
  
  $("#jd").on("click",function () {
    // console.log(11);
    $(".shopName").toggle();
  })

  
  //渲染标题2
  
  function render2() {
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getgsshoparea",
    dataType:"json",
    success:function (data) {
      console.log(data);
      $(".area").html(template("tpl2",data));
      
    }
  })
  }
  render2();


$("#area").on("click",function () {
  // console.log(11);
  $(".area").toggle()
})
  //渲染下面商品
  var areaid =0;
  var shopid = 0;



  
  function render3() {
    $.ajax({
      type:"get",
      url:"http://192.168.32.101:9090/api/getgsproduct",
      dataType:"json",
      data:{
        shopid :shopid,
        areaid :areaid
      },
      success:function (data) {
        console.log(data);
        $(".gsproduct_content ul").html(template("tpl3",data));
      }
    })
  }
  render3();
  
  $(".shopName").on("click",".yes",function () {
    // console.log(111);
    shopid = $(this).data("id");
  
    render3();
    $(".shopName").toggle();
  })
  
  $(".area").on("click",".yes",function () {
    // console.log(111);
    areaid = $(this).data("id");
    
    render3();
    $(".area").toggle();
  })
  
  
  
  
  
  
  
  
})