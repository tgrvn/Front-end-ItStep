export function getPrediction(question) {
  return fetch(`https://8ball.delegator.com/magic/JSON/${question}`).then(
    (data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error('data not definde');
    }
  );
}
