function login(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username==="" || password===""){
        alert("Lengkapi data terlebih dahulu.");
        return;
    }

    alert("Login berhasil (sementara).");

}
