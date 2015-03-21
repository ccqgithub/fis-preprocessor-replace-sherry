'use strict';

module.exports = function(content, file, conf) {
    var out, vars, i, v;

    vars = conf.vars || [];
    out = content;

    for (i in vars) {
        v = vars[i];
        out = out.replace(v.from, v.to);
    }
    
    return out;
};