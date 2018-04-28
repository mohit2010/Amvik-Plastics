app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        templateUrl: 'home.html'
    }).when("/company-profile", {
        templateUrl: 'aboutus.html', /*change url before finalising*/
        controller: 'aboutctrl' /*add controller*/
    }).when("/contact-us", {
        templateUrl: 'contactus.html'
        , /*change url before finalising*/
        controller: 'contactctrl' /*add controller*/
    }).otherwise({
        redirectTo: "/"
    });
})