export const NotAComponentButton = ({ className, textContent, icon, onClick, ariaLabel }) => {
  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      {textContent}{icon}
    </button>
  );
};
