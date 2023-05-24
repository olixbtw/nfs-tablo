import { getMainInfoApi } from "@/store/services/getMainInfo";
import { RootState } from "@/store/store";

export const selectMainInfoJSON = (state: RootState) =>
  getMainInfoApi.endpoints.getMainInfo.select()(state).data;

// full info
export const selectOnTablo = (state: RootState) =>
  selectMainInfoJSON(state)?.onTablo;
// info from (current cart? via query param (kart)?)
export const selectOnBoard = (state: RootState) =>
  selectMainInfoJSON(state)?.onBoard;
