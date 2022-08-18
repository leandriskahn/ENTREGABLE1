const regBtn = document.getElementById("regBtn");

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

function passwordMinimumLength(passGen) {
  return passGen.length >= 6;
}

function samePasswords(passGen1, passGen2) {
  return passGen1 == passGen2;
}

function noEmptyField(a, b, c, d) {
  return !(a.length == 0 || b.length == 0 || c.length == 0 || d.length == 0);
}

//
document.addEventListener("DOMContentLoaded", function () {
  regBtn.addEventListener("click", () => {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;

    if (
      passwordMinimumLength(pass1) &&
      passwordMinimumLength(pass2) &&
      samePasswords(pass1, pass2) &&
      noEmptyField(nombre, apellido, pass1, pass2)
    ) {
      showAlertSuccess();
    } else {
      showAlertError();
    }
    console.log(passwordMinimumLength(pass1));
    console.log(passwordMinimumLength(pass2));
    console.log(samePasswords(pass1, pass2));
    console.log(noEmptyField(nombre, apellido, pass1, pass2));
    console.log(pass1);
    console.log(pass2);
    console.log(pass1.length);
    console.log(pass2.length);
  });
});
