$(function () {
  
  //获取标题上的跳转,分页的链接 传值
  var id = tools.getparam("productId");

  
  // var pageid = 1 ;
  //
  // var test = {
  //   categoryid : id,
  //
  //   pageid :pageid ,
  //
  // }
  
  
  
  
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
        $(".product_info").html(template("tpl",data));
        
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