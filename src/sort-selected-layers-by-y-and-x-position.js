import { sortSelectedLayers } from './sort-selected-layers'
import { compareYandXposition } from './compare-y-and-x-position'

export default sortSelectedLayers({
  label: 'Y and X position',
  sortLayers: compareYandXposition
})
