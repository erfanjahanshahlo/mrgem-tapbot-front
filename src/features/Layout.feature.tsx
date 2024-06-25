import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Layout = ({ children }: Props) => {
  return (
    <div className="h-[calc(100%-80px)] px-5 w-full overflow-hidden [#2D3748] overflow-y-auto pb-16">
      {children}
    </div>
  );
};

export { Layout };
