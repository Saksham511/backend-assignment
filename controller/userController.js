
import poolconn from "../db.js";

export const userFunction= (req,res)=>{
    poolconn.getConnection(function(error,connection){
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
};