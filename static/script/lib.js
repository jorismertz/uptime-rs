/**
 * @param {string} selector
 * @returns {Element}
 */
function selector(selector) {
  return document.querySelector(selector);
}

/**
 * @param {Element} element
 * @param {string} name
 * @returns {string}
 */
function attr(element, name) {
  return element.getAttribute(name);
}

/**
 * Extract attribute key-value pairs from an element
 * @param {Element} element
 * @param {string[]} attributes - Array of attribute names
 * @returns {Record<string, string>} - Object with attribute key-value pairs
 */
function attributes(element, attribute_names) {
  const result = {};
  for (let key of attribute_names) {
    const value = element.getAttribute(key);

    result[key] = value;
  }

  return result;
}

/**
 * Extract data attribute key-value pairs from an element
 * @param {Element} element
 * @param {string[]} attributes - Array of attribute names
 * @returns {Record<string, string>} - Object with attribute key-value pairs
 */
function dattributes(element, attribute_names) {
  const result = {};
  for (let key of attribute_names) {
    if (!key.startsWith("data-")) key = "data-" + key;
    const value = element.getAttribute(key);

    result[key.slice(5)] = value;
  }

  return result;
}
