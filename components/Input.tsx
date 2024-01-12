import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label?: string;
  type?: string;
  disabled?: boolean;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  formatLabel?:string
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  disabled,
  id,
  register,
  errors,
  required,
  formatLabel
}) => {
  return (
    <div className=" relative">
      <input
        id={id}
        {...register(id, { required: 'E-mail field is required' })}
        type={type}
        disabled={disabled}
        placeholder=" "
        className={`
            peer
            w-full
            p-6 
            pt-6
            font-light
            bg-white
            border-2
            outline-none
            transition
            disabled:cursor-not-allowed
            disabled:opacity-70
            ${errors[id] ? "border-rose-500" : "border-black"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
            `}
      />
      <label
        className={`
        absolute text-md   duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
        ${formatLabel ? 'left-9' : 'left-4'}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? "text-rose-500" : "text-black font-bold"}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
