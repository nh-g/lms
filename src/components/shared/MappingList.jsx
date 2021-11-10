export default function MappingList({ Component, mapData }) {
  const List = mapData.map((item) => <Component key={item.id} item={item} />);
  return <>
    {List.length > 0? List : 
    <h3>Currently no content to show. More are coming...</h3>
    }
  </>;
}
