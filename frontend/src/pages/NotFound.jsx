import Footer from "../components/Footer";

function NotFound() {
  return (
    <div className="h-100 flex items-center text-white justify-center gap-4">
      <h1 className='p-2 pr-6 border-r border-blue-600 text-4xl font-bold'>404</h1>
      <p className='text-sm'>This page could not be found.</p>

      {/* Footer */}
      <div className="absolute bottom-5">
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
