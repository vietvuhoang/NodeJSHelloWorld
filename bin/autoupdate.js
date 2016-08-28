'use strict';

var app = require("../server/server");

var ds = app.datasources.HelloLoopBack

ds.autoupdate( function(err) {
    ds.disconnect();
    process.exit( 0 );
});

