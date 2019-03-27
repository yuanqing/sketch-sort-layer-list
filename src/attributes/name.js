import naturalCompare from 'natural-compare-lite'

import { sortLayers } from '../sort-layers'

export default sortLayers({
  sortLayers: function (layers) {
    return layers.sort(function (a, b) {
      return naturalCompare(a.name, b.name)
    })
  },
  successMessage: 'Sorted layers by name'
})
