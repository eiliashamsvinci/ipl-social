import { validateEmail } from '../src/emailValidator';

describe('Email Validator - TDD', () => {

  test('should reject email without @', () => {
    expect(validateEmail('testemail.com')).toBe(false);
  });

  test('should reject email with spaces', () => {
    expect(validateEmail('test @email.com')).toBe(false);
  });

  test('should reject email without text before @', () => {
    expect(validateEmail('@email.com')).toBe(false);
  });

  test('should reject email without text after @', () => {
    expect(validateEmail('test@')).toBe(false);
  });

  test('should reject email without dot in domain', () => {
    expect(validateEmail('test@emailcom')).toBe(false);
  });

  test('should reject email with dot as last character', () => {
    expect(validateEmail('test@email.')).toBe(false);
  });

  test('should accept valid email', () => {
    expect(validateEmail('test.email@domain.com')).toBe(true);
  });

});
