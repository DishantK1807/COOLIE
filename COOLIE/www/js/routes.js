angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('cOOLIE.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('cOOLIE', {
    url: '/side-menu21',
    templateUrl: 'templates/cOOLIE.html',
    controller: 'cOOLIECtrl'
  })

  .state('cOOLIE.enterTicketID', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/enterTicketID.html',
        controller: 'enterTicketIDCtrl'
      }
    }
  })

  .state('cOOLIE.ticketInfo', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ticketInfo.html',
        controller: 'ticketInfoCtrl'
      }
    }
  })

  .state('cOOLIE.promotions', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/promotions.html',
        controller: 'promotionsCtrl'
      }
    }
  })

  .state('cOOLIE.medicalEmergency', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/medicalEmergency.html',
        controller: 'medicalEmergencyCtrl'
      }
    }
  })

  .state('cOOLIE.helpAndSupport', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/helpAndSupport.html',
        controller: 'helpAndSupportCtrl'
      }
    }
  })

  .state('cOOLIE.reportLostBaggage', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reportLostBaggage.html',
        controller: 'reportLostBaggageCtrl'
      }
    }
  })

  .state('cOOLIE.bags', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bags.html',
        controller: 'bagsCtrl'
      }
    }
  })

  .state('cOOLIE.checkpoints', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/checkpoints.html',
        controller: 'checkpointsCtrl'
      }
    }
  })

  .state('cOOLIE.feedback', {
    url: '/feedback',
    views: {
      'side-menu21': {
        templateUrl: 'templates/feedback.html',
        controller: 'feedbackCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});