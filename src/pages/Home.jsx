import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <div className="parallax">
          <div className="content p-4 pt-6">
            <h2 className="text-3xl font-bold text-white shadow">Get a Quote</h2>
            <p className="text-lg text-white shadow p-4">Contact us today for skid loader construction services!</p>
            <Link to="/contact" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="additional-content p-4">
          <h3 className="text-xl font-semibold">More About Our Services</h3>
          <div className="grid grid-cols-3 gap-4">
            {["Earth Moving", "Site Prep", "Material Handling", "Demolition", "Excavation", "Landscaping"].map((service, index) => (
              <div key={index} className="card animate-rise">
                <h4 className="card-title">{service}</h4>
                <p className="card-info">Discover professional {service.toLowerCase()} services tailored to your project needs.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Home;
