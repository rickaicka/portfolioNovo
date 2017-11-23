/**
 * Application general configs provider
 * */
(function(){

    function AppConfigs(){

        // the options object
        var options = {
            activeEnv : "development", // sets the active env
            development : {
                apiEndpoint : 'http://19e8ceea.ngrok.io/v1', // note: without the last slash (/)
                apiEndpointIE9 : 'http://19e8ceea.ngrok.io/v1'// for IE9 compatibility - same domain endpoint (no cors)
            }
        };

        // sets the active env object to return
        this.$get = [function () {
            var activeOptions = options[options['activeEnv']];
            if (activeOptions.apiEndpointIE9 && activeOptions.apiEndpointIE9.length > 0 && navigator.userAgent.match(/MSIE 9/)) {
                activeOptions.apiEndpoint = activeOptions.apiEndpointIE9;
                delete activeOptions.apiEndpointIE9;
            }
            return activeOptions;
        }];

    }

    // inject the provider in the module
    angular
        .module('Main')
        .provider('AppConfigs', AppConfigs);

})();