export class Breadcrumb{

	name: string;
    url: string;

    constructor(json?: any) {
        if (json) {
            this.name = json.name ? json.name : null;
            this.url = json.url ? json.url : null;
    	} //end json given
    };

} //end class
