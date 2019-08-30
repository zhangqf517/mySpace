import koaRouter from 'koa-router'

export default class BaseModel extends koaRouter {
    constructor(db) {
        super();
        this.db = db;
        const tableStructure = Object.assign(this.getDefaultTableStructure(),this.getTableStructure())
        // this.dbModel = 
    }

    /**
     * 所有表的通用结构
     */
    getDefaultTableStructure() {
        return {
            createtime: {
                type: Date,
                default: Date.now
            },
            updatetime: {
                type: Date,
                default: Date.now
            },
            enable: {
                type: Boolean,
                default: true
            }
        }
    }

    /**
     * 返回表结构
     * @return {{}}
     */
    getTableStructure(){
        return {}
    }

    /**
     * 返回表名
     * @returns {string}
     */
    getTableName(){
        return '';
    }
}