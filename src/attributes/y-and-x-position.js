import { compareYandXposition } from '../compare-y-and-x-position'
import { sortLayers } from '../sort-layers'

export default sortLayers({
  sortLayers: compareYandXposition,
  successMessage: 'Sorted layers by Y and X position'
})
