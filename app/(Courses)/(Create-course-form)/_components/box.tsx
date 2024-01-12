interface BoxTypeProps {
    label: string;
    icon?: any
    selected?: boolean;
    description?: string;
    onClick: (value: string) => void
}


const BoxType: React.FC<BoxTypeProps> = ({
    label,
    selected,
    description,
    onClick,
    icon
}) => {
  return (
    <div 
    onClick={() => onClick(label)}
    className={
        `w-[245px] 
        h-[270px] 
        
        border-[1px]
        hover:bg-gray-200
        cursor-pointer
      ${selected ? 'border-[4px] border-black' : 'border-[1px] border-gray-300'}
      `}>
        <div className="flex flex-col justify-center items-center text-center h-[inherit]">
            <div className="mt-4">{icon}</div>
            <div className="text-2xl font-bold py-2">{label}</div>
            <div className="text-lg p-4">{description}</div>
        </div>
      </div>
  )
}

export default BoxType