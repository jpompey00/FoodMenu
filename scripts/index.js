"use strict";
let menuItems = {
    drinks : [
     "Water", "Tea", "Sweet Tea",
     "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
    "Hamburger w/ Fries",
     "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
     "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
     "Veggie Plate"
    ],
    desserts: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
     ]
    };



    const itemDropDown = document.getElementById("itemDropDown");
    const itemListbox = document.getElementById("itemListbox");


    window.onload = function(){
        loadDropDown();

        itemDropDown.onchange = onItemDropDownChanged;

        
    }

    function onItemDropDownChanged(){
        clearListBox();
        let dropdownValue = itemDropDown.value;
        loadListBox(dropdownValue);
    }


    function loadDropDown(){
        let theOption = new Option("Select an Item", "");
        itemDropDown.appendChild(theOption);
        for(let key in menuItems){
            theOption = new Option(key, key);
            itemDropDown.appendChild(theOption);
        }
    }

    function loadListBox(dropdownValue){
        //I named everything here so wrong,its really confusing
        //TODO: Comeback to this
        for(let menuItem in menuItems){
            if(menuItem == dropdownValue){
                itemListbox.setAttribute("size",
                 menuItems[menuItem].length);

                for(let item of menuItems[menuItem]){
                    let theOption = new Option(item, "");
                    itemListbox.append(theOption);
                }
            }
        }
    }

    function clearListBox(){
        itemListbox.setAttribute("size", 0);
        itemListbox.options.length = 0;
    }