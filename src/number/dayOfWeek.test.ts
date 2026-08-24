import { describe, expect, it } from 'vitest';
import { dayOfWeek } from './dayOfWeek';

describe('dayOfWeek', () => {
  it('returns 1 (Monday) for 2026-08-24', () => {
    expect(dayOfWeek(24, 8, 2026)).toBe(1);
  });

  it('returns 0 (Sunday) for 2026-08-23', () => {
    expect(dayOfWeek(23, 8, 2026)).toBe(0);
  });

  it('returns 4 (Thursday) for 1970-01-01', () => {
    expect(dayOfWeek(1, 1, 1970)).toBe(4);
  });

  it('returns 5 (Friday) for 2024-12-13', () => {
    expect(dayOfWeek(13, 12, 2024)).toBe(5);
  });

  it('handles leap day', () => {
    // 2024-02-29 is a Thursday (4)
    expect(dayOfWeek(29, 2, 2024)).toBe(4);
  });
});
