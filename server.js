const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server')

const app = express()

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:0d75c0a4-060e-4175-9929-775141e0a0c2',
  key: 'fb1eca46-1d81-4ae7-9115-782b8d9eb9f5:1IK6CYPX8jJ0MF2jO2G8ZEcBcH5+0oyrGKai5BlU61Y='
})

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const {
    username
  } = req.body

  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(() => {
      res.sendStatus(201)
    })
    .catch(err => {
      if (err.error === 'services/chatkit/user_already_exists') {
        console.log(`User already exists: ${username}`)
        res.sendStatus(200)
      } else {
        res.status(err.status).json(err)
      }
    })
})

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id
  })
  res.status(authData.status).send(authData.body)
})

const port = 3001

app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Running on port ${port}`)
  }
})