
'use strict';
const menu = [
    {
        image: "images/burger.jpg",
        id: 1,
        category: "fast food",
        title: "Burger",
        price: "$43",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image: "images/chilli.jpg",
        id: 2,
        category: "fast food",
        title: "chilli patato",
        price: "$34",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image: "images/chowmin.jpg",
        id: 3,
        category: "fast food",
        title: "chowmin",
        price: "$40",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image: "images/pasta2.jpg",
        id: 4,
        category: "breakfast",
        title: "pasta",
        price: "$50",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image: "images/paner.jpg",
        id: 5,
        category: "breakfast",
        title: "paneer tika",
        price: "$60",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image: "images/mango.jpg",
        id: 6,
        category: "breakfast",
        title: "mango shake",
        price: "$43",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image: "images/salad.jpg",
        id: 7,
        category: "breakfast",
        title: "salad",
        price: "$43",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image: "images/momo.jpg",
        id: 8,
        category: "breakfast",
        title: "momos",
        price: "$53",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    }

]
let sectionCentre = document.querySelector(".section-centre");
let btns = document.querySelectorAll(".btns");
let filterbtn = document.querySelector(".filterbtn");
let cartContainer = document.querySelector(".cartContainer");
let cartInput = document.querySelector(".cartInput");
let done = document.getElementById('done');
let yourCart = document.getElementById("yourCart");
let yourCartItem = document.getElementById("yourCartItem");
let yourCartItemValue = document.getElementById("yourCartItemValue")
// load the item
window.addEventListener("DOMContentLoaded", function () {
    displayItemMenu(menu);
    displayButton(menu);
    // cartSection(menu)
})

// BUTTON AND FILTERING SECTION

function displayButton(menu) {

    // get all category
    let allCategory = menu.map(item => {
        return item.category
    })

    // make all category in order
    allCategory.sort();

    // make an empty array to get all unique category
    let oneCategory = ["all"];
    for (let i = 0; i < allCategory.length; i++) {
        if (allCategory[i] != allCategory[i + 1]) {
            oneCategory.push(allCategory[i])
        }
    }

    // to show btn
    for (let i = 0; i < oneCategory.length; i++) {
        filterbtn.innerHTML += `<button data-id="${oneCategory[i]}" class=" btns">${oneCategory[i]}</button>`

        // GET THE CLASS OF ALL BUTTON AND USE FOREACH METHOD
        let btns = document.querySelectorAll(".btns")
        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                let category = e.currentTarget.dataset.id;
                // console.log(category)
                const CategoryMenu = menu.filter(item => {
                    if (category == item.category) {
                        return item;
                    }
                })
                // if category is equal to all then display all item
                if (category == "all") {
                    displayItemMenu(menu)
                }
                // if category is not equal to all then show the filter arry
                else {
                    displayItemMenu(CategoryMenu)
                }
            })
        })
    }
}

// display the item
function displayItemMenu(menuItem) {
    let displayMenu = menuItem.map(menu => {
        return `
    <div class="items">
    <div class="image">
        <img src=${menu.image}>
    </div>
    <div class="info">
    <div class="title">
        ${menu.title}
    </div>
    <button class="cart" id="${menu.title}" data-rs = "${menu.price}">${menu.cart}</button>
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
    displayMenu = displayMenu.join("")
    sectionCentre.innerHTML = displayMenu


    // CART SECTION TREATMENT
    let carts = document.querySelectorAll(".cart")
    carts.forEach(cart => {
        cart.addEventListener("click", function (e) {

            cartInput.style.display = "flex";
            // get itemTittle from cart in menu inside
            const itemTitle = e.currentTarget.id;
            // get itemPrice from cart in menu inside
            const itemPrice = e.currentTarget.dataset.rs;
            // put itemTittle from cart in menu inside in cartContainer
          let inputprice = document.querySelector(".inputprice")
          inputprice.innerHTML=`<h2>${itemPrice}</h2>`
          
           // put itemPrice from cart in menu inside in cartContainer
          let inputheading = document.querySelector(".inputheading")
          inputheading.innerHTML=`<h1>${itemTitle}</h1>`
        // on done we set the item in local storage
        done.addEventListener("click",()=>{
            // get item title
            var selecteditemTitle = document.querySelector(".inputheading").textContent
            // get item quantity
            var  value = document.querySelector("#quantity").value;
            // make new array
            let valueArr = new Array();
            // push value in arr
            valueArr.push(value)
             // set value
             localStorage.setItem(selecteditemTitle,valueArr);
        });
        })
    })
}

// make display none of acrt div on click on exit;
document.getElementById("exit").addEventListener("click",()=>{
    cartInput.style.display = "none";
})
// scrol window on click                         
function scroll() {
    window.scrollBy({
        top: 1000,
        behavior: "smooth"
    })
}

