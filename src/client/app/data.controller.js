(function () {
  'use strict';

  angular
    .module('app')
    .controller('DataController', DataController)
    .animation('.slide-animation', function () {
      return {
        addClass: function (element, className, done) {
          if (className == 'ng-hide') {
            TweenMax.to(element, 0.5, {autoAlpha: 1, onComplete: done});
          }
          else {
            done();
          }
        },
        removeClass: function (element, className, done) {
          if (className == 'ng-hide') {
            element.removeClass('ng-hide');
            TweenMax.set(element, {autoAlpha: 0});
            TweenMax.to(element, 0.5, {autoAlpha: 1, onComplete: done});
          }
          else {
            done();
          }
        }
      };
    });
  ;

  DataController.$inject = ['DataService'];

  /* @ngInject */
  function DataController(DataService) {
    var vm = this;
    vm.title = 'DataController';
    vm.data = [];
    vm.selectedData = {};
    vm.currentIndex = 0;
    vm.previous = previous;
    vm.next = next;

    vm.setCurrentSlideIndex = setCurrentSlideIndex;
    vm.isCurrentSlideIndex = isCurrentSlideIndex;
    activate();

    ////////////////

    function activate() {
      vm.data = DataService.getData();
      vm.selectedData = vm.data[vm.currentIndex];
    }

    function previous() {
      console.log("Previous: " + vm.currentIndex);
      if (vm.currentIndex === 0) {
        vm.currentIndex = vm.data.length - 1;
      } else {
        vm.currentIndex--;
      }
      vm.selectedData = vm.data[vm.currentIndex];
    }

    function next() {
      console.log("Next: " + vm.currentIndex);
      if (vm.currentIndex === vm.data.length - 1) {
        vm.currentIndex = 0;
      } else {
        vm.currentIndex++;
      }
      vm.selectedData = vm.data[vm.currentIndex];
    }

    function setCurrentSlideIndex(index) {
      vm.currentIndex = index;
    }

    function isCurrentSlideIndex(index) {
      return vm.currentIndex === index;
    }
  }

})();


