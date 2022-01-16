require('colors');

const mostrarMenu = ()=>{
    return new Promise ((resolve)=>{
        console.clear();

        console.log("==========================".rainbow);
        console.log(" Selecione una opcion ".blue);
        console.log("==========================\n".rainbow);
    
        console.log(`${"1:".green} Crear una tarea`);
        console.log(`${"2:".green} Listar una tarea`);
        console.log(`${"3:".green} Listar  tarea Completadas`);
        console.log(`${"4:".green} Listar  tarea pendientes`);
        console.log(`${"5:".green} Completar tarea(s)`);
        console.log(`${"6:".green} Borrar una tarea`);
        console.log(`${"7:".green} Salir\n`);
    
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        
        readLine.question('Seleccione una opcion: '.green, (opt)=>{
            readLine.close();
            resolve(opt)
        })
    })
   

}
const pausa = ()=>{
  
    return new Promise(resolve =>{
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        
        readLine.question(`\nPresione ${"Enter".green} para continuar \n`, (opt)=>{
            readLine.close();
            resolve()
        })
    })
}

module.exports= {
    mostrarMenu,
    pausa
}