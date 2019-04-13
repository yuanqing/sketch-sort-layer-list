import naturalCompare from 'natural-compare-lite'

import sortLayersFactory from '../sort-layers-factory'

export default sortLayersFactory({
  sortLayers: function (layers) {
    return layers.sort(function (a, b) {
      return naturalCompare(a.name.toLowerCase(), b.name.toLowerCase())
    })
  },
  successMessage: 'Sorted layers by name'
})
