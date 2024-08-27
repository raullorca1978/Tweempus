export class Author {
    private _id: string;

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private _url: string;

    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
    private _fullName: string;

    public get fullName(): string {
        return this._fullName;
    }
    public set fullName(value: string) {
        this._fullName = value;
    }
    private _image: string;
    
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }

    constructor(id: string){
        this._id=id;
        this._url= '';
        this._fullName='Author';
        this._image='src\assets\images\google-icon.png';
    }
    
}
