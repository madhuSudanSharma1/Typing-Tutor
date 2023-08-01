// const words_per_group = 5 * 2;//double becacuse of space

// const { val } = require("cheerio/lib/api/attributes");

// class Words {
//   #words;// all words to be typed in current session
//   #current_words;//group of words to be typed now
//   #current_word;//words to be typed now
//   #current_word_index;
//   #current_char_index; //index of char(in currrent_word) to be typed now
//   #is_input_correct;//flag for checking the status of input
//   #current_word_group;

//   constructor(level) {
//     this.#words = fetch_words().split(' ')
//       .reduce((acc, curr) => {
//         if (!(curr.trim().length === 0))
//           acc.push(curr, " ")
//         return acc;
//       }, [])
//     this.#current_words = this.#words.slice(0, words_per_group);
//     this.#current_word_group = -1;//below function call will initialise it to 0;
//     this.next_words_group();
//   };

//   fetch_words(level) {
//     // fetch(`./texts/${level.trim()}.txt`).
//     return " बद दग गह हज जक कल लम मन नप पर रस सत बदग दगह गहज हजक जकल कलम लमन मनप नपर परस रसत बदगह दगहज गहजक हजकल जकलम कलमन लमनप मनपर नपरस परसत बदगहज दगहजक गहजकल हजकलम जकलमन कलमनप लमनपर मनपरस नपरसत बदगहजक दगहजकल गहजकलम हजकलमन जकलमनप कलमनपर लमनपरस मनपरसत बदगहजकल दगहजकलम गहजकलमन हजकलमनप जकलमनपर कलमनपरस लमनपरसत बदगहजकलम दगहजकलमन गहजकलमनप हजकलमनपर जकलमनपरस कलमनपरसत बदगहजकलमन दगहजकलमनप गहजकलमनपर हजकलमनपरस जकलमनपरसत बदगहजकलमनप दगहजकलमनपर गहजकलमनपरस हजकलमनपरसत बदगहजकलमनपर दगहजकलमनपरस गहजकलमनपरसत बदगहजकलमनपरस दगहजकलमनपरसत बदगहजकलमनपरसत ";
//   }


//   next_words_group() {
//     this.#current_word_group++;
//     this.#current_words = this.#words.slice(this.#current_word_group * words_per_group, (this.#current_word_group + 1) * words_per_group);
//     this.#current_word_index = 0;
//     this.#current_word = this.#current_words[0];
//     this.#current_char_index = 0;
//     this.#is_input_correct = true;

//   }
//   handle_input(event) {
//     const input_value = event.target.value;
//     if (!this.#is_input_correct) {
//       if (this.#current_word.startsWith(input_value)) {
//         this.#is_input_correct = true;
//       }
//       return;
//     }

//     // this.#is_input_correct = true;

//     //current value is correct value till now
//     if (!this.#current_word.startsWith(value)) {
//       this.#is_input_correct = false;
//       return;
//     }
//     //current word typing is completed
//     if (this.#current_word.length === input_value.length) {
//       this.#current_word_index++;


//       //current group of words is typed
//       if (this.#current_word_index === words_per_group) {
//         //check if all words are completed
//         if (this.all_words_typed()) {
//           alert("congratulations");
//         } else {
//           next_words_group();
//         }
//       } else {
//         this.#current_word = this.#words[this.#current_word_index];
//       }
//     }
//   }

//   all_words_typed() {
//     return (this.#current_word_group * words_per_group + this.#current_word_index === this.#words.length);

//   }

// };

// word = new Words("level1")



console.log("words.js")
const words_per_group = 5 * 2;//double becacuse of space

class Words {
  #words;// all words to be typed in current session
  #current_words;//group of words to be typed now
  #current_word;//words to be typed now
  #current_word_index;
  #next_char;//character to be typed next
  #is_input_correct;//flag for checking the status of input
  #current_word_group;
  #start_time;

  #new_word;
  constructor(level) {
    this.#words = this.fetch_words(level).split(' ')
      .reduce((acc, curr) => {
        if (!(curr.trim().length === 0))
          acc.push(curr, " ")
        return acc;
      }, [])
    this.#current_words = this.#words.slice(0, words_per_group);
    this.#current_word_group = -1;//below function call will initialise it to 0;
    this.next_words_group();

    //TODO: The timer is started as soon as this constructor is loaded even when the user hasnot started typing. start the timer when the user first time inputs sth in the input box
    this.#start_time = performance.now();
  };

  // get_current_str() { return this.#current_words.join('') };

  fetch_words(level) {
    // fetch(`./texts/${level.trim()}.txt`).
    return "बद दग कलम गह हज जक कल लम मन नप पर रस सत बदग दगह";
  }


  next_words_group() {
    this.#current_word_group++;
    this.#current_words = this.#words.slice(this.#current_word_group * words_per_group, (this.#current_word_group + 1) * words_per_group);
    this.#current_word_index = 0;
    this.#current_word = this.#current_words[0];
    this.#is_input_correct = true;
    this.#next_char = this.#current_word[0];

    this.#new_word = true;

  }

  //finds the right course of next action analyzing current input_value
  next_action(value) {
    if (!this.#current_word.startsWith(value))
      return "INCORRECT";
    //correct
    console.log(value.length, "        ", this.#current_word.length)
    if (!(value.length === this.#current_word.length)) {
      return "NEXT_CHAR";
    }
    //next word
    if (!(this.#current_word_index === this.#current_words.length - 1)) {
      return "NEXT_WORD";
    }
    //next group
    if (!this.all_words_typed()) {
      return "NEXT_GROUP";
    }
    return "COMPLETED";
    //completed

  }

  log(input) {
    // return;
    const obj = {
      input: input,
      curr_word: this.#current_word,
      curr_word_group: this.#current_words
    }

    for (let [key, value] of Object.entries(obj)) {
      console.log(key, ":  ", value)
    }
  }
  handle_input(event) {
    const input_value = event.target.value;
    this.log(input_value)

    if (!this.#is_input_correct) {
      if (this.#current_word.startsWith(input_value)) {
        this.#is_input_correct = true;
      }
      return this.ui_status();
    }

    this.#new_word = false;
    const action = this.next_action(input_value);
    console.log(action);
    switch (action) {
      case "INCORRECT":
        this.#is_input_correct = false;
        break;
      case "NEXT_CHAR":
        this.#next_char = this.#current_word[input_value.length]
        //logic for next char
        break;
      case "NEXT_WORD":
        this.#current_word_index++;
        this.#current_word = this.#current_words[this.#current_word_index];
        this.#next_char = this.#current_word[0];

        this.#new_word = true;
        break;
      case "NEXT_GROUP":
        this.#new_word = true;
        this.next_words_group();
        break;
      case "COMPLETED":
        alert("COMPLETED");
        //TODO: what to do now?
        break;
    }
    return this.ui_status();
  }

  ui_status() {
    return {
      is_input_correct: this.#is_input_correct,
      completed_words: this.#current_words.slice(0, this.#current_word_index),
      remaining_words: this.#current_words.slice(this.#current_word_index),
      next_char: this.#next_char,
      new_word: this.#new_word,
      wpm: (this.#current_word_group * words_per_group + this.#current_word_index) * 1000 * 60 /
        Math.max((performance.now() - this.#start_time), 1)//to prevent this being 0 ms
      // (performance.now() - this.#start_time)
    };
  }
  all_words_typed() {
    //this returns true if the `current_word_index` is the last word of the lis which means it is assumed that this function is called after completely typing `current_word`.
    return (this.#current_word_group * words_per_group + this.#current_word_index === this.#words.length - 1);
  }

};

word = new Words("level1")
