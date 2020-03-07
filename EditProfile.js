import React,{useRef} from 'react';
import Swal from "sweetalert2";
import EditProfileForm from "./EditProfileForm";

export default function EditProfile() {
  let info={
    files:"",
    name:"",
    email:"",
    country:"",
  },cInfo={
    files:"",
    name:"",
    email:"",
    country:"",
  };

  function Save(event){
    info[event.target.name]=event.target.value;
    cInfo[event.target.name]=event.target;
  }

  function Kirim(e) {
    e.preventDefault();
    let prosesCek=new Promise((resolve,reject)=>{

        for (let x of Object.keys(info)) {
            for (let y of Object.values(info)) {
                if(info.hasOwnProperty(x)){
                    if(y===""){
                        reject("input is empty");
                    }
                }
            }
        }
           resolve(true);
    });

    prosesCek.then(res=>{

      if(typeof cInfo['files']==="object"){
        let tipeFile=["image/png"];
        for (var i = 0; i < cInfo['files'].files.length; i++) {
          if(typeof cInfo['files'].files!=="undefined"){
            if(!tipeFile.includes(cInfo['files'].files[i].type)){
              throw new Error("Files tipe not support");
            }else{
              return res;
            }
          }//end files tipe
        }//end for
      }//end var object

    }).then(res=>{
        if(typeof info['name']==="string"){
          if(/^([A-Z]|[a-z]|[\_])+$/g.test(info['name'])){
            return res;
          }else{
            throw new Error("Invalid name");
          }
        }//end var string

    }).then(res=>{
        if(typeof info['email']==="string"){
          if(/^([A-Z]|[a-z]|[0-9]+[\@]+[a-z]+[\.]+[a-z])+$/g.test(info['email'])){
            return res;
          }else{
            throw new Error("Invalid email");
          }
        }//end var string
    }).then(res=>{
        if(typeof info['country']==="string"){
          if(info['country']==="none"){
            throw new Error("Country not selected");
        }else{
          if(/^([\<|[\"]|[\']|[\`]|[\>])+$/g.test(info['country'])){
            throw new Error("Invalid country");
          }else{
            return res;
          }
        }

        }//end var string

    }).then(res=>{
      alert(res)
        //axios
    }).catch(err=>{
      Swal.fire({
          icon:'error',
          title:err,
          showConfirmButton:false,
          timer:1500,
      });
    });

  }

    return (
      <EditProfileForm Save={Save} Kirim={Kirim} />
    )
}
