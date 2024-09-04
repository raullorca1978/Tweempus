export class Token {
  private _key: string;
  private _idAuthor: any;

  constructor(key: string, idAuthor: any) {
      this._key = key;
      this._idAuthor = idAuthor;
  }

  get key(): string {
      return this._key;
  }

  get idAuthor(): any {
      return this._idAuthor;
  }

  set key(key: string) {
      this._key = key;
  }

  set idAuthor(idAuthor: any) {
      this._idAuthor = idAuthor;
  }
}
