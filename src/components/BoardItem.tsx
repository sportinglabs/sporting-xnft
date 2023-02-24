export function BoardItem(props: {
  rank: string;
  name: string;
  total: string;
  last: string;
}) {
  return (
    <div className="board-item">
      <div className="board-cell-rank">
        <p>{props.rank}</p>
      </div>
      <div className="board-cell-name">
        <p>{props.name}</p>
      </div>
      <div className="board-cell-total">
        <p>◎{props.total}</p>
      </div>
      <div className="board-cell-last">
        <p>◎{props.last}</p>
      </div>
    </div>
  );
}
