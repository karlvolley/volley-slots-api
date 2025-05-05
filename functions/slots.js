const { fetchSlots, reserveSlot } = require('./db');

exports.handler = async (event) => {
  try {
    if (event.httpMethod === 'GET') {
      const slots = await fetchSlots();
      return { statusCode: 200, body: JSON.stringify(slots) };
    }
    if (event.httpMethod === 'POST') {
      const { slotId, user } = JSON.parse(event.body);
      const result = await reserveSlot(slotId, user);
      return {
        statusCode: result.ok ? 200 : 400,
        body: JSON.stringify(result)
      };
    }
    return { statusCode: 405, body: 'Method Not Allowed' };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
