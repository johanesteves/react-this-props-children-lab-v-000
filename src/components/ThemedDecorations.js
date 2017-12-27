// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecoration extends React.Component{
  render(){
    const theme = this.props.theme;
    const childrenWithTheme = React.Children.map(this.props.children, function (child) {
      return (<p className = {theme}> {child} </p>)
    });

    return(
      <div>
          {childrenWithTheme}
      </div>
    )
  }
}

export default ThemedDecoration
