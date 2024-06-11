import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.table`
  border: 1px solid black;
  width: 100%;
`;
const TableRows = styled.tr`
  border: 1px solid black;
  width: 100%;
`;

const TableHeader = styled.th`
  border: 1px solid black;
  padding: 10px;
`;

const TableData = styled.td`
  border: 1px solid black;
  padding: 10px;
`;

const PaginationContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CurrentPage = styled.p``;

const PageButton = styled.button`
  width: 80px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

interface TableProps {
  data: Array<{
    date: string;
    timestamp: string;
    value: string;
  }>;
  pageSize: number;
}

const Table = ({ data, pageSize }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<TableProps["data"]>([]);

  const pageCount = Math.ceil(data.length / pageSize);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedArray = data.slice(startIndex, endIndex);

    setPaginatedData(paginatedArray);
  }, [currentPage, data]);

  return (
    <Container>
      <TableContainer>
        <TableRows>
          <TableHeader>Day</TableHeader>
          <TableHeader>Time</TableHeader>
          <TableHeader>Value</TableHeader>
        </TableRows>
        {paginatedData.map((item, index) => {
          return (
            <TableRows key={index}>
              <TableData>{item.date}</TableData>
              <TableData>{item.timestamp}</TableData>
              <TableData>{item.value}</TableData>
            </TableRows>
          );
        })}
      </TableContainer>
      <PaginationContainer>
        <PageButton
          onClick={() =>
            currentPage > 1 ? setCurrentPage(currentPage - 1) : null
          }
        >
          {`< Prev`}
        </PageButton>
        <CurrentPage>{`${currentPage} of ${pageCount}`}</CurrentPage>
        <PageButton
          onClick={() =>
            currentPage < pageCount ? setCurrentPage(currentPage + 1) : null
          }
        >{`Next >`}</PageButton>
      </PaginationContainer>
    </Container>
  );
};

export default Table;
