console.log("✅ El archivo script.js está conectado");

document.querySelector(".btn-whatsapp").addEventListener("click", () => {
    alert("Estás siendo redirigido a nuestro WhatsApp 📱");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    alert("¡Gracias por tu mensaje, " + name + "! Nos pondremos en contacto pronto.");
    document.getElementById("contactForm").reset();
});

window.addEventListener("scroll", () => {
    const btn = document.getElementById("btnTop");
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

document.getElementById("btnTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
