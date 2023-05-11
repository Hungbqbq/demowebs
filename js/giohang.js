// add cart
var carts = [];
var cart = {
    id: "",
    name: "",
    price: "",
    quantity:"",
    img: "",
    init: function cart(id, img, name, price, quantity){
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.quantity = quantity;
      
    },
    // render the cart
    render: function(carts){
        let text="";
        for(let i = 0 ; i   < carts.length;i++){
            text += '<tr>';
            text += this.onepr_cart(carts[i]);
            text +='</tr>';
        }
            // cart>0
        if(carts.length>0){
            text +="<tr><td colspan='6'><button onclick='pay()'>PAY</button></td></tr>";
        }
        return text;
        },
        onepr_cart: function(cart){
            let text = "";
            text += '<td width = "20%"><lable>'+cart.id+'</lable><img heigth="40px" width="60px"  src="'+ cart.img +'"></td>';
            text += '<td width = "20%"><p>'+ cart.name +'</p></td>'
            text += '<td width = "25%"><p>$<span>'+cart.price+'</span>&emsp;*&emsp;</p></td>';
            text += '<td width = "5%"><input nam="quantity" disabled value="'+cart.quantity+'" min="1" type="number" ></td>';
            text += '<td width = "30%"><p>&emsp;=&emsp;$<span>'+cart.price *cart.quantity+'</span></p></td>';
    
            // clear cart
            text += '<td width = "10%"><button onclick ="clearprcart(this)">X</button></td>';
            return text;
        }
    }
