import { sortLayers } from '../sort-layers'

export default sortLayers({
  sortLayers: function (layers) {
    return layers.sort(function (layerA, layerB) {
      return layerA.frame.x - layerB.frame.x
    })
  },
  successMessage: 'Sorted layers by X position'
})
