import { AnyLocale } from "./index";
test('AnyLocale', () => {
    expect(AnyLocale`this is test`).toEqual('this is test');
    expect(AnyLocale`this is ${1}`).toEqual('this is 1');
});