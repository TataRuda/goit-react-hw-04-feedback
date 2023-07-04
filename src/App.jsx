import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptoions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onSendFeedback = event => {
    switch (event) {
      case "good":
       setGood(prevState => prevState + 1);
       break;
      
      case "neutral":
       setNeutral(prevState => prevState + 1);
       break;

      case "bad":
       setBad(prevState => prevState + 1);
       break;
      
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
    };

  const countPositiveFeedbackPercentage = () => {
  const totalFeedback =  countTotalFeedback();
  const positivePercentage = (good / totalFeedback) * 100;
  return Math.round(positivePercentage);
  };

  const feedbacks = ['good', 'neutral', 'bad'];


 
    return ( <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={feedbacks} onBtnClick={onSendFeedback}/>
      </Section>
      <Section title='Statistics'>  
        {countTotalFeedback() > 0 ? (
        <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total = {countTotalFeedback()}
        positivePercentage = {countPositiveFeedbackPercentage()}/>) :
        (<Notification messege = 'There is no feedback'/>)
        }

      </Section>
    </>
    )
  }