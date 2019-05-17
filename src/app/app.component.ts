import { CustomNotification } from './Classes/CustomNotification';
import { ToastNotification } from './Classes/ToastNotification';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;
  type:number;
  meaning:number;

  constructor(private fb: FormBuilder,
              private toastNotification:ToastNotification,
              private customNotification:CustomNotification,
                ){
                  this.form = this.fb.group({
                    message: new FormControl(),
                    timeOut: new FormControl(5000),
                    extendedTimeOut: new FormControl(1000),
                    disableTimeOut: new FormControl(false),
                    easyTime: new FormControl(300),
                    progressBar: new FormControl(false),
                    toastClass: new FormControl('ngx-toastr'),
                    positionClass: new FormControl('toast-top-right'),
                    titleClass: new FormControl('toast-title'),
                    messageClass: new FormControl('toast-message'),
                    tapToDismiss: new FormControl(true),
                    onActivateTick: new FormControl(false),
                  });
  }

  show(){
    if(this.type ==0){
      if(this.meaning == 0){
        this.toastNotification.info(this.form.value.message);
      }
      if(this.meaning == 1){

        this.toastNotification.error(this.form.value.message);
      }
    }

    if(this.type ==1){
      let option = {
        timeOut: this.form.value.timeOut,
        extendedTimeOut: this.form.value.extendedTimeOut,
        disableTimeOut: this.form.value.disableTimeOut,
        easyTime: this.form.value.easyTime,
        progressBar: this.form.value.progressBar,
        toastClass: this.form.value.toastClass,
        positionClass: this.form.value.positionClass,
        titleClass: this.form.value.titleClass,
        messageClass: this.form.value.messageClass,
        tapToDismiss: this.form.value.tapToDismiss,
        onActivateTick: this.form.value.onActivateTick,
      }
      if(this.meaning == 0){
        this.customNotification.setOptions(option);
        this.customNotification.info(this.form.value.message);
      }
      if(this.meaning == 1){
        this.customNotification.setOptions(option);
        this.customNotification.error(this.form.value.message);
      }
    }

  }
}
