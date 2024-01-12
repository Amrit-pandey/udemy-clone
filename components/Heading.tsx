"use client";

interface HeadingProps {
  title: string;
  center?: boolean;
  subtitle?: string
}

const Heading: React.FC<HeadingProps> = ({ title, center, subtitle }) => {
  return (
    <div
      className={`
    ${center ? "text-center" : "text-start"}
    `}
    >
      <div className={title ? "text-xl font-bold": 'text-4xl font-bold'}>{title}</div>
      <div className="text-sm">{subtitle}</div>
    </div>
  );
};

export default Heading;