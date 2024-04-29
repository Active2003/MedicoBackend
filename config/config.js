require('dotenv').config()

const Port = process.env.NODE_ENV === 'test' ? 4001 : (process.env.PORT || 4000);

const MongodbUrl =  process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL_PRODUCTION : (process.env.MONGODB_URL_DEVELOPMENT || 'mongodb+srv://dharmekaustubh2003:p5suNfItx6nVYjj8@cluster0.d4d91pj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

module.exports = {
  Port: Port,
  MongodbUrl: MongodbUrl
}
