export const validateProfile = (data) => {
  const errors = {};
  if (!data.name?.trim()) errors.name = "Name is required";
  if (!data.dob) errors.dob = "Birth date is required";
  return { isValid: Object.keys(errors).length === 0, errors };
};
