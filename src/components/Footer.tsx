
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
            <p className="text-green-300 mb-4">
              <strong>Contact Information:</strong>
            </p>
            <div className="space-y-2 text-green-200">
              <p><strong>Aaron Berger</strong> - League Director</p>
              <p>Phone: <a href="tel:240-620-7492" className="text-green-300 hover:text-white transition-colors">240-620-7492</a></p>
              <p>Email: <a href="mailto:A5SoccerMaryland@gmail.com" className="text-green-300 hover:text-white transition-colors">A5SoccerMaryland@gmail.com</a></p>
            </div>
            <p className="text-green-200 text-sm mt-6">
              © 2024 A5Soccer. All rights reserved. | Montgomery County, Maryland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
