const colors = require("colors");

console.error = (...args) => {
    console.log(colors.red(...args));
}

Object.defineProperty(global, '__stack', {
    get: function(){
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack) {
            return stack;
        }
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function(){
        return "Line: " + __stack[1].getLineNumber() + " | ";
    }
});

Object.defineProperty(global, '__func', {
    get: function(){
        return __stack[1].getFunctionName();
    }
});

Object.defineProperty(global, '__filename', {
    get: function(){
        return __stack[1].getFileName();
    }
});

Object.defineProperty(global, '__error', {
    get: function(){
        return __stack[1].getFileName() + "\n >> " + __stack[1].getFunctionName() + "\n >> ln: " + __stack[1].getLineNumber() + "\n\n";
    }
});