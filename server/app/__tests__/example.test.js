function soma (a, b) {
  return a + b
}

describe('Example', () => {
  it('if i call soma function with 4 and 5 it should be nine', async () => {
    const result = soma(4, 5)
    expect(result).toBe(9)
  })
})
