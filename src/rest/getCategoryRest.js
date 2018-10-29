import {Router, run} from "express-blueforest"
import {col, objectNoEx} from "mongo-registry"
import ENV from "../env"
import {query} from 'express-validator/check'

const router = Router()
module.exports = router

const categories = col(ENV.DB_COLLECTION)

router.get("/api/categorie",
    query("pid").optional().isMongoId().withMessage("invalid mongo id").customSanitizer(objectNoEx),
    run(({pid}) => categories
        .find({pid: pid || null}, {})
        .sort({'name': 1})
        .toArray())
)