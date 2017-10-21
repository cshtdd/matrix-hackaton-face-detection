matrix.on('test', () => {
  matrix.led('blue').render()

  setTimeout(() => {
    matrix.led('black').render()
  }, 5000)
})
