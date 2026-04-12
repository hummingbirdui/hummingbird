/**
 * Simple dedent utility to remove indentation from template strings
 * Works as both a regular function and a template tag
 * Mimics the behavior of the npm dedent package
 */
export default function dedent(strings: string | TemplateStringsArray, ...values: unknown[]): string {
  let str = '';
  
  if (typeof strings === 'string') {
    str = strings;
  } else {
    // Handle template tag syntax - interpolate values
    str = strings.reduce((result, string, i) => {
      return result + string + (values[i] ?? '');
    }, '');
  }

  // Split into lines
  const lines = str.split('\n');
  
  // Find minimum indentation of non-empty lines
  let minIndent: number | null = null;
  for (const line of lines) {
    const match = line.match(/^(\s+)\S+/);
    if (match) {
      const indent = match[1].length;
      if (minIndent === null) {
        minIndent = indent;
      } else {
        minIndent = Math.min(minIndent, indent);
      }
    }
  }
  
  // Remove the minimum indentation from all lines
  let result: string;
  if (minIndent !== null) {
    result = lines
      .map((line) => (line[0] === ' ' || line[0] === '\t' ? line.slice(minIndent) : line))
      .join('\n');
  } else {
    result = str;
  }
  
  // Trim leading and trailing whitespace
  return result.trim();
}
