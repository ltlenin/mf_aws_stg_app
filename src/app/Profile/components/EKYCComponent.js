import React, { Component } from "react"

import EKYCChildComponent from './EKYCChildComponent'
class EKYCComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banks: [{}],
            counter: 1,
            data: [],
            defaultvalue: '', 
        }
    }

    IncrementItem = () => {
        this.setState({ counter: this.state.counter + 1 });
        let count = this.state.counter
        console.log("Count is : ", count)

        if (count < 0) {
            this.setState({ counter: 0 });
        }
        if (count < 5 && count > 0) {
            this.setState((state, props) => ({
                banks: [...this.state.banks, "Bank-" + (count + 1) + " Details"]
            }));
            console.log(this.state.banks)
        }
    }
    DecreaseItem = () => {
        this.setState({ counter: this.state.counter - 1 });
        let count = this.state.counter
        console.log(count)
        if (count >= 1 || count <= 0) {
            this.setState({
                banks: this.state.banks.filter((_, i) => i !== this.state.banks.indexOf("Bank-" + this.state.counter + " Details"))
            },
                () => {
                    console.log('banks', this.state.banks);
                }
            );
        }
    }

    TestClick = (e) => {
        console.clear()
        this.props.TestClick(e)
    }

    handleChange = (e) => {
        console.clear()
        this.props.handleChange(e)
    }
     
    render() {
        return (
            <main>
                <div class="pr-4 pb-3 text-right">
                    <button type="reset" class="btn btn-secondary">Clear</button>
                    <button type="reset" class="btn btn-primary ml-3" onClick={this.props.TestClick}>Save</button>
                </div>
                <div className="component-wrapper">
                    <EKYCChildComponent
                        banks={this.state.banks}
                        data={this.props.data}
                        handleChange={this.handleChange}
                        defaultvalue={this.defaultvalue}
                    />
                    <div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.IncrementItem}>
                            <strong> + </strong>
                        </button>
                        <strong> &nbsp; </strong>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.DecreaseItem}>
                            <strong> - </strong>
                        </button>
                    </div>
                </div>

            </main>
        )
    }
}
export default EKYCComponent