import naturalCompare from 'natural-compare-lite'

import sortLayersFactory from '../sort-layers-factory'

export default sortLayersFactory({
  sortLayers: sortByName,
  successMessage: 'Sorted layers by name'
})

export function sortByName (layers) {
  return layers.sort(function (a, b) {
    const aName = a.name.toLowerCase()
    const bName = b.name.toLowerCase()
    if (aName === bName) {
      return naturalCompare(a.id, b.id)
    }
    return naturalCompare(aName, bName)
  })
}
