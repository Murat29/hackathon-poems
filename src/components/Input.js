import React from "react";
function Input({ index, handleText, deleteInput, poems, setPoems, inputs }) {
  function handleDelete() {
    deleteInput(index);
  }

  function onChange(evt) {
    handleText(evt, index);
  }

  function handleSearch() {
    fetch(`https://poems-bd.herokuapp.com/?q=${inputs[index]}&onlyLines=1`)
      .then((res) => res.json())
      .then((res) => {
        const NewPoems = [...poems];
        NewPoems[index] = res.text;
        setPoems(NewPoems);
      });
  }

  return (
    <>
      <div className="application-form__input-container">
        <input onChange={onChange} className="application-form__input" type="text" />
        <button
          onClick={handleSearch}
          className="application-form__button application-form__button_type_search"
          type="button"
        ></button>
        {index !== 0 && (
          <button
            onClick={handleDelete}
            type="button"
            className="application-form__button application-form__button_type_delete-input"
          ></button>
        )}
      </div>
      <p className="application-form__text application-form__text_type_poem">{poems[index]}</p>
    </>
  );
}

export default Input;
