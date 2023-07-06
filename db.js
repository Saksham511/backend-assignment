import { createPool } from "mysql";

const pool = createPool({
        connectionLimit:10,
        host: "localhost",
        database: "sales management",
        user: "root",
        password: ""
    });

export default pool;