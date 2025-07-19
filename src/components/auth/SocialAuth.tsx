import React from "react";
import { SiGithub, SiGoogle, SiLinkedin } from "react-icons/si";

const SocialAuth: React.FC = () => {
  return (
    <section className="flex items-center text-[22px] gap-10 text-text-secondary justify-center">
      <SiGoogle className="hover:text-accent cursor-pointer transition-all ease-in-out duration-200" />
      <SiGithub className="hover:text-accent cursor-pointer transition-all ease-in-out duration-200" />
      <SiLinkedin className="hover:text-accent cursor-pointer transition-all ease-in-out duration-200" />
    </section>
  );
};

export default SocialAuth;
