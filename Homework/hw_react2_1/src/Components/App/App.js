import React from "react";

import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class App extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

  // handleStateUpdate = (key) => {
  //   this.setState({
  //     [key]: this.state[key] + 1,
  //   });
  // };
  handleStateUpdate = (key) => {
    this.setState(() => ({
      [key]: this.state[key] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = Math.round((good / total) * 100) || 0;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onStateUpdate={this.handleStateUpdate} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
