# angular2-adminLTE2
Angular 2 (TypeScript) and Template adminLTE2


# use jQuery and install
install

```
// In the console
// First install jQuery
npm install --save jquery
// and jQuery Definition
npm install -D @types/jquery
```

import
```typescript
declare var jQuery:any;

export class AppComponent implements OnInit {

    constructor(private _elRef:ElementRef) {}

    ngOnInit(): any {
        // example use library iCleck
        jQuery(this._elRef.nativeElement).find('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
        jQuery('body').css({background: '#d2d6de'});
    }

}
```

index.html
```html
<!-- jQuery 2.2.3 -->
<script src="public/assets/plugins/jQuery/jquery-2.2.3.min.js"></script>
```