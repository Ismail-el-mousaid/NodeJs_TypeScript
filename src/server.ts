//-----------Création du serveur-----------
import express, {Request, Response} from "express";
import serveStatic from "serve-static";

export default class Server{
    constructor(private port : number) { }
    public start():void{
        const app = express();
        app.use(serveStatic("public"));  //Pour spécifier le dossier des ressources statiques(html,css...), après ca on peut accèder a index.html par url
        app.get("/",(req:Request, resp:Response)=>{
            resp.send("Hello ");
        });
        app.listen(this.port,()=>{
            console.log("Server started");
        });
    }
}

/*Script pour faire le changement auto sans chaque fois éxecuter les commandes (se
* trouve dans package.json) */
