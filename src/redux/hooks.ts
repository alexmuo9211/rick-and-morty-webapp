import { RootDispatch, RootState } from "@/src/redux/store";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppDispatch = () => {
  useDispatch<RootDispatch>()
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector