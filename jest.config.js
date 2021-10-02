/*Fichier de configuration de test*/
module.exports={
    transform:{
        "^.+\\.ts$":"ts-jest"
    },
    testEnvironment:'node',
    testMatch:["**/test/*.test.ts"],  //Ou se trouve les fichier de tests
    moduleFileExtensions:["js","ts"]
}
