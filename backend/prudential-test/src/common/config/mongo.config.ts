//Todo: 移动到 docker-compose 环境变量配置
// const mongoConfig = {
//     host: "127.0.0.1",
//     database: "admin",
//     user: "admin",
//     password: "123456",
//     port: 27017
// }

const mongoConfig = {
    host: process.env.MONGO_HOST,
    database: process.env.MONGO_DATABASE,
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PWD,
    port: process.env.MONGO_PORT
}


export { mongoConfig };