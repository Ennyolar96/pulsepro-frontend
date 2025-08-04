interface MyComponentProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  "data-aos"?: string;
}

export const Wrapper: React.FC<MyComponentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
