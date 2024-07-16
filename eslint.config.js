import beauty from '@shishuaiyun/eslint-config'

export default beauty({
  vue: {
    vueVersion: 2,
  },
  typescript: false,
}, {
  rules: {
    'no-console': 'off',
  },
})
