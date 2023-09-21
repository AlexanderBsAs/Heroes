function reporteDePasajeros(a){
    let estacion=200
    let pasajeros=[]
    for(let i=0;i<=a;i++){
        if(i==0){
            estacion=estacion
            pasajeros.push("En la estación "+ i +" hay "+ estacion +" pasajeros arriba del tren")
        }
        else if(i==5){
           estacion+=40
           pasajeros.push("En la estación "+ i +" hay "+ estacion +" pasajeros arriba del tren")
        }
        else{
            estacion+=20
            pasajeros.push("En la estación "+ i +" hay "+ estacion +" pasajeros arriba del tren")
        }    

    }
    return pasajeros
  }