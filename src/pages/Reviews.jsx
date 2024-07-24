const Reviews = () => {
  return (
    <>
      <div className='flex items-center justify-center mb-10'>
        <div className='my-8'>
          <h2 className="text-4xl text-yellow-900 font-bold text-center mb-8">Reviews</h2>
          <div className="flex justify-evenly items-center gap-10 mt-20 mb-10 text-yellow-800">
            <div className="w-[40rem] bg-yellow-100 shadow-lg p-6 rounded-lg">
              <h2 className="font-semibold pb-6">Abhishek Jain</h2>
              <p>⭐⭐⭐⭐⭐</p>
              <h3 className="font-semibold pb-2">Outstanding Coffee and Service!</h3>
              <p className="text-justify">Grind Geeks offers an incredible selection of fresh, high-quality coffee beans. The website is easy to navigate, and my orders always arrive on time. Highly recommend for all coffee enthusiasts!</p>
            </div>

            <div className="w-[40rem] bg-yellow-100 shadow-lg p-6 rounded-lg">
              <h2 className="font-semibold pb-6">Rajesh Dilaik</h2>
              <p>⭐⭐⭐⭐</p>
              <h3 className="font-semibold pb-2">Great Coffee, Fast Delivery</h3>
              <p className="text-justify">Grind Geeks provides excellent coffee with a user-friendly website and prompt delivery. The only downside is the packaging, which could be more durable. Overall, a fantastic experience!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;