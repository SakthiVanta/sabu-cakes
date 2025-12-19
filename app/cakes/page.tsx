import CTAButton from "@/components/CTAButton";

export default async function CakesPage() {
    const cakesData = await import("@/data/cakes.json");
    const cakes = cakesData.cakes;

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold gradient-text mb-4">Our Complete Cake Menu</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Explore our full collection of 18+ delicious homemade cakes. All baked fresh to order!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cakes.map((cake: any) => (
                        <div key={cake.id} className="card group hover:shadow-2xl">
                            <div className="h-48 bg-gradient-soft rounded-lg mb-4 flex items-center justify-center text-6xl">
                                🍰
                            </div>

                            <h3 className="text-xl font-bold mb-2">{cake.name}</h3>
                            <p className="text-gray-600 mb-3 line-clamp-3">{cake.description}</p>

                            {cake.tags && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {cake.tags.slice(0, 3).map((tag: string) => (
                                        <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="flex justify-between items-center border-t pt-4">
                                <div>
                                    <div className="text-sm text-gray-500">Starting from</div>
                                    <div className="font-bold text-primary text-lg">₹{cake.price.half_kg}</div>
                                </div>
                                <CTAButton label="Order Now" variant="primary" modalType="order" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 p-8 gradient-bg-primary rounded-2xl text-white">
                    <h2 className="text-3xl font-bold mb-4">Looking for Something Special?</h2>
                    <p className="mb-6 text-white/90">
                        Can't find what you're looking for? Let us create a custom cake just for you!
                    </p>
                    <CTAButton
                        label="Request Custom Cake"
                        variant="outline"
                        modalType="custom"
                        className="bg-white text-primary border-white hover:bg-gray-100"
                    />
                </div>
            </div>
        </div>
    );
}
