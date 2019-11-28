export default function timeConverter(s) {
  if (s >= 3600) {
    console.log('Function does not take an argument for more than 3600 seconds');
    return;
  }
  const minutes = Math.floor(s / 60);
  const seconds = Math.round(s % 60);
  return `${minutes} : ${seconds}`;
}
