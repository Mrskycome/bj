/**
 * Created by Administrator on 2017/5/7.
 */
if(window.$===undefined){
    throw new Error("请引入JQuery库")
}
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


$.fn.carousel=function(){
    $imgs=this.find('img');
    $lis=this.find('li');
    var cur=0;//当前显示的序号
    var next=1;//下次要显示的序号
    function task(){
        $lis.eq(next).addClass('active').siblings('.active').removeClass('active');
        $imgs.eq(cur).animate({left:'-100%'},500,function(){
            $(this).removeClass('active');
        });
        $imgs.eq(next).addClass('active').css("left","100%").animate({left:0},500);
        cur=next;
        next++;
        next>=$lis.length&& (next=0);
    }
    $lis.click(function(){
        var i= $(this).html()-1;
        next=i;
        task();
    });
    var timer=setInterval(task,2000);
};


//动态加载banner广告
$.ajax({
    url:"/picture/banner",
    success:function(data){
        console.log(data);
        var html='',lhtml='';
        for(var i=0;i<data.length;i++){
        if(i==0){
            html+=`
        <img src="${data[i].pic}" class="active"/>
        `;
            lhtml+=`
        <li class="active">${i+1}</li>
        `;
        }else{
            html+=`
        <img src="${data[i].pic}" alt="" />
        `;
            lhtml+=`
            <li>${i+1}</li>
            `;
        }
        }
        $("#banner div.showbanner #carousel_pic").html(html);
        $("#banner div.showbanner #carousel_list").html(lhtml);
        $("#banner div.showbanner").carousel();
    }
});


//动态加载用户最新客照

$.ajax({
   url:"/picture/photo",
    success:function(data){
        console.log(data);
        var html='';
        for(var i=0;i<data.length;i++){
         html+=`
                      <li>
						   <a href="#">
							   <img src="${data[i].pic}" alt="" />
						   </a>
					   </li>
         `;
        }
        $("#photo").html(html);

    }
});


