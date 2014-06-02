(function() {
"use strict";

var app = angular.module("angular-scrollery-config", []);

app.service("scrolleryConfig", function() {
    // steps is an array of objects formatted like: {name: "stepName", start: 0, duration: 200}
    var steps = [
        {
            name: "moveHello",
            start: 0,
            duration: 200
        }
    ];
    return {
        getSteps: function() {
            return steps;
        }
    };
});
})();
