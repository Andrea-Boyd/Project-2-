require("dotenv").config()
module.exports={
    "development": {
      username: "root",
      password: process.env.MY_PASSWORD,
      database: "universities",
      host: "127.0.0.1",
      port: 3306,
      dialect: "mysql"
    },
    "production": {
      username: process.env.HEROKU_USER,
      password: process.env.HEROKU_PASSWORD,
      database: process.env.HEROKU_DATABASE,
      host: process.env.HEROKU_HOST,
      port: 3306,
      dialect: "mysql"
    }
}

