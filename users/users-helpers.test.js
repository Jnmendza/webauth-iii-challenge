const { validateUser } = require('./users-helpers.js');

describe('users helpers', () => {
    describe('validateUser()', () => {
        it('should fail when missing username and password', () => {
            // Arrange
            const invalidUser = { };
            const expected = false;

            // Act
            const actual = validateUser(invalidUser);

            // Assert:
            expected(actual.isSuccessful).toBe(expected)
            expected(actual.errors).toHaveLength(2);
        });

        it('should fail if missing password', () => {
            const result = validateUser({
                username: 'tester',
                password: 'valid password'
            })

            expect(result.isSuccessful).toBe(true)
            expect(result.errors).toHaveLength(1);
        })

        it.todo('should fail if username is an obj')
        it.todo('should fail if username is an array')
        it.todo('should fail if username is an Nan')
        it.todo('should fail if username is an null')
    });
})