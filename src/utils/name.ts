export function getInitialsFirstAndLast(fullName: string): string {
  // Remove content in parentheses, prefixes with - or other non-word content
  const cleaned = fullName
    // Remove anything in parentheses
    .replace(/\(.*\)/g, "")
    // Remove non-alphabetic prefixes
    .replace(/^[^a-zA-Z]+/, "")
    // Remove non-alphabetic suffixes
    .replace(/[^a-zA-Z]+$/, "");

  // Split into words, filtering out any empty strings
  const allNames = cleaned.trim().split(/\s+/).filter(Boolean);

  // Get first letter of each word (handles special characters)
  if (allNames.length < 1) return "";

  const firstInitial = allNames[0].charAt(0).toUpperCase();

  if (allNames.length < 2) return firstInitial;
  const lastInitial = allNames[allNames.length - 1].charAt(0).toUpperCase();
  return firstInitial + lastInitial;
}
