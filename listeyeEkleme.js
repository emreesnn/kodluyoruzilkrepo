// let lastChild = document.querySelector("ul#liste>li:last-child")

// lastChild.innerHTML = "last child değişti..."

// let firstChild = document.querySelector("ul#liste>li:first-child")

// firstChild.innerHTML = "first child değişti..."

// let ulDOM = document.querySelector("ul#liste")

// let li1 = document.createElement('li')
// let li2 = document.createElement('li')

// li1.innerHTML="1. Eklenen öge..."
// li2.innerHTML="2. Eklenen öge..."

// ulDOM.append(li1) //sona ekler
// ulDOM.prepend(li2) //başa ekler

/***********TO DO Funcionality *******/document.querySelector("button#ekle").addEventListener("click",append);

let ulDOM = document.querySelector("ul#todolist");

function append(){
    let liDom = document.createElement('li');

    let todo = document.querySelector("input#todo").value;
    
    liDom.innerHTML = todo;
    
    ulDOM.append(liDom)

    document.querySelector("input#todo").value = '';
    
}