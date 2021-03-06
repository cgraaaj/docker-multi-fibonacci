import React from 'react'
import axios from 'axios'

class Fib extends React.Component {
    state = {
        seenIndices: [],
        values: {},
        index: ''
    }
    componentDidMount() {
        this.fetchValues()
        this.fetchIndices()
    }

    async fetchValues() {
        const values = await axios.get('/api/values/current')
        this.setState({ values: values.data })
    }
    async fetchIndices() {
        const seenIndices = await axios.get('/api/values/all')
        this.setState({ seenIndices: seenIndices.data })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        let res = await axios.post('/api/values', {
            index: this.state.index
        })
        console.log(res)
        this.setState({ index: '' })
    }
    renderSeenIndices() {
        return this.state.seenIndices.map(({ number }) => number).join(', ')
    }
    renderValues() {
        const entries = []
        for (let key in this.state.values) {
            entries.push(
                <div key={key}>
                    For Index {key} I Calculated {this.state.values[key]}
                </div>
            )
        }
        return entries 
    }
    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>Enter your index</label>
                <input values={this.state.index} onChange={e => this.setState({index:e.target.value})} />
                <button>Submit</button>
            </form>
            <h3>Indecies i have seen</h3>
            {this.renderSeenIndices()}
            <h3>Calculated Values</h3>
            {this.renderValues()}
        </div>)
    }
}

export default Fib