import { createContext, useState, useContext, useEffect } from "react";
import { GetDateData } from "../apis/dateData";
import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";

const DateDataContext = createContext<any>(null);

// Create a custom hook to access the theme context
export const useDateDataContext = () => useContext(DateDataContext);

// Create a provider component to wrap your entire application
export const DateDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dateData, setDateDate] = useState<string>("");
  const [beginDate, setBeginDate] = useState<string>("");
  dayjs.extend(utc);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await GetDateData({
        beginDate: beginDate,
        endDate: dayjs(beginDate).utc().endOf("day").format(),
      });
      setDateDate(data);
    };
    if (beginDate) {
      fetchData();
    }
  }, [beginDate]);

  return (
    <DateDataContext.Provider value={{ dateData, setBeginDate }}>
      {children}
    </DateDataContext.Provider>
  );
};
