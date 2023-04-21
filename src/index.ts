// eslint-disable-next-line import/no-extraneous-dependencies
import 'mirada';
import path from 'path';
import { installDom, setupCv } from './utils';
import { ASSET_PATH } from './constant';
import type { LoadOptions } from './types';

function loadOpenCv(arg0?: Partial<LoadOptions>) {
  const filePath = arg0?.filePath ?? path.join(ASSET_PATH, 'opencv.js');
  const postRun = arg0?.postRun;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const preRun = arg0?.preRun ?? (() => {});
  const force = arg0?.force ?? false;

  return new Promise(function (resolve) {
    if (force && typeof globalThis.cv !== 'undefined') {
      Promise.resolve();
      return;
    }

    installDom();
    setupCv({
      postRun: postRun ?? resolve,
      preRun,
    });

    // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
    const cv = require(filePath);
    globalThis.cv = cv;
  });
}

export = loadOpenCv;
