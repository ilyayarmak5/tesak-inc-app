import CloseBtn from "../buttons/CloseBtn";

const Modal = ({ isSubmitted, setIsSubmitted }) => {
  if (!isSubmitted) return null;
  return (
    <div className="modal-transition">
      <div className="modal-overlay" />
      <div className="modal-container">
        <p>
          Thanks for contacting us! <br /> We will respond as soon as posiible.
        </p>
        <div onClick={() => setIsSubmitted(false)}>
          <CloseBtn />
        </div>
      </div>
    </div>
  );
};

export default Modal;
