export async function getInvoices() {
  const res = await fetch('/api/invoice')

  if (!res.ok) {
    console.error('Failed to fetch invoices:', res.statusText)
    throw new Error('Failed to fetch invoices')
  }

  try {
    return await res.json()
  } catch (error) {
    console.error('Error parsing JSON:', error)
    throw new Error('Invalid JSON response')
  }
}

export async function updateInvoiceStatus(invoiceId: any, newStatus: string) {
  try {
    const response = await fetch(`/api/invoice/${invoiceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })

    if (!response.ok) {
      throw new Error('Failed to update invoice status')
    }
  } catch (error) {
    console.error('Error updating invoice status:', error)
    throw error
  }
}

export async function getClinics() {
  const res = await fetch('/api/clinic')

  if (!res.ok) {
    console.error('Failed to fetch clinics:', res.statusText)
    throw new Error('Failed to fetch clinics')
  }

  try {
    return await res.json()
  } catch (error) {
    console.error('Error parsing JSON:', error)
    throw new Error('Invalid JSON response')
  }
}

export async function deleteInvoice(id: any) {
  try {
    const response = await fetch(`/api/invoice/${id}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      console.log('Invoice deleted successfully')
      // Handle any UI updates or notifications
      return true
    } else {
      console.error('Failed to delete invoice:', response.statusText)
      // Handle error and display appropriate message to the user
      return false
    }
  } catch (error) {
    console.error('Network error:', error)
    // Handle network error
  }
}
