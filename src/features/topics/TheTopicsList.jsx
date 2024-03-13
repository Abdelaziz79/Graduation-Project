import Box from "../../ui/Box";
import TableComp from "./TableComp";

import { useExplanation } from "../explanation/useExplanation";
import { Spinner } from "react-bootstrap";
import { HiListBullet, HiOutlineSquares2X2 } from "react-icons/hi2";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

export default function TheTopicsList() {
  const { isLoading, explanationTopics } = useExplanation();
  const [table, setTable] = useLocalStorageState(true, "table");

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <h3>Topics</h3>
      <hr />
      <div className=" d-flex gap-3 justify-content-end ">
        <p>view</p>
        <span onClick={() => setTable((show) => !show)} className="pointer">
          {table ? (
            <HiOutlineSquares2X2 size={25} />
          ) : (
            <HiListBullet size={25} />
          )}
        </span>
      </div>
      {!table ? (
        <div className="d-flex gap-3 flex-wrap">
          {explanationTopics.map((explanation) => (
            <Box key={explanation.id} item={explanation} />
          ))}
        </div>
      ) : (
        <div>
          <TableComp explanations={explanationTopics} />
        </div>
      )}
    </>
  );
}
