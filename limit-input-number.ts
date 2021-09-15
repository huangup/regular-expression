/** 限制数字输入框只能输入整数 */
const limitNumber = value => {
  if (typeof value === 'string') {
    return !isNaN(Number(value)) ? value.replace(/^[^\d]/g, '') : '';
  }
  if (typeof value === 'number') {
    return !isNaN(value) ? String(value).replace(/^[^\d]/g, '') : '';
  }
  return '';
};
