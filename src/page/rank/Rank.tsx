import React, { memo, useEffect, useState, useCallback, useRef } from 'react';
import { RouteConfig } from 'react-router-config';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Loading from '../../components/loading/Loading';
import './index.styl';

interface RankProps extends RouteConfig {
  rankList: any,
  getRankListDispatch: () => void
}

const Rank: React.FC<RankProps> = (props: RankProps) => {
  const { rankList } = props;
  const { getRankListDispatch } = props;

  // 首次加载排行
  useEffect(() => {
    if (rankList.length) return;
    getRankListDispatch();
  }, []);

  return (
    <div className="rank">
      <Loading />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  rankList: state.rank.rankList,
  loading: state.rank.loading
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getRankListDispatch() {
      dispatch(actionCreators.reqRankList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Rank));
