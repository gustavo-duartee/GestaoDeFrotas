// function formatDateEdit(dateString) {
//   const [datePart] = dateString.split("T");
//   return datePart;
// }

// function formatDatePreview(dateString) {
//   const [year, month, day] = dateString.split("T")[0].split("-");
//   return `${day}/${month}/${year}`;
// }

export function formatDateEdit(dateString) {
  const [datePart] = dateString.split("T");
  return datePart;
}

export function formatDatePreview(dateString) {
  const [year, month, day] = dateString.split("T")[0].split("-");
  return `${day}/${month}/${year}`;
}
