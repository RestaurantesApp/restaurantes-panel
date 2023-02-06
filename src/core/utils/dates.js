export const getLegalDate = () => {
  const today = new Date();
  const legalDate = new Date(
    today.getUTCFullYear() - 18,
    today.getUTCMonth(),
    today.getUTCDate(),
  );
  return legalDate;
};
