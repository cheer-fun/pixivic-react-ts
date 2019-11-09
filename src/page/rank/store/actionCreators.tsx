import * as actionTypes from './actionTypes';
import { getRank } from '../../../api';

export const setRankList = (data: any) => ({
  type: actionTypes.SET_RANK_LIST,
  data
});

// 第一次加载排行
export const reqRankList = () => {
  return (dispatch: any, getState: any) => {
    const { date, mode, page, pageSize } = getState().rank;
    dispatch(setLoading(true));
    getRank({ mode, date, page, pageSize }).then(res => {
      dispatch(setRankList(res.data.data));
      dispatch(setLoading(false));
    });
  }
};

// 加载更多排行
export const reqMoreRankList = () => {
  return (dispatch: any, getState: any) => {
    const { date, mode, page, pageSize, rankList } = getState().rank;
    dispatch(setPage(page + 1));
    getRank({ mode, date, page, pageSize }).then(res => {
      if (!res.data.data.length) {
        dispatch(setNoData(true));
        return;
      }
      const data = [...rankList, ...res.data.data];
      console.log(data)
      dispatch(setRankList(data));
    }).catch(err => {
      console.log('err', err);
      dispatch(setNoData(true));
    });
  }
}

export const setLoading = (data: boolean) => ({
  type: actionTypes.SET_LOADING,
  data
});

export const setMode = (data: string) => ({
  type: actionTypes.SET_MODE,
  data
});

export const setDate = (data: string) => ({
  type: actionTypes.SET_DATE,
  data
});

export const setPage = (data: number) => ({
  type: actionTypes.SET_PAGE,
  data
});

export const setPageSize = (data: number) => ({
  type: actionTypes.SET_PAGE_SIZE,
  data
});

export const setPullUpLoading = (data: boolean) => ({
  type: actionTypes.SET_PULL_UP_LOADING,
  data
});

export const setNoData = (data: boolean) => ({
  type: actionTypes.SET_NO_DATA,
  data
});
