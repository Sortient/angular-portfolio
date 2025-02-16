import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

(globalThis as any).bootstrap = {
  Collapse: jest.fn().mockImplementation(() => ({
    hide: jest.fn(),
    show: jest.fn(),
  })),
};

setupZoneTestEnv();
