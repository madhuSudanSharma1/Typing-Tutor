document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const level = params.get('level');

  console.log(level)
  document.getElementById('typingInput').focus();
  const typingInput = document.getElementById('typingInput');
  const wordOutput = document.getElementById('wordOutput');
  const levels = {
    level1: 'बद दग गह हज जक कल लम मन नप पर रस सत बदग दगह गहज हजक जकल कलम लमन मनप नपर परस रसत बदगह दगहज गहजक हजकल जकलम कलमन लमनप मनपर नपरस परसत बदगहज दगहजक गहजकल हजकलम जकलमन कलमनप लमनपर मनपरस नपरसत बदगहजक दगहजकल गहजकलम हजकलमन जकलमनप कलमनपर लमनपरस मनपरसत बदगहजकल दगहजकलम गहजकलमन हजकलमनप जकलमनपर कलमनपरस लमनपरसत बदगहजकलम दगहजकलमन गहजकलमनप हजकलमनपर जकलमनपरस कलमनपरसत बदगहजकलमन दगहजकलमनप गहजकलमनपर हजकलमनपरस जकलमनपरसत बदगहजकलमनप दगहजकलमनपर गहजकलमनपरस हजकलमनपरसत बदगहजकलमनपर दगहजकलमनपरस गहजकलमनपरसत बदगहजकलमनपरस दगहजकलमनपरसत बदगहजकलमनपरसत',
    // level1: 'ब द ग ह ज क ल म न प र स त बद दग गह हज जक कल लम मन नप पर रस सत बदग दगह गहज हजक जकल कलम लमन मनप नपर परस रसत बदगह दगहज गहजक हजकल जकलम कलमन लमनप मनपर नपरस परसत बदगहज दगहजक गहजकल हजकलम जकलमन कलमनप लमनपर मनपरस नपरसत बदगहजक दगहजकल गहजकलम हजकलमन जकलमनप कलमनपर लमनपरस मनपरसत बदगहजकल दगहजकलम गहजकलमन हजकलमनप जकलमनपर कलमनपरस लमनपरसत बदगहजकलम दगहजकलमन गहजकलमनप हजकलमनपर जकलमनपरस कलमनपरसत बदगहजकलमन दगहजकलमनप गहजकलमनपर हजकलमनपरस जकलमनपरसत बदगहजकलमनप दगहजकलमनपर गहजकलमनपरस हजकलमनपरसत बदगहजकलमनपर दगहजकलमनपरस गहजकलमनपरसत बदगहजकलमनपरस दगहजकलमनपरसत बदगहजकलमनपरसत',

    level2:
      `मगज सत दस बर फलक दनक कचकच छत खतम चरण सहज नल नगर सडक शतक नयन मग कमसल धरमर भरसक समतलसतह बहस रसमय तडकभडक जतन नकल रमन बम बस पटपट पथ नवम दशमलब खटखट करण गरम शर तर कड सफल पकड सलह जठर झमझम तटगत वय खनन कपट मठ भग गढ मलहम गडबड नर डङडङ गलगल गणक गलत रबर तय चटक गमनपथ चयन शरण शहर जमघट बकस फसल गर पल लहडसनक सनद वध लत शय तल हरफ तह जलमय शपथ जब झपट बरफ पट धरन गठन गहन कठघर वर भल मरमत भडक परल कच सहमत यमक भलकट भकभक सतत टप दर डरभय रस महल भय खलक रक शशक मह हटक सफर कहर नस मत सलगम बदर बहन छल चलन वचन बचत शयन फरक छलफल लवणजल यव टक शकट बढ घर जलपथ लख रहल खलबल खरब लवण फतरफतर घटक टरटर पसल चरम तहपरत धर कलश जलथल समतल कलम वजन कसम खत कमल चनड लहड शमन हलचल नगरशहर कलकल लतपत करङ सरसर गज चहक नगद छनक भजन जलजन थकथक दल रगत बखत पतन बल जलकमल जमठ बगलस नगर डर सरल करतल लय सतह समथर गनगन ठहर कवच खबर`

    , level3: [

    ]
    , level4: [

    ],
    level5: [

    ],
    practice1: [
      'जग', 'समतलक', 'वग', 'हक', 'शलजम', 'लसपस', 'सदन',
      'सफलतम', 'खल', 'फल', 'मगज', 'सत', 'दस', 'बर', 'कफ', 'लहर', 'लटकन', 'हज', 'फलक', 'दनक', 'कचकच', 'छत', 'खतम', 'चरण', 'सहज', 'नल', 'नगरसडक', 'शतक', 'नयन', 'मग', 'कमसल', 'धरमर', 'भरसक', 'समतलसतह', 'बहस', 'रसमय', 'तडकभडक', 'जतन', 'नकल', 'रमन', 'बम', 'बस', 'पटपट', 'पथ', 'नवम', 'दशमलब', 'खटखट', 'करण', 'गरम', 'शर', 'तर', 'कड', 'सफल', 'पकड', 'सलह', 'जठर', 'झमझम', 'तटगत', 'वय', 'खनन', 'कपट', 'मठ', 'भग', 'गढ', 'मलहम', 'गडबड', 'नर', 'डङडङ', 'गलगल', 'गणक', 'गलत', 'रबर', 'तय', 'चटक', 'गमनपथ', 'चयन', 'शरण', 'शहर', 'जमघट', 'बकस', 'फसल', 'गर', 'पल', 'लहडसनक', 'सनद', 'वध', 'लत', 'शय', 'तल', 'हरफ', 'तह', 'जलमय', 'शपथ', 'जब', 'झपट', 'बरफ', 'पट', 'धरन', 'गठन', 'गहन', 'कठघर', 'वर', 'भल', 'मरमत', 'भडक', 'परल', 'कच', 'सहमत', 'यमक', 'भलकट', 'भकभक', 'सतत', 'टप', 'दर', 'डरभय', 'रस', 'महल', 'भय', 'खलक', 'रक', 'शशक', 'मह', 'हटक', 'सफर', 'कहर', 'नस', 'मत', 'सलगम', 'बदर', 'बहन', 'छल', 'चलन', 'वचन', 'बचत', 'शयन', 'फरक', 'छलफल', 'लवणजल', 'यव', 'टक', 'शकट', 'बढ', 'घर', 'जलपथ', 'लख', 'रहल', 'खलबल', 'खरब', 'लवण', 'फतरफतर', 'घटक', 'टरटर', 'पसल', 'चरम', 'तहपरत', 'धर', 'कलश', 'जलथल', 'समतल', 'कलम', 'वजन', 'कसम', 'खत', 'कमल', 'चनड', 'लहड', 'शमन', 'हलचल', 'नगरशहर', 'कलकल', 'लतपत', 'करङ', 'सरसर', 'गज', 'चहक', 'नगद', 'छनक', 'भजन', 'जलजन', 'थकथक', 'दल', 'रगत', 'बखत', 'पतन', 'बल', 'जलकमल', 'जमठ', 'बगलस', 'नगर', 'डर', 'सरल', 'करतल', 'लय', 'सतह', 'समथर', 'गनगन', 'चपली', 'ठहर', 'कवच', 'खबर'
    ],

  }


  const words = levels[level];
  wordsArray = words.split(' ');
  wordsArray = wordsArray.reduce((acc, el) => {
    return [...acc, el, " "]
  }, [])

  const word_pad = 10;
  let currentWordIndex = 0;
  let currentCharacterIndex = 0;
  let currentWord = wordsArray[currentWordIndex];
  let nextCharacter = currentWord.charAt(currentCharacterIndex);
  let i = 0;
  let currentWordsToType = wordsArray.slice(i, i + word_pad)
  wordOutput.textContent = currentWordsToType.join(' ');
  let completedWords = 0;
  glowNextCharacter('', nextCharacter)
  let isInputCorrect = true



  typingInput.addEventListener('input', function (e) {
    const pressedCharacter = typingInput.value.charAt(typingInput.value.length - 1);
    const charCode = pressedCharacter.charCodeAt(0);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      alert("Change Keyboard to Nepali Unicode Romanized")
      e.preventDefault()
      return;
    }
    if (pressedCharacter === '') {
      isInputCorrect = true;
      return;
    }

    if (pressedCharacter !== nextCharacter) {
      console.log(pressedCharacter.length)
      isInputCorrect = false;
      typingInput.style.color = 'red';
      return;
    }
    if (!isInputCorrect) {
      console.log("ोुत", typingInput.value)
      if (typingInput.value.length === 0) {
        console.log(typingInput.value)
        isInputCorrect = true;
      }
      return;
    }
    isInputCorrect = true;
    typingInput.style.color = 'green';
    currentCharacterIndex++;

    if (currentCharacterIndex >= currentWord.length) {
      console.log("ehllo")
      currentWordIndex++;
      typingInput.value = pressedCharacter;
      currentCharacterIndex = 0;


      // 
      // let tempWords = Math.floor(Math.ceil(currentWordIndex / 2));
      console.log(currentWordIndex)
      if (currentWordIndex === word_pad) {
        i += word_pad;
        currentWordsToType = wordsArray.slice(i, i + word_pad)
        currentWordIndex = 0;
        console.log("cwtt", currentWordsToType)
      }

      let tempWords = currentWordIndex;
      completedWords = currentWordsToType.slice(0, tempWords);
      remainingWords = currentWordsToType.slice(tempWords);
      // console.log(tempWords, " ", currentWordsToType.length - tempWords)
      console.log(currentWordsToType)
      console.log(completedWords)
      console.log(remainingWords)
      let el1 = document.createElement('div')
      let el2 = document.createElement('div')
      el1.style.color = "green"
      el2.style.color = "black"
      el1.textContent = completedWords.join(" ") + " ";
      el2.textContent = remainingWords.join(" ")
      wordOutput.innerHTML = "";
      wordOutput.appendChild(el1);
      wordOutput.appendChild(el2);
      // 




      if (currentWordIndex < wordsArray.length) {
        currentWord = currentWordsToType[currentWordIndex];
        nextCharacter = currentWord.charAt(currentCharacterIndex);
      } else {
        wordOutput.textContent = 'Congratulations! You completed all the words.';
        typingInput.style.display = 'none';
        nextCharacter = '';
      }
    } else {
      nextCharacter = currentWord.charAt(currentCharacterIndex);
    }


    glowNextCharacter(pressedCharacter, nextCharacter);
    console.log("Next character to be pressed:", nextCharacter);
  })
})
