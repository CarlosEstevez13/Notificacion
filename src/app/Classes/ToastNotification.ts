import { NotificationService } from '../Providers/notification.service';
import { ToastrService } from 'ngx-toastr';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToastNotification extends NotificationService{

    

    constructor(public _toastrService: ToastrService ){
        super(_toastrService);
    

    }

    public info(message:string){
        this._toastrService.success(`${message}`, 'Toastr Success!');
    }

    public error(message:string){
        this._toastrService.error(`${message}`, 'Toastr Error!');
    }

}