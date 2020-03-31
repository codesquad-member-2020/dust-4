import { MOCK_DATA } from '../../data/mock.js';
import { $SELETOR, $SELETOR_ALL } from '../../util/index.js';
import {TabNav} from '../../util/tabNav.js';

const DUST_STATION = MOCK_DATA.DUST_STATION;
const DUST_TIMELINE = MOCK_DATA.DUST_TIMELINE;
const dustElement = $SELETOR('#dust');
const statusStationElement = $SELETOR('.status-station strong');
const timelineElement = $SELETOR('.dust-timeline');
const timelineRender = DUST_TIMELINE.reduce((list, item) => {
  list += `<li><span class="dust-grade${item.pm10Grade}" style="width:${item.pm10Value / 2}%">${item.pm10Value}</span></li>`;
  return list;
}, '');
statusStationElement.innerHTML = DUST_STATION || '종로';
timelineElement.insertAdjacentHTML('beforeend', timelineRender);


const tabNav = new TabNav({
  tabNavItems : $SELETOR_ALL('.tab-nav li'),
  tabContents : $SELETOR_ALL('.tab-contents section')
})