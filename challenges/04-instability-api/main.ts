import { Warning } from '../../components';
new Warning();

/** LayoutShift API doesn't exist in lib.dom.ts ?!? */
interface LayoutShift extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

let cls = 0;
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    const layoutShift = entry as LayoutShift;
    if (!layoutShift.hadRecentInput) {
      cls += layoutShift.value;
      console.log('Current CLS value:', cls, entry);
    }
  }
}).observe({ type: 'layout-shift', buffered: true });
