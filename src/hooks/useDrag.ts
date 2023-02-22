import { onMounted } from 'vue'
import throttle from 'lodash/throttle'

const useDrag = (handle: HTMLDivElement, target: HTMLDivElement) => {
  const handleMove = throttle((e: MouseEvent) => {
    console.log(handle, 'handle')
    console.log(target, 'target')

    if (e.clientX - target.offsetLeft > 400) {
      target.style.flex = '0 0 400px'
    } else if (e.clientX - target.offsetLeft < 200) {
      target.style.flex = '0 0 200px'
    } else {
      target.style.flex = `0 0 ${e.clientX - target.offsetLeft}px`
    }
  }, 500)

  handle.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', handleMove)
  })

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', handleMove)
  })

  return {}
}

export default useDrag
