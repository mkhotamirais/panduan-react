import { FaTimes } from "react-icons/fa";

const Modal = ({ onClose, children, id }) => {
  return (
    <div
      onClick={onClose}
      className="bg-black bg-opacity-10 fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full sm:w-3/4 md:w-1/2 xl:w-1/3 mx-3 border rounded-lg p-4 relative"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-xl hover:text-red-500 transition-all duration-200">
          <FaTimes />
        </button>
        <div className="text-sm text-left text-gray-500 mr-8 mb-3">{id}</div>
        {children}
      </div>
    </div>
  );
};
Modal.propTypes;

export default Modal;
