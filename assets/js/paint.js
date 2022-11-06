function configureListeners() {
    let images = document.getElementsByTagName("img")// select img elements  

    //querySelectorAll returns a nodeList

     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners\

        //need to get each img id in the HTML
        document.getElementById(images[i].id).addEventListener('mouseover',()=>{
            images[i].style.opacity=.1;
        })

        //have to use the addOpacity function
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

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
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price=11.14
            colorName="Medium Brown"
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price=22.99
            colorName="Royal Blue"
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price=4.99
            colorName="Solid Black"
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            colorName="Solid Cyan"
            price=8.22
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            colorName="Solid Purple"
            price=11.99
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            colorName="Solid Red"
            price=13.42
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            colorName="Solid White"
            price=21.98
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

    function updatePrice(colorName, price)
    {       
        let price = null// select element with corresponding id
        // display price
        
        let colorName = null// select element with corresponding id
        //display color name
      }
    
}