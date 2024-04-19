import React, { useRef } from "react";

function Contact() {
  const contact = useRef();

  return (
    <>
      <section id="contact" ref={contact} className="pt-[140px]">
        <div className="h-[100vh]">Contact</div>
      </section>
    </>
  );
}

export default Contact;
