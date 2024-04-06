import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Todo(props) {
  const[modalIsOpen, setModalIsOpen] = useState(false);
  
  function deleteHandler() {
    console.log(`button ${props.text} is selected`)
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
        {/* if we use deleteHandler() it will be evaluated by JS without even clicking the button */}
        {/* pass anonymous function */}
        {/* onClick= {() => {}} */}
        
        {/* moodalIsOpen ? <Modal/> : null */ }
        {/* OR */}
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
