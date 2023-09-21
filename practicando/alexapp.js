function sumatoriaBajoImporte(a){
    let cantidad=[]
    let importe=0
    for (let i=0;i<=a.length;i++){
        if(a[i]>0&&a[i]<=1000){
            cantidad.push(a[i])
         importe+=a[i]   
        }
    }
    return importe
    }