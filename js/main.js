let salesmansSelect = document.querySelector('#salesmansSelect')
let titleProduct = document.querySelector('#titleProduct')
let priceProduct = document.querySelector('#priceProduct')
let brandsSelect = document.querySelector('#brandsSelect')
let categorySelect = document.querySelector('#categorySelect')
let colorSelect = document.querySelector('#colorSelect')
let materialSelect = document.querySelector('#materialSelect')
let styleSelect = document.querySelector('#styleSelect')
let genderSelect = document.querySelector('#genderSelect')
let seasonSelect = document.querySelector('#seasonSelect')
let photoProduct = document.querySelector('#photoProduct')
let cityProduct = document.querySelector('#cityProduct')
let topSelect = document.querySelector('#topSelect')
let cards = document.querySelector('#cards')
let addProductBtn = document.querySelector('#addProduct')
let btnCategory = document.querySelector('.btn-filter')
let accordion = document.querySelector('.accordion')
let btnAvatar = document.querySelector('.btn-avatar')
let userMenu = document.querySelector('#navbarTogglerDemo03')
let addProductPage = document.querySelector('#addProductPage')



let products = [
    {
        'brand': "LOUIS VUITTON",
        'category': "Жінкам",
        'color': "Чорний",
        'gender': "Для жінок",
        'material': "Без наповнювача",
        'photo': "img/product/image2.png",
        'price': "3799",
        'salesman': "LoveBrand",
        'season': "Літо",
        'style': "Діловий",
        'title': "Темно-сині джинси Louis Vuitton",
        'city': 'Херсон',
        'top': "ні",
        'stock': 'Акції',
        'code': '12345678'
    },
    {
        'brand': "THOM BROWNE",
        'category': "Дитячі речі",
        'color': "Чорний",
        'gender': "Для чоловіків",
        'material': "Без наповнювача",
        'photo': "img/product/image2-1.png",
        'price': "8599",
        'salesman': "Sell_For_Men",
        'season': "Літо",
        'style': "Діловий",
        'title': "Чорний піджак Thom Browne",
        'city': 'Хмельницький',
        'top': "ні",
        'stock': 'Акції',
        'code': '12452678',
    },
    {
        'brand': "ACNE",
        'category': "Жінкам",
        'color': "Зелений",
        'gender': "Для жінок",
        'material': "Синтетика",
        'photo': "img/product/image2-5.png",
        'price': "4199",
        'salesman': "Alexalex",
        'season': "Весна/осінь",
        'style': "Спортивний",
        'title': "Бомбер Acne на блискавці",
        'city': 'Київ',
        'top': "так",
        'stock': 'Акції',
        'code': '157555678'
    },
    {
        'brand': "CHANEL",
        'category': "Чоловікам",
        'color': "Помаранчевий",
        'gender': "Для чоловіків",
        'material': "Синтепон",
        'photo': "img/product/image2-7.png",
        'price': "1599",
        'salesman': "LoveBrand",
        'season': "Весна/осінь",
        'style': "Спортивний",
        'title': "Помаранчевий бомбер Woolrich  ",
        'city': 'Кропивницький',
        'top': "так",
        'stock': 'Акції',
        'code': '1236699678'
    },

]
let salesmans = [
    {
        'name': 'LoveBrand',
        'avatar': 'img/avatar/avatar.png'
    },
    {
        'name': 'Sell_For_Men',
        'avatar': 'img/avatar/avatar-1.png'
    },
    {
        'name': 'Alexalex',
        'avatar': 'img/avatar/avatar-2.png'
    },
    {
        'name': 'Brandear',
        'avatar': 'img/avatar/avatar-3.png'
    },
    {
        'name': 'LoveBrand',
        'avatar': 'img/avatar/avatar-4.png'
    },
    {
        'name': 'Deeva_Sofia',
        'avatar': 'img/avatar/avatar-5.png'
    },

]
let brands = [
    'LOUIS VUITTON',
    'BROWNE',
    'CANALI',
    'ELENA GHISELINI',
    'ACNE',
    'GUCCI',
    'CHANEL',
    'HACHE',
]
let categories = [
    'Жінкам',
    'Чоловікам',
    'Дитячі речі',
    'Акції',
]
let colors = [
    'Червоний',
    'Помаранчевий',
    'Жовтний',
    'Зелений',
    'Блакитний',
    'Синій',
    'Фіолетовий',
    'Чорний',
    'інші кольори',
]
let materials = [
    'Без наповнювача',
    'Поліестер',
    'Синтепон',
    'Синтетика',
    'Бавовна',
    'Штучні материіали',
    'Інші материіали',
]
let styles = [
    'Діловий',
    'Спортивний',
    'Класичний',
    'Вітаж',
]


// отрисовка селектов в модальном окне
function drawStyleSelect() {
    styles.forEach(function (style) {
        const option = document.createElement('option');
        option.setAttribute('value', style)
        option.innerText += style;
        styleSelect.appendChild(option);
    })
}

function drawMaterialSelect() {
    materials.forEach(function (material) {
        const option = document.createElement('option');
        option.setAttribute('value', material)
        option.innerText += material;
        materialSelect.appendChild(option);
    })
}

function drawСolorSelect() {
    colors.forEach(function (color) {
        const option = document.createElement('option');
        option.setAttribute('value', color)
        option.innerText += color;
        colorSelect.appendChild(option);
    })
}

function drawSalesmansSelect() {
    salesmans.forEach(function (salesman) {
        const option = document.createElement('option');
        option.setAttribute('value', salesman.name)
        option.innerText += salesman.name;
        salesmansSelect.appendChild(option);
        console.log(salesman)
        console.log(option);
    })
}

function drawBrandsSelect() {
    brands.forEach(function (brand) {
        const option = document.createElement('option');
        option.setAttribute('value', brand)
        option.innerText += brand;
        brandsSelect.appendChild(option);
    })
}

function drawCategoriesSelect() {
    categories.forEach(function (category) {
        const option = document.createElement('option');
        option.setAttribute('value', category)
        option.innerText += category;
        categorySelect.appendChild(option);
    })
}

// удаление продуктов для перерисовки
function removeDrawProduct() {
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild)
    }
}

// поиск аватара продавца
function getAvatar(salesmanAvatar) {
    for (let i = 0; i < salesmans.length; i++) {
        if (salesmans[i].name === salesmanAvatar) {
            return salesmans[i].avatar
        }
    }
    salesmans.forEach(function (salesman) {
    })
}

// отрисовка лишки (пока не работает)
function drawLi() {
    return `
        <li class="list-group-item fw-bold d-flex justify-content-between">
            <div class="d-flex gap-3">
                <input class="form-check-input me-1" id="category1" type="checkbox" value=""
                       aria-label="...">
                    <label for="category1">Жінкам</label>
            </div>
            <span class="">(23)</span>
        </li>`
}


// отрисовка кнопки ТОП
function drawTop(top) {
    if (top === 'так') {
        return `<div class="position-absolute isTop">
                    <span class="topBtn">ТОП</span>
                </div>`
    } else {
        return ''
    }
}

// отрисовка товара
function drawProducts(products) {
    products.forEach(function (product) {
        let html = `
            <div class="card position-relative ">
                <div class="position-absolute favorite heart" data-code="${product.code}">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2426 1.75736C12.5858 -0.585787 16.3848 -0.585787 
                    18.7279 1.75736C21.0711 4.10051 21.0711 7.89949 18.7279 10.2426L10.2426 18.728L1.75736 10.2427C-0.585787 
                    7.89953 -0.585786 4.10054 1.75736 1.75739C4.1005 -0.585744 7.89947 -0.58576 10.2426 1.75736ZM17.3137 
                    3.17158C15.7516 1.60948 13.2189 1.60947 11.6568 3.17157L10.2426 4.58579L8.82843 3.17161C7.26633 1.60951 
                    4.73367 1.60951 3.17157 3.17161C1.60948 4.7337 1.60948 7.26636 3.17157 8.82846L10.2426 15.8995L17.3137 
                    8.82843C18.8758 7.26633 18.8758 4.73367 17.3137 3.17158Z" />
                    </svg>

                </div>
                    ${drawTop(product.top)} 
                <div class="wrap m-auto">
                    <img src=" ${product.photo} " class="card-product-img m-0" alt="...">
                </div>
                <div class="card-body">
                    <p class="card-text brand-name fw-bold"> ${product.brand} </p>
                    <p class="card-text product-name">${product.title}</p>
                    <div class="product-info d-flex flex-row justify-content-between">
                        <div class="price">
                            <p class="card-text product-price-old text-decoration-line-through m-0">${Math.round(product.price * 1.2)}</p>
                            <p class="card-text product-price-new fw-bold">${product.price}</p>
                        </div>
                        <div class="salesManager">
                            <div class="city d-flex justify-content-end align-items-center gap-1">
                                <img src="img/nav.svg">
                                <p class="mb-0 text-end">${product.city}</p>
                            </div>
                            <div class="salesman d-flex justify-content-end align-items-center gap-2">
                                <img src="${getAvatar(product.salesman)}" alt="">
                                <p class="card-text product-price-new">${product.salesman}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        cards.innerHTML += html
    })
}

// localStorage
if (localStorage['myShop'] !== undefined ) {
    products = JSON.parse(localStorage['myShop'])
    drawProducts(products)
} else {
    drawProducts(products)
}


// отрисовка селектов в модальном окне
addProductPage.addEventListener('click', function () {
    drawStyleSelect()
    drawMaterialSelect()
    drawСolorSelect()
    drawCategoriesSelect()
    drawBrandsSelect()
    drawSalesmansSelect()
})

// добавление нового продукта на страницу
addProductBtn.addEventListener('click', function () {


    let newProduct = {
        'salesman': salesmansSelect.value,
        'title': titleProduct.value,
        'price': priceProduct.value,
        'brand': brandsSelect.value,
        'gender': genderSelect.value,
        'category': categorySelect.value,
        'color': colorSelect.value,
        'material': materialSelect.value,
        'style': styleSelect.value,
        'season': seasonSelect.value,
        'photo': photoProduct.value,
        'city': cityProduct.value,
        'top': topSelect.value,
        'code': Date.now()
    }
    if (salesmansSelect.value !== 'Оберіть продавця' && titleProduct.value !== '' && priceProduct.value !== ''
        && brandsSelect.value !== 'Оберіть бренд' && genderSelect.value !== 'Стать' && categorySelect.value !== 'Оберіть категорію' && colorSelect.value !== 'Оберіть колір' &&
        materialSelect.value !== 'Оберіть матеріал' && styleSelect.value !== 'Оберіть стиль' && seasonSelect.value !== 'Оберіть сезонність' && photoProduct.value !== '' && cityProduct.value !== ''){
        products.push(newProduct)
        saveState()
        removeDrawProduct()
        drawProducts(products)
        createToast (message[0])

    } else {
        createToast (message[1])
    }

})

// localStorage
function saveState() {
    localStorage['myShop'] = JSON.stringify(products);
}


// отрисовка количества товара в фильтрах по категориям

function drawFilteredProductCount() {
    let countFilteredProduct;
    for (let i = 0; i <= categories.length; i++) {
        let counter = function countCategory(category) {
            let count = 0;
            products.filter(function (product) {
                if (product.category === category) {
                    count++
                }
            })
            return count
        }
        let idCategory = '#category' + i;

        countFilteredProduct = counter(categories[idCategory])

        // document.querySelector(idCategory).parentNode.parentNode.childNodes[3].textContent = `( ${countFilteredProduct} )`
    }


}

drawFilteredProductCount()

// проверка ширины экрана

function checkWidth() {
    // страницу для поиска нужного элемента
    if (window.screen.width < 1200) {

        userMenu.classList.add('collapse');
    } else {
        userMenu.classList.remove('collapse');

    }
}


// кнопка категории

btnCategory.addEventListener('click', function () {
    if (accordion.classList.contains('active')) {

        accordion.classList.remove('active')
    } else {
        accordion.classList.add('active')
    }
})


// кнопка аватар //

btnAvatar.addEventListener('click', function () {
    if (userMenu.classList.contains('active')) {
        console.log(userMenu.classList)
        userMenu.classList.remove('active')

    } else {
        console.log(userMenu.classList)
        userMenu.classList.add('active')
    }
})

// отслеживание ширины экрана
window.addEventListener('resize', function () {
    checkWidth();
});


checkWidth();

// фильтр товаров и отрисовка

let checkBoxes = accordion.querySelectorAll('.form-check-input');
checkBoxes.forEach(function (checkBox) {
    checkBox.addEventListener('click', function () {
        let checkBoxesClickedArr = [];
        let productFilteredArr = [];
        checkBoxes.forEach(function (checkBoxClicked) {
            if (checkBoxClicked.checked) {
                checkBoxesClickedArr.push(checkBoxClicked.getAttribute('value'))
            }
        })
        products.forEach(function (product) {
            Object.values(product).forEach(function (value) {
                if (checkBoxesClickedArr.includes(value)) {
                    if (!productFilteredArr.includes(product))
                        productFilteredArr.push(product)
                }
            })
        })
        removeDrawProduct()
        if (productFilteredArr.length > 0) {
            drawProducts(productFilteredArr)
        } else {
            drawProducts(products)
        }
    })
})

// отрисовка количества доступных товаров по фильтру

checkBoxes.forEach(function (checkBox) {
    let checkBoxVal = checkBox.getAttribute('value');
    let checkBoxId = '#' + checkBox.getAttribute('id');
    let count = 0;
    products.forEach(function (product) {
        if (Object.values(product).includes(checkBoxVal)) {
            count++
        }
    })
    document.querySelector(checkBoxId).parentNode.parentNode.childNodes[3].textContent = `( ${count} )`
})


let selectSort = document.querySelector('#sort');
selectSort.addEventListener('change', function (select) {
    if (selectSort.value === 'price') {

        products.sort((x, y) => x.price - y.price)

        removeDrawProduct()
        drawProducts(products)
    } else if (selectSort.value === 'name') {

        products.sort(function (x, y) {
            if (x.title < y.title) {
                return -1;
            }

            if (x.title > y.title) {
                return 1;
            }

        });

        removeDrawProduct()
        drawProducts(products)
    }

})


let waitingForClick = false;

function theClick(ev) {
    switch (ev.detail) {
        case 1: // первый клик
            waitingForClick = setTimeout(function () {
                console.log("Hi");
            }, 500);
            break;
        default: // больше чем один клик
            if (waitingForClick) { // отменить ждущий клик
                clearTimeout(waitingForClick);
                waitingForClick = false;
            }
            console.log("Bye");
            break;
    }
}

let favoriteCount = 0;
let favoriteProducts = [];
let hearts = document.querySelectorAll('.heart')
let favorite = document.querySelector('#heart_header')



hearts.forEach(function (heart) {
    heart.addEventListener('click', function (e) {
        let style = e.currentTarget.classList
        console.log(style)
        if (!style.contains('active')) {
            e.currentTarget.classList.add('active')
            let heartAtr = e.currentTarget.getAttribute('data-code')
            let favProductAdd = products.find(function (product) {
                return product.code === heartAtr
            })
            if (favoriteProducts.indexOf(favProductAdd) === -1) {
                favoriteProducts.push(favProductAdd)
            }
            favoriteCount++;
            favorite.textContent = favoriteCount;
            console.log(favoriteProducts)

        } else {
            e.currentTarget.classList.remove('active');
            let cardAtr = e.target.getAttribute('data-code')
            let favProductDel = favoriteProducts.find(function (product) {
                return product.code === cardAtr
            })
            favoriteProducts.splice(favoriteProducts.indexOf(favProductDel))
            favoriteCount--
            favorite.textContent = favoriteCount;
            console.log(favoriteProducts)
        }
    })
})

let cartCount = 0;
let cartProducts = [];
let cardBtn = document.querySelectorAll('.card')
let cart = document.querySelector('#cart_header')

cardBtn.forEach(function (card) {
    card.addEventListener('dblclick', function (e) {
        let cartAtr = card.firstChild.nextElementSibling.getAttribute('data-code')
        console.log(cartAtr)
        let cartProductAdd = products.find(function (product) {
            return product.code === cartAtr
        })
        if (cartProducts.indexOf(cartProductAdd) < 0) {
            cartProducts.push(cartProductAdd)
        }
        cartCount++;
        cart.textContent = cartCount;
        console.log(cartProducts)
    })
})

const message = [
    'Товар успешно добавлен',
    'Товар не добавлен, не введены обязательные параметры',
    'Message Three',
    'Message Four',
    'Message Five',
];

function createToast (message) {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerText = message;
    toasts.appendChild(toast)

    setTimeout(function () {
        toast.remove()
    }, 10000)

}



