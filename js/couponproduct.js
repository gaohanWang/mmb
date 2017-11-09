/**
 * Created by lenovo on 2017/11/8.
 */
$(function () {
    var couponId = tools.getparam("couponId")
  
  var arrimg = [];
 function render() {
  
 $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getcouponproduct",
    dataType:"json",
    data:{
      couponid:couponId,
    },
    success:function (data) {
      console.log(data);
      // console.log(data.result.length);
      for(var i = 0 ;i<data.result.length ; i ++){
        var  arr =    data.result[i].couponProductImg.split(" ");//切成数组下标0,1,2
        // console.log(arr[1]);获取到src 的整个字符串
        // console.log(arr[1].slice(5,arr[1].length - 1));//取到src的路径
        arr[1].slice(5,arr[1].length - 1)
  
        
  
  
        arrimg.push()
        console.log(arrimg);
  
  
      }
      
      
      
      $(".product_content ul").html(template("tplproduct",data));
    }
  })
 }
 render();

  
  
  //弹出层弹出
  $(".product_content").on("click",".tanchu",function () {
    // console.log(111);
    
    $(".body").removeClass("hide")
    
    render()
    
    
    
    
  })
  
  
  
  
  
  //消除弹出层
  $(".delete").on("click",function () {
    console.log(111);
    
    $(".body").addClass("hide");
    
  })
  
  
  
  
  
})