import americano from "../assets/Americano.webp";
import redEyeEspresso from "../assets/RedEyeEspresso.jpg";
import blackEyeEspresso from "../assets/BlackEyeEspresso.png";
import ristrettoCappuccino from "../assets/Ristretto.jpg";
import doppioEspresso from "../assets/doppioEspresso.webp"
import classicCappuccino from "../assets/classicCappuccino.avif";
import icedCappuccino from "../assets/icedCappuccino.jpg";
import vanillaCappuccino from "../assets/vanillaCappuccino.jpg";
import dryCappuccino from "../assets/dryCappuccino.webp";
import honeyCappuccino from "../assets/honeyCappuccino.webp";
import hazelnutCappuccino from "../assets/hazelnutCappuccino.avif";
import chocolateCappuccino from "../assets/chocolateCappuccino.jpg";
import icedChocolateCappuccino from "../assets/icedChocolateCappuccino.webp";
import latteMacchiato from "../assets/latteMacchiato.webp";
import icedCoffeeLatte from "../assets/icedCoffeeLatte.jpg";
import caramelLatte from "../assets/caramelLatte.jpg";
import hazelnutLatte from "../assets/hazelnutLatte.jpg";
import icedCaramelMochaLatte from "../assets/icedCaramelMochaLatte.jpg";
import mochaHazelnutLatte from "../assets/mochaHazelnutLatte.jpg";
import mochaPumpkinLatte from "../assets/mochaPumpkinLatte.jpg";
import classicMocha from "../assets/classicMocha.jpg";
import whiteChocolateMocha from "../assets/whiteChocolateMocha.jpg";
import peppermintMocha from "../assets/peppermintMocha.png";
import icedMocha from "../assets/icedMocha.jpg";
import mochaFrappuccino from "../assets/mochaFrappuccino.webp";
import espressoImage from '../assets/Menu1.avif';
import cappuccinoImage from '../assets/Menu2.avif';
import latteImage from '../assets/Menu3.jpg';
import americanoImage from '../assets/Menu4.jpg';
import mochaImage from '../assets/Menu5.jpg';
import icedImage from '../assets/Menu6.jpg';
import arabicaImage from "../assets/arabica.jpg"
import robustaImage from "../assets/robusta.jpg";
import libericaImage from "../assets/liberica.jpg";
import excelsaImage from "../assets/excelsa.jpg";
import typicaImage from "../assets/typica.jpg";
import geishaImage from "../assets/geisha.webp"
import bourbonImage from "../assets/bourbon.jpg";
import caturraImage from "../assets/caturra.jpg";
import hararImage from "../assets/harar.jpg";
import icatuImage from "../assets/icatu.webp";
import jacksonImage from "../assets/jackson.jpeg";
import jamaicanImage from "../assets/jamaican.jpg";
import javaImage from "../assets/java.webp";
import mundoImage from "../assets/mundo.webp";

export const HEROCONTENT = [
    {
        title: "Enjoy your Morning Coffee"
    },
    {
        subTitle: "Coffee पे चर्चा"
    },
    {
        description: "Boost your productivity and build your mood with a glass of coffee in the morning, 100% natural from garden. Our coffee beans are carefully selected and roasted to perfection, ensuring a delightful and rich flavor in every sip. Join us and start your day with the perfect cup of coffee, made with love and passion."
    }
];

export const MENU = [
    {
        name: 'Espresso',
        image: espressoImage,
        description: 'A tantalizingly rich and bold shot of freshly brewed espresso, crowned with a swirl of smooth, creamy foam.',
        price: '$3.00',
        varieties: [
            {
                image: americano, name: 'Americano Espresso',
                sizes: [
                    { size: 'S', currency: '₹', price: '251.17' },
                    { size: 'M', currency: '₹', price: '334.89' },
                    { size: 'L', currency: '₹', price: '418.61' }
                ]
            },
            {
                image: redEyeEspresso, name: 'Red Eye Espresso',
                sizes: [
                    { size: 'S', currency: '₹', price: '220.10' },
                    { size: 'M', currency: '₹', price: '289.89' },
                    { size: 'L', currency: '₹', price: '321.12' }
                ]
            },
            {
                image: blackEyeEspresso, name: 'Black Eye Espresso',
                sizes: [
                    { size: 'S', currency: '₹', price: '251.17' },
                    { size: 'M', currency: '₹', price: '334.89' },
                    { size: 'L', currency: '₹', price: '418.61' }
                ]
            },
            {
                image: ristrettoCappuccino, name: 'Ristretto Espresso',
                sizes: [
                    { size: 'S', currency: '₹', price: '251.17' },
                    { size: 'M', currency: '₹', price: '334.89' },
                    { size: 'L', currency: '₹', price: '418.61' }
                ]
            },
            {
                image: doppioEspresso, name: 'Doppio Espresso',
                sizes: [
                    { size: 'S', currency: '₹', price: '251.17' },
                    { size: 'M', currency: '₹', price: '334.89' },
                    { size: 'L', currency: '₹', price: '418.61' }
                ]
            }
        ]
    },
    {
        name: 'Cappuccino',
        image: cappuccinoImage,
        description: 'A classic Italian coffee made with espresso, steamed milk, and topped with a frothy foam.',
        price: '$4.50',
        varieties: [
            { image: classicCappuccino, name: 'Classic Cappuccino', price: '$4.50' },
            { image: icedCappuccino, name: 'Iced Cappuccinno', price: '$5.00' },
            { image: vanillaCappuccino, name: 'Vanilla Cappuccinno', price: '$5.50' },
            { image: dryCappuccino, name: 'Dry Cappuccinno', price: '$6.00' },
            { image: honeyCappuccino, name: 'Honey Cappuccinno', price: '$6.50' },
            { image: hazelnutCappuccino, name: 'Hazelnut Cappuccinno', price: '$7.00' },
            { image: chocolateCappuccino, name: 'Chocolate Cappuccinno', price: '$7.50' },
            { image: icedChocolateCappuccino, name: 'Iced Chocolate Cappuccinno', price: '$8.00' },
        ]
    },
    {
        name: 'Latte',
        image: latteImage,
        description: 'A creamy blend of espresso and steamed milk, finished with a light foam.',
        price: '$4.00',
        varieties: [
            { image: latteMacchiato, name: 'Latte Macchiato', price: '$4.00' },
            { image: icedCoffeeLatte, name: 'Iced Coffee Latte', price: '$4.50' },
            { image: caramelLatte, name: 'Caramel Latte', price: '$5.00' },
            { image: hazelnutLatte, name: 'Hazelnut Latte', price: '$5.50' },
            { image: icedCaramelMochaLatte, name: 'Iced Caramel Mocha Latte', price: '$5.50' },
            { image: mochaHazelnutLatte, name: 'Mocha Hazelnut Latte', price: '$5.50' },
            { image: mochaPumpkinLatte, name: 'Mocha Pumpkin Spice Latte', price: '$5.50' },

        ]
    },
    {
        name: 'Mocha',
        image: mochaImage,
        description: 'A classic Italian coffee made with espresso, steamed milk, and topped with a frothy foam.',
        price: '$4.50',
        varieties: [
            { image: classicMocha, name: 'Classic Mocha', price: '$4.50' },
            { image: whiteChocolateMocha, name: 'White Chocolate Mocha', price: '$5.00' },
            { image: peppermintMocha, name: 'Pepper-Mint Mocha', price: '$5.50' },
            { image: icedMocha, name: 'Iced Mocha', price: '$5.50' },
            { image: mochaFrappuccino, name: 'Mocha Frappuccino', price: '$5.50' }
        ]
    }
];

export const menuItems = [
    { name: 'Espresso', image: espressoImage, price: '$3.00' },
    { name: 'Cappuccino', image: cappuccinoImage, price: '$4.50' },
    { name: 'Latte', image: latteImage, price: '$4.00' },
    { name: 'Americano', image: americanoImage, price: '$3.50' },
    { name: 'Mocha', image: mochaImage, price: '$4.75' },
    { name: 'Iced Coffees', image: icedImage, price: '$4.75' },
];

export const PRODUCTITEMS = [
    {
        image: arabicaImage,
        name: 'Arabica Beans',
        description: 'Smooth and sweet with hints of fruit and sugar',
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
    },
    {
        image: geishaImage,
        name: 'Geisha Beans',
        description: 'Floral, jasmine-like aroma with a smooth taste',
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
    },
    {
        image: libericaImage,
        name: 'Liberica Beans',
        description: 'Unique, smoky flavor with a floral aroma',
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
    },
    {
        image: excelsaImage,
        name: 'Excelsa Beans',
        description: 'Tart and fruity with a complex flavor profile',
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
    }
];

export const productItems = [
    {
        name: 'Arabica Beans', image: arabicaImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Arabica beans are known for their smooth, sweet flavor with hints of fruit and caramel.'
    },
    {
        name: 'Robusta Beans', image: robustaImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Robusta beans have a stronger, more bitter flavor with a nutty aftertaste, often used in espresso blends.'
    },
    {
        name: 'Liberica Beans', image: libericaImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Liberica beans have a distinctively floral and fruity aroma with a woody and smoky flavor.'
    },
    {
        name: 'Excelsa Beans', image: excelsaImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Excelsa beans are known for their tart, fruity flavor with a distinct complexity and often used in specialty coffee.'
    },
    {
        name: 'Typica Beans', image: typicaImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Typica beans have a balanced flavor profile with mild acidity and a smooth body, popular in Latin American coffees.'
    },
    {
        name: 'Geisha Beans', image: geishaImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Geisha beans are prized for their floral and tea-like flavors, with a light body and vibrant acidity.'
    },
    {
        name: 'Bourbon Beans', image: bourbonImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Catimor beans are a hybrid known for their disease resistance and bold flavor profile, with earthy and herbal notes.'
    },
    {
        name: 'Caturra Beans', image: caturraImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Caturra beans are a natural mutation of Bourbon beans, offering a bright acidity and sweetness, often found in Central American coffees.'
    },
    {
        name: 'Harar Beans', image: hararImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Harar beans are Ethiopian, known for their winey and fruity flavors, with a rich, heavy body and complex aroma.'
    },
    {
        name: 'Icatu Beans', image: icatuImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Icatu beans are Brazilian, known for their low acidity, creamy body, and sweet flavor with notes of chocolate and nuts.'
    },
    {
        name: 'Jackson Beans', image: jacksonImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Jackson beans are named after a coffee farmer in Costa Rica, offering a balanced acidity with a smooth body and rich flavor.'
    },
    {
        name: 'Jamaican Beans', image: jamaicanImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Jamaican beans, particularly Blue Mountain, are renowned for their mild flavor, bright acidity, and smooth body, often considered one of the best coffees in the world.'
    },
    {
        name: 'Java Beans', image: javaImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Java beans are Indonesian, known for their full body, rich flavor with spicy and herbal notes, and a relatively low acidity.'
    },
    {
        name: 'Mocha Beans', image: mochaImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Mocha beans are Yemeni, known for their winey, complex flavor with rich chocolatey undertones and a medium body.'
    },
    {
        name: 'Mundo Beans', image: mundoImage,
        prices: [
            { size: '250gm', currency: '₹', amt: '459.95', },
            { size: '500gm', currency: '₹', amt: '878.08', },
            { size: '1Kg', currency: '₹', amt: '1547.10', },
        ],
        description: 'Mundo Novo beans are Brazilian, known for their mild, balanced flavor with a medium body, often used in espresso blends.'
    }
];