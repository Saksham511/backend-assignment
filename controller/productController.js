
import pool from "../db.js";

export const CreateProduct= (req,res)=>{
    console.log(req.body);
    var {productId,productName,unitPrice,mfd,expDate}=req.body;
    pool.getConnection(function(error,connection){
        if (error) 
        {
            res.send('Error occured');
        }
        else 
        {
            var sql= "INSERT INTO product (productId,productName,unitPrice,mfd,expDate) VALUES ?";
            var values=[
                [productId,productName,unitPrice,mfd,expDate]
            ];
            connection.query(sql,[values], function(error,result){
                if (error) throw error;
                res.send('Product Created');
                console.log('Product Created');
            });
        }
    });
};

export const ShowProduct= (req,res)=>{
        pool.getConnection(function(error,connection){
        if (error)
        {
            res.send('Error occured');
        }
        else
        {
            var sql= "select * from product";
            connection.query(sql, function(error,data){
                if (error) throw error;
                else
                {
                    res.send(data);
                }
            });
        }
    })
    
};