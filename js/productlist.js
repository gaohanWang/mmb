/**
 * Created by lenovo on 2017/11/6.
 */
$(function () {
  
 var id = tools.getparam("categoryId");
  
  var pageid = 1 ;
  
  var test = {
    categoryid : id,

    pageid :pageid ,

  }
// 获取导航栏的上面的字
  $.ajax({
    type:"get",
    url:"http://192.168.32.101:9090/api/getcategorybyid",
    dataType:"json",
    data:{categoryid:id},
    success:function (data) {
      console.log(data);
      $(".nav").html(template("tpl",data));
    }
  })
  
  
  //获取商品
  function render() {
    $.ajax({
      type:"get",
      url:"http://192.168.32.101:9090/api/getproductlist",
      dataType:"json",
      data:test,
      success:function (data) {
        console.log(data);
        //渲染的数据内容
        $(".product_list ul").html(template("tplproduct",data));
      
        //算出页数
        var page =  Math.ceil(data.totalCount /data.pagesize);
        var  arrpage = [];
        for(var i = 1;i<page+1;i++){
          arrpage.push(i)
        }
        console.log(arrpage);
        data.arrpage = arrpage;//select框的配值
        $(".content .page .ye-content").html(template("page",data));
        $("select").val( test.pageid)
 
      
      }
    })
  }
  render();
  
  //点击的时候上一个还是下一页
  //点击事件  点击下一页 跳到page是2的页面
  $(".ye-up").on("click",function () {
    // console.log(111);
    test.pageid --;
    
    render();
  })
  $(".ye-down").on("click",function () {
    test.pageid ++;
    // console.log(test.pageid);
    render();
  })
  //select 里面点击后跳到相应页面
  $("section").on("change","select",function () {
     test.pageid = $(this).val();
    console.log(pageid+1);

  render();
  })
  
 

})