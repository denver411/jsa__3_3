import fetchData from '../src/js/http';
import getLevel from '../src/js/app';

jest.mock('../src/js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Should return user level', () => {
  const userLevel = 80;

  fetchData.mockReturnValue({
    status: 'ok',
    level: userLevel,
  });

  expect(getLevel(1)).toBe(`Ваш текущий уровень: ${userLevel}`);
});

test('Should return unavailable', () => {
  fetchData.mockReturnValue({
    status: false,
  });

  expect(getLevel(45)).toBe('Информация об уровне временно недоступна');
});
