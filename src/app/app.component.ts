import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
  constructor() {
    console.log("start...");
    this.simpleCallbacks();
    // this.simplePromise();
    // this.simpleChainingPromise();
  }

  simpleCallbacks() {
    doAsyncTask(
      () => console.log("Callback Called")
    );

    function doAsyncTask(cb) {
      setTimeout(() => {
        console.log("Async Task Calling Callback");
        cb();
      }, 1000);
    }

  }

  simplePromise() {
    /*******************************************
    *   change let error for reject and resolve 
    *   error = false => reject 
    *   error = ture => resolve
    ********************************************/
    let error = false;
    function doAsyncTask() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (error) {
            reject('error'); // pass values
          } else {
            resolve('done'); // pass values
          }
        }, 1000);
      });
    }

    doAsyncTask().then(
      (success) => console.log(success),
      (error) => console.error(error)
    );
  }

  simpleChainingPromise() {
    /*******************************************
    *   change let error for reject and resolve 
    *   error = false => reject 
    *   error = ture => resolve
    ********************************************/
    let error = true;
    function doAsyncTask() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (error) {
            reject('error');
          } else {
            resolve('done');
          }
        }, 1000);
      });
    }

    doAsyncTask().then(
      (val) => console.log(val),
      (err) => console.error(err)
    );

    // Immediately Resolved Promise
    let promise = Promise.resolve('done');
    promise.then((val) => console.log(val)); // 'done'

    // Handling Errors
    Promise.resolve('done')
      .then((val) => { throw new Error("fail") })
      .then((val) => console.log(val))
      .catch((err) => console.error(err));
  }
}
