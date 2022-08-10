function addnewwefield(){
    // console.log("Adding new field")

    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('wefield');
    newnode.classList.add('mt-2');
    
    newnode.setAttribute('rows',3);
    newnode.setAttribute('placeholder','Enter here')

    let weob=document.getElementById('we');
    let weaddbuttonob=document.getElementById('weaddbutton');

    weob.insertBefore(newnode,weaddbuttonob);

}


function addnewaqfield() {
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('eqfield');
    newnode.classList.add('mt-2');
    
    newnode.setAttribute('rows',3);
    newnode.setAttribute('placeholder','Enter here')

    let aqob=document.getElementById('aq');
    let aqaddbuttonob=document.getElementById('aqaddbutton');
    aqob.insertBefore(newnode,aqaddbuttonob);
    
    
}


//generating cv information
function generatecv()
{
    // console.log("generate cv")

    let namefield= document.getElementById("namefield").value;
    let nameT1= document.getElementById("nameT1")
    nameT1.innerHTML = namefield;
//direct

document.getElementById("nameT2").innerHTML = namefield;

//contact
document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;

//address
document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;
//links
document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;
document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;
document.getElementById("linkedT").innerHTML=document.getElementById("linkedfield").value;
//objective

document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;

//work experience
let wes = document.getElementsByClassName("wefield")
let str = "";

for(let e of wes)
{
    str += `<li> ${e.value} </li>`
}
document.getElementById("weT").innerHTML = str;

//acdemic qualification
let aqs = document.getElementsByClassName("eqfield")
let str1 = "";

for(let e of aqs)
{
    str1 += `<li> ${e.value} </li>`
}
document.getElementById("aqT").innerHTML = str1;


//profile picture
let file = document.getElementById("imgfield").files[0]
let reader=new FileReader()
reader.readAsDataURL(file);

//set img into template

reader.onloadend = function(){
    document.getElementById("imgT").src = reader.result;
}



document.getElementById("cv-form").style.display="none"
document.getElementById("cv-template").style.display ="block"



}
//print cv

function printcv(){
    window.print();
}

