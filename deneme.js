//prompt-backtrick-querySelector
//getElementById
//Kullanımı

let fullname=prompt("Adınızı Giriniz : ","Deneme")

// let p1 = document.getElementById("p1")

let p1 = document.querySelector('#p1');

p1.innerHTML = `
  Adınız = <span style="color:green">${fullname}</span>
`

