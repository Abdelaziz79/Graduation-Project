import MarkDown from "../../ui/MarkDown";

export default function Explanation({ explanation }) {
  return (
    <>
      <div className="" style={{ height: "600px" }}>
        <MarkDown markdown={explanation} />
      </div>
    </>
  );
}
