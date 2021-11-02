// @ts-nocheck
interface iProps{
    user: object;
    username: string;
    role: string
}
export default function Profile({ user }: iProps) {
  return (
    <div id="dashboard" className="page-container">
      <div className="page">
        <header className="header">
          <h1 className="title">Profile Page</h1>
          <p className="description">
            This is a inline editable table. Click to fill in. Auto save when
            you leave the input field.
          </p>
        </header>
        <h2>{user.username}</h2>
        <h2>{user.role}</h2>
      </div>
    </div>
  );
}
