var Rx = require('rxjs/Rx');

Rx.Observable.of('hello world')
    .subscribe(function(x) { console.log(x); });