import koaRouter from 'koa-router'

import DB from '../DB'
import config from '../../../config/basic.config'

import User_list from './user_list'

const moduleName = 'meeting'
const router = koaRouter()
const modelTypes = [
    User_list,
]

const db = new DB(config.mongodb_meeting, moduleName)

const models = new Map();
for (let modelType of modelTypes) {
    const model = new modelType(db)
    models.set(model.getTableName(), model)
    //每个Model的路由是/moduleName/tableName
    const route = `/${moduleName}/${model.getTableName()}`
    router.use(route, model.routes(), model.allowedMethods())
}

export default router;
