export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const TextOrInput = (props: InputProps) => {
  if (props.multiline) {
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

export default function Input({ label, className, ...rest }: InputProps) {
  return (
    <div className="relative">
        {label && <label className="absolute pt-1 pl-3 text-xs">{label}</label>}
      <TextOrInput 
      className={`
        bg-dark text-gray-primary rounded-md p-3
        disabled:bg-disabled disabled:border-2 disabled:border-disabled
        ${label && 'pt-5'}
        ${className}`}
      {...rest} />
    </div>
  );
}
