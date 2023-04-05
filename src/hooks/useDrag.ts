/**
 * 
 * @param handle 鼠标按下的元素或者杯拖动的元素 必填
 * @param target 改变宽度的元素 必填
 * @param maxWidth 最大宽度 非必填 默认400
 * @param minWidth 最小宽度 非必填 默认100
 */
const useDrag = (
  handle: HTMLElement,
  target: HTMLElement,
  maxWidth: number = 400,
  minWidth: number = 100
) => {
  const setWidth = (size: number) => {
    target.style.flex = `0 0 ${size}px`
    target.style.width = `${size}px`
  }

  const handleMove = (e: MouseEvent) => {
    if (e.clientX > maxWidth) {
      setWidth(maxWidth)
    } else if (e.clientX < minWidth) {
      setWidth(minWidth)
    } else {
      setWidth(e.clientX)
    }
  }

  handle.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', handleMove)
  })

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', handleMove)
  })
}

export default useDrag
