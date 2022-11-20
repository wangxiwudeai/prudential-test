import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from "@nestjs/common";
import { ServerResponse } from "http";
import { StandardResponse } from "../jian.interface";

@Catch()
export class ErrorFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response: ServerResponse = ctx.getResponse();
        const res = new StandardResponse();
        res.code = -1;
        res.data = {};
        res.message = exception.message;
        const stringifyResponse = JSON.stringify(res, null, 4);
        response.end(stringifyResponse);
    }
}
