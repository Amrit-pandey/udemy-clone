const FooterList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 flex flex-col gap-2 px-20">
      {children}
    </div>
  );
};

export default FooterList;
