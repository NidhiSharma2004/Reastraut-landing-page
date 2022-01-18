"use strict";
// get the next sibbling of current target and display inline
// let input = e.target.nextElementSibling.style.display="inline"
const menu = [
    {
        image: "images/burger.jpg",
        id: 1,
        category: "fast food",
        title: "Burger",
        price: "$43",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus",
    },
    {
        image: "images/chilli.jpg",
        id: 2,
        category: "fast food",
        title: "chilli patato",
        price: "$34",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus",
    },
    {
        image: "images/chowmin.jpg",
        id: 3,
        category: "fast food",
        title: "chowmin",
        price: "$40",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus",
    },
    {
        image: "images/pasta2.jpg",
        id: 4,
        category: "breakfast",
        title: "pasta",
        price: "$50",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus",
    },
    {
        image: "images/paner.jpg",
        id: 5,
        category: "breakfast",
        title: "paneer tika",
        price: "$60",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus",
    },
    {
        image: "images/mango.jpg",
        id: 6,
        category: "breakfast",
        title: "mango shake",
        price: "$43",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus",
    },
    {
        image: "images/salad.jpg",
        id: 7,
        category: "breakfast",
        title: "salad",
        price: "$43",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus",
    },
    {
        image: "images/momo.jpg",
        id: 8,
        category: "breakfast",
        title: "momos",
        price: "$53",
        cart: "add to cart",
        decs: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus",
    },
];
let sectionCentre = document.querySelector(".section-centre");
let btns = document.querySelectorAll(".btns");
let filterbtn = document.querySelector(".filterbtn");
let cartContainer = document.querySelector(".cartContainer");
let cartInput = document.querySelector(".cartInput");
let done = document.getElementById("done");
let yourCart = document.getElementById("yourCart");
let cartIcon = document.querySelector(".cartIcon")
let cutIcon = document.querySelector(".cut")
// load the item
window.addEventListener("DOMContentLoaded", function () {
    displayItemMenu(menu);
    displayButton(menu);
    cartSection();
});

// BUTTON AND FILTERING SECTION

function displayButton(menu) {
    // get all category
    let allCategory = menu.map((item) => {
        return item.category;
    });

    // make all category in order
    allCategory.sort();

    // make an empty array to get all unique category
    let oneCategory = ["all"];
    for (let i = 0; i < allCategory.length; i++) {
        if (allCategory[i] != allCategory[i + 1]) {
            oneCategory.push(allCategory[i]);
        }
    }

    // to show btn
    for (let i = 0; i < oneCategory.length; i++) {
        filterbtn.innerHTML += `<button data-id="${oneCategory[i]}" class=" btns">${oneCategory[i]}</button>`;

        // GET THE CLASS OF ALL BUTTON AND USE FOREACH METHOD
        let btns = document.querySelectorAll(".btns");
        btns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                let category = e.currentTarget.dataset.id;
                // console.log(category)
                const CategoryMenu = menu.filter((item) => {
                    if (category == item.category) {
                        return item;
                    }
                });
                // if category is equal to all then display all item
                if (category == "all") {
                    displayItemMenu(menu);
                }
                // if category is not equal to all then show the filter arry
                else {
                    displayItemMenu(CategoryMenu);
                }
            });
        });
    }
}

// display the item
function displayItemMenu(menuItem) {
    let displayMenu = menuItem.map((menu) => {
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
    <input type="number" class="quantity" style="display:none" min="1" max="20">
    <div class="price">
        ${menu.price}
    </div>
    </div>
    <div class="desc">
     <p>${menu.decs}</p>
    </div>
</div>
    `;
    });

    displayMenu = displayMenu.join("");
    sectionCentre.innerHTML = displayMenu;
}


// CART SECTION TREATMENT


function cartSection() {
    // yhs hme displaymenuitem fun ko call krna padega so that we can acces all the cart class
    displayItemMenu(menu);
    // now we get all the class
    let carts = document.querySelectorAll(".cart");
    // we can use for each method on all class and target each cart btn
    carts.forEach((cart) => {
        // w'll make fun that take e as a current argument;
        cart.addEventListener("click", (e) =>{
            getData(e);
            
        });
        
    });
}

// function for local storage
function getData(e) {
    // get the idname of current target
    let itemName = e.currentTarget.id;
    // here i didn't get inputvalue directly so i go to console and i found nextElement sibbling
    // is input so i get the value by this way
    let inputdiv = e.currentTarget.nextElementSibling;
// to add the feature of when we click on add to cart to make input div display inline and when we click
// second time we want to make input div display none
    if(inputdiv.style.display=="none"){
        inputdiv.style.display="inline"
    }else{
        inputdiv.style.display="none"
    }
    let inputValue = e.currentTarget.nextElementSibling.value;
    // i set the key as the name of id
    if (inputValue != '') {
        // if input value is not blank then run the fun
        // yha pr hm itemName ko hi key ki thrah se krenge
        let itemTitleKey = localStorage.getItem(`${itemName}`);
        // make a empty object
        let data = [];
        if (itemTitleKey == null) {
            data.push(inputValue);
            // hr baar new item k liye itemTitleKey jo h vo null hogi
        } else {
            // or ek baar koi value usme chli gyi to usse mein se vo parse hokr data mein aa jaye
            data = JSON.parse(itemTitleKey);
            // console.log(`parse ki gyi value`,data);
            // jo new value dubra input value m dali h use push krneg
            data.push(inputValue);
            // console.log(`push ki gyi value`,data);
            // new value puch hone ke baad phele value ko cut kr denge or uske baad set kr denge
            data.splice(0, 1);
            // console.log(`splice hone ka bad`,data);
        }
        localStorage.setItem(`${itemName}`, JSON.stringify(data));

        // iske value ko blank ke denge
        e.currentTarget.nextElementSibling.value = '';
        showCart(localStorage);
        // on click on clearAll btn we clear the whole local storage
        document.querySelector(".clearAll").addEventListener("click",()=>{
            localStorage.clear();
            showCart(localStorage)
        })
        // on click on cutIcon we make display none
        cutIcon.addEventListener("click",()=>{
            document.querySelector(".cartShowCase").style.display = "none"
        })
    }
    // inputdiv = e.currentTarget.nextElementSibling;
    // inputdiv.style.display="none"

}
  // show the cart div
cartIcon.addEventListener("click",()=>{
    // we have to call cartsection fun to get localStorage
    cartSection();
    // we have to call show cart fun to show information
    showCart(localStorage)
    // console.log(localStorage.length)
    let cartEmpty = document.querySelector(".cartEmpty");
    if(localStorage.length>0){
    cartEmpty.style.display="none"
    document.querySelector(".cartShowCase").style.display = "flex";
    }else{
        cartEmpty.innerHTML=`cart is empty`;
        cartEmpty.style.display="inline"
    }
        
    cutIcon.addEventListener("click",()=>{
        document.querySelector(".cartShowCase").style.display = "none"
    });
    document.querySelector(".clearAll").addEventListener("click",()=>{
        localStorage.clear();
        showCart(localStorage)
    })
});
// show item

function showCart(obj) {
    let html = ''
    for (let i = 0; i < obj.length; i++) {
        // to get the local storage key index
        // console.log(localStorage.key(i));
        // to get the key value in without string we use JSON.parse(localStorage.getItem(localStorage.key(i)))
        html += `
        <tr>
          <td>${obj.key(i)} </td>
          <td>${JSON.parse(obj.getItem(obj.key(i)))}</td>
        </tr>`
    }
    document.querySelector("#table").innerHTML = html;
}




// scrol window on click
function scroll() {
    window.scrollBy({
        top: 1000,
        behavior: "smooth",
    });
}
filterbtn.addEventListener("click", scroll);

// first i make all the function in cartsection then i divided it into 
// 3 functions 1.getdata() 2. show cart  3.cartIcn;
// i didn't make all the 3 fun at one time  
