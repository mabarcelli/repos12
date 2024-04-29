const obtenerDigimonAsyncAwait = async()=>{

    try{
        const response =await fetch ('https://digimon-api.vercel.app/api/digimon');
        if(!response.ok){
            throw new Error('hubo un problema al obtener  los datos')
        }
        const data= await response.json();
        return data;
    }catch (error){
    throw error;
}
}

(async() => {
    try{
        const data =await obtenerDigimonAsyncAwait();
      console.log('datos de digimon obtenidos con exito', data); 
    }catch(error){
        console.error('error al obtener datos de digimon',error);
    }
} )();