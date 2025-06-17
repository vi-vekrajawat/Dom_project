const { createElement } = require("react")

function Header(){

let b = document.querySelector('body')
b.style.margin='0px'
b.style.padding='0px'
// b.setAttribute('style','margin:0px;padding:0px;border:1px solid green')
let bigContainer  = document.getElementById('main')
let firstDiv = document.createElement('div')
// firstDiv.style.margin='0px'
firstDiv.style.display = 'flex'
// firstDiv.style.position='fixed'
firstDiv.style.id='frtDiv'
bigContainer.append(firstDiv)
firstDiv.style.height = '50px'
// firstDiv.style.border = '1px solid red'
firstDiv.style.backgroundColor = 'black'
// first div of header it has been completed 
let div1 = document.createElement('div')
div1.style.display = 'flex '
div1.style.justifyContent = 'center'
div1.style.alignItems = 'center'
div1.style.flexDirection ='column'
firstDiv.append(div1)
// div1.style.border = '1px solid green'
div1.style.height = '50px'
div1.style.width = '420px'
let tagSmall1 = document.createElement('small')
div1.append(tagSmall1)
tagSmall1.innerHTML = '<b style="color:red;font-Size:20px">E - </b><i>Shop</i>'
tagSmall1.style.color = 'white'
let tagSmall2 = document.createElement('small')
div1.append(tagSmall2)
tagSmall2.innerText = 'products on a tap'
tagSmall2.style.color = 'white'
//second div of header it has been completed 
let div2 = document.createElement('div')
div2.style.display = 'flex'
div2.style.alignItems = 'center'
div2.style.justifyContent = 'center'
firstDiv.append(div2)
// div2.style.border = '1px solid yellow'
div2.style.height = '50px'
div2.style.width = '420px'
let serachbar = document.createElement('input')
div2.append(serachbar)
serachbar.style.width = '300px'
serachbar.style.height='30px'
serachbar.placeholder = "Search Product"
serachbar.style.fontSize='20px'
// third div of header 
let div3 = document.createElement('div')
firstDiv.append(div3)
div3.style.display = 'flex'
div3.style.alignItems = 'center'
div3.style.justifyContent = 'center'
div3.style.height = '50px'
div3.style.width = '420px'
let firstButton = document.createElement('button')
div3.append(firstButton)
firstButton.innerText = 'Sign In'
firstButton.style.backgroundColor='black'
firstButton.style.fontSize='20px'
firstButton.style.color='white'
firstButton.style.borderStyle='none'
firstButton.style.marginRight = '80px'
let secondButton = document.createElement('button')
secondButton.innerText = 'Sign Up'
secondButton.style.backgroundColor='black'
secondButton.style.fontSize='20px'
secondButton.style.color='white'
secondButton.style.borderStyle='none'
secondButton.addEventListener("click",function(){
    SignUpPageComponenet()
})
div3.append(secondButton)

}

function BodyPart(data){
    let getDiv = document.querySelector('#main')
    let mainDiv = document.createElement('div')
    // mainDiv.style.backgroundColor = 'red'
    getDiv.append(mainDiv)
    // mainDiv.style.id='mD'
    mainDiv.setAttribute('id','BodyMainDiv')
    // mainDiv.style.display = 'flex'
    mainDiv.style.display = 'grid '
    mainDiv.style.gridTemplateColumns = 'auto auto auto auto'
    // mainDiv.style.border = '1px solid blue'
    mainDiv.style.marginTop = '7px'
    for(let product of data){
    let card  = document.createElement('div')
    card.style.border = '1px solid green'
    card.style.height = '300px'
    card.style.width = '250px'
    card.style.borderStyle='none'
    card.style.marginTop = '10px'
    card.style.marginLeft = '25px'
    card.style.boxShadow = '3px 3px 3px 3px gray '
    card.style.borderRadius='10px'
    card.style.display = 'flex'
    card.style.alignItems='center'
    card.style.justifyContent='center'
    card.style.flexDirection='column'
    mainDiv.append(card)
    let ProductImg = document.createElement('img')
    ProductImg.src=product.thumbnail
    ProductImg.style.height='200px'
    ProductImg.style.width='100%'
    card.append(ProductImg)

    let h6 = document.createElement('h6')
    h6.innerHTML = product.title.substring(0,25)
    h6.setAttribute('style','margin:5px;font-family:apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";     font-size: 15px;')
    card.append(h6)

    let h4 = document.createElement('h3')
    h4.innerHTML= product.price + ' Rs. '
    h4.setAttribute('style','margin:5px;color:green;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-weight: bolder;')
    card.append(h4)

    let viewMore = document.createElement('button')
    viewMore.innerHTML='View more'
    viewMore.setAttribute('style','width:100%; background-Color:#ffc107;border-Style:none;height:70px;font-Size:15px;border-redius:20px;')
    card.append(viewMore)
  

    viewMore.addEventListener('click',()=>{
        viewMoreComponent(product)
    })
    
    }
}


function viewMoreComponent(product){
    console.log(product)
    let main = document.getElementById('#main')
    let removeId = document.getElementById('BodyMainDiv')
    removeId.innerHTML=' '
    let viewMoreContainer = document.createElement('div')
    viewMoreContainer.setAttribute('style','height:550px;width:400px;color:black;')
    viewMoreContainer.style.border='1px solid red'
    viewMoreContainer.style.borderStyle='none'
    viewMoreContainer.style.boxShadow='10px 10px 10px 10px grey'
     viewMoreContainer.style.position='relative'
        viewMoreContainer.style.left='30%'
    removeId.append(viewMoreContainer)
    let mainImg = document.createElement('img')
        // mainImg.style.boxShadow='1px 1px 1px 1px gray'
        mainImg.style.height='300px'
       
        mainImg.style.width='300px'
        mainImg.style.borderStyle='none'
        // mainImg.style.marginLeft='100px'
        mainImg.style.marginTop='10px'
        mainImg.style.alignItems='center'
        mainImg.style.justifyContent='center'
        mainImg.src=product.thumbnail
        viewMoreContainer.append(mainImg)

        let multiImageConatiner = document.createElement('div')
        multiImageConatiner.setAttribute('style','display:flex;align-items:center;justify-content:center')
        // multiImageConatiner.style.backgroundColor='red'
        mainImg.append(multiImageConatiner)

        for(let pImg of product.images){
            let smallImg = document.createElement('img')
            smallImg.src=pImg
            smallImg.setAttribute('style','height:100px;width:100px')
            smallImg.addEventListener('click',function(){
                let temp = mainImg.src
                mainImg.src = smallImg.src
                smallImg.src=temp

            })
            multiImageConatiner.append(smallImg)
            viewMoreContainer.append(multiImageConatiner)


        }

    let viewMoreContainer1=document.createElement('div')
    viewMoreContainer1.setAttribute('style','height:550px;width:500px;color:black;')
    // viewMoreContainer1.style.border='1px solid red'
viewMoreContainer1.style.position = 'relative'
viewMoreContainer1.style.left='11%'
viewMoreContainer1.style.borderStyle='none'

let head = document.createElement('div')
viewMoreContainer1.append(head)
head.style.height='40px'
head.innerHTML = `<b style = 'font-Size:20px'>${product.title}</b><b style='color:blue;font-Size:20px'>[${product.brand}]</b>`
head.style.textAlign='center'
head.style.paddingTop='10px'

let hr = document.createElement('hr')
viewMoreContainer1.append(hr)
hr.style.marginLeft = '30px'


let para = document.createElement('p')
para.innerHTML = `${product.description}`
viewMoreContainer1.append(para)
para.style.marginLeft ='30px'


let wi = document.createElement('p')
wi.innerHTML = `<b>warranty Information :</b> ${product.warrantyInformation}`
viewMoreContainer1.append(wi)
wi.style.marginLeft='30px'
wi.style.marginTop='40px'

let si = document.createElement('p')
si.innerHTML=`<b>Shipping Information :</b>${product.shippingInformation}`
si.style.marginLeft='30px'
si.style.marginTop='40px'

let rp = document.createElement('p')
rp.innerHTML=`<b>Return Policy :</b> ${product.returnPolicy}`
rp.style.marginLeft='30px'
viewMoreContainer1.append(rp)
rp.style.marginTop='40px'

let rating = document.createElement('p')
rating.innerHTML=`<b>Rating :</b> <b style='color:#ffc107;font-Size:20px'>(${product.rating}/5)</b>`
rating.style.marginLeft = '30px'
viewMoreContainer1.append(rating)
rating.style.marginTop='40px'

let op = document.createElement('p')
op.innerHTML=`<b>Offered Price :</b> <del style='color:red'>${product.price}</del> <span style='color:green;font-Size:25px'>${product.price-((product.discountPercentage)/100).toFixed(2)} Rs.</span>`
viewMoreContainer1.append(op)
op.style.marginLeft = '30px'
op.style.marginTop='40px'

let buy = document.createElement('button')
buy.innerHTML='Buy Now'
buy.style.width='450px'
viewMoreContainer1.append(buy)
buy.style.backgroundColor='#ffc107'
buy.style.borderStyle='none'
buy.style.height='40px'
buy.style.marginTop='40px'
buy.style.marginLeft='30px'

viewMoreContainer1.style.boxShadow = '10px 10px 10px 10px grey'
removeId.append(viewMoreContainer1)

// Herer we will write code 
// Footer()

}

function SignUpPageComponenet(){
    let main = document.getElementById('main')
    main.innerHTML=''
    // let b = document.getElementById('BodyMainDiv')
    // b.style.backgroundColor='red'
    // b.innerHTML=''

    let formPage = document.createElement('div')
    // formPage.style.border='1px solid grey'
    formPage.style.height='500px'
    formPage.style.width='600px'
    formPage.style.display='flex'
    formPage.style.flexDirection='column'
    // formPage.style.backgroundColor='green'
    formPage.style.alignItems='center'
    formPage.style.justifyContent='center'
    formPage.style.marginLeft='300px'
    formPage.style.marginTop='30px'
    formPage.style.boxShadow='0px 30px 60px 0px grey'
    let Formtag = document.createElement('form')
    formPage.append(Formtag)
    let inpt1 = document.createElement('input')
    inpt1.placeholder='Enter Email'
    inpt1.setAttribute('style','width:350px;height:30px;margin-left:100px')
    inpt1.style.boxShadow='3px 3px 3px 3px grey'
    inpt1.style.borderStyle='none'
    inpt1.type='email'
    inpt1.addEventListener('mouseover',function(){
        inpt1.style.boxShadow='3px 3px 3px 3px blue'
    })
    inpt1.addEventListener('mouseleave',function(){
            inpt1.style.boxShadow='3px 3px 3px 3px grey'
    })
    Formtag.append(inpt1)
    let inpt2 = document.createElement('input')
    inpt2.placeholder='Enter Name'
    inpt2.type='text'
    inpt2.setAttribute('style','margin-top:70px;width:350px;height:30px;margin-left:100px')
    inpt2.style.boxShadow='3px 3px 3px 3px grey'
    inpt2.style.borderStyle='none'
       inpt2.addEventListener('mouseover',function(){
        inpt2.style.boxShadow='3px 3px 3px 3px blue'
    })
    inpt2.addEventListener('mouseleave',function(){
            inpt2.style.boxShadow='3px 3px 3px 3px grey'
    })
    Formtag.append(inpt2)
    let inpt3 = document.createElement('input')
    inpt3.placeholder='Enter Phone Number'
    inpt3.setAttribute('style','margin-top:70px;width:350px;height:30px;margin-left:100px')
    inpt3.style.boxShadow='3px 3px 3px 3px grey'
    inpt3.style.borderStyle='none'
    inpt3.type='text'

       inpt3.addEventListener('mouseover',function(){
        inpt3.style.boxShadow='3px 3px 3px 3px blue'

    })
    inpt3.addEventListener('mouseleave',function(){
            inpt3.style.boxShadow='3px 3px 3px 3px grey'

    })


    Formtag.append(inpt3)

    let sBtn = document.createElement('button')
    sBtn.innerHTML='SUBMIT'
    sBtn.setAttribute('style','margin-top:70px;width:350px;height:30px;margin-left:100px')
    sBtn.style.backgroundColor='orange'
    sBtn.style.borderStyle='none'
    sBtn.style.color='white'


    sBtn.addEventListener('mouseover',function(){
        sBtn.style.boxShadow='10px 0px 0px 10px orange'

    })
    sBtn.addEventListener('mouseleave',function(){
            sBtn.style.boxShadow='3px 3px 3px 3px grey'

    })

    sBtn.addEventListener('click',function(){

        let check = false;
        let data = JSON.parse(localStorage.getItem('user-list'))
        for(let i =0;i<data.length;i++){
            if(data[i].userEmail===inpt1.value){
                check=true
            }
        }
        if(check){
            window.alert('Alreday Exist')
        }
        else{
        let userEmail = inpt1.value
        let userName = inpt2.value
        let userPassword = inpt3.value
        let userList = JSON.parse(localStorage.getItem('user-list'))
        let newUser = {userEmail,userName,userPassword}
        userList.push(newUser)
        localStorage.setItem('user-list',JSON.stringify(userList))
        window.alert("Sign Up Successfuly")
        }
    })

   

    Formtag.append(sBtn)
    
    // sBtn.style.transition='all 0.3 ease'
    // sBtn.addEventListener('mouseover',()=>{
    //     // window.alert(")
    //     sBtn.style.transform='scale(1.05)'
    //     sBtn.style.boxShadow='10px 10px 10px 10px grey'
    // })

    //  sBtn.addEventListener('mouseleave',()=>{
    //     sBtn.style.transform='scale(1)'
    //     sBtn.style.boxShadow='none'

    // })
    main.append(formPage)
}

function Footer(){
        let main = document.getElementById('main')
        // let removeId = document.getElementById('BodyMainDiv')
       let bigDiv = document.createElement('div')


        let div = document.createElement("div")
        div.style.height='350px'
        div.style.backgroundColor='black'
        div.style.marginTop='10px'
        div.style.display='flex'
        div.style.justifyContent='space-around'
        

        let Fdiv = document.createElement('div')
        Fdiv.style.height='50px'
        Fdiv.style.width='100px'
        Fdiv.style.marginTop='12px'
        let s1 = document.createElement('small')
        s1.style.paddingTop='10px'
        s1.innerHTML='Logo'
        s1.style.color='white'
        Fdiv.append(s1)
        let s2 = document.createElement('small')
        s2.innerHTML=' E-Shop Website'
        s2.style.color='white'
        Fdiv.append(s2)
        div.append(Fdiv)

        let Fdiv1 = document.createElement('div')
        let list = document.createElement('ul')
        list.style.listStyle='none'
        let l1 = document.createElement('li')
        l1.innerHTML='Contact'
        l1.style.color='white'
        let l2 = document.createElement('li')
        l2.innerHTML='About'
        l2.style.color='white'
        let l3 = document.createElement('li')
        l3.innerHTML='Scope' 
        l3.style.color='white'
 
        list.append(l1,l2,l3)
        Fdiv1.append(list)
        div.append(Fdiv1)

        let Fdiv2 = document.createElement('div')
        let list1 = document.createElement('ul')
        list1.style.listStyle='none'
        list1.style.gap='10px'
        let l11 = document.createElement('li')
        l11.innerHTML='Help Center'
        l11.style.color='white'
        let l21 = document.createElement('li')
        l21.innerHTML='Track Order'
        l21.style.color='white'
        let l31 = document.createElement('li')
        l31.innerHTML='Shipping Info'
        l31.style.color='white'
        list1.append(l11,l21,l31)
        Fdiv2.append(list1)
        div.append(Fdiv2)


        let Fdiv3 = document.createElement('div')
        let list01 = document.createElement('ul')
        list01.style.listStyle='none'
        let l01 = document.createElement('li')
        l01.innerHTML='FAQs'
        l01.style.color='white'
        let l02 = document.createElement('li')
        l02.innerHTML='Privacy Policy'
        l02.style.color='white'
        let l03 = document.createElement('li')
        l03.innerHTML='Return Policy'
        l03.style.color='white'
        list01.append(l01,l02,l03)
        Fdiv3.append(list01)
        div.append(Fdiv3)


         let Fdiv03 = document.createElement('div')
        let list001 = document.createElement('ul')
        list001.style.listStyle='none'
        list001.style.color='white'
        let l001 = document.createElement('li')
        l001.innerHTML='support@yourstore.com'
        l001.style.color='white'
        let l002 = document.createElement('li')
        l002.innerHTML=' +1 234 567 890'
        l002.style.color='white'
        let l003 = document.createElement('li')
        l003.innerHTML='123 Market Street, New York, NY'
        l003.style.color='white'    
        list001.append(l001,l002,l003)
        Fdiv03.append(list001)
        div.append(Fdiv03)
        
bigDiv.append(div)
 let h = document.createElement('hr')
        h.style.color='red'
        // div.append(h)
        main.append(bigDiv)


}




function LoadData(){
    let data = {"products":[{"id":1,"title":"Essence Mascara Lash Princess","description":"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.","category":"beauty","price":9.99,"discountPercentage":10.48,"rating":2.56,"stock":99,"tags":["beauty","mascara"],"brand":"Essence","sku":"BEA-ESS-ESS-001","weight":4,"dimensions":{"width":15.14,"height":13.08,"depth":22.99},"warrantyInformation":"1 week warranty","shippingInformation":"Ships in 3-5 business days","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"},{"rating":4,"comment":"Very satisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lucas Gordon","reviewerEmail":"lucas.gordon@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":48,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5784719087687","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"},{"id":2,"title":"Eyeshadow Palette with Mirror","description":"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.","category":"beauty","price":19.99,"discountPercentage":18.19,"rating":2.86,"stock":34,"tags":["beauty","eyeshadow"],"brand":"Glamour Beauty","sku":"BEA-GLA-EYE-002","weight":9,"dimensions":{"width":9.26,"height":22.47,"depth":27.67},"warrantyInformation":"1 year warranty","shippingInformation":"Ships in 2 weeks","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Savannah Gomez","reviewerEmail":"savannah.gomez@x.dummyjson.com"},{"rating":4,"comment":"Awesome product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Christian Perez","reviewerEmail":"christian.perez@x.dummyjson.com"},{"rating":1,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nicholas Bailey","reviewerEmail":"nicholas.bailey@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":20,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"9170275171413","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"},{"id":3,"title":"Powder Canister","description":"The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.","category":"beauty","price":14.99,"discountPercentage":9.84,"rating":4.64,"stock":89,"tags":["beauty","face powder"],"brand":"Velvet Touch","sku":"BEA-VEL-POW-003","weight":8,"dimensions":{"width":29.27,"height":27.93,"depth":20.59},"warrantyInformation":"3 months warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Alexander Jones","reviewerEmail":"alexander.jones@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Elijah Cruz","reviewerEmail":"elijah.cruz@x.dummyjson.com"},{"rating":1,"comment":"Very dissatisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Avery Perez","reviewerEmail":"avery.perez@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":22,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"8418883906837","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"},{"id":4,"title":"Red Lipstick","description":"The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.","category":"beauty","price":12.99,"discountPercentage":12.16,"rating":4.36,"stock":91,"tags":["beauty","lipstick"],"brand":"Chic Cosmetics","sku":"BEA-CHI-LIP-004","weight":1,"dimensions":{"width":18.11,"height":28.38,"depth":22.17},"warrantyInformation":"3 year warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Liam Garcia","reviewerEmail":"liam.garcia@x.dummyjson.com"},{"rating":5,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ruby Andrews","reviewerEmail":"ruby.andrews@x.dummyjson.com"},{"rating":5,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Clara Berry","reviewerEmail":"clara.berry@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":40,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"9467746727219","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"},{"id":5,"title":"Red Nail Polish","description":"The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.","category":"beauty","price":8.99,"discountPercentage":11.44,"rating":4.32,"stock":79,"tags":["beauty","nail polish"],"brand":"Nail Couture","sku":"BEA-NAI-NAI-005","weight":8,"dimensions":{"width":21.63,"height":16.48,"depth":29.84},"warrantyInformation":"1 month warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Benjamin Wilson","reviewerEmail":"benjamin.wilson@x.dummyjson.com"},{"rating":5,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Liam Smith","reviewerEmail":"liam.smith@x.dummyjson.com"},{"rating":1,"comment":"Very unhappy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Clara Berry","reviewerEmail":"clara.berry@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":22,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"4063010628104","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"},{"id":6,"title":"Calvin Klein CK One","description":"CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.","category":"fragrances","price":49.99,"discountPercentage":1.89,"rating":4.37,"stock":29,"tags":["fragrances","perfumes"],"brand":"Calvin Klein","sku":"FRA-CAL-CAL-006","weight":7,"dimensions":{"width":29.36,"height":27.76,"depth":20.72},"warrantyInformation":"1 week warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Layla Young","reviewerEmail":"layla.young@x.dummyjson.com"},{"rating":4,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Daniel Cook","reviewerEmail":"daniel.cook@x.dummyjson.com"},{"rating":3,"comment":"Not as described!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Jacob Cooper","reviewerEmail":"jacob.cooper@x.dummyjson.com"}],"returnPolicy":"90 days return policy","minimumOrderQuantity":9,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"2451534060749","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp","https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp","https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"},{"id":7,"title":"Chanel Coco Noir Eau De","description":"Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.","category":"fragrances","price":129.99,"discountPercentage":16.51,"rating":4.26,"stock":58,"tags":["fragrances","perfumes"],"brand":"Chanel","sku":"FRA-CHA-CHA-007","weight":7,"dimensions":{"width":24.5,"height":25.7,"depth":25.98},"warrantyInformation":"3 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ruby Andrews","reviewerEmail":"ruby.andrews@x.dummyjson.com"},{"rating":5,"comment":"Awesome product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Leah Henderson","reviewerEmail":"leah.henderson@x.dummyjson.com"},{"rating":5,"comment":"Very happy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Xavier Wright","reviewerEmail":"xavier.wright@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":1,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"4091737746820","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp","https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp","https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"},{"id":8,"title":"Dior J'adore","description":"J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.","category":"fragrances","price":89.99,"discountPercentage":14.72,"rating":3.8,"stock":98,"tags":["fragrances","perfumes"],"brand":"Dior","sku":"FRA-DIO-DIO-008","weight":4,"dimensions":{"width":27.67,"height":28.28,"depth":11.83},"warrantyInformation":"1 week warranty","shippingInformation":"Ships in 2 weeks","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nicholas Bailey","reviewerEmail":"nicholas.bailey@x.dummyjson.com"},{"rating":4,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Penelope Harper","reviewerEmail":"penelope.harper@x.dummyjson.com"},{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Emma Miller","reviewerEmail":"emma.miller@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":10,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"1445086097250","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp","https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp","https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"},{"id":9,"title":"Dolce Shine Eau de","description":"Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.","category":"fragrances","price":69.99,"discountPercentage":0.62,"rating":3.96,"stock":4,"tags":["fragrances","perfumes"],"brand":"Dolce & Gabbana","sku":"FRA-DOL-DOL-009","weight":6,"dimensions":{"width":27.28,"height":29.88,"depth":18.3},"warrantyInformation":"3 year warranty","shippingInformation":"Ships in 1 month","availabilityStatus":"Low Stock","reviews":[{"rating":4,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Mateo Bennett","reviewerEmail":"mateo.bennett@x.dummyjson.com"},{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nolan Gonzalez","reviewerEmail":"nolan.gonzalez@x.dummyjson.com"},{"rating":5,"comment":"Very happy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Aurora Lawson","reviewerEmail":"aurora.lawson@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":2,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"3023868210708","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp","https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp","https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp"},{"id":10,"title":"Gucci Bloom Eau de","description":"Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.","category":"fragrances","price":79.99,"discountPercentage":14.39,"rating":2.74,"stock":91,"tags":["fragrances","perfumes"],"brand":"Gucci","sku":"FRA-GUC-GUC-010","weight":7,"dimensions":{"width":20.92,"height":21.68,"depth":11.2},"warrantyInformation":"6 months warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":1,"comment":"Very dissatisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Cameron Perez","reviewerEmail":"cameron.perez@x.dummyjson.com"},{"rating":5,"comment":"Very happy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Daniel Cook","reviewerEmail":"daniel.cook@x.dummyjson.com"},{"rating":4,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Addison Wright","reviewerEmail":"addison.wright@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":2,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"3170832177880","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp","https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp","https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp"},{"id":11,"title":"Annibale Colombo Bed","description":"The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.","category":"furniture","price":1899.99,"discountPercentage":8.57,"rating":4.77,"stock":88,"tags":["furniture","beds"],"brand":"Annibale Colombo","sku":"FUR-ANN-ANN-011","weight":10,"dimensions":{"width":28.16,"height":25.36,"depth":17.28},"warrantyInformation":"1 year warranty","shippingInformation":"Ships in 1 month","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Christopher West","reviewerEmail":"christopher.west@x.dummyjson.com"},{"rating":4,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Vivian Carter","reviewerEmail":"vivian.carter@x.dummyjson.com"},{"rating":1,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Mason Wright","reviewerEmail":"mason.wright@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":1,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"3610757456581","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp","https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp","https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"},{"id":12,"title":"Annibale Colombo Sofa","description":"The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.","category":"furniture","price":2499.99,"discountPercentage":14.4,"rating":3.92,"stock":60,"tags":["furniture","sofas"],"brand":"Annibale Colombo","sku":"FUR-ANN-ANN-012","weight":6,"dimensions":{"width":12.75,"height":20.55,"depth":19.06},"warrantyInformation":"Lifetime warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Very unhappy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Christian Perez","reviewerEmail":"christian.perez@x.dummyjson.com"},{"rating":5,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lillian Bishop","reviewerEmail":"lillian.bishop@x.dummyjson.com"},{"rating":1,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lillian Simmons","reviewerEmail":"lillian.simmons@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":1,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"1777662847736","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp","https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp","https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"},{"id":13,"title":"Bedside Table African Cherry","description":"The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.","category":"furniture","price":299.99,"discountPercentage":19.09,"rating":2.87,"stock":64,"tags":["furniture","bedside tables"],"brand":"Furniture Co.","sku":"FUR-FUR-BED-013","weight":2,"dimensions":{"width":13.47,"height":24.99,"depth":27.35},"warrantyInformation":"5 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Aaliyah Hanson","reviewerEmail":"aaliyah.hanson@x.dummyjson.com"},{"rating":4,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Liam Smith","reviewerEmail":"liam.smith@x.dummyjson.com"},{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Avery Barnes","reviewerEmail":"avery.barnes@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":3,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"6441287925979","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp","https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp","https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp"},{"id":14,"title":"Knoll Saarinen Executive Conference Chair","description":"The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.","category":"furniture","price":499.99,"discountPercentage":2.01,"rating":4.88,"stock":26,"tags":["furniture","office chairs"],"brand":"Knoll","sku":"FUR-KNO-KNO-014","weight":10,"dimensions":{"width":13.81,"height":7.5,"depth":5.62},"warrantyInformation":"2 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Waste of money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ella Cook","reviewerEmail":"ella.cook@x.dummyjson.com"},{"rating":2,"comment":"Very dissatisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Clara Berry","reviewerEmail":"clara.berry@x.dummyjson.com"},{"rating":5,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Elena Long","reviewerEmail":"elena.long@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":5,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"8919386859966","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp","https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp","https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp"},{"id":15,"title":"Wooden Bathroom Sink With Mirror","description":"The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.","category":"furniture","price":799.99,"discountPercentage":8.8,"rating":3.59,"stock":7,"tags":["furniture","bathroom"],"brand":"Bath Trends","sku":"FUR-BAT-WOO-015","weight":10,"dimensions":{"width":7.98,"height":8.88,"depth":28.46},"warrantyInformation":"3 year warranty","shippingInformation":"Ships in 3-5 business days","availabilityStatus":"Low Stock","reviews":[{"rating":4,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Logan Torres","reviewerEmail":"logan.torres@x.dummyjson.com"},{"rating":5,"comment":"Very pleased!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Aria Parker","reviewerEmail":"aria.parker@x.dummyjson.com"},{"rating":3,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Dylan Wells","reviewerEmail":"dylan.wells@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":2,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"1958104402873","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp","https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp","https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp"},{"id":16,"title":"Apple","description":"Fresh and crisp apples, perfect for snacking or incorporating into various recipes.","category":"groceries","price":1.99,"discountPercentage":12.62,"rating":4.19,"stock":8,"tags":["fruits"],"sku":"GRO-BRD-APP-016","weight":9,"dimensions":{"width":13.66,"height":11.01,"depth":9.73},"warrantyInformation":"3 year warranty","shippingInformation":"Ships in 2 weeks","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Very satisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Sophia Brown","reviewerEmail":"sophia.brown@x.dummyjson.com"},{"rating":1,"comment":"Very dissatisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Scarlett Bowman","reviewerEmail":"scarlett.bowman@x.dummyjson.com"},{"rating":3,"comment":"Very unhappy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"William Gonzalez","reviewerEmail":"william.gonzalez@x.dummyjson.com"}],"returnPolicy":"90 days return policy","minimumOrderQuantity":7,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"7962803553314","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"},{"id":17,"title":"Beef Steak","description":"High-quality beef steak, great for grilling or cooking to your preferred level of doneness.","category":"groceries","price":12.99,"discountPercentage":9.61,"rating":4.47,"stock":86,"tags":["meat"],"sku":"GRO-BRD-BEE-017","weight":10,"dimensions":{"width":18.9,"height":5.77,"depth":18.57},"warrantyInformation":"3 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Tyler","reviewerEmail":"eleanor.tyler@x.dummyjson.com"},{"rating":4,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Alexander Jones","reviewerEmail":"alexander.jones@x.dummyjson.com"},{"rating":5,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Natalie Harris","reviewerEmail":"natalie.harris@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":43,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5640063409695","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp"},{"id":18,"title":"Cat Food","description":"Nutritious cat food formulated to meet the dietary needs of your feline friend.","category":"groceries","price":8.99,"discountPercentage":9.58,"rating":3.13,"stock":46,"tags":["pet supplies","cat food"],"sku":"GRO-BRD-FOO-018","weight":10,"dimensions":{"width":18.08,"height":9.26,"depth":21.86},"warrantyInformation":"1 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Noah Lewis","reviewerEmail":"noah.lewis@x.dummyjson.com"},{"rating":3,"comment":"Very unhappy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ruby Andrews","reviewerEmail":"ruby.andrews@x.dummyjson.com"},{"rating":2,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ethan Thompson","reviewerEmail":"ethan.thompson@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":18,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"1483991328610","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp"},{"id":19,"title":"Chicken Meat","description":"Fresh and tender chicken meat, suitable for various culinary preparations.","category":"groceries","price":9.99,"discountPercentage":13.7,"rating":3.19,"stock":97,"tags":["meat"],"sku":"GRO-BRD-CHI-019","weight":1,"dimensions":{"width":11.03,"height":22.11,"depth":16.01},"warrantyInformation":"1 year warranty","shippingInformation":"Ships in 1 month","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Mateo Bennett","reviewerEmail":"mateo.bennett@x.dummyjson.com"},{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Jackson Evans","reviewerEmail":"jackson.evans@x.dummyjson.com"},{"rating":3,"comment":"Not worth the price!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Sadie Morales","reviewerEmail":"sadie.morales@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":22,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"8829514594521","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp","https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp"},{"id":20,"title":"Cooking Oil","description":"Versatile cooking oil suitable for frying, sautéing, and various culinary applications.","category":"groceries","price":4.99,"discountPercentage":9.33,"rating":4.8,"stock":10,"tags":["cooking essentials"],"sku":"GRO-BRD-COO-020","weight":5,"dimensions":{"width":19.95,"height":27.54,"depth":24.86},"warrantyInformation":"Lifetime warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Very happy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Victoria McDonald","reviewerEmail":"victoria.mcdonald@x.dummyjson.com"},{"rating":2,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Hazel Evans","reviewerEmail":"hazel.evans@x.dummyjson.com"},{"rating":5,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Zoe Bennett","reviewerEmail":"zoe.bennett@x.dummyjson.com"}],"returnPolicy":"30 days return policy","minimumOrderQuantity":46,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"4874727824518","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp"},{"id":21,"title":"Cucumber","description":"Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.","category":"groceries","price":1.49,"discountPercentage":0.16,"rating":4.07,"stock":84,"tags":["vegetables"],"sku":"GRO-BRD-CUC-021","weight":4,"dimensions":{"width":12.8,"height":28.38,"depth":21.34},"warrantyInformation":"2 year warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lincoln Kelly","reviewerEmail":"lincoln.kelly@x.dummyjson.com"},{"rating":4,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Savannah Gomez","reviewerEmail":"savannah.gomez@x.dummyjson.com"},{"rating":2,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"James Davis","reviewerEmail":"james.davis@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":2,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5300066378225","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp"},{"id":22,"title":"Dog Food","description":"Specially formulated dog food designed to provide essential nutrients for your canine companion.","category":"groceries","price":10.99,"discountPercentage":10.27,"rating":4.55,"stock":71,"tags":["pet supplies","dog food"],"sku":"GRO-BRD-FOO-022","weight":10,"dimensions":{"width":16.93,"height":27.15,"depth":9.29},"warrantyInformation":"No warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nicholas Edwards","reviewerEmail":"nicholas.edwards@x.dummyjson.com"},{"rating":5,"comment":"Awesome product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Zachary Lee","reviewerEmail":"zachary.lee@x.dummyjson.com"},{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nova Cooper","reviewerEmail":"nova.cooper@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":43,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5906686116469","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp"},{"id":23,"title":"Eggs","description":"Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.","category":"groceries","price":2.99,"discountPercentage":11.05,"rating":2.53,"stock":9,"tags":["dairy"],"sku":"GRO-BRD-EGG-023","weight":2,"dimensions":{"width":11.42,"height":7.44,"depth":16.95},"warrantyInformation":"1 week warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Disappointing product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Penelope King","reviewerEmail":"penelope.king@x.dummyjson.com"},{"rating":3,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Tyler","reviewerEmail":"eleanor.tyler@x.dummyjson.com"},{"rating":4,"comment":"Very pleased!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Benjamin Foster","reviewerEmail":"benjamin.foster@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":32,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"3478638588469","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp"},{"id":24,"title":"Fish Steak","description":"Quality fish steak, suitable for grilling, baking, or pan-searing.","category":"groceries","price":14.99,"discountPercentage":4.23,"rating":3.78,"stock":74,"tags":["seafood"],"sku":"GRO-BRD-FIS-024","weight":6,"dimensions":{"width":14.95,"height":26.31,"depth":11.27},"warrantyInformation":"1 month warranty","shippingInformation":"Ships in 3-5 business days","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Would not buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Caleb Perkins","reviewerEmail":"caleb.perkins@x.dummyjson.com"},{"rating":5,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Isabella Jackson","reviewerEmail":"isabella.jackson@x.dummyjson.com"},{"rating":4,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nathan Dixon","reviewerEmail":"nathan.dixon@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":50,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"9595036192098","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp"},{"id":25,"title":"Green Bell Pepper","description":"Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.","category":"groceries","price":1.29,"discountPercentage":0.16,"rating":3.25,"stock":33,"tags":["vegetables"],"sku":"GRO-BRD-GRE-025","weight":2,"dimensions":{"width":15.33,"height":26.65,"depth":14.44},"warrantyInformation":"1 month warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Avery Carter","reviewerEmail":"avery.carter@x.dummyjson.com"},{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Henry Hill","reviewerEmail":"henry.hill@x.dummyjson.com"},{"rating":5,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Addison Wright","reviewerEmail":"addison.wright@x.dummyjson.com"}],"returnPolicy":"30 days return policy","minimumOrderQuantity":12,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"2365227493323","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp"},{"id":26,"title":"Green Chili Pepper","description":"Spicy green chili pepper, ideal for adding heat to your favorite recipes.","category":"groceries","price":0.99,"discountPercentage":1,"rating":3.66,"stock":3,"tags":["vegetables"],"sku":"GRO-BRD-GRE-026","weight":7,"dimensions":{"width":15.38,"height":18.12,"depth":19.92},"warrantyInformation":"2 year warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"Low Stock","reviews":[{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Luna Russell","reviewerEmail":"luna.russell@x.dummyjson.com"},{"rating":1,"comment":"Waste of money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Noah Lewis","reviewerEmail":"noah.lewis@x.dummyjson.com"},{"rating":3,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Clara Berry","reviewerEmail":"clara.berry@x.dummyjson.com"}],"returnPolicy":"30 days return policy","minimumOrderQuantity":39,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"9335000538563","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp"},{"id":27,"title":"Honey Jar","description":"Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.","category":"groceries","price":6.99,"discountPercentage":14.4,"rating":3.97,"stock":34,"tags":["condiments"],"sku":"GRO-BRD-HON-027","weight":2,"dimensions":{"width":9.28,"height":21.72,"depth":17.74},"warrantyInformation":"1 month warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":1,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Autumn Gomez","reviewerEmail":"autumn.gomez@x.dummyjson.com"},{"rating":4,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Benjamin Wilson","reviewerEmail":"benjamin.wilson@x.dummyjson.com"},{"rating":2,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nicholas Edwards","reviewerEmail":"nicholas.edwards@x.dummyjson.com"}],"returnPolicy":"90 days return policy","minimumOrderQuantity":47,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"6354306346329","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp"},{"id":28,"title":"Ice Cream","description":"Creamy and delicious ice cream, available in various flavors for a delightful treat.","category":"groceries","price":5.49,"discountPercentage":8.69,"rating":3.39,"stock":27,"tags":["desserts"],"sku":"GRO-BRD-CRE-028","weight":1,"dimensions":{"width":14.83,"height":15.07,"depth":24.2},"warrantyInformation":"1 month warranty","shippingInformation":"Ships in 2 weeks","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Very pleased!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Elijah Cruz","reviewerEmail":"elijah.cruz@x.dummyjson.com"},{"rating":4,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Jace Smith","reviewerEmail":"jace.smith@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Sadie Morales","reviewerEmail":"sadie.morales@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":42,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"0788954559076","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp","https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp","https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp","https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp"},{"id":29,"title":"Juice","description":"Refreshing fruit juice, packed with vitamins and great for staying hydrated.","category":"groceries","price":3.99,"discountPercentage":12.06,"rating":3.94,"stock":50,"tags":["beverages"],"sku":"GRO-BRD-JUI-029","weight":1,"dimensions":{"width":18.56,"height":21.46,"depth":28.02},"warrantyInformation":"6 months warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nolan Gonzalez","reviewerEmail":"nolan.gonzalez@x.dummyjson.com"},{"rating":4,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Bella Grant","reviewerEmail":"bella.grant@x.dummyjson.com"},{"rating":5,"comment":"Awesome product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Aria Flores","reviewerEmail":"aria.flores@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":25,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"6936112580956","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp"},{"id":30,"title":"Kiwi","description":"Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.","category":"groceries","price":2.49,"discountPercentage":15.22,"rating":4.93,"stock":99,"tags":["fruits"],"sku":"GRO-BRD-KIW-030","weight":5,"dimensions":{"width":19.4,"height":18.67,"depth":17.13},"warrantyInformation":"6 months warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Emily Brown","reviewerEmail":"emily.brown@x.dummyjson.com"},{"rating":2,"comment":"Would not buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Jackson Morales","reviewerEmail":"jackson.morales@x.dummyjson.com"},{"rating":4,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nora Russell","reviewerEmail":"nora.russell@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":30,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"2530169917252","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp"}],"total":194,"skip":0,"limit":30}
    data = JSON.stringify(data)
    localStorage.setItem("Product-list",data)
}
function getData(){
    let data = localStorage.getItem('Product-list')
    data = JSON.parse(data)
    return data;
}

function rakeTask(){
    (!localStorage.getItem('user-list'))&& localStorage.setItem('user-list','[]')
}