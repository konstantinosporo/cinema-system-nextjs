const FeaturesSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p>Book tickets for your favorite movies in just a few clicks.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p>Choose from a wide range of movies and showtimes.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Comfortable Theaters</h3>
            <p>Enjoy your movie experience in comfortable and well-equipped theaters.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
