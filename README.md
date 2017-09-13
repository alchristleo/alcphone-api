This is the server side/back-end code of Alcphone created using ReactJS, Babel, nodejs with Express framework, MongoDB for database, mailtrap.io for mailer. For the client side/front-end code you can find it [here](https://github.com/alchristleo/alcphone-react)

### How to run
You need to download & install [MongoDB](https://www.mongodb.com/) and configure your SMTP mailer, in this project I use [mailtrap.io](https://mailtrap.io/).

```
git clone https://github.com/alchristleo/alcphone-api.git
cd alcphone-api
yarn install
```
Open up .env file then change the configuration setup to your own MongoDB and mailtrap.io setup
```
yarn start
In browser, open http://localhost:8080
```

### Dependencies
bcrypt-nodejs
bluebird
body-parser
dotenv
express
jsonwebtoken
lodash
mongoose
mongoose-unique-validator
nodemailer
