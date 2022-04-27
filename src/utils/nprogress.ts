import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '~/styles/nprogress.scss';

/** 页面加载进度 */
nProgress.configure({
  // 自动增长
  trickle: true,
  // 自动递增间隔，单位ms
  trickleSpeed: 150,
  // 初始化时的最小百分比
  minimum: 0.08,
});

export default nProgress;
