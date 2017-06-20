const http=require("http");
const express=require("express");
const user=require("./user");
const picture=require("./picture");
const qs=require("querystring");
var app=express();
http.createServer(app).listen(8090);

app.use(express.static('public'));
app.get('/',(req,res)=>{
    //�����ض�����һ��URL�����൱��Ĭ����ҳ
    res.redirect('/register.html');
});
//�м��
app.use((req,res,next)=>{
    if(req.method==='POST'){

        req.on('data',buf=>{
            //����������׷��Ϊreq.body
            console.log(buf.toString());
            req.body=qs.parse(buf.toString());
            next();//�ȴ��������������첽������ɺ��ٵ��ú����·��
        })
    }else{//����POST ����֮�������������GET ֱ�ӷ���
        next();
    }
});


//����̬��Դ
app.post('/user/register',user.register);

app.post('/user/login',user.login);

app.get('/picture/banner',picture.banner);
app.get('/picture/photo',picture.photo);