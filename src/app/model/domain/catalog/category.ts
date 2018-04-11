/**
 * Created by lorenzo on 08/04/18.
 */
export class Category {

    private _code: string;
    private _name: string;

    constructor(name: string, code: string) {
        this._code = code;
        this._name = name;
    }

    toString() {
        return this.name;
    }

    get code() {
        return this._code;
    }

    get name() {
        return this._name;
    }
}
