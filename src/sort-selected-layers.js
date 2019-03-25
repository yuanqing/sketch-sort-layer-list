import {
  getSelectedLayers,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

import { areLayersInSameList } from './are-layers-in-same-list'
import { updateLayerList } from './update-layer-list'

export function sortSelectedLayers ({ label, sortLayers }) {
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
    const layers = selectedLayers.sort(sortLayers)
    updateLayerList(layers)
    showSuccessMessage(`Sorted layers by ${label}`)
  }
}
