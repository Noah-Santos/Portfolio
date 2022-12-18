"use strict";
// try something where everytime button is clicked, I grab the current href of the a tag and check what item in list it is in array and then add or sutract one from index depeinding on which button is clicked
// check to see if it can be reduced or increased, if not, reset the value of the index accordingly
// array for different certification images
let certificateArray = ["http://127.0.0.1:5500/images/it-specialist-java.png", "http://127.0.0.1:5500/images/Technical%20Certificate.jpg", "http://127.0.0.1:5500/images/Technical%20Letter%201.jpg", "http://127.0.0.1:5500/images/Technical%20Letter%202.jpg", "http://127.0.0.1:5500/images/App%20Certificate.jpg", "http://127.0.0.1:5500/images/App%20Letter.jpg"];
let i = 0;
// slideshow for the resume
function resumeChange(direction){
    let index = document.getElementById("certification");
    // loops through the certificate array
    for(let j=0; j<certificateArray.length;j++){
        // console.log(certificateArray[j])
        // takes the index that the slideshow is currently on 
        if(index.src == certificateArray[j]){
            i = j;
            // if back button is hit
            if(direction=="left"){
                // if at beginning of array, set image to last element
                if(i==0){
                    i=certificateArray.length-1;
                    index.src=certificateArray[i];
                    break;
                // go to previous element
                }else{
                    i--;
                    index.src=certificateArray[i];  
                    break;
                }
            // if forward button is hit
            }else if(direction=="right"){
                // if at end of array, set image to beginning element
                if(i==certificateArray.length-1){
                    i=0;
                    index.src=certificateArray[i];
                    break;
                // go to next element in array
                }else{
                    i++;
                    index.src=certificateArray[i];  
                    break;
                }
            }
        }
    }
}

//array with all project links
let projects = ["https://noah-santos.github.io/Convertion-Project/", "https://noah-santos.github.io/littlemissmia_personal/", "https://noah-santos.github.io/Tic-Tac-Toe/"];
let images = ["./images/convertionProject.PNG", "./images/littlemissmiaProject.PNG", "./images/tictactoe.PNG"];
let newImg = ["http://127.0.0.1:5500/images/convertionProject.PNG", "http://127.0.0.1:5500/images/littlemissmiaProject.PNG", "http://127.0.0.1:5500/images/tictactoe.PNG"];
let x1 = 0;
let x2 = 0;

function changeProject(direction){
    // gets elements of slideshow
    let link1 = document.getElementById("item1");
    let link2 = document.getElementById("item2");
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    // loops through project array
    for(let y=0; y<projects.length;y++){
        // finds index of item 1
        if(link1.href == projects[y]){
            x1 = y;
        } 
    }
    // loops through project array
    for(let y=0; y<projects.length;y++){
        // finds index of item 2
        if(link2.href == projects[y]){
            x2 = y;
        }
    }
    // if direction is left
    if(direction == "left"){
        // if index of item 1 is 0, change index 1 to max index of array
        // index 2 is reduced by 1
        if(x1 == 0){
            x1=projects.length-1;
            x2--;
            link1.href = projects[x1];
            img1.src = images[x1];
            link2.href = projects[x2];
            img2.src = images[x2];
        // index 1 is reduced by 1
        // index of item 2 is 0, change index 2 to max index of array
        }else if(x2 == 0){
            x2 = projects.length-1;
            x1--;
            link2.href = projects[x2];
            img2.src = images[x2];
            link1.href = projects[x1];
            img1.src = images[x1];
            // both indexes are reduced by 1
        }else{
            x1--;
            x2--;
            link1.href = projects[x1];
            img1.src = images[x1];
            link2.href = projects[x2];
            img2.src = images[x2];
        }
    // if direction is right
    }else if(direction == "right"){
        // if index 1 is max index of array, change index 1 to 0
        // index 2 is increased by 1
        if(x1 == projects.length-1){
            x1=0;
            x2++;
            link1.href = projects[x1];
            img1.src = images[x1];
            link2.href = projects[x2];
            img2.src = images[x2];
        // index 1 is increased by 1
        // if index 2 is max index of array, change index 2 to 0
        }else if(x2 == projects.length-1){
            x2 = 0;
            x1++;
            link2.href = projects[x2];
            img2.src = images[x2];
            link1.href = projects[x1];
            img1.src = images[x1];
        // both indexes are increased by 1
        }else{
            x1++;
            x2++;
            link1.href = projects[x1];
            img1.src = images[x1];
            link2.href = projects[x2];
            img2.src = images[x2];
        }
    }
}

let cert = ["./images/it-specialist-java.png", "./images/Technical Certificate.jpg", "./images/Technical Letter 1.jpg", "./images/Technical Letter 2.jpg", "./images/App Certificate.jpg", "./images/App Certificate.jpg"]

// slideshow fo rthe resume
let c1 = 0;
let c2 = 1;
function resumeChange2(direction){
    // gets elements of slideshow
    let img1 = document.getElementById("certification1");
    let img2 = document.getElementById("certification2");
    // loops through project array
    for(let y=0; y<cert.length;y++){
        // finds index of item 1
        if(img1.src == cert[y]){
            c1 = y;
            console.log(c1);
        } 
    }
    // loops through project array
    for(let y=0; y<cert.length;y++){
        // finds index of item 2
        if(img2.src == cert[y]){
            c2 = y;
            console.log(c2);
        }
    }
    // if direction is left
    if(direction == "left"){
        // if index of item 1 is 0, change index 1 to max index of array
        // index 2 is reduced by 1
        if(c1 == 0){
            c1=cert.length-1;
            c2--;
            img1.src = cert[c1];
            img2.src = cert[c2];
        // index 1 is reduced by 1
        // index of item 2 is 0, change index 2 to max index of array
        }else if(c2 == 0){
            c2 = cert.length-1;
            c1--;
            img2.src = cert[c2];
            img1.src = cert[c1];
            // both indexes are reduced by 1
        }else{
            c1--;
            c2--;
            img1.src = cert[c1];
            img2.src = cert[c2];
        }
    // if direction is right
    }else if(direction == "right"){
        // if index 1 is max index of array, change index 1 to 0
        // index 2 is increased by 1
        if(c1 == cert.length-1){
            c1=0;
            c2++;
            img1.src = cert[c1];
            img2.src = cert[c2];
        // index 1 is increased by 1
        // if index 2 is max index of array, change index 2 to 0
        }else if(c2 == cert.length-1){
            c2 = 0;
            c1++;
            img2.src = cert[c2];
            img1.src = cert[c1];
        // both indexes are increased by 1
        }else{
            c1++;
            c2++;
            img1.src = cert[c1];
            img2.src = cert[c2];
        }
    }
}