export async function sendContactForm(data: any) {
  await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then((response) => {
    if (!response.ok){
      console.error('Failed to send message:', response.statusText)
      throw new Error("Failed to send message.")
    }
    return response.json()
  })
}

export async function getInvoices() {
  const response = await fetch('/api/invoice', { next: { revalidate: 300 } }) //revalidate every 5 mins

  if (!response.ok) {
    console.error('Failed to fetch invoices:', response.statusText)
    throw new Error('Failed to fetch invoices')
  }

  try {
    return await response.json()
  } catch (error) {
    console.error('Error parsing JSON:', error)
    throw new Error('Invalid JSON response')
  }
}

export async function getContacts() {
  const response = await fetch('/api/contact', { next: { revalidate: 300 } }) //revalidate every 5 mins

  if (!response.ok) {
    console.error('Failed to fetch invoices:', response.statusText)
    throw new Error('Failed to fetch invoices')
  }

  try {
    return await response.json()
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
      method: 'DELETE'
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

