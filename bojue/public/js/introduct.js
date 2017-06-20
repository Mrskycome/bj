
$("#header").load("header.html",function(){

    //页头已经加载异步加载完成

    $("#reg").click(function(){
        location.href="register.html";
    });
    if(sessionStorage['loginUname']!=undefined){
        $("#log").html('欢迎回来'+sessionStorage['loginUname']);
    }
    $("#index").click(function(e){
        e.preventDefault();
        location.href='index.html';
    });
    $("#introduct").click(function(e){
        e.preventDefault();
        location.href='introduce.html';
    });
//登陆功能
    $("#bt-login").click(function(){
        var data= $("#login-form").serialize();
        $.ajax({
            type:'POST',
            url:'/user/login',
            data:data,
            success:function(data){
                console.log(data.uid);
                if(data.code===200){
                    alert("登陆成功")
                    sessionStorage['loginUname']=$('[name="uname"]').val();
                    sessionStorage['loginUid']=data.uid;
                    $("#log").html('欢迎回来'+sessionStorage['loginUname']);
                    $("#top").on("click","#log",function(){
                        $(".modal").css("display","");
                    });
                }else if(data.code===400){
                    alert("用户名或密码错误,"+data.msg);
                }else{
                    alert('服务器错误,'+data.msg)
                }
            }
        });
    });
//模态登陆框
    $("#top").on("click","#log",function(){
        $(".modal").css("display","block");
    });

//下拉菜单

    $("#sub_menu").mouseover(function(){
        $(this).find(".sub-nav").css("display","block");
    });
    $("#sub_menu").mouseout(function(){
        $(this).find(".sub-nav").css("display","");
    });
});
$("#footer").load("footer.html");