document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const level = params.get('level');

  console.log(level)
  document.getElementById('typingInput').focus();
  const typingInput = document.getElementById('typingInput');
  const wordOutput = document.getElementById('wordOutput');
  const levels = {
    level1:  'ब द ग ह ज क ल म न प र स त बद दग गह हज जक कल लम मन नप पर रस सत बदग दगह गहज हजक जकल कलम लमन मनप नपर परस रसत बदगह दगहज गहजक हजकल जकलम कलमन लमनप मनपर नपरस परसत बदगहज दगहजक गहजकल हजकलम जकलमन कलमनप लमनपर मनपरस नपरसत बदगहजक दगहजकल गहजकलम हजकलमन जकलमनप कलमनपर लमनपरस मनपरसत बदगहजकल दगहजकलम गहजकलमन हजकलमनप जकलमनपर कलमनपरस लमनपरसत बदगहजकलम दगहजकलमन गहजकलमनप हजकलमनपर जकलमनपरस कलमनपरसत बदगहजकलमन दगहजकलमनप गहजकलमनपर हजकलमनपरस जकलमनपरसत बदगहजकलमनप दगहजकलमनपर गहजकलमनपरस हजकलमनपरसत बदगहजकलमनपर दगहजकलमनपरस गहजकलमनपरसत बदगहजकलमनपरस दगहजकलमनपरसत बदगहजकलमनपरसत',

    level2: [
      'भ', 'छ', 'ध', 'ऊ', 'घ', 'अ', 'झ', 'ख',
      'कै', 'खै', 'धै', 'गै', 'टै', 'डै', 'रै', 'भै', 'खै', 'की', 'भी', 'धि',
      'कठै', 'अल्छी', 'असल', 'घैला', 'छमछम', 'खीर', 'सबै',
      'बदी', 'दगि', 'गही', 'हिज', 'जकी', 'कील', 'लिमै', 'मनी', 'नप', 'पर', 'रस', 'सतै',
      'बदग', 'दगह', 'गहज', 'हजक', 'जकल', 'कलम', 'लमन', 'मनप', 'नपर', 'परस', 'रसत',
      'बदगह', 'दगहज', 'गहजक', 'हजकल', 'जकलम', 'कलमन', 'लमनप', 'मनपर', 'नपरस', 'परसत',
      'बदिगहीजै', 'दीगहिजेकै', 'गहजकील', 'हजैकलम', 'जकेलमैन', 'कीलमिनप', 'लमिनपर', 'मैनपीरस', 'नपरसत',
      'बदगहजक', 'दगहजकल', 'गहजकलम', 'हजकलमन', 'जकलमनप', 'कलमनपर', 'लमनपरस', 'मनपरसत',
      'बदगहजकल', 'दगहजकलम', 'गहजकलमन', 'हजकलमनप', 'जकलमनपर', 'कलमनपरस', 'लमनपरसत',
      'बदगहजकलम', 'दगहजिकलमन', 'गहजकलमनप', 'हजकलमनपर', 'जकलमनपरस', 'कलमनपरसत',
      'बदगहजकलम', 'दगहजकलमनप', 'गहजकलमनपर', 'हजकलमनपरस', 'जकलमनपरसत',
      'बदगहजकलैमनप', 'दगहजकलमनपर', 'गहजकलमनपरस', 'हजकलमनपरसत',
      'बदगहजकलमनपर', 'दगहजकलमनपरस', 'गहजकलमनपरसत',
      'बदगहजकलमनपरस', 'दगहजकलमनपरसत',
      'बदगहजकलमनपरसत'
    ]
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
  const wordsArray=words.split(' ');
  let currentWordIndex = 0;
  let currentCharacterIndex = 0;
  let currentWord = wordsArray[currentWordIndex];
  let nextCharacter = currentWord.charAt(currentCharacterIndex);
  let set=wordsArray.slice(0,5)
  wordOutput.textContent = set.join(' ');
  glowNextCharacter('',nextCharacter)

  typingInput.addEventListener('input', function () {
    const pressedCharacter = typingInput.value.charAt(typingInput.value.length - 1);

    if (pressedCharacter === nextCharacter) {
      currentCharacterIndex++;

      if (currentCharacterIndex >= currentWord.length) {
        currentWordIndex++;
        typingInput.value = '';
        currentCharacterIndex = 0;

        if (currentWordIndex < words.length) {
          currentWord = words[currentWordIndex];
          wordOutput.textContent = currentWord;
          nextCharacter = currentWord.charAt(currentCharacterIndex);
        } else {
          wordOutput.textContent = 'Congratulations! You completed all the words.';
          typingInput.style.display='none';
          nextCharacter = ''; 
        }
      } else {
        nextCharacter = currentWord.charAt(currentCharacterIndex);
      }
    }

    glowNextCharacter(pressedCharacter, nextCharacter); 
    console.log("Next character to be pressed:", nextCharacter);
  })
})
