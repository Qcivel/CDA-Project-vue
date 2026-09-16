
// services/ArticleDataService.js
import { database } from "./firebase";
import { ref, push, update, remove, onValue } from "firebase/database";

class PictureDataService {
    constructor() {
        // Ref de firebase permet de faire référence à la base de données firebase
        // "articles" est le nom de la collection dans la base de données firebase
        this.dbRef = ref(database, "picture");
    }

    // Obtenir tous les articles
    getAll(callback) {
        onValue(this.dbRef, callback);
    }

    // Ajouter une photo
    create(article) {
        return push(this.dbRef, article);
    }

    
}

// Exporter une instance unique
export default new ArticleDataService();


