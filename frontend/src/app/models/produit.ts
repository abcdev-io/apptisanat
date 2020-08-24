export class Produit{
	_id: number
	nom: string;

    constructor(json?: any) {
        if (json) {
            this._id = json._id ? json._id : null;
            this.nom = json.nom ? json.nom : null;
    	} //end json given
    };

} //end class
