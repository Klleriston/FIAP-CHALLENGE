function adjustContentBoxesHeight() {
    var formCardHeight = document.getElementById('form-card').offsetHeight;
    var contentBox1 = document.getElementById('content-box-1');
    var contentBox2 = document.getElementById('content-box-2');
    var totalContentHeight = formCardHeight / 2;
    
    contentBox1.style.height = totalContentHeight + 'px';
    contentBox2.style.height = totalContentHeight + 'px';
}

window.onload = adjustContentBoxesHeight;
window.onresize = adjustContentBoxesHeight;

