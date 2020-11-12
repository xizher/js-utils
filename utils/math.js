export function randomRange (minValue, maxValue) {
  return minValue + Math.round(Math.random() * (maxValue - minValue))
}
