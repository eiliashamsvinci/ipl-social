import { validateEmail } from '../src/emailValidator';

describe('Email Validator - TDD', () => {
  // Non-string inputs
  test('should reject non-string inputs', () => {
    expect(validateEmail(123 as any)).toBe(false);
    expect(validateEmail(null as any)).toBe(false);
    expect(validateEmail(undefined as any)).toBe(false);
  });

  // Must contain @
  test('should reject email without @', () => {
    expect(validateEmail('testemail.com')).toBe(false);
  });

  // Must not contain spaces
  test('should reject email with spaces', () => {
    expect(validateEmail('test @email.com')).toBe(false);
  });

  // Must have text before @
  test('should reject email without text before @', () => {
    expect(validateEmail('@email.com')).toBe(false);
  });

  // Must have text after @
  test('should reject email without text after @', () => {
    expect(validateEmail('test@')).toBe(false);
  });

  // Domain must contain dot
  test('should reject email without dot in domain', () => {
    expect(validateEmail('test@emailcom')).toBe(false);
  });

  // Dot cannot be last character
  test('should reject email with dot as last character', () => {
    expect(validateEmail('test@email.')).toBe(false);
  });

  // Valid email
  test('should accept valid email', () => {
    expect(validateEmail('test.email@domain.com')).toBe(true);
  });
});
