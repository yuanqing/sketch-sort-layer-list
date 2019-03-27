import {
  getSelectedLayers,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

export function sortLayers ({ sortLayers, successMessage }) {
  return function () {
    const selectedLayers = getSelectedLayers()
    if (selectedLayers.length < 2) {
      showErrorMessage('Select at least 2 layers')
      return
    }
    if (!areLayersInSameList(selectedLayers)) {
      showErrorMessage('Selected layers are not in the same list')
      return
    }
    const layers = sortLayers(selectedLayers)
    updateLayerList(layers)
    showSuccessMessage(successMessage)
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

function updateLayerList (sortedLayers) {
  const firstLayer = sortedLayers[0]
  const parent = firstLayer.sketchObject.parentGroup()
  const temporaryLayer = MSLayer.alloc().init()
  parent.insertLayer_beforeLayer(temporaryLayer, firstLayer.sketchObject)
  sortedLayers.reverse().forEach(function (layer) {
    const layerSketchObject = layer.sketchObject
    layerSketchObject.moveToLayer_beforeLayer(parent, temporaryLayer)
  })
  temporaryLayer.removeFromParent()
}
