import arabicaImage from "../../assets/arabica.jpg";
import robustaImage from "../../assets/robusta.jpg";
import libericaImage from "../../assets/liberica.jpg";
import excelsaImage from "../../assets/excelsa.jpg";
import typicaImage from "../../assets/typica.jpg";
import geishaImage from "../../assets/geisha.webp"
import bourbonImage from "../../assets/bourbon.jpg";
import catimorImage from "../../assets/catimor.jpg";
import caturraImage from "../../assets/caturra.jpg";
import hararImage from "../../assets/harar.jpg";
import icatuImage from "../../assets/icatu.webp";
import jacksonImage from "../../assets/jackson.jpeg";
import jamaicanImage from "../../assets/jamaican.jpg";
import javaImage from "../../assets/java.webp";
import maragogypeImage from "../../assets/maragogype.jpg";
import mochaImage from "../../assets/mocha.jpg";
import mundoImage from "../../assets/mundo.webp";

const ProductList = () => {
      const productItems = [
    { name: 'Arabica', image: arabicaImage, price: '$3.00' },
    { name: 'Robusta', image: robustaImage, price: '$4.50' },
    { name: 'Liberica', image: libericaImage, price: '$4.00' },
    { name: 'Excelsa', image: excelsaImage, price: '$3.50' },
    { name: 'Typica', image: typicaImage, price: '$4.75' },
    { name: 'Geisha/Gesha', image: geishaImage, price: '$4.75' },
    { name: 'Bourbon', image: bourbonImage, price: '$4.75' },
    { name: 'Catimor', image: catimorImage, price: '$4.75' },
    { name: 'Caturra', image: caturraImage, price: '$4.75' },
    { name: 'Harar', image: hararImage, price: '$4.75' },
    { name: 'Icatu', image: icatuImage, price: '$4.75' },
    { name: 'Jackson', image: jacksonImage, price: '$4.75' },
    { name: 'Jamaican', image: jamaicanImage, price: '$4.75' },
    { name: 'Java', image: javaImage, price: '$4.75' },
    { name: 'Maragogype', image: maragogypeImage, price: '$4.75' },
    { name: 'Mocha', image: mochaImage, price: '$4.75' },
    { name: 'Mundo', image: mundoImage, price: '$4.75' },
  ];

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='my-12'>
                <div>
                    <h1 className='text-center font-bold text-4xl text-yellow-900'>Our Products</h1>
                </div>
                <div className='mt-10 w-[64rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {productItems.map((item, index) => (
                        <div key={index} className='bg-yellow-100 m-2 w-full p-4 rounded-lg shadow-md flex flex-col items-center'>
                            <img src={item.image} alt={item.name} className='w-72 h-52 object-cover mb-4 rounded-t-lg' />
                            <h2 className='text-2xl text-center font-semibold text-yellow-900'>{item.name}</h2>
                            <p className='mt-2 text-yellow-700 font-bold text-center pb-2'>{item.price}</p>
                            <div className='text-center'>
                                <button className='bg-yellow-900 hover:bg-yellow-700 px-6 py-2 rounded-full text-white'>View</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList