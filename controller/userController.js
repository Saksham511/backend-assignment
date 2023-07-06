
import pool from "../db.js";



export const CreateUser= (req,res)=>{
    console.log(req.body);
    var {id,firstName,lastName,phoneNumber,email,password,confirmPassword}=req.body;
    pool.getConnection(function(error,connection){
        if (error) 
        {
            res.send('Error Occured');
        }
        else 
        {
            var sql= "INSERT INTO user (id,firstName,lastName,phoneNumber,email,password,confirmPassword) VALUES ?";
            var values=[
                [id,firstName,lastName,phoneNumber,email,password,confirmPassword]
            ];
            connection.query(sql,[values], function(error,result){
                if (error) throw error;
                res.send('Registration Successful');
                console.log('Registration Successful');
            });
        }
    });
};