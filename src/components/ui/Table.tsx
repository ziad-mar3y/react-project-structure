type TableProps = {
  columns: string[];
  data: Record<string, unknown>[];
  striped?: boolean;
};

function Table({
  columns,
  data,
  striped = false,
}: TableProps) {
  return (
    <table className={striped ? "table table-striped" : "table"}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column}>
                {String(row[column] ?? "")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;