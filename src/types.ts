export type LoadOptions = {
  filePath: string;
  preRun: () => void;
  postRun: (value?: unknown) => void;
  force?: boolean;
};
