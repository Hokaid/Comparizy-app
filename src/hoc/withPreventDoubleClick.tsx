import {debounce} from 'lodash';
import React, {PureComponent} from 'react';

const withPreventDoubleClick = (WrappedComponent: any, time?: number) => {
  class PreventDoubleClick extends PureComponent {
    debouncedOnPress = () => {
      (this.props as any).onPress && (this.props as any).onPress();
      console.log("Esperando un segundo")
    };

    onPress = debounce(this.debouncedOnPress, time ? time : 1000 , {
      leading: true,
      trailing: false,
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }
  return PreventDoubleClick;
};

export default withPreventDoubleClick;
