
console.log("hola");

function ObtenerDigimonPromesa() {


    return new Promise (  function(  resolve, reject ){

        fetch('https://digimon-api.vercel.app/api/digimon')
         .then((digimones)=>{
            if (!digimones.ok){
                throw new Error ("error");

                
            }

            return digimones.json();
            
         })
         .then((data)=>{
             resolve(data);
         })

         .catch((error) =>{
            reject(error);
         })
           
         

    })

    
}

function generarSaludo(){
    console.log("hola");
}