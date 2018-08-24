import path from 'path'
import api from "../src"
import ENV from "../src/env"
import {init, withTest} from "test-api-express-mongo/dist/api"

describe('POST Categories', function () {
    
    beforeEach(init(api, ENV, {CAT: ENV.DB_COLLECTION}))
    
    it('post ademe category (trunk) file', withTest({
        req: {
            url: "/api/categoryBulk/ademe",
            method: "POST",
            file: {
                field: "xlsx.ademe.trunk",
                path: path.resolve("files/CUT_BIG_BI_1.09__02_Procedes_Details.xlsx")
            }
        },
        res: {
            bodypath: [
                {path: "$.ok", value: [true]},
                {path: "$.upsertions", value: [28]},
                {path: "$.insertions", value: [0]},
            ]
        }
    }))
})