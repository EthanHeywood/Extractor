angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.match', {
    url: '/match',
    views: {
      'tab1': {
        templateUrl: 'templates/match.html',
        controller: 'matchCtrl'
      }
    }
  })

  .state('menu.pit', {
    url: '/pit',
    views: {
      'tab2': {
        templateUrl: 'templates/pit.html',
        controller: 'pitCtrl'
      }
    }
  })

  .state('menu.transfer', {
    url: '/transfer',
    views: {
      'tab3': {
        templateUrl: 'templates/transfer.html',
        controller: 'transferCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.schedule', {
    url: '/schedule',
    views: {
      'tab4': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/about',
    views: {
      'tab5': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/match')

  

});