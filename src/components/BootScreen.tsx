import { useEffect, useState } from 'react';

const BootScreen = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#1E1E1E] flex flex-col items-center justify-center">
      <div className="animate-fade-in">
        <img 
          src="https://cdn.poehali.dev/files/b6160107-ef9d-4f99-ac7f-b5d81ef63266.jpg" 
          alt="Windows Logo" 
          className="w-48 h-48 mb-12 object-contain"
        />
        
        <div className="flex justify-center items-center space-x-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ${
                i === dots ? 'opacity-100 scale-125' : 'opacity-40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
