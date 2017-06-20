const pool=require("./pool");
module.exports={
    banner:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("select * from bj_banner limit 0,3",(err,bannerList)=>{s
                res.json(bannerList);
                conn.release();
            })

        })
    },

    photo:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("select * from bj_photo limit 0,12",(err,phohoList)=>{
                console.log(phohoList);
                res.json(phohoList);
                conn.release();
            })

        })
    }
};
