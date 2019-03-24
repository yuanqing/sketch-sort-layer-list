import sortSelectedLayers from './sort-selected-layers'

export default sortSelectedLayers({
  label: 'Y and X position',
  sortLayers: function (a, b) {
    const yPositionDifference = b.frame.y - a.frame.y
    if (yPositionDifference !== 0) {
      return yPositionDifference
    }
    return b.frame.x - a.frame.x
  }
})
