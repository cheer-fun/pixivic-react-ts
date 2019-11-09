import React, { memo } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import './index.styl';

interface HomeProps extends RouteConfig {

}

const Home: React.FC<HomeProps> = ({
  route
}) => {
  return (
    <div className="home">
      {renderRoutes(route.routes)}
      <div className="home__tab">
        <NavLink to="/rank">
          <div>
            <i className="iconfont icon-paiming"></i>
            <span>排名</span>
          </div>
        </NavLink>
        <NavLink to="/find">
          <div>
            <i className="iconfont icon-faxian"></i>
            <span>发现</span>
          </div>
        </NavLink>
        <NavLink to="/me">
          <div>
            <i className="iconfont icon-xiaolian"></i>
            <span>我的</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default memo(Home);
