// In this file you can specify the trial data for your experiment


// In each trial the order of the four image selection options gets randomizedso with order.
// In views we then don't have picture1, option1 etc. anymore but the entries from the shuffled order array

const practice_trials = [
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set1/1_decoy_1.png", 'decoy'],["images/set1/1_lure.png", 'lure'],["images/set1/1_decoy_2.png", 'decoy'], ["images/set1/1_truth.png", 'truth']]),
      picture: "images/set1/1_uninformative.png",
      cue:'uninformative',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate practice',
  },
    {
      QUD:'A <b>teammate</b> has left you this clue',
        order: _.shuffle([["images/set2/2_decoy_1.png", 'decoy'],["images/set2/2_lure.png", 'lure'],["images/set2/2_decoy_2.png", 'decoy'], ["images/set2/2_truth.png", 'truth']]),
        picture: "images/set2/2_misleading.png",
        cue:'misleading',
        question: "Which of the maps will lead you to the treasures?",
        condition: 'teammate practice',


    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
        order: _.shuffle([["images/set3/3_decoy_1.png", 'decoy'],["images/set3/3_lure.png", 'lure'],["images/set3/3_decoy_2.png", 'decoy'], ["images/set3/3_truth.png", 'truth']]),
        picture: "images/set3/3_helpful.png",
        cue:'helpful',
        question: "Which of the maps will lead you to the treasures?",
        condition: 'teammate practice',
    },
    {
      QUD:'An <b>opponent</b> has left you this clue',
      order: _.shuffle([["images/set4/4_decoy_1.jpg", 'decoy'],["images/set4/4_lure.jpg", 'lure'],["images/set4/4_decoy_2.jpg", 'decoy'], ["images/set4/4_truth.jpg", 'truth']]),
      picture: "images/set4/4_uninformative.jpg",
      cue:'uninformative',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'opponent practice',
    },
    {
      QUD:'An <b>opponent</b> has left you this clue',
      order: _.shuffle([["images/set5/5_decoy_1.jpg", 'decoy'],["images/set5/5_lure.jpg", 'lure'],["images/set5/5_decoy_2.jpg", 'decoy'], ["images/set5/5_truth.jpg", 'truth']]),
      picture: "images/set5/5_misleading.jpg",
      cue:'misleading',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'opponent practice',
    },
    {
      QUD:'An <b>opponent</b> has left you this clue',
        order: _.shuffle([["images/set6/6_decoy_1.jpg", 'decoy'],["images/set6/6_lure.jpg", 'lure'],["images/set6/6_decoy_2.jpg", 'decoy'], ["images/set6/6_truth.jpg", 'truth']]),
        picture: "images/set6/6_helpful.jpg",
        cue:'helpful',
        question: "Which of the maps will lead you to the treasures?",
        condition: 'opponent practice',
    },
];


const main_trials = [
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set1/1_decoy_1.png", 'decoy'],["images/set1/1_lure.png", 'lure'],["images/set1/1_decoy_2.png", 'decoy'], ["images/set1/1_truth.png", 'truth']]),
      picture: "images/set1/1_misleading.png",
      cue:'misleading',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',

    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
        order: _.shuffle([["images/set1/1_decoy_1.png", 'decoy'],["images/set1/1_lure.png", 'lure'],["images/set1/1_decoy_2.png", 'decoy'], ["images/set1/1_truth.png", 'truth']]),
        picture: "images/set1/1_helpful.png",
        cue:'helpful',
        question: "Which of the maps will lead you to the treasures?",
        condition: 'teammate',
    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set2/2_decoy_1.png", 'decoy'],["images/set2/2_lure.png", 'lure'],["images/set2/2_decoy_2.png", 'decoy'], ["images/set2/2_truth.png", 'truth']]),
      picture: "images/set2/2_uninformative.png",
      cue:'uninformative',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',


    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set2/2_decoy_1.png", 'decoy'],["images/set2/2_lure.png", 'lure'],["images/set2/2_decoy_2.png", 'decoy'], ["images/set2/2_truth.png", 'truth']]),
        picture: "images/set2/2_helpful.png",
        cue:'helpful',
        question: "Which of the maps will lead you to the treasures?",
        condition: 'teammate',
    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set3/3_decoy_1.png", 'decoy'],["images/set3/3_lure.png", 'lure'],["images/set3/3_decoy_2.png", 'decoy'], ["images/set3/3_truth.png", 'truth']]),
      picture: "images/set3/3_uninformative.png",
      cue:'uninformative',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',


    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set3/3_decoy_1.png", 'decoy'],["images/set3/3_lure.png", 'lure'],["images/set3/3_decoy_2.png", 'decoy'], ["images/set3/3_truth.png", 'truth']]),
      picture: "images/set3/3_misleading.png",
      cue:'misleading',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',

    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set4/4_decoy_1.jpg", 'decoy'],["images/set4/4_lure.jpg", 'lure'],["images/set4/4_decoy_2.jpg", 'decoy'], ["images/set4/4_truth.jpg", 'truth']]),
      picture: "images/set4/4_uninformative.jpg",
      cue:'uninformative',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',


    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set4/4_decoy_1.jpg", 'decoy'],["images/set4/4_lure.jpg", 'lure'],["images/set4/4_decoy_2.jpg", 'decoy'], ["images/set4/4_truth.jpg", 'truth']]),
      picture: "images/set4/4_misleading.jpg",
      cue:'misleading',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',

    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
        order: _.shuffle([["images/set4/4_decoy_1.jpg", 'decoy'],["images/set4/4_lure.jpg", 'lure'],["images/set4/4_decoy_2.jpg", 'decoy'], ["images/set4/4_truth.jpg", 'truth']]),
        picture: "images/set4/4_helpful.jpg",
        cue:'helpful',
        question: "Which of the maps will lead you to the treasures?",
        condition: 'teammate',
    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set5/5_decoy_1.jpg", 'decoy'],["images/set5/5_lure.jpg", 'lure'],["images/set5/5_decoy_2.jpg", 'decoy'], ["images/set5/5_truth.jpg", 'truth']]),
      picture: "images/set5/5_uninformative.jpg",
      cue:'uninformative',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',


    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set5/5_decoy_1.jpg", 'decoy'],["images/set5/5_lure.jpg", 'lure'],["images/set5/5_decoy_2.jpg", 'decoy'], ["images/set5/5_truth.jpg", 'truth']]),
      picture: "images/set5/5_misleading.jpg",
      cue:'misleading',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',

    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
        order: _.shuffle([["images/set5/5_decoy_1.jpg", 'decoy'],["images/set5/5_lure.jpg", 'lure'],["images/set5/5_decoy_2.jpg", 'decoy'], ["images/set5/5_truth.jpg", 'truth']]),
        picture: "images/set5/5_helpful.jpg",
        cue:'helpful',
        question: "Which of the maps will lead you to the treasures?",
        condition: 'teammate',
    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set6/6_decoy_1.jpg", 'decoy'],["images/set6/6_lure.jpg", 'lure'],["images/set6/6_decoy_2.jpg", 'decoy'], ["images/set6/6_truth.jpg", 'truth']]),
      picture: "images/set6/6_uninformative.jpg",
      cue:'uninformative',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',


    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
      order: _.shuffle([["images/set6/6_decoy_1.jpg", 'decoy'],["images/set6/6_lure.jpg", 'lure'],["images/set6/6_decoy_2.jpg", 'decoy'], ["images/set6/6_truth.jpg", 'truth']]),
      picture: "images/set6/6_misleading.jpg",
      cue:'misleading',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'teammate',

    },
    {
      QUD:'A <b>teammate</b> has left you this clue',
        order: _.shuffle([["images/set6/6_decoy_1.jpg", 'decoy'],["images/set6/6_lure.jpg", 'lure'],["images/set6/6_decoy_2.jpg", 'decoy'], ["images/set6/6_truth.jpg", 'truth']]),
        picture: "images/set6/6_helpful.jpg",
        cue:'helpful',
        question: "Which of the maps will lead you to the treasures?",
        condition: 'teammate',
    },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set1/1_decoy_1.png", 'decoy'],["images/set1/1_lure.png", 'lure'],["images/set1/1_decoy_2.png", 'decoy'], ["images/set1/1_truth.png", 'truth']]),
    picture: "images/set1/1_uninformative.png",
    cue:'uninformative',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',


  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set1/1_decoy_1.png", 'decoy'],["images/set1/1_lure.png", 'lure'],["images/set1/1_decoy_2.png", 'decoy'], ["images/set1/1_truth.png", 'truth']]),
    picture: "images/set1/1_misleading.png",
    cue:'misleading',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',

  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
      order: _.shuffle([["images/set1/1_decoy_1.png", 'decoy'],["images/set1/1_lure.png", 'lure'],["images/set1/1_decoy_2.png", 'decoy'], ["images/set1/1_truth.png", 'truth']]),
      picture: "images/set1/1_helpful.png",
      cue:'helpful',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'opponent',
  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set2/2_decoy_1.png", 'decoy'],["images/set2/2_lure.png", 'lure'],["images/set2/2_decoy_2.png", 'decoy'], ["images/set2/2_truth.png", 'truth']]),
    picture: "images/set2/2_uninformative.png",
    cue:'uninformative',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',


  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set2/2_decoy_1.png", 'decoy'],["images/set2/2_lure.png", 'lure'],["images/set2/2_decoy_2.png", 'decoy'], ["images/set2/2_truth.png", 'truth']]),
    picture: "images/set2/2_misleading.png",
    cue:'misleading',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',

  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
      order: _.shuffle([["images/set2/2_decoy_1.png", 'decoy'],["images/set2/2_lure.png", 'lure'],["images/set2/2_decoy_2.png", 'decoy'], ["images/set2/2_truth.png", 'truth']]),
      picture: "images/set2/2_helpful.png",
      cue:'helpful',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'opponent',
  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set3/3_decoy_1.png", 'decoy'],["images/set3/3_lure.png", 'lure'],["images/set3/3_decoy_2.png", 'decoy'], ["images/set3/3_truth.png", 'truth']]),
    picture: "images/set3/3_uninformative.png",
    cue:'uninformative',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',


  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set3/3_decoy_1.png", 'decoy'],["images/set3/3_lure.png", 'lure'],["images/set3/3_decoy_2.png", 'decoy'], ["images/set3/3_truth.png", 'truth']]),
    picture: "images/set3/3_misleading.png",
    cue:'misleading',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',

  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set3/3_decoy_1.png", 'decoy'],["images/set3/3_lure.png", 'lure'],["images/set3/3_decoy_2.png", 'decoy'], ["images/set3/3_truth.png", 'truth']]),
    picture: "images/set3/3_helpful.png",
    cue:'helpful',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',
  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set4/4_decoy_1.jpg", 'decoy'],["images/set4/4_lure.jpg", 'lure'],["images/set4/4_decoy_2.jpg", 'decoy'], ["images/set4/4_truth.jpg", 'truth']]),
    picture: "images/set4/4_misleading.jpg",
    cue:'misleading',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',

  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
      order: _.shuffle([["images/set4/4_decoy_1.jpg", 'decoy'],["images/set4/4_lure.jpg", 'lure'],["images/set4/4_decoy_2.jpg", 'decoy'], ["images/set4/4_truth.jpg", 'truth']]),
      picture: "images/set4/4_helpful.jpg",
      cue:'helpful',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'opponent',
  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set5/5_decoy_1.jpg", 'decoy'],["images/set5/5_lure.jpg", 'lure'],["images/set5/5_decoy_2.jpg", 'decoy'], ["images/set5/5_truth.jpg", 'truth']]),
    picture: "images/set5/5_uninformative.jpg",
    cue:'uninformative',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',


  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
      order: _.shuffle([["images/set5/5_decoy_1.jpg", 'decoy'],["images/set5/5_lure.jpg", 'lure'],["images/set5/5_decoy_2.jpg", 'decoy'], ["images/set5/5_truth.jpg", 'truth']]),
      picture: "images/set5/5_helpful.jpg",
      cue:'helpful',
      question: "Which of the maps will lead you to the treasures?",
      condition: 'opponent',
  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set6/6_decoy_1.jpg", 'decoy'],["images/set6/6_lure.jpg", 'lure'],["images/set6/6_decoy_2.jpg", 'decoy'], ["images/set6/6_truth.jpg", 'truth']]),
    picture: "images/set6/6_uninformative.jpg",
    cue:'uninformative',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',


  },
  {
    QUD:'An <b>opponent</b> has left you this clue',
    order: _.shuffle([["images/set6/6_decoy_1.jpg", 'decoy'],["images/set6/6_lure.jpg", 'lure'],["images/set6/6_decoy_2.jpg", 'decoy'], ["images/set6/6_truth.jpg", 'truth']]),
    picture: "images/set6/6_misleading.jpg",
    cue:'misleading',
    question: "Which of the maps will lead you to the treasures?",
    condition: 'opponent',

  },
];
