import suppressErrors from '../../../src/ext/decorators/suppressErrors';

class SuppressErrorsStub {
    uncaught() {
        throw new Error('Uncaught error.');
    }

    @suppressErrors
    caught() {
        throw new Error('Caught error.');
    }
}

describe('ext/decorators/suppressErrors()', () => {
    it('should suppress and log all console messages', () => {
        let obj = new SuppressErrorsStub();

        expect(() => obj.uncaught()).toThrowError('Uncaught error.');
        expect(obj.caught()).toEqual(new Error('Caught error.'));
    });
});
