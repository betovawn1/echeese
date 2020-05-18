document.addEventListener("DOMContentLoaded", function(event) {
    const $signIn = document.querySelector('header .sing-in')
    const $menuMobile = document.querySelector('#menu-mobile')
    vtexjs.checkout.getOrderForm()
        .done(function(orderForm) {
            console.log('order form ==> ', orderForm)
            if (orderForm.loggedIn) {
                if (window.innerWidth > 991) {
                    $signIn.classList.add('logged')
                    if (orderForm.clientProfileData.firstName) {
                        $signIn.querySelector('.welcome-signed .welcome-name').innerText = orderForm.clientProfileData.firstName
                    } else if (orderForm.clientProfileData.email) {
                        $signIn.querySelector('.welcome-signed .welcome-name').innerText = orderForm.clientProfileData.email
                    }
                } else {
                    $menuMobile.classList.add('logged')
                    if (orderForm.clientProfileData.firstName) {
                        $menuMobile.querySelector('.menu-mobile-account .welcome-signed-mobile .welcome-name').innerText = orderForm.clientProfileData.firstName
                    } else if (orderForm.clientProfileData.email) {
                        $menuMobile.querySelector('.menu-mobile-account .welcome-signed-mobile .welcome-name').innerText = orderForm.clientProfileData.email
                    }
                }
            }
        })
    document.querySelector('.hamburguer-menu').addEventListener('click', function(ev) {
        document.getElementById('menu-mobile').classList.add('d-block')
        document.querySelector('.overlay-menu-mobile').classList.add('d-block')
    })
    document.querySelector('.overlay-menu-mobile').addEventListener('click', function() {
        document.getElementById('menu-mobile').classList.remove('d-block')
        document.querySelector('.overlay-menu-mobile').classList.remove('d-block')
    })
    document.getElementById('menu-mobile')
        .querySelectorAll('.menu-list-mobile h3')
            .forEach(function(title_mobile) {
                title_mobile.addEventListener('click', function(ev) {   
                    this.classList.toggle('clicked')
                    this.nextElementSibling.classList.toggle('d-block')
                })
            })
    document.querySelectorAll('#departament-navegador .navigation h4').forEach(function(h4) {
        h4.addEventListener('click', function(ev) {
            this.classList.toggle('rotate')
            this.nextElementSibling.classList.toggle('clicked')
        })
    })
    document.querySelectorAll('#departament-navegador .navigation h5').forEach(function(h5) {
        h5.addEventListener('click', function(ev) {
            this.classList.toggle('rotate')
            this.nextElementSibling.classList.toggle('clicked')
        })
    })
    // init
    // function getOrder(){
    //     console.log('getOrder')
    //     vtexjs.checkout.getOrderForm({
    //         cache: !1
    //     }).done(function(data){
    //         console.log('getOrder data => ', data)
    //         let customMinicartBody = document.querySelector('.custom-minicart-body')
    //         let totalPrice = new Object()
    //         if (data.items.length > 0) {
    //             document.querySelector('.badge').innerHTML = data.items.length
    //             let items, item, price = ''
    //             let counter = 0
    //             customMinicartBody.innerHTML = ''
    //             data.items.forEach(function(el, id){
    //                 console.log('el ', el)
    //                 let n = el.price.toString()
    //                 console.log('n ', typeof n)
    //                 let price = n.replace(n.substr(n.length - 2), `,${n.substr(n.length - 2)}`)
    //                 item = `<div class="item-in-cart d-flex py-2 pr-3">
    //                                 <div class="item-img d-flex align-items-center justify-content-center p-3 w-25">
    //                                     <a href="${el.detailUrl}">
    //                                         <img src="${el.imageUrl}" />
    //                                     </a>
    //                                 </div>
    //                                 <div class="item-info-wrapper d-flex flex-column justify-content-center w-100">
    //                                     <div class="item-title-wrapper d-flex align-items-start justify-content-between">
    //                                         <p class="item-title">${el.name}</p>
    //                                         <div class="close-button ml-3 clickable" item-position="${counter}">x</div>
    //                                     </div>
    //                                     <div class="item-price-wrapper d-flex align-items-center justify-content-between">
    //                                         <div class="item-price"><span class="mr-2">Por apenas:</span>R$ ${price.toLocaleString({ style: 'currency', currency: 'pt-BR' })}</div>
    //                                         <span class="mini-cart-box-qtd" item-position="${counter}">
    //                                             <button class="mini-cart-btn-qtd mini-cart-btn-minus">-</button>
    //                                             <input type="text" class="mini-cart-qtd d-inline-block" value="${el.quantity}" />
    //                                             <button class="mini-cart-btn-qtd mini-cart-btn-plus">+</button>
    //                                         </span>
    //                                     </div>
    //                                 </div>
    //                             </div>`

    //                 customMinicartBody.innerHTML += item  
    //                 item = ''
                        
    //                 totalPrice[id] = {
    //                     price: parseInt(el.price),
    //                     qtd: el.quantity
    //                 }
                        
    //                 ++ counter
    //             })        
    //         } else {
    //             customMinicartBody.innerHTML = `
    //                 <div class="d-flex align-items-center justify-content-center w-100 h-100 px-4">
    //                     <img src="./arquivos/minicart-void.jpg" class="img-fluid" />
    //                 </div>`
    //         }

    //         //quantidade
    //         document.querySelectorAll('.mini-cart-box-qtd').forEach(function(miniCartBoxQtd){
    //             let miniCartQtd = miniCartBoxQtd.querySelector('.mini-cart-qtd')
    //             miniCartBoxQtd.querySelector('.mini-cart-btn-minus').addEventListener('click', function(ev){
    //                 if (miniCartQtd.value < 2) return
    //                 miniCartQtd.value = -- miniCartQtd.value
    //                 quantityItem(miniCartBoxQtd, miniCartBoxQtd.getAttribute('item-position'), miniCartQtd.value)
    //             })
    //             miniCartBoxQtd.querySelector('.mini-cart-btn-plus').addEventListener('click', function(ev){
    //                 miniCartQtd.value = ++ miniCartQtd.value
    //                 console.lo
    //                 quantityItem(miniCartBoxQtd, miniCartBoxQtd.getAttribute('item-position'), miniCartQtd.value)
    //             })
    //         })

    //         //excluir
    //         console.log('close button all ', document.querySelectorAll('.close-button'))
    //         document.querySelectorAll('.close-button').forEach(function(closeButton){
    //             console.log(closeButton)
    //             closeButton.addEventListener('click', function(ev){
    //                 console.log('fechar')
    //                 deleteItem(closeButton.getAttribute('item-position'), 0)
    //             })
    //         })
            
    //         //valor total
    //         if (totalPrice == 0) {
    //             document.querySelector('.custom-minicart-totals .total span').innerHTML = 0
    //         } else {
    //             let price = new Array()
    //             for (let [key, value] of Object.entries(totalPrice)) {
    //                 price.push(value.price * value.qtd)
    //             }
    //             let amount = 0
    //             price.forEach(function(priceSum) {
    //                 amount += priceSum
    //             })
    //             let finalPrice = amount.toString().split('')
    //             finalPrice[finalPrice.length-2] = `,${finalPrice[finalPrice.length-2]}`
    //             let finalfinalPrice = ''
    //             finalPrice.forEach(function(priceBuild) {
    //                 finalfinalPrice += priceBuild
    //             })
    //             document.querySelector('.custom-minicart-totals .total span').innerHTML = finalfinalPrice
    //         }
    //     })
    // }

    // function quantityItem(parentElement ,position, quantity){
    //     parentElement.style.opacity = "0.5";
    //     parentElement.querySelector('.mini-cart-btn-plus').disabled = true
    //     parentElement.querySelector('.mini-cart-btn-minus').disabled = true
    //     let obj = {index:position, quantity:quantity}
    //     vtexjs.checkout.updateItems([obj], null, !1).done(function(){
    //         getOrder()
    //     })
    // }

    // function deleteItem(itemPosition, quantity){
    //     vtexjs.checkout.getOrderForm().done(function(orderForm) {
    //         let obj = {index:itemPosition, quantity:quantity}
    //         vtexjs.checkout.removeItems([obj]).done(function(orderForm) {
    //             alert('Item removido!');
    //             getOrder()
    //         })
    //     })
    // }

    // getOrder()

    document.querySelectorAll('.box-item .buy-button-showcase-shelf').forEach(function(button) {
        button.addEventListener('click', function(ev) {
            vtexjs.checkout.getOrderForm({
                cache: !1
            }).done(function(a) {
                let item = {
                    id: parseInt(button.parentNode.getAttribute('data-sku')),
                    quantity: 1, //Standard
                    seller: 1 //Unique
                }
        
                console.log([item])
            
                vtexjs.checkout.addToCart([item])
                    .done(function(orderForm){
                        console.log(orderForm)
                        getOrder()
        
                        document.querySelector('.custom-col-minicart').click()
                    })
                    .catch(function() {
                        alert('Erro ao tentar inserir o produto no carrinho')
                    })
            })
        })
    })

    if (document.getElementById('product-page')) {
        let button = document.querySelector('.buy-button')
        button.addEventListener('click', function(ev) {
            ev.preventDefault()
            vtexjs.checkout.getOrderForm({
                cache: !1
            }).done(function(a) {
                let item = {
                    id: parseInt(button.getAttribute('href').split('sku=')[1].split('&qty=')[0]),
                    quantity: 1, //Standard
                    seller: 1 //Unique
                }
        
                console.log([item])
            
                vtexjs.checkout.addToCart([item])
                    .done(function(orderForm){
                        console.log(orderForm)
                        getOrder()
        
                        document.querySelector('.custom-col-minicart').click()
                    })
                    .catch(function() {
                        alert('Erro ao tentar inserir o produto no carrinho')
                    })
            })
        })
    }
})