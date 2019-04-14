export default function compareYandXposition (layerA, layerB) {
  const a = layerA.frame
  const b = layerB.frame
  const yPositionDifference = a.y - b.y
  if (yPositionDifference !== 0) {
    return yPositionDifference
  }
  return a.x - b.x
}
