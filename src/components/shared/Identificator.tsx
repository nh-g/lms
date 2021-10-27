import { FC } from "react";

interface MyProps {
  username: string;
  role: string;
}

const Identificator: FC<MyProps> = ({ username, role }) => {
  return (
    <div className={`role ${role}`}>
      <h1>@{username}</h1>
      <h2>{role}</h2>
    </div>
  );
};

export default Identificator;
