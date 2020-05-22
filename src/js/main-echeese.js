document.addEventListener("DOMContentLoaded", function(event) {
    const $signIn = document.querySelector('header .sing-in')
    const $menuMobile = document.querySelector('#menu-mobile')
    vtexjs.checkout.getOrderForm()
        .done(function(orderForm) {
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
})