import { sortSelectedLayers } from './sort-selected-layers'

export default sortSelectedLayers({
  label: 'Y position',
  sortLayers: function (layerA, layerB) {
    return layerA.frame.y - layerB.frame.y
  }
})
