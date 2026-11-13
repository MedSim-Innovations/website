import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Shared page width and gutters. Feature pages remain responsible for their own vertical rhythm. */
export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return <div className={`mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-12 2xl:px-16 ${className}`}>{children}</div>;
}
