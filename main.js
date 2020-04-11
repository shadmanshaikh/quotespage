const let = document.getElementById('searchbar');
document.getElementById('searchbar').onsubmit = function() {
    window.location = 'index.html' + document.getElementById('txtSearch').value;
    return false;
}