"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
//-----------Création du serveur-----------
var express_1 = __importDefault(require("express"));
var serve_static_1 = __importDefault(require("serve-static"));
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
    }
    Server.prototype.start = function () {
        var app = (0, express_1["default"])();
        app.use((0, serve_static_1["default"])("public")); //Pour spécifier le dossier des ressources statiques(html,css...), après ca on peut accèder a index.html par url
        app.get("/", function (req, resp) {
            resp.send("Hello ");
        });
        app.listen(this.port, function () {
            console.log("Server started");
        });
    };
    return Server;
}());
exports["default"] = Server;
/*Script pour faire le changement auto sans chaque fois éxecuter les commandes (se
* trouve dans package.json) */
