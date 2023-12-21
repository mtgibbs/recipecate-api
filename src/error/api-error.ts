export class ApiError extends Error {

    private _statusCode: number;

    get statusCode(): number {
        return this._statusCode
    }

    constructor(name: string, statusCode: number, message?: string) {
        super(message);
        this.name = name;
        this._statusCode = statusCode;
    }
}
