import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  newLog(message: string) {
    console.log(message);
  }   
}
