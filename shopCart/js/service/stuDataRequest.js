/**
 * Created by zhongjiao on 2016/10/16.
 */
(function(){
    angular.module("stuServiceModule",[])
        .provider("stuDataService",function(){
            this.$get=["$resource","SERVIVEURL","$rootScope",function($resource,SERVIVEURL,$rootScope){
                var result = {};
                return {
                    getStuData:result,
                    requestData:function(url,productId){
                        var Resource = $resource(SERVIVEURL+url);
                        Resource.get(productId,function(response){
                            //console.log(response);
                            if(response.code == 0){
                                result.data = response.data;
                                $rootScope.$broadcast("requestComplete");
                            }else{
                                $rootScope.$broadcast("requestError",response.data);
                            }
                        },function(error){
                            console.log(error);
                            $rootScope.$broadcast("requestError","服务器连接错误");
                        })
                    }
                }
            }]
        })
})();