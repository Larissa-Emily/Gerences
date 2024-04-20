export default function Greeting() {
  const greetingMessage = () => {
    const currentDate = new Date().getHours();
    if (currentDate >= 0 && currentDate < 12) {
      return `Bom dia`;
    } else if (currentDate >= 12 && currentDate < 18) {
      return `Boa tarde`;
    } else {
      return `Boa noite`;
    }
  };
  return greetingMessage();
}
