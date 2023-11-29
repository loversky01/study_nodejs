'use strict'

const mongoose = require('mongoose')
//lv0
const {db:{host,name,port}} = require('../configs/config.mongodb')
const connectString = `mongodb://${host}:${port}/${name}`
// const connectString = `mongodb://localhost:27017/shopDEV`
const { countConnect } = require('../helpers/check.connect')

console.log(`connectString`,connectString)
class Database {
    constructor() {
        this.connect()
    }

    //connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(connectString,{
            maxPoolSize: 50
        }
            ).then(_ =>
            console.log(`Connected Mongodb Success lv1`, countConnect()))
            .catch(err => console.log(`Error Connect!`))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb