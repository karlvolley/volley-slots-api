let slots = [
  
  { id: '1', start: '2025-05-10T18:00:00', end: '2025-05-10T18:15:00', capacity: 4, reserved: 1 },
  { id: '2', start: '2025-05-10T18:15:00', end: '2025-05-10T18:30:00', capacity: 4, reserved: 2 },
  // ajoute autant de créneaux que tu veux...
];

module.exports.fetchSlots = async function() {
  // retourne tous les créneaux
  return slots;
};

module.exports.reserveSlot = async function(slotId, user) {
  // trouve le slot
  const slot = slots.find(s => s.id === slotId);
  if (!slot) return { ok: false, error: 'Slot not found' };
  if (slot.reserved >= slot.capacity) return { ok: false, error: 'Full' };
  slot.reserved++;
  // Optionnel : tu pourrais stocker le user quelque part
  return { ok: true, slot };
};
