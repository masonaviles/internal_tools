let text = document.body.innerText;

function download_txt() {
    var textToSave = document.body.innerText;
    var hiddenElement = document.createElement('a');
  
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'copy.txt';
    hiddenElement.click();
}
  
document.getElementById('Button').addEventListener('click', download_txt);

javascript:(function(){
    var textToSave = document.body.innerText;
    var docTitle = document.title;

    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = `copy_content_${docTitle}.txt`;
    hiddenElement.click();

})();
