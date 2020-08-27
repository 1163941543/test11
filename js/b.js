function showCart(){
    $.ajax({
        url:'http://localhost/code/php/showlist.php',
        dataType:'json',
        success:function(res){
            $('.conter_top3').html("");
            $.each(res.data,function(index,item){
                $('.conter_top2').append(`
                <ul class="conter_top3">
                    <li class="conter_top02 conter_top3_1">${item.product_id}</li>
                    <li class="conter_top02 conter_top3_2"><img src="${item.product_img}" alt=""></li>
                    <li class="conter_top02 conter_top3_3">${item.product_name}</li>
                    <li class="conter_top02 conter_top3_4">${item.product_price}</li>
                    <li class="conter_top02 conter_top3_5"><button class="cuddNum">-</button><input type="text" autocomplete="off" class="goods-num" value="${item.product_num}"><button class="addNum">+</button></li>
                    <li class="conter_top02 conter_top3_6"><button class="delProduct">删除商品</button></li>
                </ul>
                `)
            })
        }
   
    })
}
showCart()
//删除商品
$('.conter_top2').on('click','.delProduct',function(){
    // console.log($(this).parent().parent().find('.conter_top3_1').html())
  var id = $(this).parent().parent().find('.conter_top3_1').html();
    $.ajax({
        url:'http://localhost/code/php/delwq.php',
        data:{
            id:id
        },
        dataType:'json',
        success:function(res){
            if(res.code){
                showCart()
            }
        }

    })
})
$('.conter_top2').on('click','.addNum',function(){
    //console.log($(this).parent().parent().find('.addNum').html())
    var id = $(this).parent().parent().find('.conter_top3_1').html();
    $.ajax({
        url:'http://localhost/code/php/updatewq.php',
        dataType:'json',
        data:{
            type:'add',
            id:'333'
        },
        success:function(res){
            if(res.code){
                alert('商品增加成功')
            }
        }
    })
})