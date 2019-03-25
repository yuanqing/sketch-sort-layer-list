import { sortSelectedLayers } from './sort-selected-layers'

export default sortSelectedLayers({
  label: 'X position',
  sortLayers: function (layerA, layerB) {
    return layerA.frame.x - layerB.frame.x
  }
})
