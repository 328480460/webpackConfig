import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
class Item extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    const { name } = this.props;
    return (
      <div className="form-group">
        <div className="col-xs-4 control-label">{name}</div>
        <div className="col-xs-8">
          <input type="text" className="form-control" />
        </div>
      </div>
    );
  }
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addItem = () => {
    const id = +new Date();
    const { list } = this.state;
    this.setState({
      list: [{ name: 'Baz' + id, id }, ...list],
    });
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <div className="btn btn-primary" onClick={this.addItem}>
          添加
        </div>
        <h3>
          错误 <code>key=index</code>
        </h3>
        <form className="form-horizontal">
          {list.map((todo, index) => (
            <Item {...todo} key={index} />
          ))}
        </form>

        <h3>
          正确 <code>key=id</code>
        </h3>
        <form className="form-horizontal">
          {list.map(todo => (
            <Item {...todo} key={todo.id} />
          ))}
        </form>
      </div>
    );
  }
}
