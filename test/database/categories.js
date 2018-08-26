import ENV from "../../src/env"
import {object} from "mongo-registry"

export const database = {
    [ENV.DB_COLLECTION]: [
        {
            "_id": object("5b814eb404418d4d9f2943ae"),
            "pid": null,
            "name": "Textile",
            "color": "#7EF687"
        },
        {
            "_id": object("5b814eb404418d4d9f2943af"),
            "pid": object("5b814eb404418d4d9f2943ae"),
            "name": "Mise en forme",
            "color": "#A907B2"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b0"),
            "pid": object("5b814eb404418d4d9f2943af"),
            "name": "Broderie",
            "color": "#0C88C1"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b1"),
            "pid": object("5b814eb404418d4d9f2943ae"),
            "name": "Ennoblissement",
            "color": "#A72088"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b2"),
            "pid": object("5b814eb404418d4d9f2943b1"),
            "name": "Appret chimique",
            "color": "#780979"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b3"),
            "pid": object("5b814eb404418d4d9f2943b2"),
            "name": "Mercerisage",
            "color": "#767FF0"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b4"),
            "pid": object("5b814eb404418d4d9f2943b2"),
            "name": "Apprêt anti-acarien",
            "color": "#BBD6BD"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b5"),
            "pid": object("5b814eb404418d4d9f2943b1"),
            "name": "Impression",
            "color": "#964E0C"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b6"),
            "pid": object("5b814eb404418d4d9f2943b5"),
            "name": "Impression pigmentaire",
            "color": "#CAE3C5"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b7"),
            "pid": object("5b814eb404418d4d9f2943b1"),
            "name": "Teinture",
            "color": "#667A4D"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b8"),
            "pid": object("5b814eb404418d4d9f2943b7"),
            "name": "Teinture sur fil",
            "color": "#AD5835"
        },
        {
            "_id": object("5b814eb404418d4d9f2943b9"),
            "pid": null,
            "name": "Traitement de fin de vie",
            "color": "#C4FC58"
        },
        {
            "_id": object("5b814eb404418d4d9f2943ba"),
            "pid": object("5b814eb404418d4d9f2943b9"),
            "name": "Dechets d'equipement electrique et electronique",
            "color": "#01824D"
        },
        {
            "_id": object("5b814eb404418d4d9f2943bb"),
            "pid": object("5b814eb404418d4d9f2943ba"),
            "name": "Ecran plat",
            "color": "#1BC1EF"
        },
        {
            "_id": object("5b814eb404418d4d9f2943bc"),
            "pid": object("5b814eb404418d4d9f2943ba"),
            "name": "Gros electromenager froid (GEMF)",
            "color": "#9230B3"
        },
        {
            "_id": object("5b814eb404418d4d9f2943bd"),
            "pid": object("5b814eb404418d4d9f2943ba"),
            "name": "Gros electromenager hors froid (GEMHF)",
            "color": "#42CB94"
        },
        {
            "_id": object("5b814eb404418d4d9f2943be"),
            "pid": object("5b814eb404418d4d9f2943ba"),
            "name": "Petit appareil en mélange (PAM)",
            "color": "#2A5659"
        },
        {
            "_id": object("5b814eb404418d4d9f2943bf"),
            "pid": null,
            "name": "Production agro-alimentaire",
            "color": "#77E5AA"
        },
        {
            "_id": object("5b814eb404418d4d9f2943c0"),
            "pid": object("5b814eb404418d4d9f2943bf"),
            "name": "Production animale",
            "color": "#EE7C5A"
        },
        {
            "_id": object("5b814eb404418d4d9f2943c1"),
            "pid": object("5b814eb404418d4d9f2943c0"),
            "name": "Aquaculture",
            "color": "#28F8E2"
        },
        {
            "_id": object("5b814eb404418d4d9f2943c2"),
            "pid": object("5b814eb404418d4d9f2943c0"),
            "name": "Porcs",
            "color": "#4CA3BE"
        },
        {
            "_id": object("5b814eb404418d4d9f2943c3"),
            "pid": object("5b814eb404418d4d9f2943bf"),
            "name": "Production vegetale",
            "color": "#4EB56C"
        },
        {
            "_id": object("5b814eb404418d4d9f2943c4"),
            "pid": object("5b814eb404418d4d9f2943c3"),
            "name": "Cultures speciales metropolitaines",
            "color": "#FDAB98"
        },
        {
            "_id": object("5b814eb404418d4d9f2943c5"),
            "pid": object("5b814eb404418d4d9f2943c3"),
            "name": "Cultures annuelles",
            "color": "#5947CE"
        },
        {
            "_id": object("5b814eb404418d4d9f2943c6"),
            "pid": object("5b814eb404418d4d9f2943c3"),
            "name": "Cultures spéciales tropicales",
            "color": "#12F5A4"
        }
    ]
}