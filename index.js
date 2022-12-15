//array with all project links
let projects = ["https://noah-santos.github.io/Convertion-Project/", "https://noah-santos.github.io/littlemissmia_personal/", "https://noah-santos.github.io/Tic-Tac-Toe/"]
let images = ["convertionProject.PNG", "littlemissmiaProject.PNG", "tictactoe.PNG"];
let i = 0;
let direction="none";
// move the slides forward
function slideIncrease(){
    
    if(direction=="none"){
        i++;
    }else if(direction=="left"){
        i++;
        if(0<=i<=2){
            i=0;
        }
    }
    direction="right";
    document.getElementById("item1").href=projects[i];
    document.getElementById("img1").src=images[i];
    //sets the index to -1, so that the image will be the first one in the array
    if(i==images.length-1){
        i = -1;
    }
    document.getElementById("item2").href=projects[i+1];
    document.getElementById("img2").src=images[i+1];
    i++;
}
//moves the slides back
function slideDecrease(){
    
    if(direction=="right"){
        i-=2;
    }else{
        i--;
    }
    direction="left";
    // i--;
    //sets the index to 3, so that the image will be the last one in the array
    if(i<=-1){
        i = 2;
    }
    document.getElementById("item1").href=projects[i];
    document.getElementById("img1").src=images[i];
    if(i == images.length-1){
        document.getElementById("item2").href=projects[i-2];
        document.getElementById("img2").src=images[i-2];
    }else{
        document.getElementById("item2").href=projects[i+1];
        document.getElementById("img2").src=images[i+1];
    }
}

// function change(direction){
//     if(direction == "right"){
//         if(first == "none"){
//             i++;
//         }
//         if(i+1 < projects.length){
//             document.getElementById("item1").href=projects[i];
//             document.getElementById("img1").src=images[i];
//             i++;
//             document.getElementById("item1").href=projects[i];
//             document.getElementById("img1").src=images[i];
//         }else if(i < -1 || i+1 >= 3){
//             i = 0;
//             document.getElementById("item1").href=projects[i];
//             document.getElementById("img1").src=images[i];
//             i++;
//             document.getElementById("item1").href=projects[i];
//             document.getElementById("img1").src=images[i];
//         }

//     }
// }