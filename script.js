const menu = [
    {
        image:"images/burger.jpg",
        id:1,
        category:"fast food",
        title:"Burger",
        price:"$43",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image:"images/chilli.jpg",
        id:2,
        category:"fast food",
        title:"chilli patato",
        price:"$34",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {   
        image:"images/chowmin.jpg",
        id:3,
        category:"fast food",
        title:"chowmin",
        price:"$40",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image:"images/pasta2.jpg",
        id:4,
        category:"breakfast",
        title:"pasta",
        price:"$50",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image:"images/paner.jpg",
        id:5,
        category:"breakfast",
        title:"paneer tika",
        price:"$60",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image:"images/mango.jpg",
        id:6,
        category:"breakfast",
        title:"mango shake",
        price:"$43",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image:"images/salad.jpg",
        id:7,
        category:"breakfast",
        title:"salad",
        price:"$43",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image:"images/momo.jpg",
        id:8,
        category:"breakfast",
        title:"momos",
        price:"$53",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    }
    
]
let sectionCentre = document.querySelector(".section-centre");
let filterbtns = document.querySelectorAll(".btns")

// load the item
window.addEventListener("DOMContentLoaded",function(){
    displayItemMenu(menu);
})


// filtering the items


filterbtns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        let category = e.currentTarget.dataset.id;    
        console.log(category)
      const CategoryMenu = menu.filter(item=>{
        if(category==item.category){
            return item;
        }
      })
      // agr category koi si bhi nhi hai to all hogi
      if(category=="all"){
        displayItemMenu(menu)
      }
      // agr all nhi hai to displayitemmenu ke andr category menu dal do
      else{
        displayItemMenu(CategoryMenu)
      }
    })
})





// display the item
function displayItemMenu(menuItem){
    let displayMenu = menuItem.map(menu =>{
    return `
    <div class="items">
    <div class="image">
        <img src=${menu.image}>
    </div>
    <div class="info">
    <div class="title">
        ${menu.title}
    </div>
    <div class="price">
        ${menu.price}
    </div>
    </div>
    <div class="desc">
     <p>${menu.decs}</p>
    </div>
</div>
    `
    });
    // console.log(displayItem)
    displayMenu=displayMenu.join("")
    sectionCentre.innerHTML= displayMenu
}


