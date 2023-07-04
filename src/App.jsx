import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptoions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = feedback => {this.setState(prevState => ({[feedback]: prevState[feedback] + 1}))};

  countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
  const { good, neutral, bad } = this.state; 
  const totalFeedback =  good + neutral + bad;
  const positivePercentage = (good / totalFeedback) * 100;
  return Math.round(positivePercentage);
  }


  render() {
    const { good, neutral, bad } = this.state;
    return ( <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(this.state)} onBtnClick={this.onBtnClick}/>
      </Section>
      <Section title='Statistics'>  
        {this.countTotalFeedback() > 0 ? (
        <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total = {this.countTotalFeedback()}
        positivePercentage = {this.countPositiveFeedbackPercentage()}/>) :
        (<Notification messege = 'There is no feedback'/>)
        }

      </Section>
    </>
    )
  }
}
