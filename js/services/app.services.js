
(function () {
    'use strict';

    
    angular.module('my-app')
        .factory('DbServices', function DbServices() {

            var db = new PouchDB('products');
            var auth = {
                isLoggedIn : false
            };
            
            function addNewProduct(product, callback) {
                db.put(product, function(err, doc){
                    return callback(err, doc);
                });
            }

            function bulkDelete(productArr, callback) {
                db.bulkDocs(productArr, function(err, doc){
                    return callback(err, doc);
                });
            }

            function getProducts(callback) {
                db.allDocs({ include_docs: true, descending: true }, function(err, doc){
                    return callback(err, doc);
                })
            }

            function viewProduct(id, callback) {
                console.log(id);
                db.get(id, function(err, doc){
                    return callback(err, doc);
                })
            }

            var services = {
                addNewProduct: addNewProduct,
                getProducts: getProducts,
                bulkDelete: bulkDelete,
                viewProduct: viewProduct,
                auth: auth
            };

            return services;

        })

})();