
$("#header").load("header.html",function(){

    //ҳͷ�Ѿ������첽�������

    $("#reg").click(function(){
        location.href="register.html";
    });
    if(sessionStorage['loginUname']!=undefined){
        $("#log").html('��ӭ����'+sessionStorage['loginUname']);
    }
    $("#index").click(function(e){
        e.preventDefault();
        location.href='index.html';
    });
    $("#introduct").click(function(e){
        e.preventDefault();
        location.href='introduce.html';
    });
//��½����
    $("#bt-login").click(function(){
        var data= $("#login-form").serialize();
        $.ajax({
            type:'POST',
            url:'/user/login',
            data:data,
            success:function(data){
                console.log(data.uid);
                if(data.code===200){
                    alert("��½�ɹ�")
                    sessionStorage['loginUname']=$('[name="uname"]').val();
                    sessionStorage['loginUid']=data.uid;
                    $("#log").html('��ӭ����'+sessionStorage['loginUname']);
                    $("#top").on("click","#log",function(){
                        $(".modal").css("display","");
                    });
                }else if(data.code===400){
                    alert("�û������������,"+data.msg);
                }else{
                    alert('����������,'+data.msg)
                }
            }
        });
    });
//ģ̬��½��
    $("#top").on("click","#log",function(){
        $(".modal").css("display","block");
    });

//�����˵�

    $("#sub_menu").mouseover(function(){
        $(this).find(".sub-nav").css("display","block");
    });
    $("#sub_menu").mouseout(function(){
        $(this).find(".sub-nav").css("display","");
    });
});
$("#footer").load("footer.html");