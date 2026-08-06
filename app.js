
async function login(){

const nia=document.getElementById("nia").value;

const password=document.getElementById("password").value;

document.getElementById("status").innerHTML="Loading...";

const url=`${CONFIG.API_URL}?action=login&nia=${nia}&password=${password}`;

try{

const res=await fetch(url);

const data=await res.json();

if(data.status){

document.getElementById("status").innerHTML="Login berhasil";

}else{

document.getElementById("status").innerHTML="Login gagal";

}

}catch(e){

document.getElementById("status").innerHTML="Server Error";

}

}
