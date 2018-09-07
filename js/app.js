var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "심현섭";
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
            {
			 path: "portfolio/",
             url : "../images/personal/about.png",
			 title: "Personal",
			 name: "Project",
			 img: "personal/about.png",
             img2: "personal/about.png",
             type : false,   
			},
            {
			 path: "portfolio/",
			 url : "personal/kakao.pdf", 
			 title: "Personal",
			 name: "Project",
             img: "personal/process.gif",
			 img2: "personal/process.gif",
			 type : false,
			 contents: "친구들에게 웹과 빅데이터를 배운다고 하였더니 저에게 카카오톡 대화방을 분석 하는 것을 만들어보라고 하였습니다. 처음에는 카카오톡의 대화방 내용을 분석한다는것이 저에게는 생소하고 어려웠지만 친구들과 부모님께 보여 드리겠다는 마음가짐으로 열심히 하다보니 만족스럽게 완성도 되고 자기계발에 엄청난 도움이 되었습니다."
			},
			{
			 path: "portfolio/",
			 url : "personal/webSite.pdf", 
			 title: "Personal",
			 name: "Project",
			 img: "personal/portmain.jpg",
             img2: "personal/portmain.jpg",
			 type : true, 
			 contents: "처음으로 DB도 연결하고 실질적으로 내가 평소에 보던 웹사이트 같은것을 개발한다고 생각하니 기대도 되고 재미있었습니다. UI구현을 이미 해놓은 상태에서 개발을 하니까 마치 회사원이 된 것처럼 뭔가 신기하고 재미있었습니다. 목표로 세워놓은 기능들을 구현하면 구현 할 수록 더욱더 재미있었습니다."
			},
            {
			 path: "portfolio/",
			 url : "team/UI_Project.pdf", 
			 title: "Team",
			 name: "Project",
			 img: "team/portmain.jpg",
             img2: "team/portmain.jpg",
			 type : true, 
			 contents: "처음으로 UI 구현을 하느라 힘들기도 하였고 원하는 대로 작업도 잘 되지 않아서 속상하기도 했지만 다 같이 고생하면서 제작을 해보니 뿌듯하기도 하고 보람차기도 했습니다. 그리고 화면 디자인을 하고나서 새로고침을 하면 변화된 것들이 눈에 잘 보여서, 결과물들이 바로바로 나타나니까 재미있었습니다."
			},
            {
			 path: "",
			 url : "https://www.dropbox.com/s/9ym92e0wwwcttro/shs-3.mp4?dl=0", 
			 title: "Personal", 
			 name: "Project",
			 img: "personal/media.jpg",
             img2: "personal/media.jpg",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});
