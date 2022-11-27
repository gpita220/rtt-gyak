function profilData() {
    document.getElementById("nameReturn").textContent = document.getElementById("name").value;
    document.getElementById("passReturn").textContent = document.getElementById("password").value;
    document.getElementById("ageReturn").textContent = document.getElementById("age").value;
    document.getElementById("nemReturn").textContent=document.getElementById("nem").value;
    document.getElementById("colorReturn").textContent = document.getElementsByName("color").reduce(function(value, checkable) {
    if(checkable.checked == true) 
        value = checkable.value; 
    return value;
    }, '');
}

function calculator() {
    var a, b ,c ,d,e,f;
    a = document.getElementById("num1").value;
    b = document.getElementById("num2").value;
    c = document.getElementById("num3").value;
    d = document.getElementById("num4").value;
    e=document.getElementById("num5").value;
    f=document.getElementById("num6").value;

    document.getElementById("additionResult").textContent = parseInt(a) + parseInt(b);
    document.getElementById("subtractionResult").textContent = parseInt(c) - parseInt(d);
    document.getElementById("multiResult").textContent=parseInt(e) * parseInt(f);
}
