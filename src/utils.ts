import canvas from 'canvas';
import { JSDOM } from 'jsdom';
import type { LoadOptions } from './types';

export function installDom() {
  const dom = new JSDOM();
  globalThis.document = dom.window.document;

  globalThis.HTMLCanvasElement = canvas.Canvas as never;
  globalThis.ImageData = canvas.ImageData as never;
  globalThis.HTMLImageElement = canvas.Image as never;
}

export function setupCv({ postRun, preRun }: Omit<LoadOptions, 'filePath'>) {
  globalThis.Module = {
    onRuntimeInitialized: postRun,
    preRun,
  };
}
