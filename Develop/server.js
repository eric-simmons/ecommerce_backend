require('dotenv').config()
const express = require('express')
const sequelize = require('./config/connection')
const routes = require('./routes')
// import sequelize connection

const app = express()
const PORT = process.env.PORT || 3001
// const isProduction = process.env.NODE_ENV === "production"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
  sequelize.sync({ force: false }).then(() => {
    console.log('Sequelize connected!')
  })
})







