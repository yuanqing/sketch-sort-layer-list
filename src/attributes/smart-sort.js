import compareYandXposition from '../compare-y-and-x-position'
import sortLayersFactory from '../sort-layers-factory'

export default sortLayersFactory({
  sortLayers: smartSort,
  successMessage: 'Smart sorted layers'
})

export function smartSort ([firstLayer, ...layers]) {
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
