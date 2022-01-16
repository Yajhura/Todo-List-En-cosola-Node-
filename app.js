const { guardarDB, leerArchivo } = require("./helper/guardarArchivo");
const { inquiereMenu, pausa, leerInput, listarBorrar, confirmar, mostrarListadoChecklist } = require("./helper/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

require("colors");

const main = async () => {
  console.clear();

  let opt = "";
  const tareas = new Tareas();

  const tareaDB = leerArchivo();

  if (tareaDB) {
    //establecer las tareas
    tareas.cargarTareasArr(tareaDB);
  }

  do {
    //impimir el mnenu
    opt = await inquiereMenu();
    switch (opt) {
      case "1":
        const desc = await leerInput("descripcion : ");
        tareas.crearTarea(desc);

        break;

      case "2":
        tareas.listadoCompleto();
        break;

      case "3":
        tareas.listarPendientesCompletadas(true);
        break;

      case "4":
        tareas.listarPendientesCompletadas(false);
        break;

      case "5":
       const ids =   await mostrarListadoChecklist(tareas.listadooArr);
       tareas.toggleCompletadas(ids)
       
        break;
      case "6":
        const id = await listarBorrar(tareas.listadooArr)
        if (id !== "0") {
          const confirmarBorrar = await confirmar("Estas seguro");
          if (confirmarBorrar) {
            tareas.borrarTarea(id)
            console.log("Tarea Borrada".green);
            
          }
        }
       

        break;
    }

    guardarDB(tareas.listadooArr);

    await pausa();
  } while (opt !== "0");
};
main();
