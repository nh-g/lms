import reactDom from "react-dom";
import cross from "assets/images/cross.png";

import AnimateContainer from "./AnimateContainer";
import CreateForm from "components/CreateForm";
import EditForm from "components/EditForm";

export default function Modal({ isOpen, onClose, data, children, type }) {
  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <AnimateContainer animation="fade-in">
        <div className="modal">
          <div className="modal-header">
            <h2>{children}</h2>
            <button className="btn-close" onClick={onClose}>
              <img alt="close" src={cross} />
            </button>
          </div>
          {type === "create" && <CreateForm onClose={onClose} />}
          {type === "edit" && <EditForm onClose={onClose} data={data} />}
        </div>
      </AnimateContainer>
    </>,
    document.getElementById("modal")
  );
}
