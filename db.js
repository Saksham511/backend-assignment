import { createPool } from "mysql";

const poolconn = createPool({
        connectionLimit:10,
        host: "localhost",
        database: "sales management",
        user: "root",
        password: ""
    });

export default poolconn;