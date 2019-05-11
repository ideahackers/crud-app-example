if(process.env.NODE_ENV == 'productiom'){
    module.exports = {mongoURI: ''}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}