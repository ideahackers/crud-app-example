if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: process.env.DATABASE_SERVER}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}