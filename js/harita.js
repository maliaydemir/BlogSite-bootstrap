var sehirAd = ["Rio de Janerio", "Seul", "Tokyo", "Delhi", "Mumbai"];
var sehirler = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470400.41083684226!2d-43.72618325635759!3d-22.91325245850515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20Brezilya!5e0!3m2!1str!2str!4v1589291367372!5m2!1str!2str", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404811.2671992865!2d126.70936381706494!3d37.56476893071881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28b61c565cd%3A0x858aedb4e4ea83eb!2sSeul%2C%20G%C3%BCney%20Kore!5e0!3m2!1str!2str!4v1589291197297!5m2!1str!2str", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414895.21131303033!2d139.46066696912663!3d35.667919088709915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japonya!5e0!3m2!1str!2str!4v1589289579989!5m2!1str!2str", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447989.43122337665!2d76.81114491134697!3d28.69211643656196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi%2C%20Hindistan!5e0!3m2!1str!2str!4v1589277428500!5m2!1str!2str", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482634.69489886734!2d72.60097657121837!3d19.08203905224765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Mahara%C5%9Ftra%2C%20Hindistan!5e0!3m2!1str!2str!4v1587988602538!5m2!1str!2str"];
var guncelSira = 3;
var sira = 0;
var maps = document.getElementById('maps');
maps.src = sehirler[guncelSira];
var ileriBtn = document.getElementById('ileriBtn');
var geriBtn = document.getElementById('geriBtn');

geriBtn.disabled = true;
if (sehirler.length - 1 == 0)
    ileriBtn.disabled = true;
var mapsTitle = document.getElementById('mapsTitle');
titleYenile();

function geri() {
    if (sira > 0) {
        maps.src = sehirler[--sira];
        if (sira == 0) {
            geriBtn.disabled = true;
        }
        if (ileriBtn.disabled) {
            ileriBtn.disabled = false;
        }
        titleYenile();
    }
}

function ileri() {
    if (sira < sehirler.length - 1) {
        maps.src = sehirler[++sira];
        if (sira == sehirler.length - 1) {
            ileriBtn.disabled = true;
        }

        if (geriBtn.disabled) {
            geriBtn.disabled = false;
        }
        titleYenile();
    }
}

function guncel() {
    sira = guncelSira;
    maps.src = sehirler[sira];

    if (sehirler.length - 1 - guncelSira > 0)
        ileriBtn.disabled = false;
    else
        ileriBtn.disabled = true;

    if (guncelSira > 0)
        geriBtn.disabled = false;
    else
        geriBtn.disabled = true;

    titleYenile();
}

function titleYenile() {
    if (sira == guncelSira)
        mapsTitle.innerHTML = (sira + 1).toString() + ". Şehir: " + sehirAd[sira] + " -GÜNCEL ";
    else
        mapsTitle.innerHTML = (sira + 1).toString() + ". Şehir: " + sehirAd[sira];
}