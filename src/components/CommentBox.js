import React from 'react'

class CommentBox extends React.Component {
  state = { comment: '' }

  handleChange = ({ target }) => this.setState({ comment: target.value })

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({ comment: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a commy</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>ad meh</button>
        </div>
      </form>
    )
  }
}

export default CommentBox