
export interface Phase {
  time: number;
  type: 'instruction' | 'tapping';
  text?: string;
  repetitions?: number;
  phrase?: string;
  audio: string;
  duration?: number; // duration in seconds for this phase (optional)
  pauseDuration?: number; // pause duration in seconds (for meditation/silence phases)
}

export interface Session {
  id: string;
  title: string;
  duration: number; // in seconds
  bpm: number; // beats per minute
  phases: Phase[];
  manualControl?: boolean; // whether phases are controlled manually
}

export type TapSide = 'left' | 'right';
