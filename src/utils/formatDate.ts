const formatDate = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat('pt-br');
  return formatter.format(date);
};

export default formatDate;
