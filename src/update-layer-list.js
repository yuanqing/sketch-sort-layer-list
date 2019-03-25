export function updateLayerList (layers) {
  const firstLayer = layers[0]
  const parent = firstLayer.sketchObject.parentGroup()
  const temporaryLayer = MSLayer.alloc().init()
  parent.insertLayer_beforeLayer(temporaryLayer, firstLayer.sketchObject)
  layers.reverse().forEach(function (layer) {
    const layerSketchObject = layer.sketchObject
    layerSketchObject.moveToLayer_beforeLayer(parent, temporaryLayer)
  })
  temporaryLayer.removeFromParent()
}
