import SortButton from "./SortButton";

export default function Sorter({ hook }) {
  return (
    <section className="section-sorter">
      <SortButton target="courses" hook={hook}>
        Courses
      </SortButton>
      <SortButton target="students" hook={hook}>
        Students
      </SortButton>
    </section>
  );
}
