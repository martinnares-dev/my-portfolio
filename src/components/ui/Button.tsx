type ButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
};

function Button({ text, onClick, href }: ButtonProps) {
  if (href) {
    return (
      <a href={href}>
        <button>{text}</button>
      </a>
    );
  }

  return <button onClick={onClick}>{text}</button>;
}

export default Button;