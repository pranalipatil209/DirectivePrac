angular.module('myApp',['ngMessages','ui.router'])
    .config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home',{
            url:'/home',
            templateUrl:'template/index.html',
            controller:'formController',
            onEnter:function(){
              console.log("in state");
            }
        });

    });