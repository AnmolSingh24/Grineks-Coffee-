import Navbar from './Navbar';

const Facility = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
      <div className='flex justify-center mt-20'>
        <section className="w-[50rem] p-6 my-6 bg-yellow-700 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-white">Our Facility</h2>
          <p className="text-lg leading-relaxed text-white mb-4">
            Our cafe offers a comfortable and welcoming environment with free Wi-Fi, ample seating, and a friendly atmosphere. Whether you're here to work, study, or just relax, we have everything you need to make your visit enjoyable.
          </p>
          <div className='flex justify-center'>
            <ul className="bg-yellow-600 w-96 rounded-lg p-4 list-disc list-inside text-lg text-white mb-4">
              <li>High-speed Wi-Fi access</li>
              <li>Comfortable seating arrangements</li>
              <li>Quiet study areas</li>
              <li>Outdoor seating with a view</li>
              <li>Private meeting rooms</li>
              <li>Eco-friendly design and materials</li>
              <li>Accessible facilities for all</li>
              <li>Pet-friendly outdoor area</li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed text-white">
            Come and enjoy our warm and inviting space, perfect for catching up with friends, getting some work done, or simply taking a break from your day.
          </p>
        </section>
      </div>
      </div>
    </>
  );
}

export default Facility;