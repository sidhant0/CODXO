function translateText() {
    const sourceText = document.getElementById('source-text').value;
    const targetLanguage = document.getElementById('target-language').value;
  
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURI(sourceText)}`)
      .then(response => response.json())
      .then(data => {
        const translatedText = data[0][0][0];
        document.getElementById('translated-text').innerText = translatedText;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Here i have used google Api translator link