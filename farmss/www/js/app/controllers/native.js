angular.module('farmss.controllers')

.controller('NativeCtrl', function($scope, $http, constants){

    $scope.provinces = constants.provinceAndcitiesData.provinces;
    $scope.types = constants.machineType;
    $scope.sorts = constants.sortType;

    $scope.places = ["不限", "黄林村", "半月", "河溶"];
    $scope.selCol = {
        place: 1,
        macType: 2,
        sort: 3
    };

    getAllNativePublish = function(){
        var httpConfig = {
            method: "GET",
            url: "api/native/allpublish"
        };
        $http(httpConfig).success(function(data){
            $scope.publishes = data;
        });
    };

    getAllNativePublish();

    /*$scope.$on("fs.directives.dropdown.selected", function(scope){
        var type = scope.targetScope.type;
        var selected = scope.targetScope.selected;
        if (type == $scope.selCol.place){
            if (selected != "不限")
                $scope.selPlace = selected
            else
                $scope.selPlace = "";
        }
        else if (type == $scope.selCol.macType){
            if (selected != "不限")
                $scope.macType = selected
            else
                $scope.macType = "";
        }
        else if (type == $scope.selCol.sort){
            if (selected != "不限")
                $scope.sort = selected
            else
                $scope.sort = "";
        };
    });*/
    $scope.filterPlace = function(selPlace){
        if (selPlace == "不限")
            return ""
        else
            return selPlace;
    };

    $scope.filterMacType = function(selMacType){
        if (selMacType == "不限")
            return ""
        else
            return selMacType;
    };

    $scope.$on("fs.directives.locate.selected", function(scope){
        $scope.locatePlace = scope.targetScope.selected.name;
    });
})
