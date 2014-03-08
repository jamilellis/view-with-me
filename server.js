/**
 * Created with JetBrains WebStorm.
 * User: jellis
 * Date: 2/14/14
 * Time: 3:43 PM
 * To change this template use File | Settings | File Templates.
 */
var connect = require('connect');
connect.createServer(
    connect.static('dist')
).listen(3000);