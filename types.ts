
export interface Phase {
  time: number;
  type: 'instruction' | 'tapping';
  text?: string;
  repetitions?: number;
  phrase?: string;
  audio: string;
}

export interface Session {
  id: string;
  title: string;
  duration: number; // in seconds
  bpm: number; // beats per minute
  phases: Phase[];
}

export type TapSide = 'left' | 'right';
