import React from "react";
import Contact from "./Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        img="./images/mr-whiskerson.jpg"
        alt=""
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="./images/fluffykins.jpg"
        alt=""
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="./images/felix.jpg"
        alt=""
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="./images/pumpkin.jpg"
        alt=""
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}
export default App;
