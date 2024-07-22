// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core'

// Import bar charts, all suffixed with Chart
import { BarChart, EffectScatterChart, LineChart, PieChart } from 'echarts/charts'

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import { DataZoomComponent, DatasetComponent, GeoComponent, GridComponent, LegendComponent, TitleComponent, TooltipComponent, TransformComponent } from 'echarts/components'

// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'

// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// Register the required components
export default () => {
  echarts.use([
    BarChart,
    PieChart,
    LineChart,
    EffectScatterChart,
    DataZoomComponent,
    GeoComponent,
    LegendComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
  ])
}
