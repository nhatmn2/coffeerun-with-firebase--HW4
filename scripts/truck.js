(function(window){
    'use strict';

    var App = window.App || {};

    class Truck {
        constructor(truckId, db) {
            this.truckId = truckId;
            this.db = db;
            console.log('in the Truck constructor');
        }
        createOrder(order) {
            console.log('Adding order for ' + order.emailAddress);
            return this.db.add(order.emailAddress, order);
        }
        deliverOrder(customerId) {
            console.log('Delivering order for ' + customerId);
            return this.db.remove(customerId);
        }
        printOrders(printFn) {
            return this.db.getAll()
                .then(function(orders){
                    var customerIdArray = Object.keys(this.db.getAll());
                    console.log('Truck #' + this.truckId + ' has pending orders:');
                    customerIdArray.forEach(function (id) {
                        console.log(orders[id]);
                        if(printFn){
                            printFn(orders[id]);
                        }
                    }.bind(this));
                }.bind(this));
        }
    }


    App.Truck = Truck;
    window.App = App;
})(window);