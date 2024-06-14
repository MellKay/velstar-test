let productData = {
    "collection": {
        "title": "Mens Summer Tops",
        "products": [
            {
                "title": "T-Shirt",
                "price": "$35",
                "color": "Black",
                "alt_colors": ["#5B5B5B", "#EABB41", '#C4C4C4'],
                "images": [
                    {
                        "src": "./assets/image-1.png",
                        "alt": "T-shirt alt text"
                    },
                    {
                        "src": "./assets/hover-image.png",
                        "alt": "T-shirt Hover alt text"
                    }
                ]
            },
            {
                "title": "Jacket 1",
                "price": "$35",
                "color": "Black",
                "alt_colors": ["#5B5B5B", "#EABB41", '#C4C4C4'],
                "images": [
                    {
                        "src": "./assets/image-2.png",
                        "alt": "Jacket 1 alt text"
                    },
                    {
                        "src": "./assets/hover-image.png",
                        "alt": "Jacket 1 Hover alt text"
                    }
                ]
            },
            {
                "title": "Jacket 2",
                "price": "$35",
                "color": "Black",
                "alt_colors": ["#5B5B5B", "#EABB41", '#C4C4C4'],
                "images": [
                    {
                        "src": "./assets/image-3.png",
                        "alt": "Jacket 2 alt text"
                    },
                    {
                        "src": "./assets/hover-image.png",
                        "alt": "Jacket 2 Hover alt text"
                    }
                ]
            },
            {
                "title": "Sweatshirt",
                "price": "$35",
                "color": "Black",
                "alt_colors": ["#5B5B5B", "#EABB41", '#C4C4C4'],
                "images": [
                    {
                        "src": "./assets/image-4.png",
                        "alt": "Sweatshirt alt text"
                    },
                    {
                        "src": "./assets/hover-image.png",
                        "alt": "Sweatshirt Hover alt text"
                    }
                ]
            },
            {
                "title": "Sweatshirt",
                "price": "$35",
                "color": "Black",
                "alt_colors": ["#5B5B5B", "#EABB41", '#C4C4C4'],
                "images": [
                    {
                        "src": "./assets/image-4.png",
                        "alt": "Sweatshirt alt text"
                    },
                    {
                        "src": "./assets/hover-image.png",
                        "alt": "Sweatshirt Hover alt text"
                    }
                ]
            },
            {
                "title": "Jacket 2",
                "price": "$35",
                "color": "Black",
                "alt_colors": ["#5B5B5B", "#EABB41", '#C4C4C4'],
                "images": [
                    {
                        "src": "./assets/image-3.png",
                        "alt": "Jacket 2 alt text"
                    },
                    {
                        "src": "./assets/hover-image.png",
                        "alt": "Jacket 2 Hover alt text"
                    }
                ]
            },
            {
                "title": "T-Shirt",
                "price": "$35",
                "color": "Black",
                "alt_colors": ["#5B5B5B", "#EABB41", '#C4C4C4'],
                "images": [
                    {
                        "src": "./assets/image-1.png",
                        "alt": "T-shirt alt text"
                    },
                    {
                        "src": "./assets/hover-image.png",
                        "alt": "T-shirt Hover alt text"
                    }
                ]
            },
            {
                "title": "Jacket 1",
                "price": "$35",
                "color": "Black",
                "alt_colors": ["#5B5B5B", "#EABB41", '#C4C4C4'],
                "images": [
                    {
                        "src": "./assets/image-2.png",
                        "alt": "Jacket 1 alt text"
                    },
                    {
                        "src": "./assets/hover-image.png",
                        "alt": "Jacket 1 Hover alt text"
                    }
                ]
            }
        ]
    }
}

let productGrid = document.querySelector('.collection-product-grid__products')

let products = productData.collection.products

for (let i = 0; i < products.length; i++) {

    // to dynamically populate content from JSON above 

    let card = document.createElement('div')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')
    let colorEl = document.createElement('p')
    let titleEl = document.createElement('h4')
    let priceEl = document.createElement('p')
    let altColorsEl = document.createElement('div')

    card.classList.add('product-card')
    altColorsEl.classList.add('alt-colors-wrap')

    // images

    img1.src = products[i].images[0].src
    img1.alt = products[i].images[0].alt
    img1.classList.add('image-1')
    img2.src = products[i].images[1].src
    img2.alt = products[i].images[1].alt
    img2.classList.add('image-2')

    // text content

    // colorEl.innerText = products[i].color
    titleEl.innerText = products[i].title
    priceEl.innerText = products[i].price
    
    for (let j = 0; j < products[i].alt_colors.length; j++) {
        let colorSwatch = document.createElement('span')
        colorSwatch.classList.add('swatch')
        colorSwatch.style.backgroundColor = products[i].alt_colors[j] 
        altColorsEl.appendChild(colorSwatch)
    }

    // append all elements to card and append card to grid

    card.appendChild(img1)
    card.appendChild(img2)
    // card.appendChild(colorEl)
    card.appendChild(titleEl)
    card.appendChild(priceEl)
    card.appendChild(altColorsEl)

    productGrid.appendChild(card)
}