import React, { useEffect } from "react";

export default function IntroSplash({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000); // Show for 2 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700">
  <img src="/images/dolphin.svg" alt="Coachify Logo" className="w-24 h-24 mb-6 animate-bounce" />
      <h1 className="text-4xl font-bold mb-2 tracking-tight">Coachify</h1>
      <p className="text-lg opacity-80">Lead Coach and Inspire</p>
      <span className="mt-6 text-sm opacity-60">Empowering growth through mentorship</span>
    </div>
  );
} 