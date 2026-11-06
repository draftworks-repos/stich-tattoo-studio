import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTattooEstimate, validateBookingForm, generateTicketReference } from './booking-utils';

test('calculateTattooEstimate computes realistic minimums and maximums for small piece', () => {
  const estimate = calculateTattooEstimate({
    size: 'small',
    style: 'traditional',
  });

  assert.equal(estimate.estimatedHoursMin, 1);
  assert.equal(estimate.estimatedHoursMax, 2);
  assert.ok(estimate.priceMin >= 150);
  assert.ok(estimate.priceMax >= 250);
  assert.ok(estimate.depositRequired >= 100);
  assert.equal(estimate.sessionsCount, 1);
});

test('calculateTattooEstimate adjusts for large complex realism piece', () => {
  const estimate = calculateTattooEstimate({
    size: 'full-sleeve',
    style: 'realism',
  });

  assert.ok(estimate.estimatedHoursMin > 20);
  assert.ok(estimate.estimatedHoursMax > 35);
  assert.ok(estimate.sessionsCount >= 5);
  assert.ok(estimate.priceMin > 3000);
});

test('validateBookingForm flags invalid and missing fields', () => {
  const invalid = validateBookingForm({
    name: '',
    email: 'not-an-email',
    phone: '12',
    style: '',
    size: '',
    placement: '',
    description: 'too short',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.style);
  assert.ok(invalid.errors.size);
  assert.ok(invalid.errors.placement);
  assert.ok(invalid.errors.description);
});

test('validateBookingForm accepts well-formed submission', () => {
  const valid = validateBookingForm({
    name: 'Julian Vance',
    email: 'julian@example.com',
    phone: '+1 555 234 5678',
    style: 'Fine Line',
    size: 'medium',
    placement: 'Inner forearm',
    description: 'Minimalist botanical fern with single-needle stippled shading.',
  });

  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('generateTicketReference returns formatted studio ticket code', () => {
  const ref = generateTicketReference('test-seed');
  assert.match(ref, /^INK-\d{4}-[A-Z0-9]{4}$/);
});
