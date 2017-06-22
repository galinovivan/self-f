import { Injectable } from '@angular/core';

@Injectable()

export class LoggerService {
    public message(mess) : void {
        console.log(mess);
    }
}