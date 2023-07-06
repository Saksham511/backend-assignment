
import pool from "../db.js";

export const CreateUser= (req,res)=>{
    console.log(req.body);
    var {id,firstName,lastName,phoneNumber,email,password,confirmPassword}=req.body;
    pool.getConnection(function(error,connection){
        if (error) 
        {
            res.send('Error occured');
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

export const LogIn= (req,res)=>{
    var {email, password}= req.body;
    if (email && password)
    {
        pool.getConnection(function(error,connection){
        if (error)
        {
            res.send('Error occured');
        }
        else
        {
            var sql= `select * from user where email="${email}"`;
            connection.query(sql, function(error,data){
                if (error) throw error;
                else if(data.length>0)
                {
                    for (var count =0; count<data.length; count++)
                    {
                        if(data[count].password==password)
                        {
                            res.send("You have been authenticated");
                        }
                        else{
                            res.send("Incorrect password");
                        }
                    }
                }
                else
                {
                    res.send("Incorrect email address");
                }
            });
        }
    })
    }
    else
    {
        res.send('please enter email and password');
    }
    
};