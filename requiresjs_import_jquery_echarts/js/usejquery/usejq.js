define(['jquery'], function ($) {
    var printLabelTextById = function(id) {
        console.log('usejq.js: the text of "' + id + '" is: ' + $(id).text());
    };
        
    return {
        printLabelTextById: printLabelTextById
    };
});
