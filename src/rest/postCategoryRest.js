import {Router, run} from 'express-blueforest'
import fileUpload from "express-fileupload"
import configure from "items-service"
import {col} from "mongo-registry"
import ENV from "../env"
import {parse} from "../excel/excel"

const router = Router()
module.exports = router
const categoryService = configure(() => col(ENV.DB_COLLECTION))

router.post('/api/categoryBulk/ademe',
    fileUpload({files: 1, limits: {fileSize: 10 * 1024 * 1024}}),
    run(({}, req) => importAdemeTrunkCategories(req.files.file && req.files.file.data || req.files['xlsx.ademe.trunk'].data))
)

export const importAdemeTrunkCategories = async buffer => {

    const parseDesc = {
        firstDocAt: 3,
        fields: [
            {idx: 10, fieldName: "Catégorie 1", xlsName: " Catégorisation (niveau 1) "},
            {idx: 11, fieldName: "Catégorie 2", xlsName: " Catégorisation (niveau 2) "},
            {idx: 12, fieldName: "Catégorie 3", xlsName: " Catégorisation (niveau 3) "},
            {idx: 13, fieldName: "Catégorie 4", xlsName: " Catégorisation (niveau 4) "},
        ]
    }
    
    const ademeCategories = parse(buffer, parseDesc)
    
    for (let i = 0; i < ademeCategories.length; i++) {
    
    }
    
    
}