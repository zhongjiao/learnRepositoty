/**
 * Created by zhongjiao on 2016/10/16.
 */
(function(){
    angular.module("submitHttpModule",[])
        .provider("submitService",function(){
            this.$get = ["$http","$rootScope",function($http,$rootScope){
                var submitObj = {};
                return {
                    getDataObj:submitObj,
                    requestSend:function(lianjie,canshu){
                        $http({
                            method:"POST",
                            url:lianjie,
                            data:canshu,
                            headers:{'Content-Type':"application/x-www-form-urlencoded"}
                        }).success(function(response){
                            console.log(response);
                            if(response.code == 0){
                                submitObj.code = response.code;
                                submitObj.data = response.data;
                                $rootScope.$broadcast("requestComplete");
                            }else{
                                $rootScope.$broadcast("requestError",response.data);
                            }

                        }).error(function(error){
                            console.log(error);
                        });
                    }
                }
            }]
        })
})();