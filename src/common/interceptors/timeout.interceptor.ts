import { CallHandler, NestInterceptor } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { Observable, timeout } from "rxjs";

export class TimeOutInterceptor implements NestInterceptor{
intercept(
    context:ExecutionContextHost,
    next:CallHandler<any>
)
    
    : Observable<any> | Promise<Observable<any>>{
        return next.handle().pipe(timeout(120000));
    }

}
