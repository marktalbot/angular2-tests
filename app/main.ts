import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

bootstrap(AppComponent);

let foo: string = 'bar';

console.log(foo);


interface person {
    name: string;
    age: any;
}

var mark: person = {
    name: 'mark talbot',
    age: 11
}


interface animal {
    type: string;
    weight: number;
}

var sheba: animal = {
    type: 'dog',
    weight: 10
}

console.log(mark);

const HELLO_WORLD = 'hi hi hi';

