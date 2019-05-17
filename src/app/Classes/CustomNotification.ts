import { NotificationService } from '../Providers/notification.service';
import { ToastrService } from 'ngx-toastr';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomNotification extends NotificationService{

    options:any;

    constructor(public _toastrService: ToastrService
                ){
    super(_toastrService);
    }

    public setOptions(options:any){
        this.options = options;
    }

    public info(message:any){
        console.log(this.options);
        this._toastrService.success(`${message}`, 'Toastr Success!', this.options);
    }

    public error(message:string){
        this._toastrService.error(`${message}`, 'Toastr Error!', this.options);
    }
}