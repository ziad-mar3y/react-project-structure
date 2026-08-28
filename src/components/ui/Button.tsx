type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

function Button({
  text,
  onClick,
  variant,
  disabled = false,
}: ButtonProps) {
  return (
    <button
    id="button"  
      onClick={onClick}
      disabled={disabled}
      className={`button button-${variant}`}
    >
      {text}
    </button>
  );
}

export default Button;