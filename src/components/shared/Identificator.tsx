interface iProps {
  username: string;
  role: string;
}


export default function Identificator ({username, role}:iProps){
    return (
    <div className={`role ${role}`}>
      <h1>{username}</h1>
      <h2>{role}</h2>
    </div>
  );
};
