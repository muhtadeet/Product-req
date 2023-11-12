import "./app.css";

export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyjr7PakQwx0sXfxpSAj_488RathxiYWps7zy7No3g09e9fxrjMVO9clNDnzycpQgSBaA/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function add(type) {
  //   var element = document.createElement("input");

  //   element.setAttribute("type", type);
  //   element.setAttribute("value", type);
  //   element.setAttribute("name", type);

  //   var foo = document.getElementById("fooBar");

  //   foo.appendChild(element);
  // }

  return (
    <div className="App">
      <h1 className="header">Collection of Sports Items from BKSP</h1>
      <h2 className="header">Registration Form</h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <p>ID (Provided from office)</p>
          <input name="ID" type="number" />
          <p>Name</p>
          <input name="Name" type="text" />
          <p>Address</p>
          <input name="Address" type="text" />
          <p>Contact Number</p>
          <input name="Contact" type="number" />
          <p>Demand List</p>
          <div className="itemlist">
            <p>Item</p>
            <p>Quantity</p>
          </div>
          <div className="itemlist2">
            <input
              className="short-box"
              name="List1"
              type="text"
              maxLength="10"
            />
            <input
              className="short-box2"
              name="Quantity1"
              type="text"
              maxLength="10"
            />
          </div>
          <div className="itemlist2">
            <input
              className="short-box"
              name="List2"
              type="text"
              maxLength="10"
            />
            <input
              className="short-box2"
              name="Quantity2"
              type="text"
              maxLength="10"
            />
          </div>
          <div className="itemlist2">
            <input
              className="short-box"
              name="List3"
              type="text"
              maxLength="10"
            />
            <input
              className="short-box2"
              name="Quantity3"
              type="text"
              maxLength="10"
            />
          </div>
          <div className="itemlist2">
            <input
              className="short-box"
              name="List4"
              type="text"
              maxLength="10"
            />
            <input
              className="short-box2"
              name="Quantity4"
              type="text"
              maxLength="10"
            />
          </div>

          <p>Pad</p>
          <input name="Pad" type="file" />

          {/* <select name="element">
            <option value="button">Button</option>
            <option value="text">Textbox</option>
            <option value="radio">Radio</option>
          </select>

          <input
            type="button"
            value="Add"
            onclick={add(document.forms[0].element.value)}
          />

          <span id="fooBar">&nbsp;</span> */}

          <div className="btn-cnt">
            <input className="btn" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
