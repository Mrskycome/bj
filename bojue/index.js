const http=require("http");
const express=require("express");
const user=require("./user");
const picture=require("./picture");
const qs=require("querystring");
var app=express();
http.createServer(app).listen(8090);

app.use(express.static('public'));
app.get('/',(req,res)=>{
    //请求重定向到另一个URL——相当于默认首页
    res.redirect('/register.html');
});
//中间键
app.use((req,res,next)=>{
    if(req.method==='POST'){

        req.on('data',buf=>{
            //把请求数据追加为req.body
            console.log(buf.toString());
            req.body=qs.parse(buf.toString());
            next();//等待请求主体数据异步处理完成后再调用后面的路由
        })
    }else{//除了POST 请求之外的其他请求，如GET 直接放行
        next();
    }
});


//请求动态资源
app.post('/user/register',user.register);

app.post('/user/login',user.login);

app.get('/picture/banner',picture.banner);
app.get('/picture/photo',picture.photo);