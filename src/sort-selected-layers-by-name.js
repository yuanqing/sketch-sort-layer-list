import naturalCompare from 'natural-compare-lite'

import { sortSelectedLayers } from './sort-selected-layers'

export default sortSelectedLayers({
  label: 'name',
  sortLayers: function (a, b) {
    return naturalCompare(b.name, a.name)
  }
})
