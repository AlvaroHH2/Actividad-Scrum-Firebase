document.cookie = "nombre=Wamburgo de Luxemburgo";
document.cookie = "comida_preferida=macarrones";
function alertCookie() {
  alert(document.cookie);

}
document.cookie = "name=value";

const exists = document.cookie.split(';').some(function(item) {
   return item.trim().indexOf('name=') == 0;
});
