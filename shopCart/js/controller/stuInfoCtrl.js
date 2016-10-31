/**
 * Created by zhongjiao on 2016/10/16.
 */
(function(){
    angular.module("stuInfoCtrlModule",[])
        .controller("infoController",["$scope","$http","stuDataService","SERVIVEURL","submitService",
            function($scope,$http,stuDataService,SERVIVEURL,submitService){

            //页面初始化 分页 --------------------------

                var Url="student.php";
                var countArray = {};
                var prev = 0;
                var next = 0;
                var length = 0;
                var tab = 1;
                $scope.pageList = [];
                stuDataService.requestData(Url);
                requestCom();

            //删除信息---------------------------

                $scope.delete = function(data){
                var boo = confirm("是否删除该数据？");
                if(boo){
                    var ul = "action.php";
                    var bata = {id:data};
                    stuDataService.requestData(ul,bata);
                    requestCom();
                }
            };

            //修改信息--------------------------

                $scope.updata = function(data){
                    $scope.info = "修改";
                    $scope.phpName = "add";
                    val(data.s_name,data.s_age,data.s_tel,data.s_address,data.s_id);
            };

            //添加信息按钮---------------------------

                $scope.add = function(){
                    var temp = "";
                    $scope.info = "添加";
                    $scope.phpName = "addNew";
                    val(temp,temp,temp,temp,temp);
            };

            //提交信息请求---------------------------
                $scope.submit = function(phpName){
                    var tt = angular.element("#myForm").serialize();
                    var params = decodeURIComponent(tt,true);
                    if(phpName == "addNew"){
                        var Re = /&id=/;
                        var reg = params.replace(Re,"");
                        params = reg;
                    }
                    var Url = SERVIVEURL + phpName + ".php";
                    submitService.requestSend(Url,params);

                    //页面初始化--------------------------

                    $scope.$on("requestComplete",function(){
                        alert($scope.info + "成功");
                        countArray.data = submitService.getDataObj.data.reverse();
                        pageData();
                        page();

                    });
                    $scope.$on("requestError",function(event,data){
                        console.log(data);
                    });
                };

                function requestCom(){
                    $scope.$on("requestComplete",function(){
                        countArray.data = stuDataService.getStuData.data.reverse();
                        //分页数据-------------------------------------
                        pageData();
                        page();
                    });
                    $scope.$on("requestError",function(event,data){
                        console.log(data);
                    });
            }

                //分页函数--------------------------------------

                function page(){

                    //分页总数------------------------------------
                    length = Math.ceil(countArray.data.length / 7);
                    //分页标签状态----------------------------------
                    $scope.isActivePage = function(p){
                        return tab == p;
                    };
                    //当前激活的标签页-----------------------------
                    $scope.selectPage = function(p){
                        tab = p;
                        pageData();
                        //console.log(p);
                    };
                    //页面分页标签数--------------------------------
                    for(var i = 0;i <= length-1;i ++){
                        $scope.pageList[i] = i+1;
                    }
                    //向前----------------------------------------
                    $scope.prev = function(){
                        //console.log(tab);
                        tab--;
                        if(tab <= 1){
                            tab = 1;
                        }
                        pageData();
                    };
                    //向后----------------------------------------
                    $scope.next = function(){
                        tab++;
                        if(tab >= length){
                            tab = length;
                        }
                        pageData();
                    };
                }

                //增加，修改表格数据------------------------------

                function val(name,age,tel,address,id){
                    angular.element("#name").val(name);
                    angular.element("#age").val(age);
                    angular.element("#tel").val(tel);
                    angular.element("#address").val(address);
                    angular.element("#dataId").val(id);
                }
                function pageData(){
                    $scope.students = countArray.data.slice(7*(tab-1),7*tab);
                }
        }])
})();