import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  console.log(currOpen);

  return (
    <div className="accordion">
      {/* the array already contains index starting with 0*/}
      {data.map((el, i) => (
        <AccordionItem
          key={i}
          title={el.title}
          num={i}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        key={"test1"}
        title={"Test 1"}
        num={22}
        currOpen={currOpen}
        onOpen={setCurrOpen}
      >
        <p>So much you can learn by just fooling around with the code.</p>
        <p>Especially if things go wrong!</p>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, currOpen, onOpen, children }) {
  const isOpen = num === currOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggle}>
      <p className="number">
        {num < 10 ? "0" : ""}
        {num + 1}
      </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
