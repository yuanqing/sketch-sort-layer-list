import compareYandXposition from '../compare-y-and-x-position'
import sortLayersFactory from '../sort-layers-factory'

export default sortLayersFactory({
  sortLayers: smartSort,
  successMessage: 'Smart sorted layers'
})

export function smartSort ([firstLayer, ...layers]) {
  const result = [firstLayer]
  layers.forEach(function (layer) {
    let i = result.length
    while (i-- > 0) {
      const resultLayer = result[i]
      if (
        checkIfLayersOverlap(layer, resultLayer) ||
        compareYandXposition(layer, resultLayer) > 0
      ) {
        result.splice(i + 1, 0, layer)
        return
      }
    }
    result.splice(0, 0, layer)
  })
  return result
}

function checkIfLayersOverlap (layerA, layerB) {
  const a = layerA.frame
  const b = layerB.frame
  return !(
    a.x + a.width <= b.x ||
    b.x + b.width <= a.x ||
    a.y + a.height <= b.y ||
    b.y + b.height <= a.y
  )
}
