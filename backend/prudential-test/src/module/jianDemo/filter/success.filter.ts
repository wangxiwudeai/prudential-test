import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map } from 'rxjs/operators';
import { StandardResponse } from "../jian.interface";

export class SuccessFilter implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            map(
                data => {
                    const res = new StandardResponse();
                    res.data = data;
                    return res;
                }
            )
        );
    }
}