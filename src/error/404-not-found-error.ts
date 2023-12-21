import { ApiError } from "./api-error";

export class NotFoundError extends ApiError {

    constructor(message?: string) {
        super("Not Found Error", 404, message);
    }
}
