import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current.showModal(),
  }));

  return createPortal(
    <dialog ref={dialogRef} className="p-8 rounded-md shadow-md bg-stone-50 backdrop:bg-stone-900/90" >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className="px-4 py-2 bg-stone-700 text-stone-100 hover:bg-stone-600 rounded-md">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
