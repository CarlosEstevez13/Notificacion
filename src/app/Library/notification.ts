
export class Notification{

    public options:{closeButton?: boolean,
        timeOut?: number,
        extendedTimeOut?: number,
        disableTimeOut?: boolean,
        easyTime?: number,
        progressBar?: boolean,
        toastClass?: string,
        positionClass?: string,
        titleClass?: string,
        messageClass?:string,
        tapToDismiss?:  boolean,
        onActivateTick?: boolean};

    constructor(options?:{closeButton?: boolean,
                timeOut?: number,
                extendedTimeOut?: number,
                disableTimeOut?: boolean,
                easyTime?: number,
                progressBar?: boolean,
                toastClass?: string,
                positionClass?: string,
                titleClass?: string,
                messageClass?:string,
                tapToDismiss?:  boolean,
                onActivateTick?: boolean}
                ){

    if(options)
       this.options = options;
    }
}