import React from "react";
import "./ColorfullBtn.css"

const ColorfullBtn = () => {
  return (
    <>
     <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Hover..!!&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Hover..!!&nbsp;</span>
</button>
    </>
  );
};

export default ColorfullBtn;
