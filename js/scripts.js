// forEach Android/IE/Edge polyfill
(function () {
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
})();

// document ready
(function() {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {

    }
    else setTimeout(arguments.callee, 100);
})();