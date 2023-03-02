const useDrag = (handle: HTMLElement, target: HTMLElement) => {
  const setWidth = (size: number) => {
    target.style.flex = `0 0 ${size}px`
    target.style.width = `${size}px`
  }

  const handleMove = (e: MouseEvent) => {
    // console.log(handle, 'handle')
    // console.log(target, 'target')
    // console.log(e.clientX, '===')
    
    if (e.clientX > 400) {
      setWidth(400)
    } else if (e.clientX < 100) {
      setWidth(100)
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
