import homePage from './pages/homePage';
import topGainers from './pages/topGainers';
import intadayBuying from './pages/intadayBuying';
import openHigh from './pages/openHigh';
import cciReversal from './pages/cciReversal';
import rsiOverbought from './pages/rsiOverbought';
import openHighParams from './pages/openHighParams';
import cciArrayParams from './pages/cciArrayParams';
import cciPeriodParams from './pages/cciPeriodParams';
import rsiParamsOne from './pages/rsiParamsOne';
import rsiParamsTwo from './pages/rsiParamsTwo';
import rsiParamsThree from './pages/rsiParamsThree';
import rsiPeriodParams from './pages/rsiPeriodParams';

const routes = [
  {
    path: '/',
    component: homePage,
    exact: true
  },
  {
    path: '/top_gainers.html',
    component: topGainers,
    exact: true
  },
  {
    path: '/intraday_buying.html',
    component: intadayBuying,
    exact: true
  },
  {
    path: '/open_high.html',
    component: openHigh,
    exact: true
  },
  {
    path: '/cci_reversal.html',
    component: cciReversal,
    exact: true
  },
  {
    path: '/rsi_overbought.html',
    component: rsiOverbought,
    exact: true
  },
  {
    path: '/open_high_params.html',
    component: openHighParams,
    exact: true
  },
  {
    path: '/cci_array_params.html',
    component: cciArrayParams,
    exact: true
  },
  {
    path: '/cci_period_params.html',
    component: cciPeriodParams,
    exact: true
  },
  {
    path: '/rsi_params_one.html',
    component: rsiParamsOne,
    exact: true
  },
  {
    path: '/rsi_params_two.html',
    component: rsiParamsTwo,
    exact: true
  },
  {
    path: '/rsi_params_three.html',
    component: rsiParamsThree,
    exact: true
  },
  {
    path: '/rsi_period_params.html',
    component: rsiPeriodParams,
    exact: true
  },
 // and so on for other routes in your project
]

export default routes;