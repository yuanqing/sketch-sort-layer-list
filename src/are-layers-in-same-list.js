export function areLayersInSameList ([firstLayer, ...layers]) {
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
