let list = document.getElementById("list");
let text = document.getElementById("text");


text.addEventListener("click",newElement(){
  // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
  list.textContent=text.value; 
  // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
  list.appendChild(li);     
  // Veri inputu içerisindeki metni siliyoruz.
  text.value = "";
}
function deleteElement(){
  list.style.color  = "blue";
}
function done(){}