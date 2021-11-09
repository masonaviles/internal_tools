let text = document.body.innerText;
let headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6'), i;

for (i = 0; i < headers.length; ++i) {
    headers[i].innerText = "**========[HEADER]========** " + headers[i].innerText;
}

function download_txt() {
    var textToSave = document.body.innerText;
    var hiddenElement = document.createElement('a');
  
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'copy.txt';
    hiddenElement.click();
}

download_txt();

javascript:(function(){
    var textToSave = document.body.innerText;
    var docTitle = document.title;

    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = `copy_content_${docTitle}.txt`;
    hiddenElement.click();

})();

javascript:(function(){
    let text = document.body.innerText;
    let headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6'), i;

    for (i = 0; i < headers.length; ++i) {
        headers[i].innerText = "[HEADER] " + headers[i].innerText;
    }

    function download_txt() {
        var textToSave = document.body.innerText;
        var hiddenElement = document.createElement('a');
    
        hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'copy.txt';
        hiddenElement.click();
    }

    //download_txt();

})();
