const express = require('express')
const router = express.Router()

// 저장 요청
router.post('/save', (req, res) => {
  const { html } = req.body
  console.log('@ 저장할 HTML:', html)

  // 나중에 DB 저장 로직 추가 예정
  return res.json({ message: '저장 완료!' })
})

module.exports = router
