export async function getInvoices() {
  const res = await fetch('/api/invoice')
  if (!res.ok) {
    console.log(res)
  }
  return res?.json()
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
