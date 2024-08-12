const TestimonialsSection = () => (
  <section className="py-16">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="italic">A seamless booking experience with great movie choices!</p>
            <h4 className="mt-4 font-semibold">- Alex J.</h4>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="italic">The theaters are always clean and comfortable. Highly recommended!</p>
            <h4 className="mt-4 font-semibold">- Jamie L.</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
