import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export  function DeleteBtn(props) {
  return (

<span className="btn-label btn btn-outline-danger waves-effect px-3"   {...props} role="button" tabIndex="0"><i className="fas fa-trash"></i></span> 


  );
}

export  function SaveBtn(props) {
  return (
<button type="button" {...props} className="btn btn-outline-info waves-effect px-3">
<span className="btn-label"  role="button" tabIndex="0"><i className="fas fa-thumbtack"></i></span> Save</button>

  );
}


export  function ViewBtn(props) {
  return (

    <a {...props}>
      <button type="button" className="btn btn-outline-success waves-effect px-3">
    <span className="btn-label"><i className="fas fa-eye"></i></span> View</button>
</a> 
  );
}
