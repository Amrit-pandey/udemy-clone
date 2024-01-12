import { DollarSignIcon } from "lucide-react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label?: string;
    type?: string;
    disabled?: boolean;
    placeholder?: string
    required? :boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldValues
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    placeholder,
    required,
    register,
    errors
}) => {
  return (
    <div className="w-1/2 relative">
        <input 
        id={id}
        disabled={disabled}
        {...register(id, {required})}
        type={type}
        placeholder={placeholder}
        className={`
        mt-16
        w-full
        p-4
        pt-6
        font-light
        bg-white
        border-[1px]
        outline-none
        transition
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${errors[id] ? "border-rose-500" : "border-black border-[1px]"}
        `}
        />
        <label className={`
        absolute text-lg top-[96px] z-10 origin-[0] transform -translate-y-3 
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}>
            {label}
        </label>
    </div>
  )
}

export default Input