var date = new Date();
var hour = date.getHours();
if(hour >= 22 || hour <= 5)
{
    document.write("Cпокойной ночи");
}
else
{
    document.write("Hello!!");
}