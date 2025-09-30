import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark transition-opacity duration-500">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gold">
            Aura <span className="text-gold-light">Persona</span>
          </h1>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-gold" style={{ animationDelay: "0ms" }}></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-gold-light" style={{ animationDelay: "150ms" }}></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-gold" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}
