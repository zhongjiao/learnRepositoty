/**
 * Created by zhongjiao on 2016/10/16.
 */
(function(){
    angular.module("routeModule",[])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider
                .when("/stuInfo",{
                    templateUrl:"tpl/stuInfo.html",
                    controller:"infoController"
                })
                .otherwise({
                    redirectTo:"/stuInfo"
                })
        }])
})();