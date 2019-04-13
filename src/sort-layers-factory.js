import {
  getSelectedLayers,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

import updateLayerList from './update-layer-list'

export default function sortLayersFactory ({ sortLayers, successMessage }) {
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
    const sortedLayers = sortLayers(selectedLayers)
    updateLayerList({sortedLayers, shouldSelectLayers: true})
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
