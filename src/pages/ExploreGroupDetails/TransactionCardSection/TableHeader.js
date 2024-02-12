import './style.css';

function TableHeader() {
  return (
    <thead>
      <tr className="table-row-header">
        <td className="slot-name-cell">
          <p className="slot-name-age-action">SLOTS</p>
        </td>
        <td className="slot-info">
          <p className="slot-name-age-action">NAME</p>
        </td>
        <td className="slot-info">
          <p className="slot-name-age-action">AGE</p>
        </td>
        <td className="table-cell-action">
          <p className="slot-name-age-action">ACTION</p>
        </td>
      </tr>
    </thead>
  );
}

export default TableHeader;
