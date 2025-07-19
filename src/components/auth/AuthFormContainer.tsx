import React, { type ReactNode } from "react";

interface AuthFormContainerPropsInterface {
  children: ReactNode;
  formTitle: string;
}

const AuthFormContainer: React.FC<AuthFormContainerPropsInterface> = ({
  children,
  formTitle,
}) => {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-50px)]">
      <form className="bg-neutral-950 p-8 rounded-[10px]">
        <p className="text-4xl font-semibold text-text-secondary mb-8">
          {formTitle}
        </p>
        {children}
      </form>
    </section>
  );
};

export default AuthFormContainer;
