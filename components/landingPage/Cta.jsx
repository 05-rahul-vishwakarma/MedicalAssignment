// components/CTA.js
const CTA = () => {
    return (
      <section className="bg-blue-600 text-white py-12 w-[75%] mx-auto mt-4 mb-12 rounded-lg ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-6 max-md:text-sm ">Stay updated with the latest courses and news!</p>
          <input
            type="email"
            className="px-4 py-2 rounded-l-md focus:outline-none max-md:text-sm "
            placeholder="Enter your email"
          />
          <button className="bg-white text-blue-600 px-6 py-2 rounded-r-md max-md:text-sm font-semibold my-4 ">
            Subscribe
          </button>
        </div>
      </section>
    );
  };
  
  export default CTA;
  