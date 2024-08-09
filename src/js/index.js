

let filaColumnas = document.querySelectorAll("div")


let listaPosibilidades = [

    ["X", "X", "X"],
    ["X", "X", "X"],
    ["X", "X", "X"],    
]

  console.log(listaPosibilidades)




for (let index = 0; index < filaColumnas.length; index++) {

    filaColumnas[index].addEventListener("click", function () {


            if (filaColumnas[index].textContent === "") {
                filaColumnas[index].innerHTML= "X"
                
            }
           

   

            let listaValores= []

            for (let index = 0; index < filaColumnas.length; index++) {

            

            if (filaColumnas[index].textContent === "") {

                listaValores.push(index)
                
                }


            }

            let valorAleatorio = Math.floor(Math.random()*listaValores.length)         
            let nuevoValor = listaValores[valorAleatorio]
            filaColumnas[nuevoValor].innerHTML="0"


        
            

           // for (let f = 0; f < 3; f++) {
           
           filas= 0;

            console.log(filas);
            
                for (let c = 0; c <3; c++) {
                    
                    
                         
                    let valorNuevoC = listaPosibilidades[c]
                  
                 
                  
                  
                     

                    if ((filaColumnas[filas, c].textContent  === "X") ) {
                        
                        
                        
                            console.log("TIENE X");
                            
                        

                       
                       

                    }else{
                        console.log("NO TIENE X");
                        
                    }     
                }

            
        
            
        
    })
}

















