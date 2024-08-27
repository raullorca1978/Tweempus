import { Author } from "../author/author.model";

export class Twimp {
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
    private _author: Author;
    public get author(): Author {
        return this._author;
    }
    public set author(value: Author) {
        this._author = value;
    }
    private _content: string;
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
    private _timestamp: string;
    public get timestamp(): string {
        return this._timestamp;
    }
    public set timestamp(value: string) {
        this._timestamp = value;
    }
    // private _favorite: boolean;
    // public get favorite_1(): boolean {
    //     return this._favorite;
    // }
    // public set favorite_1(value: boolean) {
    //     this._favorite = value;
    // }

    constructor(id: string, url: string, author: Author, content: string, timestamp: string){ //,favorite?: boolean) {
        this._id = id;
        this._url = url;
        this._author = author;
        this._content = content;
        this._timestamp = timestamp;
    }





}
