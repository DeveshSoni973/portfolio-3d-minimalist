
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6 py-24 max-w-xl mx-auto animate-fade-in">
        <div className="inline-block mb-8 text-primary text-9xl font-bold">404</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Page Not Found</h1>
        <p className="text-lg text-white/70 mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-black font-medium rounded-full transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
