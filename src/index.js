let ramanData;
let currentRaman;

document.addEventListener('DOMContentLoaded', ()=> {
fetchUrl()
})
function fetchUrl(){
    fetch("http://localhost:3000/ramens")
    .then (r => r.json())
   .then (ramanData => {
        loadImages(ramanData)
        

   })
}

   

   

   function loadImages(ramanData){ 
        console.log(ramanData);
        let raman = ramanData;

        raman.forEach((e) =>  {
            console.log(e);
            let image = document.querySelector('#ramen-menu');
            let picture = document.createElement("img");
            picture.src = e.image;
            picture.addEventListener('click', ()=>{
                showInfo(e)});
            image.appendChild(picture);





        } )
   }
   function showInfo(ramen){
    let name = document.querySelector(".name") ;
    let restaurant = document.querySelector(".restaurant");
    let image = document.querySelector(".detail-image");
    let rating = document.querySelector("#rating-display");
    let comment = document.querySelector("#comment-display");

    name.textContent =ramen.name;
    restaurant.textContent =ramen.restaurant;
    image.src =ramen.image;
    rating.textContent =ramen.rating;
    comment.textContent =ramen.comment;
  
  

  

   }
   
   
    
    const inputForm = document.querySelector('#new-ramen');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()
        addNew(e)
    })     
   
    function addNew(e){
   //let new_name = document.querySelector('#new-name');
   const card ={
    name : e.target[0].value,
    restaurant : e.target[1].value,
    image :"assets/image-placeholder.jpg",
    rating :e.target[3].value,
    comment :e.target[4].value
   }


   let image = document.querySelector('#ramen-menu');
            let picture = document.createElement("img");
            picture.src = card.image;
            picture.addEventListener('click', ()=>{
                showInfo(card)});
            image.appendChild(picture);

        
   
    }


