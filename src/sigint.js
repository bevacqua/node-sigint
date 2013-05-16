var win32 = process.platform === 'win32';
if (win32){
    var readline = require ('readline'),
        rl = readline.createInterface ({
            input: process.stdin,
            output: process.stdout
        });

    rl.on ('SIGINT', function (){
        process.emit ('SIGINT');
    });
}

module.exports = {
    enabled: win32
};