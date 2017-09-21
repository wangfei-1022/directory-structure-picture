module.exports = function archy (obj, prefix, opts) {
    if (prefix === undefined) prefix = '';
    if (!opts) opts = {};
    var chr = function (s) {
        var chars = {
            '│' : '|',
            '└' : '`',
            '├' : '+',
            '─' : '-',
            '┬' : '-'
        };
        return opts.unicode === false ? chars[s] : s;
    };
    
    if (typeof obj === 'string') obj = { label : obj };
    
    var nodes = obj.nodes || [];
    var lines = (obj.label || '').split('\n');
    // var splitter = '\n' + prefix + (nodes.length ? chr('│') : ' ') + ' ';

    return lines.join('') + '\n'
        + nodes.map(function (node, ix) {
            var last = ix === nodes.length - 1;
            var more = node.nodes && node.nodes.length;
            var prefix_ = prefix + chr('│') + ' ' + ' ' + ' ';
            
            return prefix
                +(last ? chr('└') : chr('├'))  + chr('─') + chr('─') + ' '
                + archy(node, prefix_, opts)  
            ;
        }).join('')
    ;
};