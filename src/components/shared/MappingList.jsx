export default function MappingList({ Component, mapData }) {
  const List = mapData.map((item, index) => (
      <Component key={index} item={item} />
  ));
  return (
    <>
      {List.length > 0 ? (
        List
      ) : (
        <tbody>
          <tr>
            <td>
              <h3>Currently no content to show. More are coming...</h3>
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
}
