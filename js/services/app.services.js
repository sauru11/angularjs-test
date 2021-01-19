(function () {
    'use strict';
    angular.module('my-app')
        .factory('DbServices', function DbServices() {
            var db = new PouchDB('products');
            var auth = {
                isLoggedIn: false
            };
            function convertToPromise(cbFun, args){
                return new Promise((resolve, reject) => {
                    cbFun(args, function (err, doc) {
                        if(err) reject(err);
                        resolve(doc);
                    });
                });
            }
            function addNewProduct(product) {
                return convertToPromise(db.put,product);
            }
            function bulkDelete(productArr) {
                return convertToPromise(db.bulkDocs,productArr);
            }
            function getProducts(callback) {
                return convertToPromise(db.allDocs,{ include_docs: true, descending: true });
            }
            function viewProduct(id, callback) {
                return convertToPromise(db.get,id);
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