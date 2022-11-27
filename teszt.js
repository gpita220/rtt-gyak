function profilData() {
    document.getElementById("nameReturn").textContent = document.getElementById("name").value;
    document.getElementById("passReturn").textContent = document.getElementById("password").value;
    document.getElementById("ageReturn").textContent = document.getElementById("age").value;
    document.getElementById("nemReturn").textContent=document.getElementById("nem").value;
}

function calculator() {
    var a, b ,c ,d ,e ,f , g, h;
    a = document.getElementById("num1").value;
    b = document.getElementById("num2").value;
    c = document.getElementById("num3").value;
    d = document.getElementById("num4").value;
    e = document.getElementById("num5").value;
    f = document.getElementById("num6").value;
    g = document.getElementById("num7").value;
    h = document.getElementById("num8").value;

    document.getElementById("additionResult").textContent = parseInt(a) + parseInt(b);
    document.getElementById("subtractionResult").textContent = parseInt(c) - parseInt(d);
    document.getElementById("multiResult").textContent=parseInt(e) * parseInt(f);
    document.getElementById("divisionResult").textContent = parseFloat(g) / parseFloat(h);

}
