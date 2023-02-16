/* Extracts initials from first and last name */
const extractInitials = (name: string) => {
  if (name) {
    const fn = name.split(' ')[0];
    const ln = name.split(' ')[1];

    return fn[0] + ln[0];
  }

  return null;
};

export default extractInitials;
