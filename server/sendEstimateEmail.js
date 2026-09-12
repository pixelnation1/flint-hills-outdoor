import { Resend } from 'resend'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_FIELD_LENGTH = 2000

function clean(value, max = MAX_FIELD_LENGTH) {
  return String(value ?? '')
    .trim()
    .slice(0, max)
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function validateEstimate(body) {
  const data = {
    name: clean(body?.name, 200),
    phone: clean(body?.phone, 50),
    email: clean(body?.email, 200),
    address: clean(body?.address, 300),
    service: clean(body?.service, 200),
    frequency: clean(body?.frequency, 80),
    message: clean(body?.message, MAX_FIELD_LENGTH),
  }

  const errors = []
  if (!data.name) errors.push('name')
  if (!data.phone) errors.push('phone')
  if (!data.service) errors.push('service')
  if (
    data.frequency &&
    data.frequency !== 'One-Time Service' &&
    data.frequency !== 'Recurring Service'
  ) {
    errors.push('frequency')
  }
  if (data.email && !EMAIL_PATTERN.test(data.email)) errors.push('email')

  return { errors, data }
}

function formatText(data) {
  return [
    `Customer Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || 'Not provided'}`,
    `Property Address / City: ${data.address || 'Not provided'}`,
    `Service Needed: ${data.service}`,
    `Service Frequency: ${data.frequency || 'Not provided'}`,
    `Additional Details: ${data.message || 'None'}`,
  ].join('\n')
}

function formatHtml(data) {
  const rows = [
    ['Customer Name', data.name],
    ['Phone', data.phone],
    ['Email', data.email || 'Not provided'],
    ['Property Address / City', data.address || 'Not provided'],
    ['Service Needed', data.service],
    ['Service Frequency', data.frequency || 'Not provided'],
    ['Additional Details', data.message || 'None'],
  ]

  const items = rows
    .map(
      ([label, value]) =>
        `<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#2c2a26;"><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replaceAll('\n', '<br>')}</p>`,
    )
    .join('')

  return `<div style="max-width:640px;margin:0 auto;padding:8px 0;">${items}</div>`
}

export async function sendEstimateEmail(data) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY')
  }

  const resend = new Resend(apiKey)
  const payload = {
    from: 'Flint Hills Outdoor Co. <service@flinthillsoutdoorco.com>',
    to: ['service@flinthillsoutdoorco.com'],
    subject: 'New Estimate Request - Flint Hills Outdoor Co.',
    text: formatText(data),
    html: formatHtml(data),
  }

  if (data.email && EMAIL_PATTERN.test(data.email)) {
    payload.replyTo = data.email
  }

  const { error } = await resend.emails.send(payload)
  if (error) {
    throw new Error(error.message || 'Resend send failed')
  }
}

export async function processEstimate(body) {
  const { errors, data } = validateEstimate(body)
  if (errors.length) {
    return { status: 400, json: { ok: false, errors } }
  }

  try {
    await sendEstimateEmail(data)
    return { status: 200, json: { ok: true } }
  } catch (error) {
    console.error('Estimate email failed:', error)
    return { status: 500, json: { ok: false } }
  }
}
