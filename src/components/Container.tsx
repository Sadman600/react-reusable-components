import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full max-w-[1024px] bg-green-700">
      {children}
    </div>
  );
};

export default Container;
