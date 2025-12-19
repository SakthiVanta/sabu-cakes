import CTAButton from "@/components/CTAButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="py-16">
            <section className="gradient-bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        We'd love to hear from you! Let's make your celebration special.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold gradient-text mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 gradient-bg-primary rounded-lg text-white">
                                            <MapPin size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-1">Location</h3>
                                            <p className="text-gray-600">
                                                Fantasy Street, Ondipudur<br />
                                                Coimbatore, Tamil Nadu, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 gradient-bg-primary rounded-lg text-white">
                                            <Phone size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-1">Phone</h3>
                                            <a href="tel:+919345734680" className="text-primary hover:underline">
                                                +91 90038 17379
                                            </a>
                                            <p className="text-sm text-gray-500 mt-1">Call or WhatsApp anytime!</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 gradient-bg-primary rounded-lg text-white">
                                            <Mail size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-1">Email</h3>
                                            <a href="mailto:sakthi.vana@gmail.com" className="text-primary hover:underline">
                                                sakthi.vana@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 gradient-bg-primary rounded-lg text-white">
                                            <Clock size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                                            <p className="text-gray-600">
                                                Weekdays: 9:00 AM - 8:00 PM<br />
                                                Weekends: 9:00 AM - 9:00 PM<br />
                                                <span className="text-primary font-medium">Open Every Day!</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card gradient-bg-soft text-white">
                                <h3 className="font-bold text-xl mb-3">Quick Order Options</h3>
                                <div className="flex flex-col gap-3">
                                    <CTAButton
                                        label="Call Us Now"
                                        variant="call"
                                        icon="phone"
                                        className="bg-white text-primary hover:bg-gray-100 border-0 w-full"
                                    />
                                    <CTAButton
                                        label="WhatsApp Now"
                                        variant="whatsapp"
                                        icon="whatsapp"
                                        className="bg-white text-primary hover:bg-gray-100 border-0 w-full"
                                    />
                                    <CTAButton
                                        label="Order via Form"
                                        variant="primary"
                                        modalType="order"
                                        icon="cart"
                                        className="bg-white text-primary hover:bg-gray-100 border-0 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Map & Contact Form */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold text-2xl mb-4">Find Us</h3>
                                <div className="rounded-2xl overflow-hidden h-96">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4!2d76.9!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="card">
                                <h3 className="font-bold text-2xl mb-4">Send Us a Message</h3>
                                <p className="text-gray-600 mb-6">
                                    Have questions? Fill out the form and we'll get back to you shortly!
                                </p>
                                <CTAButton
                                    label="Open Contact Form"
                                    variant="primary"
                                    modalType="contact"
                                    className="w-full text-lg py-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
