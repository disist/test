(function () {
  'use strict';

  angular.module('chat')
    .controller('ListController', ListController);

  /*@ngInject*/
  function ListController(ChatService) {
    var vm = this;

    angular.extend(vm, {
      listChats: []
    });

    activate();

    function activate() {
      ChatService.getList()
        .then(function (response) {
          vm.listChats = response;
        });
    }
  }
})();
