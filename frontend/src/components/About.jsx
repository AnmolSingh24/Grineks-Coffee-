import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-20 px-4">
        <section className="w-full max-w-4xl p-8 bg-yellow-700 text-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">About Grind Geeks</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Welcome to <span className="font-semibold">Grind Geeks</span>, your ultimate coffee haven! We are passionate about delivering the finest coffee experience to our community. More than just a coffee shop, we are a sanctuary for coffee lovers, creativity, and connection.
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Story</h3>
              <p className="text-base opacity-90">
                Grind Geeks was born from a shared love for coffee and a desire to create a space where people could come together over a perfectly brewed cup. Our founders embarked on a journey to source the best beans, master the art of brewing, and build a team of dedicated baristas who share their vision.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Our Coffee</h3>
              <p className="text-base opacity-90">
                We take pride in ethically sourced beans from the finest coffee farms worldwide. Our roasting process ensures a rich and flavorful profile in every sip. Whether you love a strong espresso, a creamy latte, or a smooth cold brew, we cater to all tastes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
              <p className="text-base opacity-90">
                Sustainability and quality are at our core. We actively reduce our environmental footprint with eco-friendly products and innovative practices to ensure that every cup of coffee is both exceptional and responsible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Join Us</h3>
              <p className="text-base opacity-90">
                Whether you're a coffee aficionado or just exploring, we invite you to be part of our journey. Step in for a cup, stay for the experience, and leave as part of our ever-growing coffee family.
              </p>
            </div>
          </div>
          
          <p className="text-center text-lg font-medium mt-8 opacity-90">
            Thank you for choosing <span className="font-semibold">Grind Geeks</span>—where every cup is brewed with passion and expertise.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;