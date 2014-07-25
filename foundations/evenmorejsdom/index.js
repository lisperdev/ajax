function process()
{
    oHello = document.createTextNode("Collor-list")
    oUL = document.createElement("ul");
    oLiBlack = document.createElement("li");
    oBlack = document.createTextNode("Черный");
    oLiBlack.appendChild(oBlack);

    oLiOrange = document.createElement("li");
    oOrange = document.createTextNode("Оранжевый");
    oLiOrange.appendChild(oOrange);

    oLiPink = document.createElement("li");
    oPink = document.createTextNode("Розовый");
    oLiPink.appendChild(oPink);

    oUL.appendChild(oLiBlack);
    oUL.appendChild(oLiOrange);
    oUL.appendChild(oLiPink);

    myDiv = document.getElementById("myDivElement");
    myDiv.appendChild(oHello);
    myDiv.appendChild(oUL);
}