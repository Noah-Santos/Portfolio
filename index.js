//array with all project links
let projects = ["https://noah-santos.github.io/Convertion-Project/", "https://noah-santos.github.io/littlemissmia_personal/", "https://noah-santos.github.io/Tic-Tac-Toe/"];
let images = ["./images/convertionProject.PNG", "./images/littlemissmiaProject.PNG", "./images/tictactoe.PNG"];
// try something where everytime button is clicked, I grab the current href of the a tag and check what item in list it is in array and then add or sutract one from index depeinding on which button is clicked
// check to see if it can be reduced or increased, if not, reset the value of the index accordingly
let certificateArray = ["http://127.0.0.1:5500/images/it-specialist-java.png", "http://127.0.0.1:5500/images/Technical%20Certificate.jpg", "http://127.0.0.1:5500/images/Technical%20Letter%201.jpg", "http://127.0.0.1:5500/images/Technical%20Letter%202.jpg", "http://127.0.0.1:5500/images/App%20Certificate.jpg", "http://127.0.0.1:5500/images/App%20Letter.jpg"];
let i = 0;
function resumeChange(direction){
    // console.log('function')
    let index = document.getElementById("certification");
    console.log(index.src)
    
    for(let j=0; j<certificateArray.length;j++){
        console.log(certificateArray[j])
        // console.log(certificateArray[j])
        // console.log(index.src)
        if(index.src == certificateArray[j]){
            i = j;
            console.log(i)
            if(direction=="left"){
                if(i==0){
                    i=certificateArray.length-1;
                    index.src=certificateArray[i];
                    console.log('last')
                    break;
                }else{
                    i--;
                    index.src=certificateArray[i];
                    console.log("minus")
                    break;
                }
                
            }
        }
    }
    console.log(`i: ${i}`)
    console.log(index.src)
}