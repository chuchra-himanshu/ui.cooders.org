import React from "react";

const DeviceBlocker: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-background-primary backdrop-blur-xl flex items-center justify-center p-6">
      <div className="relative max-w-lg w-full px-8 py-10 border border-border-primary bg-background-primary/70 backdrop-blur-lg text-center animate-fade-in">
        <div className="absolute -inset-1 bg-gradient-to-br from-[#4184f3]/10 to-transparent blur-lg opacity-20 -z-10" />
        <div className="text-[52px] mb-4">🧑‍💻</div>
        <h1 className="text-3xl font-bold text-text-primary tracking-wide mb-3">
          Restricted to Desktop Zone
        </h1>
        <p className="text-text-primary/70 leading-relaxed text-[15px] font-medium mb-6">
          This platform is made for large screens to give developers the best
          experience. Please use a laptop or desktop to continue.
        </p>
        <button
          className="mt-2 px-5 py-2 text-sm font-semibold text-accent border border-accent rounded-full cursor-pointer hover:bg-accent/10 transition-colors duration-300"
          onClick={() => window.location.reload()}
        >
          Retry on Resize
        </button>
        <p className="text-xs text-text-primary/40 mt-6">
          cooders.org © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default DeviceBlocker;
