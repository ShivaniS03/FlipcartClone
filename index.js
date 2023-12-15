const product = [
    {
        id: 0,
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70',
        title: 'Nothing phone 2',
        price: 'Incl of offers',
    },
    {
        id: 1,
        image: 'https://tse4.mm.bing.net/th?id=OIP.0fQaSYAe7Gw1p8hv77TVVgHaHa&pid=Api&P=0&h=180',
        title: 'Vivo T2 pro 5G',
        price: 'Incl of offers',
    },
    {
        id: 2,
        image: 'https://www.weeklystore.co.uk/assets/product_images/156/images/rent_a_motorola_moto_g_4th_generation_mobile_phone.jpg',
        title: 'Motorola Edge 40',
        price: 'Incl of offers',
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/1374/6193/products/xiaomi_poco_m3_pro_5g_04_azul_ad_l_2000x.jpg?v=1625584230',
        title: 'POCO M4 5G',
        price: 'Incl of offers',
    },
    {
        id: 4,
        image: 'https://tse4.mm.bing.net/th?id=OIP.0fQaSYAe7Gw1p8hv77TVVgHaHa&pid=Api&P=0&h=180',
        title: 'Realme 11 pro 5G',
        price: 'Incl of offers',
    },
    {
        id: 5,
        image: 'http://4.bp.blogspot.com/-TRKYFeiqSSI/VfbA0mHFjxI/AAAAAAAAC0E/9joIo79MyIk/s1600/Samsung%2BGalaxy%2BS6%2Bprices%2Bin%2BNigeria.jpg',
        title: 'Nothing phone 2',
        price: 'Incl of offers',
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.title.toLowerCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });

        const displayItem = (items) => {
            document.getElementById('root').innerHTML = items.map((item) => {
                var { image, title, price } = item;
                return (
                    `<div class='grid-container'>
                        <div class='item'>
                            <img class='images' src=${image}></img>
                            <p>${title}</p>
                            <h6>$ ${price}</h6>
                        </div> 
                        
                    </div>`
                )
            }).join('')
        };
        displayItem(categories);




