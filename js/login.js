$('#submin').click(function(){
    $.ajax({
        method:'post',
        url:'http://localhost/code/php/login.php',
        data:{
            username:$('#un').val(),
            password:$('#pw').val(),
        },
        success:function(data){
            if(data.code==1){
                localStorage.setItem('un',data.data.username)
                location.href = "../html/index4.html"
                console.log(1);
            }else{
                alert(data.msg)
            }
        },
        dataType:'json'
    })
})