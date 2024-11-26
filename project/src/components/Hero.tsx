import Button from './ui/Button';

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Premium Grooming for the Modern Gentleman
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience the art of traditional barbering with modern expertise. Our master barbers are dedicated to helping you look and feel your best.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg">Book Appointment</Button>
              <Button variant="outline" size="lg">View Services</Button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Modern barbershop interior"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;