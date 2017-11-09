$(function () {
  
  //获取标题上的跳转,分页的链接 传值
  var id = tools.getparam("productId");
var categoryId = tools.getparam("categoryId")
  
  // var pageid = 1 ;
  //
  // var test = {
  //   categoryid : id,
  //
  //   pageid :pageid ,
  //
  // }
  
  //获取商品 category
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getcategorybyid",
    dataType:"json",
    data:{categoryid:categoryId},
    success:function (data) {
      console.log(data);
      $(".nav .tv").html(template("tpl2",data));
    }
  })
  
  
  function render() {
    $.ajax({
      type:"get",
      url:"http://192.168.32.101:9090/api/getproduct",
      dataType:"json",
      data:{
        productid :id,
      },
      success:function (data) {
        console.log(data);
        // console.log(data.result[0].category);
        // var temp = data.result[0].category
        // console.log(temp);
        // $(".conten .tv").html(temp);
        // $(".content").html(template("tpl",data));
        $(".pic").html(template("tpl",data));
        
        var temp = data.result[0].productName.slice(0,14)
        // console.log(temp);
        $(".nav .a3").html(temp)
        // $(".nav .a3").html(template("tpl3",data));
     
        // $(".price").html(template("tpl1",data));
      }
    })
  }
  render();
  
  
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getproductcom",
    dataType:"json",
    data:{
      productid :id,
    },
    success:function (data) {
      console.log(data);
      $(".product_com_list ul").html(template("tplproduct",data));
    }
  })
  
  
  
  
  
  
})