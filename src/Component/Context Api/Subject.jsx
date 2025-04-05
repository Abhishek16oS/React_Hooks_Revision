import { useContext } from "react";
import { SubjectChoosen } from "./Start";

export default function Subject() {
  const subject = useContext(SubjectChoosen);
  return (
    <div className="bg-green-100 ">
      <h2>Subject component</h2>
      <h1>Selected Subject: {subject}</h1>
    </div>
  );
}