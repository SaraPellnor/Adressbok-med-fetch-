const book = document.querySelector(".book")



async function getFile(file) {
  let objects = await fetch(file);
  let list = await objects.json();
  visibleAteam(list)
}

getFile("ateam.json");

function visibleAteam(list) {
    list.sort((object )=> {
        console.log(object)
        return object
    })
    list.forEach(object => {
        
        const ul = document.createElement("ul")
        const name = document.createElement("li")
        const email = document.createElement("li")
        const age = document.createElement("li")
        const phone = document.createElement("li")
        const title = document.createElement("li")
        
        name.innerHTML="Name: " + object.name
        email.innerHTML="E-mail: " + object.email
        age.innerHTML="Age: " + object.age
        phone.innerHTML="Phone: " + object.phone
        title.innerHTML="Title: " + object.title
        book.appendChild(ul)
        ul.append(name, email, age, phone, title)

    });
}

//console.log(list)

const months = ['March', 'Jan', 'Feb', 'Dec','a','b','d','c'];
months.sort();
console.log(months);