export type FormikValues = {
    username: string;
    password: string;
}

export type ResponseError = {
    success: boolean;
    error: {
        code: number;
        details?: any[];
        message: string
    }
}

export type SuccessResponse = {
    success: boolean;
    code: number;
    data: {
        access_token: string;
    };
    message: string
}