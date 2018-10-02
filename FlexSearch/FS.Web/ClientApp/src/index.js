function search() {
    return "Test search";
}

if(window && window.document){
    window.document.getElementById("flex-search-app").innerText = search();
}