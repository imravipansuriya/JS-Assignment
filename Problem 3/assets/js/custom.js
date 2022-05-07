// document.getElementById("formFile")
// document.getElementById("privewImg")
// formFile.onchange = evt => {
//     const [file] = formFile.file
//     if(file){
//         privewImg.src = URL.createObjectURL(file)
//     }
// }

const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");
const cardImageprivew = document.getElementById("cardImage");

chooseFile.addEventListener("change", function () {
    getImgData();
});

function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            imgPreview.style.display = "block";
            imgPreview.innerHTML = '<img src="' + this.result + '" />';
            cardImageprivew.innerHTML = '<img src="' + this.result + '" />';
        });
    }
}

const generateCardButton = document.getElementById("submitCardButton");

generateCardButton.onclick = function(){
    const getName = document.getElementById("enterName").value
    const collageNameValue = document.getElementById("collageName").value;
    const getLocation = document.getElementById("Location").value
    
    studentName.innerHTML = getName;
    studentCollegeName.innerHTML = collageNameValue;
    studentLocation.innerHTML = getLocation;

}