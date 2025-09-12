function createStringConnection(databaseName, user, pass) {
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}

createStringConnection('db_products', 'endryus', '1475')