import sortLayersFactory from '../sort-layers-factory'

export default sortLayersFactory({
  sortLayers: function (layers) {
    return layers.sort(function (layerA, layerB) {
      return layerA.frame.x - layerB.frame.x
    })
  },
  successMessage: 'Sorted layers by X position'
})
