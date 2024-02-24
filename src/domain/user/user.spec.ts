import { User, UserProps } from './user';

describe('User Unit Tests', () => {
  it('should create a user', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@example.com',
      password: 'password_any',
    };

    const user = User.create(userProps);
    expect(user.props).toEqual({
      ...userProps,
    });
  });

  it('should return a user Json', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@example.com',
      password: 'password_any',
    };

    const user = User.create(userProps);

    user.toJSON();
    expect(user.toJSON()).toStrictEqual({
      id: user.id,
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@example.com',
      password: 'password_any',
    });
  });

  it('should create a user with a valid password', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@example.com',
      password: 'valid_password',
    };

    const user = User.create(userProps);

    const password = userProps.password;
    const isValidPassword = user.validatePassword(password);

    expect(isValidPassword).toBeTruthy();
  });

  it('should throw when trying to create a user with invalid password', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@example.com',
      password: 'invalid',
    };

    const user = User.create(userProps);

    const password = userProps.password;

    expect(() => user.validatePassword(password)).toThrow(
      'Password must be greater than 8 digits!',
    );
  });

  it('should update a user', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@example.com',
      password: 'password_any',
    };

    const user = User.create(userProps);
    user.updateName('any_name_any');
    expect(user.name).toBe('any_name_any');
  });

  it('should update a email', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@example.com',
      password: 'password_any',
    };

    const user = User.create(userProps);
    user.updateEmail('any_new_email@example.com');
    expect(user.email).toBe('any_new_email@example.com');
  });
});
