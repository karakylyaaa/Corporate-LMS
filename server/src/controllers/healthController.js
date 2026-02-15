function getHealth(req, res) {
  res.json({ data: { status: 'ok' } });
}

module.exports = { getHealth };
