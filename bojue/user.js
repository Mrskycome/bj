const pool=require("./pool");
module.exports={
    register:(req,res)=>{
        //从请求消息读取uname upwd
        var uname=req.body.uname;
        var upwd=req.body.upwd;
        //从连接池中获取连接
        pool.getConnection((err,conn)=>{
            conn.query("insert into t_user values (null,?,?)",[uname,upwd],(err,result)=>{
                console.log(result);
                if(result.affectedRows===1){
                    var data={code:200,msg:'register succ'}
                }else{
                    var data={code:500,msg:'sql err'}
                }
                res.json(data);
                conn.release();
            })

        })
    },
    login:(req,res)=>{
        var uname=req.body.uname;
        var upwd=req.body.upwd;
        pool.getConnection((err,conn)=>{
            conn.query("select * from t_user where uname=? and upwd=?",[uname,upwd],(err,result)=>{
                console.log(result);
                if(err){
                    var data={code:500,msg:"sql err"}
                }else if(result.length===0){
                    var data={code:400,msg:"uname or upwd err"}
                }else{
                    var data={code:200,msg:"login succ",uid:result[0].uid}
                }
                res.json(data);
                conn.release();
            });
        })
    }

}