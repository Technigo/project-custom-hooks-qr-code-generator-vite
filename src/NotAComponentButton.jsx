export const NotAComponentButton = ({ className, textContent, onClick, ariaLabel }) => {
  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      {textContent}
    </button>
  );
};
