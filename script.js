


const output = document.querySelector('.output');

console.log(output);
const url = 'places.json';
let myList = [];

    myList = JSON.parse(localStorage.getItem('myList'));
    console.log(myList);
    jsloader();


function jsloader() {
    fetch(url).then(rep => rep.json())
    .then((data) => {
        myList = data;
        maker();
        savetoStorage();
    });
}

function maker(){

    output.innerHTML ='';
    myList.forEach((el, index) => {
        makeList(el, index);

    });
}

function makeList(item, index) {
    const div = document.createElement('div');
   
    div.innerHTML = `${item.name}`;
    div.innerHTML = `${item.address}`;
    div.innerHTML = `<iframe src = ${item.map} width="250" height="350"> </iframe>`; 

    output.append(div);
    savetoStorage();
}



function savetoStorage(){
  
    localStorage.setItem('Mylist', JSON.stringify(myList));
}