
const allowedCommands = [
    'SET',
    'UNSET',
    'GET',
    'NUMEQUALTO',
    'BEGIN',
    'ROLLBACK',
    'COMMIT',
    'END'    
]

let memory_array = [];
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Enter command: ');
rl.prompt();
rl.on('line', function(line) {
    let commands = line.split(' ');
    let command = commands[0];
    let variable_name = commands[1];
    let variable_value = commands[2];
    if(allowedCommands.indexOf(command)>=0){

        // console.log(`valid command: ${command}\n`);
        if (command === "END") rl.close();

        switch(command) {
            case "SET":
                memory_array[variable_name] = variable_value;
              break;
            case "UNSET":
              delete memory_array[variable_name];
              break;
            case "GET":
                if(!!memory_array[variable_name])
                    console.log(memory_array[variable_name])
                else
                    console.log('NULL');
              break;
            case "NUMEQUALTO":
                let count = 0;
                for (let key of Object.keys(memory_array)) {
                    if(memory_array[key]===variable_name) count++;
                }
                console.log(count);
            break;
            case "BEGIN":
              break;              
            case "ROLLBACK":
              break;
            case "COMMIT":
                break;
            case "END":
                break;
            default:
                break;
          }
        rl.prompt();            
    }else{
        console.log('invalid command\n');
    }
}).on('close',function(){
    process.exit(0);
});


