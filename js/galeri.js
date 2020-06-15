//resim en önde durması için burda resmin dahil olduğu divin z-indexini ayrlıyoruz 

function resimAc(img) {
    var parent = img.parentElement;
    parent.classList.add('z1');

}

function resimKapat(img) {
    var parent = img.parentElement;
    parent.classList.remove('z1');

}
function resimModal(img){
	var modalImg=document.getElementById('modalImg');
	modalImg.src=img.src;
    $("#fotoModal").modal('show');
}
