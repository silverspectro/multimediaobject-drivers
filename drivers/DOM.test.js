import DOMDriver from './DOM';

describe('DOMDriver', () => {
  test('should have an id of DOM', () => {
    expect(DOMDriver.id).toEqual('DOM');
  });
  test('.init', () => {
    const args = {
        type:'div',
     };

    DOMDriver.init(args);
    expect(args.element).toBeTruthy();
  });
});