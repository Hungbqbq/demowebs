var x = sessionStorage.getItem("cart");
if(x == null){
   carts =[];
}else{
    carts = JSON.parse(x);
}
function checkproduct(id){
    for(let i = 0 ;i<products.length;i++){
        if(products[i].id === id){
            return i; 
        }
    }
    return -1;
}
var session_id = sessionStorage.getItem('id');
console.log(session_id)
//bỏ ngoặc "" cho id
let check = checkproduct(session_id.replace(/"/g, ''));
let text ="";
if(check == -1){
    alert('no item');
}else{
   
    text += '<tr><td rowspan="5"><lable>'+products[check].id+'</lable><img height="200px" width="300px" src="./img/'+ products[check].hinh+'" /></td></tr>'
    text +='<tr><td>'+products[check].name+'</td></tr>';
    text +='<tr><td>'+products[check].detailproduct+'</td></tr>';
    text += '<tr> <td>'+products[check].price+'</td></tr>';
    text += '<tr> <td><input type="number" name="quatity" value="1" min="1"></td></tr>';
    text += '<tr><td><button onclick="choosedetail(this)">CHOOSE</button></td></tr>';
    document.getElementById('showdetailproduct').innerHTML = text;
}

function choosedetail(x){
    var card = x.parentElement.parentElement.parentElement;
    let id = card.children[0].children[0].children[0].innerHTML;
    let img = card.children[0].children[0].children[1].src;
    let name = card.children[1].children[0].innerHTML;
    let price= card.children[3].children[0].innerText;
    let quantity = card.children[4].children[0].children[0].value;
    let check = checkcart(id);
    if(check == -1){
        let cr = new cart.init(id,img,name,price,quantity);
        carts.push(cr);
    }else{
        let sl = Number(carts[check].quantity) + Number(quantity);
        carts[check].quantity = sl;
    }
    sessionStorage.setItem("cart",JSON.stringify(carts));
    showproductcart();
}