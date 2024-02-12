// import RenderMemberTableRows from '../RenderMemberTableRows';
import MemberTableRow from './MemberTableRow.js';
import './style.css';
import TableHeader from './TableHeader.js';
import styled from 'styled-components';

function MemberTable() {
  return (
    <Table>
      <TableHeader />
      <MemberTableRow />
    </Table>
  );
}

export default MemberTable;

const Table = styled.table`
  flex: 0 0 auto;
  border: 1px solid var(--color-lavender-baf09a6c);
  border-radius: var(--border-radius-6);
  background: var(--color-white);
  box-sizing: border-box;
  width: 70%;
  margin-top: -14px;
  //   border-spacing: 0;
`;
