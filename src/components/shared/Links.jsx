export default function Links({ data }) {
  const Links = data.links.map((item, index) => {
    return (
      <li key={item}>
        <a href={item} rel="noreferrer" target="_blank">
          <h4> External link {index + 1} ...</h4>
        </a>
      </li>
    );
  });

  return (
    <div className="links">
      <ul>{Links}</ul>
    </div>
  );
}
