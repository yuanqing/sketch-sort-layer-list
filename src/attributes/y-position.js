import { sortLayers } from '../sort-layers'

export default sortLayers({
  sortLayers: function (layers) {
    return layers.sort(function (layerA, layerB) {
      return layerA.frame.y - layerB.frame.y
    })
  },
  successMessage: 'Sorted layers by Y position'
})
