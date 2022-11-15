const book = document.querySelector("book")



async function getFile(file) {
  let objects = await fetch(file);
  let list = await objects.json();
  visibleAteam(list)
}

getFile("ateam.json");

function visibleAteam(list) {
    const adressList = list
    adressList.forEach(object => {
        console.log(object)
    });
}

//console.log(list)