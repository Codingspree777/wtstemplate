import axios from "axios";

export interface DateDataParams {
  beginDate: string;
  endDate: string;
}

export function GetDateData({ beginDate, endDate }: DateDataParams) {
  const params = {
    begin: beginDate,
    end: endDate,
  };
  return axios.get(`https://tsserv.tinkermode.dev/data`, { params });
}
