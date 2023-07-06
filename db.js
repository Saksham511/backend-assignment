import { createPool } from "mysql";

const connect=()=>{

    const pool = createPool({
        connectionLimit:10,
        host: "localhost",
        database: "sales management",
        user: "root",
        password: ""
    });

    pool.getConnection(function(error,connection){
        if (error) 
        {
            throw error;
        }
        else 
        {
            console.log('MySQL database is connected Successfully');
        }
    });
};
export default connect;