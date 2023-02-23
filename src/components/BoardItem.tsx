export function BoardItem(props: {
  rank: string;
  name: string;
  total: string;
  last: string;
}) {
  return (
    <div>
      <div>
        <p>{props.rank}</p>
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <p>◎{props.total}</p>
      </div>
      <div>
        <p>◎{props.last}</p>
      </div>
    </div>
  );
}
