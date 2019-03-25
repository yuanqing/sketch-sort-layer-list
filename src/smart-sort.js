import {
  getSelectedLayers,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

import { areLayersInSameList } from './are-layers-in-same-list'
import { compareYandXposition } from './compare-y-and-x-position'
import { updateLayerList } from './update-layer-list'

export default function smartSort () {
  const selectedLayers = getSelectedLayers().reverse()
  if (selectedLayers < 2) {
    showErrorMessage('Select at least two layers')
    return
  }
  if (!areLayersInSameList(selectedLayers)) {
    showErrorMessage('Selected layers are not in the same list')
    return
  }
  const layers = smartSortLayers(selectedLayers)
  updateLayerList(layers)
  showSuccessMessage('Sorted layers')
}

function smartSortLayers ([firstLayer, ...layers]) {
  const results = [firstLayer]
  layers.forEach(function (layer) {
    let i = results.length
    while (i-- > 0) {
      const resultsLayer = results[i]
      if (
        checkIfLayersOverlap(layer, resultsLayer) ||
        compareYandXposition(layer, resultsLayer) > 0
      ) {
        results.splice(i + 1, 0, layer)
        return
      }
    }
    results.splice(0, 0, layer)
  })
  return results
}

function checkIfLayersOverlap (layerA, layerB) {
  const a = layerA.frame
  const b = layerB.frame
  return !(
    a.x + a.width < b.x ||
    b.x + b.width < a.x ||
    a.y + a.height < b.y ||
    b.y + b.height < a.y
  )
}
