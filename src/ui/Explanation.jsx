import MarkDown from "./MarkDown";

export default function Explanation({ explanation }) {
  return (
    <>
      <div style={{ height: "696px" }}>
        <MarkDown markdown={explanation} />
      </div>
    </>
  );
}
