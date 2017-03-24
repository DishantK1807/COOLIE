angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.scanner', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/scanner.html',
        controller: 'scannerCtrl'
      }
    }
  })

  .state('tabsController.ticketInfo', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/ticketInfo.html',
        controller: 'ticketInfoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.addTicketsHere', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/addTicketsHere.html',
        controller: 'addTicketsHereCtrl'
      }
    }
  })

  .state('promotions', {
    url: '/page6',
    templateUrl: 'templates/promotions.html',
    controller: 'promotionsCtrl'
  })

  .state('medicalEmergency', {
    url: '/page8',
    templateUrl: 'templates/medicalEmergency.html',
    controller: 'medicalEmergencyCtrl'
  })

  .state('baggage', {
    url: '/page9',
    templateUrl: 'templates/baggage.html',
    controller: 'baggageCtrl'
  })

  .state('helpSupport', {
    url: '/page10',
    templateUrl: 'templates/helpSupport.html',
    controller: 'helpSupportCtrl'
  })

  .state('info', {
    url: '/page12',
    templateUrl: 'templates/info.html',
    controller: 'infoCtrl'
  })

  .state('tabsController.addMoreTickets', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/addMoreTickets.html',
        controller: 'addMoreTicketsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page4')

  

});