var xmlHttp = createXmlHttpRequestObject();
function process()
{
    if(xmlHttp)
    {
        try
        {
            xmlHttp.open("GET", "async.txt", true);
            xmlHttp.onreadystatechange = handleRequestStateChange;
            xmlHttp.send(null);
        }
        catch(e)
        {
            alert("Невозможно соединится с сервером:\n" + e.toString());
        }
    }
}
function handleRequestStateChange()
{
    myDiv = document.getElementById("myDivElement");
    if(xmlHttp.readyState == 1)
    {
        myDiv.innerHTML += "Состояние запроса: 1 (отправляется) <br />";
    }
    else if(xmlHttp.readyState == 2)
    {
        myDiv.innerHTML += "Состояние запроса: 2 (отправлен) <br />";
    }
    else if(xmlHttp.readyState == 3)
    {
        myDiv.innerHTML += "Состояние запроса: 3 (идет обмен) <br />";
    }
    else if(xmlHttp.readyState == 4)
    {
        if(xmlHttp.status)
        {
            try
            {
                response = xmlHttp.responseText;
                myDiv.innerHTML += "Состояние запроса: 4 (завершен). Сервер ответил: <br />";
                myDiv.innerHTML += response;
            }
            catch(e)
            {
                alert("Ошибка чтения ответа: " + e.toString());
            }
        }
    }
    else
    {
        alert("Возникли проблемы во время получения данных: \n" + xmlHttp.StatusText);
    }
}