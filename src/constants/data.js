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

export const HEROCONTENT = "Boost your productivity and build your mood with a glass of coffee in the morning, 100% natural from garden. Our coffee beans are carefully selected and roasted to perfection, ensuring a delightful and rich flavor in every sip. Join us and start your day with the perfect cup of coffee, made with love and passion."

export const MENU = [
    {
        name: 'Espresso',
        image: espressoImage,
        description: 'A tantalizingly rich and bold shot of freshly brewed espresso, crowned with a swirl of smooth, creamy foam.',
        price: '$3.00',
        varieties: [
            { image: americano, name: 'Americano', price: '$3.00' },
            { image: redEyeEspresso, name: 'Red Eye Espresso', price: '$4.00' },
            { image: blackEyeEspresso, name: 'Black Eye Espresso', price: '$5.00' },
            { image: ristrettoCappuccino, name: 'Ristretto Espresso', price: '$5.50' },
            { image: doppioEspresso, name: 'Doppio Espresso', price: '$6.00' }
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