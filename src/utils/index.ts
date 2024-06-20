/**
 * 对字符串进行HTML编码。
 *
 * 该函数用于将特定的HTML字符转换为对应的实体字符，以避免HTML解析时的错误或安全问题。
 * 主要转换包括&、<、>、"、'等字符，它们在HTML中具有特殊含义，直接使用可能会导致页面结构错乱或XSS攻击。
 *
 * @param iStr 待编码的字符串
 * @returns 编码后的字符串
 */
const htmlEncode = (iStr: string) => {
  return iStr
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};
