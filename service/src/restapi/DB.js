const configs = require('../../config/basic.config')
const mongoose = require('mongoose')

const mongoConnections = {}

class DB {
    constructor(dbUrl, moduleName) {
        this._dbUrl = dbUrl
        this._moduleName = moduleName

        this.connection = DB.getMongoConnection(dbUrl, moduleName)
    }

    static getMongoConnection(dbUrl, moduleName) {
        let connection = null
        if (!mongoConnections[dbUrl]) {
            connection = mongoose.createConnection(dbUrl,{ useNewUrlParser: true })

            connection.on('connected', function (err) {
                if (err) {
                    return err
                } else {
                    console.log('Mongoose connected:  ', dbUrl);
                }
            })

            connection.on('reconnected', function (err) {
                if (err) {
                    return err
                } else {
                    console.log('Mongoose reconnected: ', dbUrl);
                }
            })

            connection.on('error', function (err) {
                console.log('Mongoose error: ', err);
            })

            connection.on('disconnected', function () {
                return 'Mongoose disconnected'
            })

            process.on('SIGINT', function () {
                connection.close(function () {
                    process.exit(0)
                })
            })

            mongoConnections[dbUrl] = connection
        } else {
            connection = mongoConnections[dbUrl]
        }
        return connection
    }

    getDbModel(tableName, tableStructure) {
        return DB.getMongoDbModel(tableName, tableStructure, this.connection);
    }
}

module.exports = DB;