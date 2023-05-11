showcart_pay();
var pay = [];
function showcart_pay(){
    var x = sessionStorage.getItem("cart");
    pay = JSON.parse(x);
    console.log(pay)
    // carts = JSON.prse(x);
    // console.log(carts);
    // let gh = cart;
    sessionStorage.setItem("cart",JSON.stringify(""));
    document.getElementById("showcartpay").innerHTML = payproduct(pay); 
    
}
function payproduct(pay){
    let text="";
    for(let i = 0 ; i< pay.length;i++){
        text += '<tr>';
        text += '<td width = "20%"><lable hidden>'+pay[i].id+'</lable>';
        text += '<img heigth="40px" width="60px" src="'+ pay[i].img+'"></td>';
        text += '<td width = "20%"><p>'+ pay[i].name +'</p></td>'
        text += '<td width = "25%"><p>$<span>'+pay[i].price+'</span>&emsp;*&emsp;</p></td>';
        text += '<td width = "5%"><input nam="quantity" disabled value="'+pay[i].quantity+'" min="1" type="number" ></td>';
        text += '<td width = "30%"><p>&emsp;=&emsp;$<span>'+pay[i].price *pay[i].quantity+'</span></p></td>';
        text +='</tr>';
    }
    if(pay.length > 0){
        text +="<tr><td colspan='5'><button onclick='pay()'>pay</button></td></tr>";
    }
    
    return text;
}
