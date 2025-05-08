import React from "react";

const AboutUs = () => {
    return (
        <section
            className="text-white py-16 bg-cover bg-center"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,145,255,0.7)), url('/path-to-your-image/mission.png')",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                {/* Mission */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg">
                        Your trusted companion for digital leadership by empowering people
                        to achieve more with less
                    </p>
                </div>

                {/* Vision */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg">
                        To be the fastest digital transformation and innovation partner by
                        engaging global talents thus creating positive impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
