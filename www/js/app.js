// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('CtrlTarefa', function($scope, $ionicPopup, $ionicListDelegate){
  
  $scope.tarefas = 
  [
    {titulo: "Deslize a seta < para a esquerda", completa:false},
    {titulo: "Para Editar ou Excluir", completa:false},
    {titulo: "Clique na tarefa para marcá-la", completa:false}
    
  ];
  
  
  $scope.novaTarefa = function(){
  $ionicPopup.prompt({
    title: "Nova Tarefa",
    template: "Digite sua nova tarefa:",
    inputPlaceholder: "Ex: deixar de preguiça...",
    okText: 'Criar tarefa',
    cancelText: 'Cancelar'
  }).then(function(res){
    if (res) $scope.tarefas.push({titulo: res, completa: false}); 
  })
};


  $scope.editar = function(tarefa) {
    $ionicListDelegate.closeOptionButtons()
    $scope.data = { response: tarefa.titulo };
    $ionicPopup.prompt({
      title: "Editar Tarefa",
      scope: $scope,
      cancelText: 'Cancelar'
    }).then(function(res) {    // promise 
      if (res !== undefined) tarefa.titulo = $scope.data.response;
  })
};
  
  
  
})



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
