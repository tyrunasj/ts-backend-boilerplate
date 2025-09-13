describe('index.ts', () => {
  it('should log "Hello, world!" to console', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    // Import the module to trigger the console.log
    await import('./index');

    expect(consoleSpy).toHaveBeenCalledWith('Hello, world!');

    consoleSpy.mockRestore();
  });
});
