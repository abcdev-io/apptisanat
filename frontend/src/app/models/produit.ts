export class Produit{
	_id: string;
	nom: string;
	thumbnailURI: string;
    description: string;
	prix: number;

    constructor(json?: any) {
        if (json) {
            this._id = json._id ? json._id : null;
            this.nom = json.nom ? json.nom : null;
            this.thumbnailURI = json.thumbnailURI ? json.thumbnailURI : null;
            this.description = json.description ? json.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            this.prix = json.prix ? json.prix : null;
    	} //end json given
    };

} //end class
