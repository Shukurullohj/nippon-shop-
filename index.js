var bookList = document.querySelector('.book-list');
var bookTempElement = document.querySelector('.book-temp').content;
var bookListn4 = document.querySelector('.book-listn4');
var bookTempElementn4 = document.querySelector('.book-tempn4').content;
var bookListn3 = document.querySelector('.book-listn3');
var bookTempElementn3 = document.querySelector('.book-tempn3').content;



books.forEach(function (book) {
    var bookElements = document.importNode(bookTempElement, true);
    bookElements.querySelector('.book-img').src = book.img;
    bookElements.querySelector('.book-title').textContent = book.name;
    bookElements.querySelector('.book-price').textContent = book.price;
    bookList.appendChild(bookElements);
});
booksn4.forEach(function (book) {
    var bookElements = document.importNode(bookTempElementn4, true);
    bookElements.querySelector('.book-img').src = book.img;
    bookElements.querySelector('.book-title').textContent = book.name;
    bookElements.querySelector('.book-price').textContent = book.price;
    bookListn4.appendChild(bookElements);
});
booksn3.forEach(function (book) {
    var bookElements = document.importNode(bookTempElementn3, true);
    bookElements.querySelector('.book-img').src = book.img;
    bookElements.querySelector('.book-title').textContent = book.name;
    bookElements.querySelector('.book-price').textContent = book.price;
    bookListn3.appendChild(bookElements);
});


(function () {
    var cartInfo = document.querySelector('.cart-info');
    var cartList = document.querySelector('.cart');

    cartInfo.addEventListener('click', function () {
        // console.log('bosildi');
        cartList.classList.toggle('show-cart');
    })
})();



(function () {
    var cartBtn = document.querySelectorAll('.add-button');

    cartBtn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            if (event.target.parentElement.classList.contains("add-button")) {
                let fullPath = event.target.parentElement.previousElementSibling.src;
                
                
                // let partPath = fullPath.slice(pos);
                // console.log(partPath);

                const item = {};
                item.img = fullPath;
                console.log(item.img)

                const name =
                    event.target.parentElement.parentElement.nextElementSibling.children[0].textContent;
                item.name = name;
                const price =
                    event.target.parentElement.parentElement.nextElementSibling.children[1].textContent;
                finalPrice = price.slice(0, 2).trim();
                item.price = finalPrice;


                const cartItem = document.createElement('div');
                cartItem.classList.add("cart-item")
                    
                cartItem.innerHTML = `
                
				<img class="cart-img" src="${item.img}" alt="">
				<div class="cart-text">
					<h5 class="cart-title">${item.name}</h5>
					<p class="cart-price">${item.price}<span>$</span></p>
				</div>
				<div class="cart-remove"><span ><i class="fas fa-trash fa-1x"></i></span></div>
            </div>`
            
            const cart = document.querySelector('.cart');
            const total = document.querySelector('.cart-total')
            function deleteItem(e) {
                if(document.contains('.cart-remove')){
                    console.log("ok");
                    
                }
            }
            cart.insertBefore(cartItem, total);

            showtotal();



    
            
            }
        });

    });

    function showtotal() {
        const total = [];
        const items = document.querySelectorAll('.cart-price');

        items.forEach(function (item) {
            total.push(parseFloat(item.textContent));
        });
        const totalMoney = total.reduce(function(total, item) {
            total+= item;
            return total;
        }, 0);
        document.querySelector('.card-total').textContent = totalMoney;
        document.querySelector('.cart-counter').textContent = total.length;

       

       
        
    }
})();




(function() {
    var removeItem = document.querySelectorAll('.cart-remove');
    removeItem.forEach(function (removebtn){
        removebtn.addEventListener('click', function(e) {
            // if(e.target.parentElement.classList.contains("cart-remove")) {
            // console.log("ok");
            console.log("bosil")
              
            
        })
    })
})







// var booksDom = document.querySelector('.book-list');

// class UI {
//     displayBooks(books) {
//         let result = '';
//         books.foreach(book => {
//             result+=
//             `<div>
//             <div class="img-container">
//                 <img class="book-img" src=${book.img} alt="">
//                 <button class="btn add-button" data-id=${book.id}>add to</button>
//             </div>	
//             <div class="book-body">
//             <h5class="book-title">${book.title}</h5>
//             <h5  class="book-price" >${book.price}</h5>
//         </div>`
//         console.log(book);
//         });
//         booksDom.appendChild(result)
//     }

// }

// document.addEventListener("DomContentLoaded", () => {
//     const ui = new UI();
// books.then(books =>  ui.displayBooks(books));
// });


// books.map(books => () {

// })



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:8,
            nav:true,
            loop:false
        }
    }
})