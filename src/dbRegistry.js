import ENV from "./env"
import {col} from "mongo-registry"

export const registry = [
    {
        version: "1.0.3",
        log: "name idx",
        script: () => col(ENV.DB_COLLECTION).createIndex({"name": 1})
    },
    {
        version: "1.0.3",
        log: "pid to pids",
        script: () => col(ENV.DB_COLLECTION).updateOne({pid: null}, {$set: {pids: null}, $unset: {pid: ""}})
    }
]