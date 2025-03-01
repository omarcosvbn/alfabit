export type TextBlockProps = {
  children: React.ReactNode;
  title: string;
  className?: string;
};

export default function TextBlock({children, title, className}: TextBlockProps) {
  return (
    <div className={`flex flex-col items-start justify-center bg-dark gap-3 pt-6 pr-5 pb-6 pl-8 rounded-md ${className}`}>
      <h3 className="text-gray-primary text-3xl font-extrabold">{title}</h3>
      <p className="text-gray-primary font-normal text-nd">{children}</p>
    </div>
  );
}
