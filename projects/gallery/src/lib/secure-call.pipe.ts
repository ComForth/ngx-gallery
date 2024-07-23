import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'secureCall'
})
export class SecureCallPipe implements PipeTransform {

    constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

    transform(url: string) {

        return new Observable<SafeUrl>((observer) => {
            // This is a tiny blank image
            observer.next('data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');

            // The next and error callbacks from the observer
            const { next, error } = observer;
            const domSanitizer = this.domSanitizer;

            this.http.get(url, { responseType: 'blob' }).subscribe(response => {
                const reader = new FileReader();
                reader.readAsDataURL(response);
                reader.onloadend = function () {
                    const base64Image = domSanitizer.bypassSecurityTrustUrl(reader.result as string)
                    observer.next(base64Image);
                };
            }, reason => {
                    console.error(`Cannot load image: ${reason?.message}`)
            });

            return { unsubscribe() { } };
        });
    }
}

