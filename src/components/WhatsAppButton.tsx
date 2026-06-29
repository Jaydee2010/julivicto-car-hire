import React, { useState, useEffect } from 'react';
import { MessageSquare, ExternalLink } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a small delay to invite user clicks
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = 'https://wa.me/2347060666882?text=Hello%20Julivicto%20Logistics%20Car%20Hire%20and%20Rental%20Services%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20car%20hire%20and%20leasing%20services.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Dynamic Invitation Tooltip */}
      {showTooltip && (
        <div className="mb-3 bg-slate-950 border border-emerald-500/30 text-white text-xs px-4 py-2.5 rounded-xl shadow-2xl max-w-xs animate-fade-in pointer-events-auto flex items-center space-x-2">
          <span className="font-medium">Need instant pricing? Chat on WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-emerald-400 hover:text-emerald-300 font-bold ml-1 focus:outline-none cursor-pointer"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Green WhatsApp Circle */}
      <a
        id="whatsapp-floating-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-float"
        title="Chat on WhatsApp"
      >
        {/* Modern WhatsApp-styled vector SVG inside */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.311 1.503 5.351 1.505 5.548 0 10.065-4.515 10.068-10.066.002-2.687-1.048-5.214-2.957-7.126S14.693 2.628 12.008 2.628c-5.553 0-10.07 4.517-10.073 10.072 0 2.13.565 3.827 1.564 5.512L2.512 21.5l3.5-.946-.365.1zM17.65 14.73c-.31-.155-1.83-.902-2.112-1.004-.282-.102-.489-.153-.692.152-.204.305-.788 1.004-.967 1.207-.18.203-.359.228-.669.073-1.127-.565-1.928-1.005-2.696-2.317-.204-.349.204-.324.582-1.08.063-.127.031-.238-.016-.341-.047-.102-.489-1.18-.671-1.618-.176-.425-.372-.36-.508-.36-.131-.005-.282-.006-.433-.006-.151 0-.398.057-.606.284-.208.228-.795.777-.795 1.895s.813 2.197.927 2.35c.114.153 1.6 2.443 3.877 3.42 1.636.702 2.274.757 3.09.638.483-.07 1.482-.605 1.687-1.19.204-.585.204-1.087.143-1.19-.062-.103-.226-.155-.536-.31z" />
        </svg>
      </a>
    </div>
  );
}
