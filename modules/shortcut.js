/**
 * Created by bangbang on 14/11/23.
 */
var cut = require('global-shortcut');
var app;
var send = cut.register('alt+shift+s', function (){
    app.emit('sendWeibo');
});

module.exports = function (a){
    app = a;
};