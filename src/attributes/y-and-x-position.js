import { compareYandXposition } from '../compare-y-and-x-position'
import sortLayersFactory from '../sort-layers-factory'

export default sortLayersFactory({
  sortLayers: compareYandXposition,
  successMessage: 'Sorted layers by Y and X position'
})
