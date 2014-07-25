function process()
{
    var string;
    string = "<ul>"
        + "<li>Черный</li>"
        + "<li>Оранжевый</li>"
        + "<li>Розовый</li>"
    + "</ul>";
    myDiv = document.getElementById("myDivElement");
    myDiv.innerHTML = string;
}