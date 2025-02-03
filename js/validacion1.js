$(document).ready(function () {

    $("#form1").on("submit", function (e) {
        
        e.preventDefault();
        // Ocultamos los errores
        $(".error").hide();
        $(".form-control").removeClass("invalid"); // Limpia los errores previos

        let valid = true;
        const nombre = $("#nombre").val().trim();
        const password = $("#password").val().trim();       
        const confirmPassword = $("#confirmPassword").val().trim();
        const email = $("#email").val().trim();
        const edad = $("#edad").val();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)/;

        // Validación nombre
        if (nombre === "") {
            $("#errorNombre").show();
            $("#nombre").addClass("invalid");
            valid = false;
        }

        

        // Validación correo
        if (email === "") {
            $("#errorEmail").show();
            $("#email").addClass("invalid");
            valid = false;
        } else if (!emailRegex.test(email)) {
            $("#validoEmail").show();
            $("#email").addClass("invalid");
            valid = false;
        }

        // Validación de contraseña
        if (password === "") {
            $("#errorPassword").show();
            $("#password").addClass("invalid");
            valid = false;
        } else if (password.length < 8) {
            $("#longitud").show();
            $("#password").addClass("invalid");
            valid = false;
        } else if (!passwordRegex.test(password)) {
            $("#errorPasswordNumber").show();
            $("#password").addClass("invalid");
            valid = false;
        }

        // Validación confirmación de contraseña
        if (password !== confirmPassword) {
            $("#errorConfirm").show();
            $("#confirmPassword").addClass("invalid");
            valid = false;
        }

        if (valid) {
            alert("Formulario enviado correctamente");
        }
    });

    // Validación mayor de edad
    if (edad === "") {
        $("#vacioEdad").show();
        $("#edad").addClass("invalid");
        valid = false;
    } else {
        const edadObj = new Date(edad);
        const años = calculateAge(edadObj)
        if (años < 18) {
            $("#errorEdad").show();
            $("#edad").addClass("invalid");
            valid = false;
        }
    }

    function calculateAge(edad) {
        const hoy = new Date();
        let años = hoy.getFullYear() - edad.getFullYear();
        const mes = hoy.getMonth() - edad.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < edad.getDate())) {
            años--;
        }
        return años;
    }
});
