export const formatDate = (date, options = { year: 'numeric', month: 'long', day: 'numeric' }) => {
  return new Date(date).toLocaleDateString('en', options)
}

export const currentYear = () => {
  const options = { year: 'numeric' }
  return new Date().toLocaleDateString('en', options)
}
