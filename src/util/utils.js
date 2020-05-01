export function checkTopStuck (entry, target, onChange) {
  const { boundingClientRect, rootBounds } = entry
  
  if (boundingClientRect.bottom < rootBounds.top) {
    onChange(true, target)
  }
  
  if (boundingClientRect.bottom >= rootBounds.top &&
    boundingClientRect.bottom < rootBounds.bottom) {
      onChange(false, target)
  }
}