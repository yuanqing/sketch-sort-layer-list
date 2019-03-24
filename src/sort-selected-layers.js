import {
  getSelectedLayers,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

export default function sortSelectedLayers ({ label, sortLayers }) {
  return function () {
    const selectedLayers = getSelectedLayers().reverse()
    if (selectedLayers < 2) {
      showErrorMessage('Select at least two layers')
      return
    }
    if (!areLayersInSameList(selectedLayers)) {
      showErrorMessage('Selected layers are not in the same list')
      return
    }
    const firstLayer = selectedLayers[0]
    const parent = firstLayer.sketchObject.parentGroup()
    const temporaryLayer = MSLayer.alloc().init()
    parent.insertLayer_beforeLayer(temporaryLayer, firstLayer.sketchObject)
    selectedLayers.sort(sortLayers).forEach(function (layer) {
      const layerSketchObject = layer.sketchObject
      layerSketchObject.moveToLayer_beforeLayer(parent, temporaryLayer)
    })
    temporaryLayer.removeFromParent()
    showSuccessMessage(`Sorted layers by ${label}`)
  }
}

function areLayersInSameList ([firstLayer, ...layers]) {
  const firstLayerParent = firstLayer.parent
  return layers.reduce(function (result, layer) {
    if (!result) {
      return result
    }
    const parent = layer.parent
    if (firstLayerParent == null) {
      return parent == null
    }
    return parent.id && parent.id === firstLayerParent.id
  }, true)
}
