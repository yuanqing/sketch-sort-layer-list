import sortSelectedLayers from './sort-selected-layers'

export default sortSelectedLayers({
  label: 'X position',
  sortLayers: function (a, b) {
    return b.frame.x - a.frame.x
  }
})
