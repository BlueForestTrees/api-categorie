import ENV from "./env"

export const registry = [
    {
        version: "1.0.3",
        log: "name idx",
        script: () => col(ENV.DB_COLLECTION).createIndex({"name": 1})
    },
    {
        version: "1.0.3",
        log: "pid to pids",
        script: () => col(ENV.DB_COLLECTION).update({pid: null}, {$set: {pids: null}, $unset: {pid: ""}})
    }
]