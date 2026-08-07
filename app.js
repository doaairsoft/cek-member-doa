async function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Lengkapi data.");
        return;
    }

    try {

        const response = await fetch(CONFIG.API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                action: "login",
                username: username,
                password: password
            })
        });

        const data = await response.json();

        console.log(data);

        if (data.status) {

            localStorage.setItem("user", JSON.stringify(data));

            if (data.role === "ADMIN") {
                window.location.href = "dashboard.html";
            } else {
                window.location.href = "member.html";
            }

        } else {

            alert(data.message || "Username atau Password salah");

        }

    } catch (err) {

        console.error(err);
        alert("Tidak dapat terhubung ke server.");

    }

}
