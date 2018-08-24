import ENV from "./env"
import {dbInit} from "mongo-registry"
import {registry} from "./dbRegistry"
import startExpress from "express-blueforest"
import morgan from "morgan"

const errorMapper = err => {
    if (err.code === 11000) {
        err.status = 400
        err.body = {errorCode: 1, message: "allready exists"}
    }
}
const init = api => api.use(morgan(ENV.MORGAN || ':status :method :url :response-time ms - :res[content-length]'))

export default dbInit(ENV, registry)
    .then(startExpress(ENV, errorMapper, init))
    .catch(e => console.error("BOOT ERROR\n",e))