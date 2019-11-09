import * as actionTypes from './actionTypes';
import dayjs from 'dayjs';
import { rankMode } from '../../../utils/config';

const defaultState = {
  rankList: [],
  loading: false,
  mode: rankMode.day,
  date: dayjs(Date.now() - 24 * 60 * 60 * 1000 * 3).format('YYYY-MM-DD'),
  page: 1,
  pageSize: 30,
  pullUpLoading: false,
  noData: false
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_RANK_LIST:
      return {...state, rankList: action.data};
    case actionTypes.SET_LOADING:
      return {...state, loading: action.data};
    case actionTypes.SET_MODE:
      return {...state, mode: action.data};
    case actionTypes.SET_DATE:
      return {...state, date: action.data};
    case actionTypes.SET_PAGE:
      return {...state, page: action.data};
    case actionTypes.SET_PAGE_SIZE:
      return {...state, pageSize: action.data};
    case actionTypes.SET_PULL_UP_LOADING:
      return {...state, pullUpLoading: action.data};
    default:
      return state;
  }
};
