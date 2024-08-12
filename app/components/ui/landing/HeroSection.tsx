const HeroSection = () => (
  <section
    className="relative flex flex-col justify-center items-center h-screen bg-cover bg-center bg-fixed text-white"
    style={{ backgroundImage: "url('/landing.jpg')" }}
  >
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Cinema System
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Discover and book your favorite movies with ease.
      </p>
      <a
        href="/movies"
        className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
      >
        Explore Movies
      </a>
    </div>
  </section>
);

export default HeroSection;
