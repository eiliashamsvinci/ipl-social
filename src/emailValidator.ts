export function validateEmail(email: string): boolean {
  if (typeof email !== 'string') {
    return false;
  }

  if (email.includes(' ')) {
    return false;
  }

  const atIndex = email.indexOf('@');
  if (atIndex === -1) {
    return false;
  }

  const beforeAt = email.substring(0, atIndex);
  const afterAt = email.substring(atIndex + 1);

  if (beforeAt.length === 0 || afterAt.length === 0) {
    return false;
  }

  const dotIndex = afterAt.indexOf('.');
  if (dotIndex === -1 || dotIndex === afterAt.length - 1) {
    return false;
  }

  return true;
}
