import { createConnection } from "mysql";

const connect=()=>{

    const connection = createConnection({
        host: "localhost",
        database: "sales management",
        user: "root",
        password: ""
    });

    connection.connect(function(error){
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