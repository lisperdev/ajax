var xmlHttp = createXmlHttpRequestObject();
process();
function createXmlHttpRequestObject()
{
    var xmlHttp;
    if(window.ActiveXObject)
    {
        try
        {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        catch(e)
        {
            xmlHttp = false;
        }
    }
    else
    {
        try
        {
            xmlHttp = new XMLHttpRequest();
        }
        catch(e)
        {
            xmlHttp = false;
        }
    }
    if(!xmlHttp)
    {
        alert("Ошибка создания объекта XMLHttpRequest.");
    }
    else
    {
        return xmlHttp;
    }
}
function process()
{
    if(xmlHttp.readyState == 4 || xmlHttp.readyState == 0)
    {
        name = encodeURIComponent(document.getElementById("myName").value);
        xmlHttp.open("GET", "quicstart.php?name=" + name, true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    }
    else
    {
        setTimeout('process()', 1000);
    }
}
function handleServerResponse()
{
    if(xmlHttp.readyState == 4)
    {
        if(xmlHttp.status == 200)
        {
            xmlResponse = xmlHttp.responseXML;
            xmlDocumentElement = xmlResponse.documentElement;
            helloMessage = xmlDocumentElement.firstChild.data;
            document.getElementById("divMessage").innerHTML = '<i>' + helloMessage + '</i>';
            setTimeout('process()', 1000)
        }
    }
    else
    {
        alert("При обращении к серверу возникли проблемы: " + xmlHttp.statusText);
    }
}