function configureListeners() {
    let images = document.getElementsByTagName("img")// select img elements  

    //querySelectorAll returns a nodeList

     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners\

        //need to get each img id in the HTML
        document.getElementById(images[i].id).addEventListener('mouseover',addOpacity)
       
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity)
        
    

        //have to use the addOpacity function
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    getProductInfo(event.target.id);   
    
    //There is a .dim in CSS.
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    this.classList.add('dim')
}

function removeOpacity(event) {
     //remove appropriate CSS class

     this.classList.remove('dim')
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':  
            price= 14.99
            colorName= "Lime Green"    
            updatePrice(colorName, price)     
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price=11.14
            colorName="Medium Brown"
            updatePrice(colorName,price)
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price=22.99
            colorName="Royal Blue"
            updatePrice(colorName,price)
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price=13.42
            colorName="Solid Red"
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            colorName="Solid White"
            price=21.98
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            colorName="Solid Black"
            price=4.99
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            colorName="Solid Cyan"
            price=8.22
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            colorName="Solid Purple"
            price=11.99
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            colorName="Solid Yellow"
            price=14.99
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }
    //function to invoke to update price is updatePrice.

    function updatePrice(colorName, price)
    {       
        let ColorPrice= document.getElementById("color-price")// select element with corresponding id
        // display price
        ColorPrice.textContent =price;


        let NameColor = document.getElementById("color-name")// select element with corresponding id
        //display color name
        NameColor.textContent=colorName
      }
    
}