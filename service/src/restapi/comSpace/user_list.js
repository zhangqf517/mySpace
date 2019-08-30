import BaseModel from '../BaseModel'

/**
 * 用户
 */
export default class User extends BaseModel{
    getTableName(){
        return 'user_list'
    }

    getTableStructure(){
        return require('../../system/models/user_list.json')
    }
}