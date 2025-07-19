import React, { useRef, useState } from "react";

const OTPInput: React.FC = () => {
  const length = 6;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, length).split("");
    const newOtp = [...otp];

    paste.forEach((char, i) => {
      if (/^\d$/.test(char)) newOtp[i] = char;
    });

    setOtp(newOtp);
    inputsRef.current[Math.min(paste.length - 1, length - 1)]?.focus();
  };

  return (
    <section className="flex flex-col text-text-secondary font-medium focus-within:text-accent gap-1 transition-all ease-in-out duration-200 mb-[14px]">
      <label htmlFor={""} className="text-[17px] ml-1">
        OTP<span className="text-red-800">*</span>
      </label>
      <div className="flex justify-between">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-12 h-12 border-2 border-border-primary rounded-lg text-center text-xl outline-none text-white focus:border-accent transition-all"
          />
        ))}
      </div>
    </section>
  );
};

export default OTPInput;
