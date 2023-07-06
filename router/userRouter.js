import { Router } from "express";
import { createPool } from "mysql";

const userRouter = Router();

const pool = createPool({
    connectionLimit:10,
    host: "localhost",
    database: "sales management",
    user: "root",
    password: ""
});

userRouter.route("/").get(function (req,res){
    pool.getConnection(function(error,connection){
        if (error) 
        {
            throw error;
            res.send('Error Occured');
        }
        else 
        {
            connection.query('select * from user', function(err2,records,fields){
                if (!err2){
                    res.send(records);
                    console.log(records);
                }
                connection.release()
            })
        }
    });
});
export default userRouter;