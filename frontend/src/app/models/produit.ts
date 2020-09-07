export class Produit{
	_id: string;
	nom: string;
	thumbnailURI: string;
	prix: number;

    constructor(json?: any) {
        if (json) {
            this._id = json._id ? json._id : null;
            this.nom = json.nom ? json.nom : null;
            this.thumbnailURI = json.thumbnailURI ? json.thumbnailURI : null;
            this.prix = json.prix ? json.prix : null;
    	} //end json given
    };

} //end class
