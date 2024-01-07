"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tjda03d",
        "template_xguz8st",
        formRef.current,
        "-r9N4x-RrNK3r6w81"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <form className="flex flex-col gap-y-4" ref={formRef} onSubmit={sendEmail}>
      {/* Input */}
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Type your name.."
          name="name"
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Type your email.."
          name="email"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* Textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder="Type your message.." name="message" />
        <MessagesSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[200px]">
        Send message {error && "error"}
        {success && "success"}
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
