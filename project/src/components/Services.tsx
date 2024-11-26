import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Classic Haircut",
      description: "Traditional cut with modern styling, includes hot towel service",
      price: "$35",
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Beard Trim & Shape",
      description: "Professional beard grooming with precise detailing",
      price: "$25",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Premium Package",
      description: "Haircut, beard trim, facial treatment, and scalp massage",
      price: "$65",
      duration: "75 min",
      image: "https://images.unsplash.com/photo-1634302086887-13b5679d3e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">Professional grooming services for the modern gentleman</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;