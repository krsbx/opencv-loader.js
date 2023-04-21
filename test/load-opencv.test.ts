import loadOpenCv from '../dist';

describe('Open CV : File Loader', () => {
  it('Can load OpenCV from asset folder', async () => {
    await loadOpenCv({});

    expect(cv).toBeTruthy();
  });
});
