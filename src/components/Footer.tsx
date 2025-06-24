
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">A5<span className="text-green-300">Soccer</span></h3>
          <p className="text-green-200 mb-6">
            Montgomery County's Premier Adult Soccer League
          </p>
          
          <div className="border-t border-green-700 pt-6">
            <p className="text-green-300 mb-2">
              <strong>Contact Us:</strong> For questions about registration, schedule, or league information
            </p>
            <p className="text-green-200 text-sm">
              © 2024 A5Soccer. All rights reserved. | Montgomery County, Maryland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
