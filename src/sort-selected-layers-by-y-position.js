import sortSelectedLayers from './sort-selected-layers'

export default sortSelectedLayers({
  label: 'Y position',
  sortLayers: function (a, b) {
    return b.frame.y - a.frame.y
  }
})
