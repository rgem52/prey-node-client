"use strict";

//////////////////////////////////////////
// Prey Process List Provider
// (c) 2011 - Fork Ltd.
// By Tomas Pollak - http://forkhq.com
// GPLv3 Licensed
//////////////////////////////////////////

var
    common = _ns('common'),
    os_functions = require('./platform/' + common.os_name);

exports.get_outbound_connections_list = function(callback) {
  os_functions.get_outbound_connections_list(callback);
};

