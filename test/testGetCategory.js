import api from "../src"
import ENV from "../src/env"
import {init, withTest} from "test-api-express-mongo/dist/api"

describe('Integ Categories', function () {
    
    beforeEach(init(api, ENV, {CAT: ENV.DB_COLLECTION}))
    
    it('GET categories root', withTest(
        {
            req: {
                url: "/api/categories"
            },
            res: {
                bodypath: [
                    {path: "$.length", value: 3},
                    {path: "$..pid", value: [null, null, null]},
                    {path: "$..name", value: ['Production agro-alimentaire', 'Textile', 'Traitement de fin de vie']},
                ]
            }
        }
    ))
    
    it('GET categories subitems', withTest(
        {
            req: {
                url: "/api/categories?pid=5b814eb404418d4d9f2943ae"
            },
            res: {
                bodypath: [
                    {path: "$.length", value: 2},
                    {path: "$.._id", value: ['5b814eb404418d4d9f2943b1', '5b814eb404418d4d9f2943af']},
                    {path: "$..pid", value: ['5b814eb404418d4d9f2943ae', '5b814eb404418d4d9f2943ae']},
                    {path: "$..name", value: ['Ennoblissement', 'Mise en forme']},
                ]
            }
        }
    ))
})