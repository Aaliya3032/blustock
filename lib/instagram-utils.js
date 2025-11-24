/**
 * Validates Instagram URL format
 * @param {string} url - Instagram URL to validate
 * @returns {boolean} - True if valid Instagram URL
 */
export function isValidInstagramUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }

  // Check if URL contains placeholder
  if (url.includes('YOUR_POST_ID') || url.includes('placeholder')) {
    return false;
  }

  // Valid Instagram URL patterns
  const instagramPatterns = [
    /^https?:\/\/(www\.)?instagram\.com\/p\/[A-Za-z0-9_-]+\/?$/,
    /^https?:\/\/(www\.)?instagram\.com\/reel\/[A-Za-z0-9_-]+\/?$/,
    /^https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9_.]+\/?$/,
  ];

  return instagramPatterns.some(pattern => pattern.test(url));
}

/**
 * Gets fallback Instagram profile URL
 * @returns {string} - Default Instagram profile URL
 */
export function getFallbackInstagramUrl() {
  return 'https://www.instagram.com/blustockconsultants/';
}

