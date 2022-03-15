// const fs = require("fs") ;
// const date  = new Date();
// const fecha = `Fecha: ${date.toLocaleDateString()} hora: ${date.toLocaleTimeString()}` ;
// try {
//     fs.writeFileSync("./fyh.txt", fecha)
// } catch (error){
//     console.log(error)
// }

// try {
//     const data = fs.readFileSync("./fyh.txt", "utf-8");
//     console.log(data)
// } catch (error){
//     console.log(error)
//     throw new Error("fallo la lectura del archivo")
// }

//ASYNCRÒNICO


// const fs = require ("fs")

//  fs.readFile("./package.json", "utf-8", (error, contenido) => {
//     if(error){
//         throw new Error("Error al leer el archivo package.json")
//     }else{
//         const info = {
//             contenidoStr : contenido,
//             cotenidoObjeto : JSON.parse(contenido),
//             size : "2kb"
//         }
//         console.log(info)
//         fs.writeFile("./info.txt", JSON.stringify(info,null,2), error => {
//             if(error){
//                 throw new Error("Error escribiendo info txt")
//             }else {
//                 console.log("todo ok")
//             }
//         })
//     }

// })
 
//PROMISES Y ASYNC/AWAIT

const fs = require ("fs");
async function readFile(){
    try {
            const contenido = await fs.promises.readFile("./info.txt","utf-8");
            const infoData = JSON.parse(contenido).cotenidoObjeto;
            console.log(infoData)
            const info = {
                name: infoData.name ,
                version : infoData.version ,
                description: infoData.description ,
                main: infoData.main ,
                scripts: infoData.scripts ,
                keywords: infoData.keywords ,
                author: infoData.author ,
                license: infoData.license
            }
            console.log(info);
            info.author = "coderhouse"
            console.log(info)
    } catch(error) {
        console.log(error)
    }
}

readFile();