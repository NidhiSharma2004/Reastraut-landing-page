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
    },
    {
        image:"images/momo.jpg",
        id:8,
        category:"diner",
        title:"momos",
        price:"$53",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    },
    {
        image:"images/momo.jpg",
        id:8,
        category:"shake",
        title:"momos",
        price:"$53",
        decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum praesentium provident nisi odit distinctio ipsam delectus soluta cum possimus"
    }
    
]

let filterbtn=document.querySelector(".filterbtn")
window.addEventListener("DOMContentLoaded",function(){
    displayButton(menu);
})



function displayButton(menu){
    // get all category
    let allCategory = menu.map(item =>{

        return item.category
    }) 
    console.log(allCategory);

    // make all category in order
    allCategory.sort();
    // make an empty array to get all unique category
    let oneCategory = [];
    for(let i=0;i<allCategory.length;i++){
        if(allCategory[i]!=allCategory[i+1]){
            oneCategory.push(allCategory[i])
        }
    }
    console.log(oneCategory);
    console.log(oneCategory.length);
    console.log(oneCategory[3])
    // to show btn
    
    for(let i=0;i<oneCategory.length;i++){
        filterbtn.innerHTML +=  `<button data-id="${oneCategory[i]}" class=" btns">${oneCategory[i]}</button>`
        let btns = document.querySelectorAll(".btns")
       
    }
}

// local storage section



done.addEventListener("click",()=>{
    // get item title
    var itemTitle = document.querySelector(".inputheading").textContent
    // get item quantity
    var  value = document.querySelector("#quantity").value;
    // make new array
    let valueArr = new Array();
    // push value in arr
    valueArr.push(value)
    // set value
     localStorage.setItem(itemTitle,valueArr)
});
                    