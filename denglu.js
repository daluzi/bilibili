document.querySelector(".login").addEventListener( "click",function(){
    var a = document.getElementById("phonetext").value;
    var b = document.getElementById("phonewram");
    var c = document.getElementById("passwordtext").value;
    var d = document.getElementById("passwordwram");
    var e = document.getElementById("yanzhengma").value;
    var f = document.getElementById("yzmtext");
    var xmlhttp;
    if (a == "") {
        b.style.color = "red";
    }
    if (c == "") {
        d.style.color = "red";
    }
    if (e == "") {
        f.style.color = "red";
    }

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET",".php",true);
        xmlhttp.send();
});