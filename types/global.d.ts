export declare global {
  var Module: {
    onRuntimeInitialized: (value: unknown) => void;
    preRun: () => void;
  };
}
