// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome to all parents, friends and acquaintances we talked into participating in our first experiment.
         Today, we will compensate for the lack of vacation in the past one and a half years and send you on a journey to the beautiful Summer Island.
            <br />
            <br />
            This experiment will take approximately  <b>five minutes</b> to complete and you can of course quit the experiment anytime.
            All data collected during the experiment is stored anonymously.
            We know you will have a blast participating in this experiment but please only participate once :).
            <br />`,
  buttonText: 'Let’s hear the instructions'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `You will be taking on the  <b>role of an explorer</b> and it will be your job to gather as many treasures on your way as possible.
  In order to sit on that pile of gold you must identify the genuine map out of a set of four.
  Of course you are not alone on your journey…
  <br />
  On the island there will be <b>pirates</b> with you.
  <br />
  <br />
  The pirates are a day’s journey ahead of you and have left you clues on their way.
  These clues are maps of the island, with each blue dot indicating the location of a hidden treasure.
  In each round of your treasure hunt you will receive one of these clues and four treasure maps.
  It will be up to you to decide which map will lead you to <b>all treasures</b>.
  To choose a map, simply click on the one you believe to be the right one.
  <br />
  <br />
  One half of the pirates are your <b>teammates</b>, they aim to help you find all treasures.
  The other half are rivaling treasure hunters, these <b>opposing pirates</b> will try to keep the treasures' locations from you.
  <br />
  <br />
  The pirates, depending on the one you are working with, may leave you <b>helpful</b>, <b>unhelpful</b> or <b>misleading clues</b> behind.
  However, none of the explorers are allowed to provide false information.
  Also, not all pirates are skilled equally, some have been in the business for a long time and some are newbies, a thing to keep in mind :)
  <br />
  <br />
  In order for you to get used to the game and to get your explorer senses heightened we have set up some  <b>time to practice</b> for you.
  You will be informed, when the main trials begin ;).`,
  buttonText: 'Let’s go!'
});

const main_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'Main instructions',
  title: 'Main Instructions',
  text: `   <br />
  Now get ready, the pirates have prepared the clues.
  Remember, none of the pirates are allowed to lie to you, so you can rule out any map where the shaded regions and the blue dots of the cue map don’t overlap.
  <b>The practice is over and the treasure hunt begins!</b>
            <br />`,
  buttonText: 'Let the journey begin!'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment',
  text: ` We hope you enjoyed your small vacation to Summer Island!
          <br />
          Thank you very much for letting us take you on this journey. <3`,
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/




// Here, we initialize a normal image_selection view
const practice_trials_all= magpieViews.view_generator("image_selection", {
 // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
 trials: practice_trials.length,
 // name should be identical to the variable name
 name: 'Practice Trials',
 data: _.shuffle(practice_trials),
 pause: 500
},
{
  //slight twist to the image selection template: first we have four imiage selection options,
  //second we don't have picture1, option1 and so on anymore because we are shuffling the order of the options in each trial

  answer_container_generator: function(config, CT) {
      $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
      return    `<div class='magpie-view-answer-container'>
                      <img src="${config.data[CT].picture}" height="200" width="200">
                      <p class='magpie-view-question'>${config.data[CT].question}</p>
                      <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[0][0]} ></label>
                      <input type="radio" name="answer" id="img1" value="${config.data[CT].order[0][1]}" />
                       <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[1][0]}></label>
                      <input type="radio" name="answer" id="img2" value="${config.data[CT].order[1][1]}" />
                       <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[2][0]}></label>
                      <input type="radio" name="answer" id="img3" value="${config.data[CT].order[2][1]}" />
                       <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[3][0]}></label>
                      <input type="radio" name="answer" id="img4" value="${config.data[CT].order[3][1]}" />
                  </div>`;
  }
}
);

// Here, we initialize a normal image_selection view
const main_trials_all = magpieViews.view_generator("image_selection", {
 // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
 trials: main_trials.length,
 // name should be identical to the variable name
 name: 'Main Trials',
 data: _.shuffle(main_trials),
 pause: 500
},
{
  //slight twist to the image selection template: first we have four imiage selection options,
  //second we don't have picture1, option1 and so on anymore because we are shuffling the order of the options in each trial

  answer_container_generator: function(config, CT) {
      $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
      return    `<div class='magpie-view-answer-container'>
                      <img src="${config.data[CT].picture}" height="200" width="200">
                      <p class='magpie-view-question'>${config.data[CT].question}</p>
                      <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[0][0]} ></label>
                      <input type="radio" name="answer" id="img1" value="${config.data[CT].order[0][1]}" />
                       <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[1][0]}></label>
                      <input type="radio" name="answer" id="img2" value="${config.data[CT].order[1][1]}" />
                       <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[2][0]}></label>
                      <input type="radio" name="answer" id="img3" value="${config.data[CT].order[2][1]}" />
                       <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[3][0]}></label>
                      <input type="radio" name="answer" id="img4" value="${config.data[CT].order[3][1]}" />
                  </div>`;
  }
}

);
