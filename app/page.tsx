import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import { Star } from "lucide-react";

export default async function Home() {
  // Load featured cakes
  const cakesData = await import("@/data/cakes.json");
  const featuredCakes = cakesData.cakes.filter((cake: any) => cake.featured).slice(0, 6);

  // Load testimonials
  const testimonialsData = await import("@/data/testimonials.json");
  const testimonials = testimonialsData.testimonials.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Featured Cakes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Signature Cakes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handcrafted with love, baked fresh to order. Every cake is a masterpiece!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCakes.map((cake: any) => (
              <div
                key={cake.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                {/* Cake Image Placeholder */}
                <div className="h-56 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl transform hover:scale-110 transition-transform duration-300">
                    🍰
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Popular
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                    {cake.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {cake.description}
                  </p>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Starting from</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{cake.price.half_kg}
                      </div>
                    </div>
                    <CTAButton
                      label="Order Now"
                      variant="primary"
                      modalType="order"
                      className="shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/cakes" className="btn btn-outline text-lg px-8 py-3">
              View All 18+ Cakes
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 gradient-bg-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Join hundreds of happy customers who trust Sabu Cakes for their celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any) => (
              <div key={testimonial.id} className="glass p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 font-medium">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.customerName}</p>
                  <p className="text-sm text-gray-600">{testimonial.cakeOrdered}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Order Your Perfect Cake?</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Let us make your celebration extra special with our freshly baked, homemade cakes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              label="Order Now"
              variant="primary"
              modalType="order"
              icon="cart"
              className="text-lg px-8 py-4"
            />
            <CTAButton
              label="Custom Cake Request"
              variant="outline"
              modalType="custom"
              className="text-lg px-8 py-4"
            />
            <CTAButton
              label="WhatsApp Us"
              variant="whatsapp"
              icon="whatsapp"
              className="text-lg px-8 py-4 gradient-bg-secondary text-white border-0 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
