
export function CekInput(info){
    let init=["profileFile","name","email","Country"],x=0,cek=false;
    let prosesCek=new Promise((resolve,reject)=>{
    for(let i of Object.values(info)){
        if(i===""){
            reject("Data masih ada yang kosong, silakan periksa lagi");
        }
    }
    resolve(true);
    });
   prosesCek.then(res=>{
    return res;
   }).catch(err=>{
    return err;
   });
   return prosesCek;
}
