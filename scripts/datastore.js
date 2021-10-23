(function(window){
    'use strict';
    var App = window.App || {};
    var Promise = window.Promise;

    //constructor 
    class DataStore {
        constructor() {
            //console.log('running the DataStore function');
            this.data = {};
        }

        promiseResolvedWith(value) {
            var promise = new Promise(function (resolve, reject) {
            resolve(value);
            });
            return promise;
        }

        //dictionary
        add(key, val) {
            return this.promiseResolvedWith(null);
        }
        get(key) {
            return this.promiseResolvedWith(this.data[key]);
        }
        getAll() {
            return this.promiseResolvedWith(this.data);
        }
        remove(key) {
            return this.promiseResolvedWith(null);
        }
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);