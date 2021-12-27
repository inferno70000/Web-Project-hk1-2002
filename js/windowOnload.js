window.onload = function () {
    if (localStorage.getItem('myStorage') == null) {
        localStorage.setItem('myStorage', JSON.stringify(mainProduce));
    } else {
        mainProduce = JSON.parse(localStorage.getItem('myStorage'));
    }
    if (localStorage.getItem('status') == null)
        localStorage.setItem('status', JSON.stringify(-1));
    //show home
    createAdmin();
    changeMenu(document.getElementById('clickproduct'));
    menuTop();
    xuatList('id', 'all');
    changeLogstatus();
};