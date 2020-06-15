
//dropdown özelliğinin yanı sıra ana linke de tıklanma özelliğini vermek için kullanıldı


var blogMenu = document.getElementById('blogMenu');
var blogMenuLink = document.getElementById('blogMenuLink');
var blogDropdownMenu = document.getElementById('blogDropdownMenu');

function hoverDropdown() {
    blogMenu.classList.add('show');
    blogDropdownMenu.classList.add('show');
    blogMenuLink.setAttribute("aria-expanded", "true");
}

function leaveDropdown() {
    blogMenu.classList.remove('show');
    blogDropdownMenu.classList.remove('show');
    blogMenuLink.setAttribute("aria-expanded", "false");

}

function clickDropdown() {
    window.location.replace(blogMenuLink.href);
}