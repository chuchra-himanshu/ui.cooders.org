import React from "react";

const AuthFormContainer: React.FC<AuthFormContainerPropsInterface> = ({
  children,
  formTitle,
}) => {
  return (
    <section className="flex flex-col items-center justify-center -mt-10 h-[calc(100vh-50px)]">
      <form className="bg-neutral-950 p-[28px] rounded-[10px] w-[400px]">
        <p className="text-4xl font-semibold text-text-secondary mb-[25px]">
          {formTitle}
        </p>
        {children}
      </form>
    </section>
  );
};

export default AuthFormContainer;
