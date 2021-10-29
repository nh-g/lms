export default function MappingList({ Component, mapData }) {

  console.log("Mapping", mapData)
  const List = mapData.map((item) => <Component key={item.id} item={item} />);
  return <>{List}</>;
}
