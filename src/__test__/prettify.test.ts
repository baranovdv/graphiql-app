import prettify from '../utils/prettify';

test('prettify', () => {
  const input = `query($page:Int, $filter:FilterCharacter){characters(page:$page,filter:$filter){results{idnamestatus}}};`;
  const expected = `query($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
        results {
            idnamestatus
        }
    }
}
;`;
  const result = prettify(input);
  expect(result).toBe(expected);
});
