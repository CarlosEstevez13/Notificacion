import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification: Notification;
  constructor(public _toastrService: ToastrService) { }

  public info(message:string){
    
  }

  public error(message:string){
  }
}
