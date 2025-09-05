import { useDispatch, UseDispatch, useSelector } from "react-redux";
import type { Rootstate, AppDispatch } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()