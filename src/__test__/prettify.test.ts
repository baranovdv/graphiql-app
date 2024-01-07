import { describe, test, expect } from 'vitest';
import prettifyEditor from '../utils/prettify/prettifyEditor';

describe('Prettify', () => {
  test('should correct text', () => {
    const input = `query($page:Int, $filter:FilterCharacter){characters(page:$page,filter:$filter){results{idnamestatus}}};`;
    const expected = `query($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    results {
      idnamestatus
    }
  }
}
;`;
    const result = prettifyEditor(input);

    expect(result).toBe(expected);
  });
});
