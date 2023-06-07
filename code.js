// Create an array of Objects (At least 3 Objects). Each object should have a URL Link to an image.
// Set your array in localStorage.
// Get your array from localStorage and store it in a variable called "Information"
// Display/Write the content of the variable "Information" on the document and make sure the images are displayed

let pokemon = [
    {
        pokeName: "Charmander",
        image:"https://i.postimg.cc/W3G92b2N/004.png"
    },
    {
        pokeName: "wartortle",
        image:"https://i.postimg.cc/MZhys8xt/008.png"
    },
    {
        pokeName: "Pidgeot",
        image:"https://i.postimg.cc/qvZBLpHv/018.png"
    },
    {
        pokeName: "Ninetales",
        image:"https://i.postimg.cc/3xP5NNHm/038.png"
    }   
]

localStorage.setItem("pokeDex", JSON.stringify(pokemon));
let Information = JSON.parse(localStorage.getItem("pokeDex"));


let route = document.querySelector("#routes")
    route.innerHTML = ""
    pokemon.forEach(partner =>{
        route.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="${partner.image}" class="card-img-top" alt="${partner.pokeName}" loading:"lazy">
  <div class="card-body">
    <h1 class="card-title">${partner.pokeName}</h1>
    <p class="card-text"></p>
  </div>
</div>
        `
    })

    console.log(localStorage.getItem("pokeDex"));