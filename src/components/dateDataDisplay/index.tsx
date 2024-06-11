import { useState, useEffect } from "react";
import { useDateDataContext } from "../../contexts/dateDataContext";
import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
import styled from "styled-components";

import LineGraph from "../common/linegraph";
import Table from "../common/table";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-bottom: 5rem;
`;

const Header = styled.h2``;

const DateContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const DateInput = styled.input`
  width: 110px;
  padding: 10px;
  cursor: pointer;
`;

const FetehButton = styled.button`
  width: 100px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DateDisplay = () => {
  const { dateData, setBeginDate } = useDateDataContext();
  const [inputDate, setInputDate] = useState<string>("");
  const [placeHolderDate, setPlaceHolderDate] = useState<string | null>("");
  dayjs.extend(utc);

  //use session cookie to store the date to keep the input values after refresh
  useEffect(() => {
    const storedSessionDate = sessionStorage.getItem("beginDate");
    if (inputDate !== "") {
      sessionStorage.setItem("beginDate", inputDate);
    }
    if (inputDate === "") {
      setBeginDate(storedSessionDate);
      setPlaceHolderDate(storedSessionDate);
    }
  }, [inputDate]);

  // Split the string by newline character to get individual lines
  const mappedData = dateData.split("\n");

  // const cleanedData = mappedData.map((line: string) => {
  //   // Split the line by comma to get individual values
  //   const lineArray = line.split(" ");

  //   // Return an object with the values
  //   if (line !== "") {
  //     return {
  //       date: dayjs(lineArray[0]).format("MM-DD-YYYY"),
  //       timestamp: dayjs(lineArray[0]).format("HH:mm:ss"),
  //       value: lineArray[1] !== "" ? lineArray[1] : lineArray[2],
  //     };
  //   }
  // });

  const cleanedData = mappedData.reduce((temp: any, line: string) => {
    // Split the line by comma to get individual values
    const lineArray = line.split(" ");
    if (lineArray[0] !== "") {
      temp.push({
        date: dayjs(lineArray[0]).format("MM-DD-YYYY"),
        timestamp: dayjs(lineArray[0]).format("HH:mm:ss"),
        value: lineArray[1] !== "" ? lineArray[1] : lineArray[2],
      });
    }
    return temp;
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const utcDate = dayjs(e.target.value).utc().format();

    setInputDate(utcDate);
  };

  return (
    <MainContainer>
      <Header>Mode Date Data Search</Header>
      <DateContainer>
        <DateInput
          type="date"
          aria-label="date input"
          onChange={(e) => handleDateChange(e)}
          max={dayjs().format("YYYY-MM-DD")}
          value={
            inputDate ? undefined : dayjs(placeHolderDate).format("YYYY-MM-DD")
          }
        />
        <FetehButton onClick={() => setBeginDate(inputDate)}>
          Fetch Data
        </FetehButton>
      </DateContainer>
      {dateData && (
        <>
          <LineGraph data={cleanedData} />
          <Table data={cleanedData} pageSize={20} />
        </>
      )}
    </MainContainer>
  );
};

export default DateDisplay;
