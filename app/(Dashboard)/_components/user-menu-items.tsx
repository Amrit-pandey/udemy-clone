interface UsermenuItemsProps {
    label?:string;
    onClick: () => void
}

const UsermenuItems: React.FC<UsermenuItemsProps>= ({
    label,
    onClick
}) => {
    return(
        <div
        onClick={onClick}
        className="px-4 py-3 hover:text-blue-800 transition text-gray-600"
        >
            {label}
        </div>
    )
}

export default UsermenuItems