import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetMainInfo } from "@/store/types/getMainInfo.types";

const TOTAL_COUNT = 11;
const START_COUNT = 1;
let counter = START_COUNT;

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5555"
    : "https://nfs-stats.herokuapp.com";

const query = () =>
  process.env.NODE_ENV === "development"
    ? `22_8_19-getmaininfo (${counter}).json`
    : "getmaininfo.json";

const queryFulfilledFn = () => {
  if (process.env.NODE_ENV === "development") {
    if (counter === TOTAL_COUNT) counter = START_COUNT - 1;
    counter += 1;
  }
};

export const getMainInfoApi = createApi({
  reducerPath: "getMainInfo",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getMainInfo: builder.query<GetMainInfo, void>({
      query,
      onQueryStarted(id, { queryFulfilled }) {
        queryFulfilled.finally(queryFulfilledFn);
      },
    }),
  }),
});

export const { useGetMainInfoQuery } = getMainInfoApi;
