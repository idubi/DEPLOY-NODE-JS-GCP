



const connectToDatabase = async (pool) => {
    return new Promise(( resolve, reject ) => {
      pool.getConnection( (err, connection) => {
        if (err) {
         reject( err )
        } else {
          resolve(connection);
        }
    })})
    
  }
     
     

      
 



exports.getValue = async (pool,key) => {
    const connection = await connectToDatabase(pool)

    if (connection ) {
              const sql = key?'SELECT * FROM GCP_FUNC_DATA a where a.key=?':'SELECT * FROM GCP_FUNC_DATA' ;
              try{
                return await connection.promise().query(sql,key, (queryErr, rowsResults) => {
                  if (queryErr) {
                    console.error('Error executing query:', queryErr);
                  } else {
                    console.log('Query Results:', rowsResults);
                    return rowsResults
                  }
      
                })
              }
              finally{
                connection.release();
              }
        }
      }
         