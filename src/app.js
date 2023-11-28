const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()



// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// init db

// init router
app.get('/',(req,res,next) =>{
    const strCompress = 'Hi Minh Vuong'
    return res.status(200).json({
        message: 'HELLO',
        metadata: strCompress.repeat(10000)
    })
})

// handing error



module.exports = app